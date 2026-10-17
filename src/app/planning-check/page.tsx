import type { Metadata } from "next";
import PlanningCheck from "@/components/PlanningCheck";
import { breadcrumbList } from "@/lib/schema";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Project Planning Check - Saskatoon Homeowners",
  description:
    "A free project planning check for Saskatoon-area homeowners. Answer a few questions about lot status, timeline, and must-haves. Get practical next steps. Not a cost estimate.",
  alternates: { canonical: `${SITE_URL}/planning-check` },
  openGraph: {
    title: "Project Planning Check | WLG Homes",
    description:
      "A free, honest planning check for garage builds, framing, roofing, electrical, and renovations in the Saskatoon area.",
    url: `${SITE_URL}/planning-check`,
    images: [
      {
        url: "/images/hero.png",
        width: 1200,
        height: 630,
        alt: "WLG Homes project planning check for Saskatoon homeowners",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Project Planning Check | WLG Homes",
    description:
      "A free, honest planning check for garage builds, framing, roofing, electrical, and renovations in the Saskatoon area.",
    images: ["/images/hero.png"],
  },
};

const breadcrumbSchema = breadcrumbList([
  { name: "Home", url: SITE_URL },
  { name: "Project Planning Check", url: `${SITE_URL}/planning-check` },
]);

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Does this planning check give a price?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. The planning check gives non-numeric next steps based on your answers. WLG Homes provides free, no-obligation estimates after a conversation or site visit. This tool is not a cost estimate.",
      },
    },
    {
      "@type": "Question",
      name: "Is this financial or legal advice?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Questions about financing or lot status are for planning only. WLG Homes is not a lender and does not provide financial, real-estate, or legal advice.",
      },
    },
    {
      "@type": "Question",
      name: "What areas does WLG Homes serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "WLG Homes is based in Saskatoon, SK and serves Saskatoon, Warman, Martensville, Delisle, and Prince Albert.",
      },
    },
  ],
};

export default function PlanningCheckPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="bg-[#1e2a3a] text-white py-16 sm:py-20 px-4" aria-labelledby="check-heading">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#c9a84c] text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            Free for Saskatoon-area homeowners
          </p>
          <h1 id="check-heading" className="font-heading text-4xl sm:text-5xl font-semibold mb-4">
            Project planning check
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed">
            A short, honest checklist for garage builds, framing, roofing, electrical,
            and renovations. You will get next steps on screen, not a made-up price.
          </p>
        </div>
      </section>

      <section className="py-10 sm:py-16 bg-[#f8fafc]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <PlanningCheck />
          <p className="mt-6 text-xs text-slate-500 text-center leading-relaxed">
            Answers stay on this device until you choose to email the summary. Emailing
            the summary sends a copy to WLG Homes so the team can follow up. See our{" "}
            <a href="/privacy" className="underline">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
