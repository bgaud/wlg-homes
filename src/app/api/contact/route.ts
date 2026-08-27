import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { google } from "googleapis";

// Simple in-memory rate limiter: max 5 submissions per IP per hour
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 60 * 60 * 1000;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return false;
  }
  if (entry.count >= RATE_LIMIT) return true;
  entry.count++;
  return false;
}

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429 }
    );
  }

  try {
    const body = await req.json();
    const { name, email, phone, message } = body as {
      name?: string;
      email?: string;
      phone?: string;
      message?: string;
    };

    // Validate required fields
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }

    // ── Google Sheets ──────────────────────────────────────────────
    const keyJson = process.env.GOOGLE_SERVICE_ACCOUNT_KEY;
    const sheetId = process.env.GOOGLE_SHEET_ID;

    if (keyJson && sheetId) {
      try {
        const credentials = JSON.parse(keyJson);
        const auth = new google.auth.GoogleAuth({
          credentials,
          scopes: ["https://www.googleapis.com/auth/spreadsheets"],
        });
        const sheets = google.sheets({ version: "v4", auth });
        await sheets.spreadsheets.values.append({
          spreadsheetId: sheetId,
          range: "Sheet1!A:E",
          valueInputOption: "USER_ENTERED",
          requestBody: {
            values: [
              [
                new Date().toISOString(),
                name.trim(),
                email.trim(),
                phone?.trim() ?? "",
                message.trim(),
              ],
            ],
          },
        });
        console.log("Sheets: row appended successfully");
      } catch (sheetsErr) {
        console.error("Sheets error (non-fatal):", sheetsErr);
      }
    }

    // ── Resend email notification ──────────────────────────────────
    const resendKey = process.env.RESEND_API_KEY;
    const emailFrom = process.env.EMAIL_FROM ?? "onboarding@resend.dev";

    if (resendKey) {
      const resend = new Resend(resendKey);

      // Notify WLG Homes
      await resend.emails.send({
        from: emailFrom,
        to: "info@wlghomes.ca",
        subject: `New enquiry from ${name.trim()} - WLG Homes`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name.trim()}</p>
          <p><strong>Email:</strong> ${email.trim()}</p>
          <p><strong>Phone:</strong> ${phone?.trim() || "N/A"}</p>
          <p><strong>Message:</strong></p>
          <blockquote>${message.trim().replace(/\n/g, "<br/>")}</blockquote>
        `,
      });

      // Confirmation email to submitter
      await resend.emails.send({
        from: emailFrom,
        to: email.trim(),
        subject: "We received your message - WLG Homes",
        html: `
          <p>Hi ${name.trim()},</p>
          <p>Thanks for reaching out to WLG Homes! We've received your message and will get back to you within one business day.</p>
          <p>If you need to reach us sooner, give us a call or text at <a href="tel:13062706616">1-306-270-6616</a>.</p>
          <p>Here's a copy of what you sent us:</p>
          <blockquote style="border-left:3px solid #ccc;padding-left:12px;color:#555;">${message.trim().replace(/\n/g, "<br/>")}</blockquote>
          <p>- The WLG Homes Team<br/>Saskatoon, SK</p>
        `,
      });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
