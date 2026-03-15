import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { google } from "googleapis";

export async function POST(req: NextRequest) {
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
        console.log("Sheets: using service account:", credentials.client_email, "| sheetId:", sheetId);
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
      await resend.emails.send({
        from: emailFrom,
        to: "wlghomes2025@gmail.com",
        subject: `New enquiry from ${name.trim()} — WLG Homes`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name.trim()}</p>
          <p><strong>Email:</strong> ${email.trim()}</p>
          <p><strong>Phone:</strong> ${phone?.trim() || "—"}</p>
          <p><strong>Message:</strong></p>
          <blockquote>${message.trim().replace(/\n/g, "<br/>")}</blockquote>
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
