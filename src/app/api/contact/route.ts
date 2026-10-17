import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { google } from "googleapis";
import { isSpam, nl2br, parseLeadBody, escapeHtml } from "@/lib/leads";
import { SITE_EMAIL, SITE_NAME, SITE_PHONE_DISPLAY, SITE_PHONE_TEL } from "@/lib/site";

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

function ownerEmailHtml(lead: {
  name: string;
  email: string;
  phone: string;
  message: string;
  projectType: string;
  location: string;
  timeline: string;
  budget: string;
  source: string;
}) {
  const title =
    lead.source === "planning-check"
      ? "New planning-check request"
      : "New quote request";

  return `
    <h2>${title} - ${escapeHtml(SITE_NAME)}</h2>
    <p><strong>Name:</strong> ${escapeHtml(lead.name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(lead.email)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(lead.phone || "N/A")}</p>
    <p><strong>Project type:</strong> ${escapeHtml(lead.projectType || "N/A")}</p>
    <p><strong>Lot / location:</strong> ${escapeHtml(lead.location || "N/A")}</p>
    <p><strong>Timeline:</strong> ${escapeHtml(lead.timeline || "N/A")}</p>
    <p><strong>Budget range:</strong> ${escapeHtml(lead.budget || "N/A")}</p>
    <p><strong>Source:</strong> ${escapeHtml(lead.source)}</p>
    <p><strong>Message / summary:</strong></p>
    <blockquote>${nl2br(lead.message)}</blockquote>
  `;
}

function autoReplyHtml(lead: { name: string; message: string; source: string }) {
  const intro =
    lead.source === "planning-check"
      ? "Thanks for completing the WLG Homes project planning check. We received your summary and will follow up within one business day if you asked us to."
      : "Thanks for requesting a quote from WLG Homes. We received your details and will get back to you within one business day.";

  return `
    <p>Hi ${escapeHtml(lead.name)},</p>
    <p>${intro}</p>
    <p>If you need to reach us sooner, call or text <a href="tel:${SITE_PHONE_TEL}">${SITE_PHONE_DISPLAY}</a> or email <a href="mailto:${SITE_EMAIL}">${SITE_EMAIL}</a>.</p>
    <p>Here is a copy of what you sent:</p>
    <blockquote style="border-left:3px solid #c9a84c;padding-left:12px;color:#555;">${nl2br(lead.message)}</blockquote>
    <p>- The WLG Homes Team<br/>Saskatoon, SK</p>
  `;
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
    const parsed = parseLeadBody(body);
    if ("error" in parsed) {
      return NextResponse.json({ error: parsed.error }, { status: 400 });
    }

    const { lead } = parsed;

    if (isSpam(lead)) {
      return NextResponse.json({ success: true });
    }

    const keyJson = process.env.GOOGLE_SERVICE_ACCOUNT_KEY;
    const sheetId = process.env.GOOGLE_SHEET_ID;
    let sheetsWrote = false;

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
          range: "Sheet1!A:L",
          valueInputOption: "USER_ENTERED",
          requestBody: {
            values: [
              [
                new Date().toISOString(),
                lead.name,
                lead.email,
                lead.phone,
                lead.message,
                lead.projectType,
                lead.location,
                lead.timeline,
                lead.budget,
                lead.source,
              ],
            ],
          },
        });
        sheetsWrote = true;
        console.log("Sheets: row appended successfully");
      } catch (sheetsErr) {
        console.error("Sheets error (non-fatal):", sheetsErr);
      }
    } else {
      console.warn(
        "Lead captured but Google Sheets is not configured. Set GOOGLE_SERVICE_ACCOUNT_KEY and GOOGLE_SHEET_ID to append rows. Existing delivery path is otherwise unchanged."
      );
    }

    const resendKey = process.env.RESEND_API_KEY;
    const emailFrom = process.env.EMAIL_FROM ?? "onboarding@resend.dev";
    const emailTo = process.env.EMAIL_TO ?? SITE_EMAIL;
    let emailSent = false;

    if (resendKey) {
      try {
        const resend = new Resend(resendKey);
        const subjectPrefix =
          lead.source === "planning-check" ? "Planning check" : "Quote request";

        await resend.emails.send({
          from: emailFrom,
          to: emailTo,
          replyTo: lead.email,
          subject: `${subjectPrefix} from ${lead.name} - ${SITE_NAME}`,
          html: ownerEmailHtml(lead),
        });

        await resend.emails.send({
          from: emailFrom,
          to: lead.email,
          subject:
            lead.source === "planning-check"
              ? `Your project planning summary - ${SITE_NAME}`
              : `We received your quote request - ${SITE_NAME}`,
          html: autoReplyHtml(lead),
        });
        emailSent = true;
      } catch (emailErr) {
        console.error("Resend error (non-fatal):", emailErr);
      }
    } else {
      console.warn(
        "Lead captured but RESEND_API_KEY is not set. Owner notification and customer auto-reply were skipped. Set RESEND_API_KEY and EMAIL_FROM (verified domain). Optional: EMAIL_TO (defaults to info@wlghomes.ca)."
      );
    }

    if (!sheetsWrote && !emailSent) {
      console.warn(
        "Quote/planning-check submission accepted, but neither Google Sheets nor Resend delivered it. Configure the env vars above before relying on production leads."
      );
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
