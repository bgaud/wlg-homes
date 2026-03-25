import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Framing Contractor Saskatoon - Basement, Garage & New Build",
  description:
    "Residential framing in Saskatoon by WLG Homes. New build framing, basement framing, garage construction, and structural work. Free estimates from experienced framers.",
  alternates: { canonical: "https://wlghomes.ca/services/framing" },
  openGraph: {
    title: "Framing Contractor Saskatoon - Basement, Garage & New Build",
    description:
      "Residential framing in Saskatoon by WLG Homes. New build framing, basement framing, garage construction, and structural work. Free estimates.",
    url: "https://wlghomes.ca/services/framing",
    images: [{ url: "/images/framing.jpg", width: 1200, height: 630, alt: "WLG Homes residential framing in Saskatoon" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Framing Contractor Saskatoon - Basement, Garage & New Build",
    description:
      "Residential framing in Saskatoon by WLG Homes. New build framing, basement framing, garage construction, and structural work. Free estimates.",
    images: ["/images/framing.jpg"],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Residential Framing & Construction",
  description: "New build framing, basement framing, and garage construction in Saskatoon, SK.",
  provider: { "@type": "LocalBusiness", name: "WLG Homes", url: "https://wlghomes.ca" },
  areaServed: "Saskatoon",
  serviceType: "Framing & Construction",
};

const faqs = [
  {
    q: "How long does basement framing take?",
    a: "A standard residential basement framing project typically takes 2-4 days depending on the square footage, number of rooms, and complexity. We give you a clear timeline during your estimate.",
  },
  {
    q: "Do you build detached garages in Saskatoon?",
    a: "Yes. We handle the full framing scope for detached garages including wall framing, roof framing, and any structural elements. We can also coordinate with your concrete contractor on the pad.",
  },
  {
    q: "What building code do you frame to?",
    a: "All our framing follows the National Building Code of Canada as adopted by Saskatchewan. We pull required permits and frame to inspection-ready standards.",
  },
  {
    q: "Do you handle multi-unit framing projects?",
    a: "Yes. We&rsquo;ve completed framing on multi-unit residential buildings including 7-plex basement framing in Saskatoon. Contact us with the project scope for a quote.",
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

export default function FramingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="bg-[#1e2a3a] text-white py-20 px-4" aria-labelledby="framing-heading">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-wider mb-3">WLG Homes</p>
          <h1 id="framing-heading" className="text-4xl sm:text-5xl font-extrabold mb-4">
            Residential Framing & Construction in Saskatoon
          </h1>
          <p className="text-slate-300 text-lg mb-8">
            New build framing, basement development, garage construction, and structural
            work built to code. Experienced framers with a track record across Saskatoon.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-md transition-colors"
          >
            Get a Free Framing Estimate
          </Link>
        </div>
      </section>

      {/* Image + Intro */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-xl overflow-hidden aspect-[4/3] relative">
            <Image
              src="/images/framing.jpg"
              alt="WLG Homes residential framing in progress in Saskatoon"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              loading="lazy"
            />
          </div>
          <div>
            <h2 className="text-2xl font-extrabold text-[#1e2a3a] mb-4">
              Framing Done Right the First Time
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Dawson Wiederhold, WLG Homes co-owner and lead framer, has spent his career
              on residential and commercial framing projects across Saskatoon. His eye for
              structural integrity and commitment to code compliance is what every WLG Homes
              framing job is built on.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              From full new build framing to basement development and detached garage
              construction, we frame to inspection-ready standards with permits pulled
              on your behalf where required.
            </p>
            <p className="text-slate-600 leading-relaxed">
              We&rsquo;ve completed framing on everything from starter home basements to
              multi-unit residential buildings in the Saskatoon area.
            </p>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16 bg-[#f8fafc]" aria-labelledby="framing-services-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 id="framing-services-heading" className="text-2xl font-extrabold text-[#1e2a3a] mb-8 text-center">
            Framing Services We Offer
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { title: "New Build Framing", desc: "Full structural framing for new residential construction. Wall framing, floor systems, and roof framing built to National Building Code standards." },
              { title: "Basement Framing", desc: "Basement development framing for suite conversions, rec rooms, and home offices. We frame walls, soffits, and mechanical chases to meet permit requirements." },
              { title: "Garage Construction", desc: "Detached and attached garage framing in Saskatoon. We handle the complete framing scope from sill plates to rafters, ready for sheathing and roofing." },
              { title: "Additions & Extensions", desc: "Structural framing for home additions, room extensions, and covered structures like screened-in porches and sunrooms." },
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
      <section className="py-16 bg-white" aria-labelledby="framing-faq-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 id="framing-faq-heading" className="text-2xl font-extrabold text-[#1e2a3a] mb-8 text-center">
            Framing FAQs
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
      <section className="py-16 bg-blue-600 text-white text-center" aria-labelledby="framing-cta-heading">
        <div className="max-w-2xl mx-auto px-4">
          <h2 id="framing-cta-heading" className="text-3xl font-extrabold mb-4">
            Ready to Start Your Framing Project?
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Free estimates for all framing work in Saskatoon. We&rsquo;ll visit your site
            and give you a clear scope and price.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-block bg-white text-blue-700 hover:bg-blue-50 font-bold px-7 py-3.5 rounded-md transition-colors">
              Get a Free Estimate
            </Link>
            <Link href="/portfolio" className="inline-block border-2 border-white/60 text-white hover:bg-white/10 font-semibold px-7 py-3.5 rounded-md transition-colors">
              View Framing Projects
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
