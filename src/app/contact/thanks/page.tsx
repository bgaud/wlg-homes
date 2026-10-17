import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbList } from "@/lib/schema";
import { SITE_PHONE_DISPLAY, SITE_PHONE_TEL, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Quote request received",
  description:
    "Thanks for contacting WLG Homes. We received your quote request and will reply within one business day.",
  alternates: { canonical: `${SITE_URL}/contact/thanks` },
  robots: { index: false, follow: false },
};

const breadcrumbSchema = breadcrumbList([
  { name: "Home", url: SITE_URL },
  { name: "Contact", url: `${SITE_URL}/contact` },
  { name: "Thank you", url: `${SITE_URL}/contact/thanks` },
]);

export default function ThanksPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <section className="bg-[#1e2a3a] text-white py-16 px-4">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-[#c9a84c] text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            Request received
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl font-semibold mb-4">
            Thank you
          </h1>
          <p className="text-slate-300 text-lg">
            We received your quote request and will get back to you within one business
            day. Watch your inbox for a confirmation, and call or text if you need us
            sooner.
          </p>
        </div>
      </section>
      <section className="py-16 bg-[#f8fafc]">
        <div className="max-w-xl mx-auto px-4 text-center space-y-6">
          <p className="text-slate-600">
            Need to add something? Call or text{" "}
            <a
              href={`tel:${SITE_PHONE_TEL}`}
              className="font-semibold text-blue-700 hover:underline"
            >
              {SITE_PHONE_DISPLAY}
            </a>
            .
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/"
              className="min-h-12 inline-flex items-center justify-center bg-[#1e2a3a] hover:bg-[#2d3f56] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Back to home
            </Link>
            <Link
              href="/planning-check"
              className="min-h-12 inline-flex items-center justify-center border-2 border-[#1e2a3a] text-[#1e2a3a] hover:bg-[#1e2a3a] hover:text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Try the planning check
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
