import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home Renovation Contractor Saskatoon - WLG Homes",
  description:
    "Trusted home renovation services in Saskatoon by WLG Homes. Basement development, structural renovations, and full-scope remodels. Owners on every job site. Free estimates.",
  alternates: { canonical: "https://wlghomes.ca/services/renovations" },
  openGraph: {
    title: "Home Renovation Contractor Saskatoon - WLG Homes",
    description:
      "Trusted home renovation services in Saskatoon by WLG Homes. Basement development, structural renovations, and full-scope remodels. Free estimates.",
    url: "https://wlghomes.ca/services/renovations",
    images: [{ url: "/images/hero.png", width: 1200, height: 630, alt: "WLG Homes home renovation services in Saskatoon" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Home Renovation Contractor Saskatoon - WLG Homes",
    description:
      "Trusted home renovation services in Saskatoon by WLG Homes. Owners on every job site. Free estimates.",
    images: ["/images/hero.png"],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Home Renovation Services",
  description: "Residential renovation services including basement development, structural work, and full-scope remodels in Saskatoon, SK.",
  provider: { "@type": "LocalBusiness", name: "WLG Homes", url: "https://wlghomes.ca" },
  areaServed: "Saskatoon",
  serviceType: "Home Renovation",
};

const faqs = [
  {
    q: "What types of renovations do you take on?",
    a: "WLG Homes handles renovations that draw on our core trades — framing, electrical, and roofing. This includes basement developments, garage conversions, structural changes, and multi-trade remodels where we manage the scope.",
  },
  {
    q: "Do you use subcontractors?",
    a: "No. When you hire WLG Homes, you get the owners on your job site. We don&rsquo;t subcontract your work out to unknown crews. What you see is what you get.",
  },
  {
    q: "How do I get a quote for a renovation?",
    a: "Contact us through our website or by phone. We&rsquo;ll schedule a time to visit your site, walk through the scope, and provide a written estimate. There&rsquo;s no cost for the estimate.",
  },
  {
    q: "Do you manage permits for renovations?",
    a: "Yes. For renovations that require electrical, structural, or building permits, we handle the application process on your behalf so the project is fully compliant and ready for inspection.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

export default function RenovationsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="bg-[#1e2a3a] text-white py-20 px-4" aria-labelledby="reno-heading">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-wider mb-3">WLG Homes</p>
          <h1 id="reno-heading" className="text-4xl sm:text-5xl font-extrabold mb-4">
            Home Renovation Services in Saskatoon
          </h1>
          <p className="text-slate-300 text-lg mb-8">
            Structural, electrical, and multi-trade renovations done by the owners.
            No subcontracting. No runaround. Just solid work from experienced tradespeople.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-md transition-colors"
          >
            Get a Free Renovation Estimate
          </Link>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-extrabold text-[#1e2a3a] mb-4">
            Renovations Done by the Owners
          </h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            WLG Homes brings together three experienced tradespeople — a lead framer and two
            licensed electricians — to handle renovation projects that require real expertise,
            not a coordinated mess of subcontractors who don&rsquo;t talk to each other.
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            We specialize in renovations that draw on our core skills. Basement development,
            garage conversions, structural changes that require proper framing and electrical
            work, and multi-trade projects where having one team manage the full scope makes
            everything run smoother.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Every estimate is done in person. Every job has an owner on site. And every
            project gets done the way we&rsquo;d want it done on our own homes.
          </p>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16 bg-[#f8fafc]" aria-labelledby="reno-services-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 id="reno-services-heading" className="text-2xl font-extrabold text-[#1e2a3a] mb-8 text-center">
            Renovation Work We Take On
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { title: "Basement Development", desc: "Full basement development including framing, electrical rough-in, and coordination with drywall and finishing trades. Permit-ready from the start." },
              { title: "Garage Conversions", desc: "Converting an attached garage to living space or a heated workshop. We handle the structural framing changes and electrical work required." },
              { title: "Structural Renovations", desc: "Wall removals, load-bearing modifications, and structural reconfigurations that need proper framing expertise to execute safely and to code." },
              { title: "Multi-Trade Projects", desc: "Projects that need framing, roofing, and electrical work under one contractor. We manage the full scope and keep the project moving." },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
                <h3 className="font-bold text-[#1e2a3a] mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white" aria-labelledby="reno-faq-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 id="reno-faq-heading" className="text-2xl font-extrabold text-[#1e2a3a] mb-8 text-center">
            Renovation FAQs
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-[#1e2a3a] mb-2">{faq.q}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600 text-white text-center" aria-labelledby="reno-cta-heading">
        <div className="max-w-2xl mx-auto px-4">
          <h2 id="reno-cta-heading" className="text-3xl font-extrabold mb-4">
            Ready to Start Your Renovation?
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Get in touch and we&rsquo;ll schedule a site visit. Free estimates for all
            renovation projects in Saskatoon.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-block bg-white text-blue-700 hover:bg-blue-50 font-bold px-7 py-3.5 rounded-md transition-colors">
              Get a Free Estimate
            </Link>
            <Link href="/portfolio" className="inline-block border-2 border-white/60 text-white hover:bg-white/10 font-semibold px-7 py-3.5 rounded-md transition-colors">
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
