import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Roofing Saskatoon - Shingle Replacement & Repairs",
  description:
    "Professional roofing services in Saskatoon by WLG Homes. Asphalt shingle replacement, roof repairs, and new roof construction. Built for Saskatchewan winters. Free estimates.",
  alternates: { canonical: "https://wlghomes.ca/services/roofing" },
  openGraph: {
    title: "Roofing Saskatoon - Shingle Replacement & Repairs",
    description:
      "Professional roofing services in Saskatoon by WLG Homes. Asphalt shingle replacement, roof repairs, and new roof construction. Free estimates.",
    url: "https://wlghomes.ca/services/roofing",
    images: [{ url: "/images/roofing.jpg", width: 1200, height: 630, alt: "WLG Homes roof replacement in Saskatoon" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Roofing Saskatoon - Shingle Replacement & Repairs",
    description:
      "Professional roofing services in Saskatoon by WLG Homes. Asphalt shingle replacement, roof repairs, and new roof construction. Free estimates.",
    images: ["/images/roofing.jpg"],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Professional Roofing Services",
  description: "Asphalt shingle replacement, roof repairs, and new roof construction in Saskatoon, SK.",
  provider: { "@type": "LocalBusiness", name: "WLG Homes", url: "https://wlghomes.ca" },
  areaServed: "Saskatoon",
  serviceType: "Roofing",
};

const faqs = [
  {
    q: "How long does a roof replacement take in Saskatoon?",
    a: "Most residential asphalt shingle replacements in Saskatoon are completed in 1-2 days, depending on the size and complexity of the roof. We do a full tear-off of existing shingles, inspect the decking, install new underlayment and drip edge, and lay new shingles.",
  },
  {
    q: "What type of shingles do you use?",
    a: "We work with high-quality architectural asphalt shingles rated for Saskatchewan's climate. We can recommend specific products based on your budget, roof pitch, and long-term durability needs.",
  },
  {
    q: "Do you repair roofs or just replace them?",
    a: "We do both. If your roof has isolated damage — a few missing shingles, flashing issues, or a small leak — we can repair it. If the shingles are aging or the damage is widespread, a full replacement is usually more cost-effective.",
  },
  {
    q: "Do you offer a warranty on roofing work?",
    a: "Yes. We stand behind our workmanship. Contact us for details on the warranty coverage we provide for roofing installations.",
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

export default function RoofingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="bg-[#1e2a3a] text-white py-20 px-4" aria-labelledby="roofing-heading">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-wider mb-3">WLG Homes</p>
          <h1 id="roofing-heading" className="text-4xl sm:text-5xl font-extrabold mb-4">
            Professional Roofing Services in Saskatoon
          </h1>
          <p className="text-slate-300 text-lg mb-8">
            Asphalt shingle replacement, roof repairs, and new construction roofing.
            Built for Saskatchewan winters by a team that shows up and gets it done.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-md transition-colors"
          >
            Get a Free Roofing Estimate
          </Link>
        </div>
      </section>

      {/* Image + Intro */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-xl overflow-hidden aspect-[4/3] relative">
            <Image
              src="/images/roofing4.jpg"
              alt="Completed asphalt shingle roof replacement by WLG Homes in Saskatoon"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              loading="lazy"
            />
          </div>
          <div>
            <h2 className="text-2xl font-extrabold text-[#1e2a3a] mb-4">
              Roofing Built for Saskatoon Winters
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Saskatoon&rsquo;s climate is one of the most demanding in Canada for residential roofing.
              Extreme temperature swings, heavy snow loads, and freeze-thaw cycles put serious
              stress on shingles, flashing, and underlayment every single year.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              At WLG Homes, we&rsquo;ve been replacing and repairing roofs in Saskatoon long
              before the business had a name. Our team knows what holds up through a Saskatchewan
              winter and what doesn&rsquo;t. Every job gets a full tear-off, a proper deck inspection,
              and quality materials installed correctly.
            </p>
            <p className="text-slate-600 leading-relaxed">
              No subcontracting. No shortcuts. You get the owners on your roof.
            </p>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16 bg-[#f8fafc]" aria-labelledby="roofing-services-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 id="roofing-services-heading" className="text-2xl font-extrabold text-[#1e2a3a] mb-8 text-center">
            What We Offer
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { title: "Asphalt Shingle Replacement", desc: "Full tear-off and replacement with quality architectural shingles rated for Saskatchewan's climate. New underlayment, drip edge, and ice-and-water shield included." },
              { title: "Roof Repairs", desc: "Missing shingles, failing flashing, ice dam damage, and small leaks fixed properly. We assess the full scope so your repair actually holds." },
              { title: "New Construction Roofing", desc: "Roofing for new builds, garages, and additions. We coordinate with your framing schedule and ensure everything is weather-tight before the next trade." },
              { title: "Decking & Underlayment", desc: "Deck board replacement where needed, proper underlayment installation, and drip edge on every perimeter. The foundation for a roof that lasts." },
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
      <section className="py-16 bg-white" aria-labelledby="roofing-faq-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 id="roofing-faq-heading" className="text-2xl font-extrabold text-[#1e2a3a] mb-8 text-center">
            Roofing FAQs
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
      <section className="py-16 bg-blue-600 text-white text-center" aria-labelledby="roofing-cta-heading">
        <div className="max-w-2xl mx-auto px-4">
          <h2 id="roofing-cta-heading" className="text-3xl font-extrabold mb-4">
            Ready to Get Your Roof Done Right?
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Free estimates for all roofing projects in Saskatoon. We&rsquo;ll visit your site,
            assess the scope, and give you a straight answer on what it will cost.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-block bg-white text-blue-700 hover:bg-blue-50 font-bold px-7 py-3.5 rounded-md transition-colors">
              Get a Free Estimate
            </Link>
            <Link href="/portfolio" className="inline-block border-2 border-white/60 text-white hover:bg-white/10 font-semibold px-7 py-3.5 rounded-md transition-colors">
              View Roofing Projects
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
