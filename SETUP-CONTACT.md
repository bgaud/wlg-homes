# Contact Form Setup Guide

The WLG Homes contact form POSTs to `/api/contact`, which:
1. Appends a row to a Google Sheet
2. Sends an email notification via Resend

Follow these steps to set it up.

---

## 1. Google Sheets (for form submissions)

### Create the Sheet
1. Go to [Google Sheets](https://sheets.google.com) and create a new spreadsheet
2. Name it something like **WLG Homes — Contact Submissions**
3. In row 1, add headers: `Timestamp`, `Name`, `Email`, `Phone`, `Message`
4. Note the Sheet ID from the URL: `https://docs.google.com/spreadsheets/d/SHEET_ID/edit`

### Create a Service Account
1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create a new project (or use an existing one)
3. Enable the **Google Sheets API** under APIs & Services → Library
4. Go to **IAM & Admin → Service Accounts** and click **Create Service Account**
5. Give it a name (e.g. `wlg-homes-sheets`) and click Done
6. Click the service account → **Keys** tab → **Add Key** → **JSON**
7. A JSON file will download — keep it safe

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
3. (Optional) Add and verify your own domain under **Domains** for a custom `from` address
4. Set the variables:
```
RESEND_API_KEY=re_xxxxxxxxxxxx
EMAIL_FROM=onboarding@resend.dev   # or your verified domain email
```

---

## 3. Vercel Deployment

When deploying to Vercel:
1. Go to your project → **Settings → Environment Variables**
2. Add each variable from `.env.example` with the real values
3. Redeploy — the contact form will be live

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

> **Note:** If `GOOGLE_SERVICE_ACCOUNT_KEY` or `RESEND_API_KEY` are not set, those steps are skipped silently — the form will still return `{ success: true }` in development.
