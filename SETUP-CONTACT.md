# Contact Form Setup Guide

The quote form, thank-you page, and project planning check all POST to `/api/contact`. That route:

1. Validates the payload on the server
2. Drops honeypot and too-fast submissions (still returns success so bots are not taught the rules)
3. Rate-limits each IP to 5 submissions per hour
4. Appends a row to a Google Sheet (existing delivery path)
5. Sends an owner notification and a customer auto-reply via Resend when configured

Quote fields: name, email, phone, project type, lot or location, timeline, optional budget range, and message.

Planning-check email uses the same route with `source=planning-check` and the on-screen summary as the message.

---

## 1. Google Sheets (for form submissions)

### Create the Sheet
1. Go to [Google Sheets](https://sheets.google.com) and create a new spreadsheet
2. Name it something like **WLG Homes - Contact Submissions**
3. In row 1, add headers:
   `Timestamp`, `Name`, `Email`, `Phone`, `Message`, `Project Type`, `Location`, `Timeline`, `Budget`, `Source`
4. Existing sheets that only have `Timestamp` through `Message` still work. New columns are appended after Message and do not overwrite A-E.
5. Note the Sheet ID from the URL: `https://docs.google.com/spreadsheets/d/SHEET_ID/edit`

### Create a Service Account
1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create a new project (or use an existing one)
3. Enable the **Google Sheets API** under APIs & Services → Library
4. Go to **IAM & Admin → Service Accounts** and click **Create Service Account**
5. Give it a name (e.g. `wlg-homes-sheets`) and click Done
6. Click the service account → **Keys** tab → **Add Key** → **JSON**
7. A JSON file will download - keep it safe

### Share the Sheet with the Service Account
1. Open the JSON key file and find `client_email` (e.g. `wlg-homes-sheets@project.iam.gserviceaccount.com`)
2. Open your Google Sheet → **Share** → paste that email → give **Editor** access

### Set the Environment Variable
Paste the entire contents of the JSON key file as a single-line string in `.env.local`:
```
GOOGLE_SERVICE_ACCOUNT_KEY={"type":"service_account",...}
GOOGLE_SHEET_ID=your_sheet_id
```

---

## 2. Resend (for email notifications)

1. Sign up at [resend.com](https://resend.com)
2. Go to **API Keys** and create a new key
3. (Recommended) Add and verify your own domain under **Domains** for a custom `from` address such as `WLG Homes <info@wlghomes.ca>`
4. Set the variables:
```
RESEND_API_KEY=re_xxxxxxxxxxxx
EMAIL_FROM=onboarding@resend.dev   # or your verified domain email
EMAIL_TO=info@wlghomes.ca          # optional; defaults to info@wlghomes.ca
```

If `RESEND_API_KEY` is missing, the API still accepts the lead, appends the Sheet when Sheets is configured, and logs a clear warning that owner email and auto-reply were skipped.

---

## 3. Vercel Deployment

When deploying to Vercel:
1. Go to your project → **Settings → Environment Variables**
2. Add each variable from `.env.example` with the real values (Production and Preview)
3. Redeploy - the contact form will be live

---

## 4. Local Development

Copy `.env.example` to `.env.local` and fill in real values:
```bash
cp .env.example .env.local
```

Then run:
```bash
npm run dev
```

If `GOOGLE_SERVICE_ACCOUNT_KEY` or `RESEND_API_KEY` are not set, those steps are skipped and a warning is logged. The form still returns `{ success: true }` so local UI testing works.
