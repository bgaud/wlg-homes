export const LEAD_SOURCES = ["quote", "planning-check"] as const;
export type LeadSource = (typeof LEAD_SOURCES)[number];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_FILL_MS = 3000;

export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export function clip(value: unknown, max: number): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, max);
}

export interface ParsedLead {
  name: string;
  email: string;
  phone: string;
  message: string;
  projectType: string;
  location: string;
  timeline: string;
  budget: string;
  source: LeadSource;
  company: string;
  startedAt: number;
}

export function parseLeadBody(body: unknown): { error: string } | { lead: ParsedLead } {
  if (!body || typeof body !== "object") {
    return { error: "Invalid request." };
  }

  const data = body as Record<string, unknown>;
  const name = clip(data.name, 120);
  const email = clip(data.email, 254).toLowerCase();
  const phone = clip(data.phone, 40);
  const message = clip(data.message, 8000);
  const company = clip(data.company, 200);
  const location = clip(data.location, 200);
  const rawSource = clip(data.source, 40);
  const source: LeadSource = LEAD_SOURCES.includes(rawSource as LeadSource)
    ? (rawSource as LeadSource)
    : "quote";

  const projectType = clip(data.projectType, 80);
  const timeline = clip(data.timeline, 80);
  const budget = clip(data.budget, 80);

  const startedAtRaw = data.startedAt;
  const startedAt =
    typeof startedAtRaw === "number"
      ? startedAtRaw
      : typeof startedAtRaw === "string"
        ? Number(startedAtRaw)
        : 0;

  if (!name || !email || !message) {
    return { error: "Name, email, and message are required." };
  }
  if (!EMAIL_RE.test(email)) {
    return { error: "Invalid email address." };
  }
  if (source === "quote") {
    if (!phone) return { error: "Phone number is required for a quote request." };
    if (!projectType) return { error: "Project type is required." };
    if (!location) return { error: "Lot or location is required." };
    if (!timeline) return { error: "Timeline is required." };
  }

  return {
    lead: {
      name,
      email,
      phone,
      message,
      projectType,
      location,
      timeline,
      budget,
      source,
      company,
      startedAt: Number.isFinite(startedAt) ? startedAt : 0,
    },
  };
}

export function isSpam(lead: ParsedLead): boolean {
  if (lead.company.trim()) return true;
  if (!lead.startedAt) return true;
  if (Date.now() - lead.startedAt < MIN_FILL_MS) return true;
  return false;
}

export function nl2br(value: string): string {
  return escapeHtml(value).replace(/\n/g, "<br/>");
}
