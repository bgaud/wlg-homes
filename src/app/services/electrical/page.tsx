import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Licensed Electrician Saskatoon - Panel Upgrades & Wiring",
  description:
    "Licensed electrical services in Saskatoon by WLG Homes. Panel upgrades, residential wiring, new construction electrical. Saskatchewan-licensed electricians. Free estimates.",
  alternates: { canonical: "https://wlghomes.ca/services/electrical" },
  openGraph: {
    title: "Licensed Electrician Saskatoon - Panel Upgrades & Wiring",
    description:
      "Licensed electrical services in Saskatoon by WLG Homes. Panel upgrades, residential wiring, new construction electrical. Free estimates.",
    url: "https://wlghomes.ca/services/electrical",
    images: [{ url: "/images/electrical.jpg", width: 1200, height: 630, alt: "WLG Homes electrical panel upgrade in Saskatoon" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Licensed Electrician Saskatoon - Panel Upgrades & Wiring",
    description:
      "Licensed electrical services in Saskatoon by WLG Homes. Panel upgrades, residential wiring, new construction electrical. Free estimates.",
    images: ["/images/electrical.jpg"],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Licensed Electrical Services",
  description: "Residential electrical panel upgrades, wiring, and new construction electrical in Saskatoon, SK.",
  provider: { "@type": "LocalBusiness", name: "WLG Homes", url: "https://wlghomes.ca" },
  areaServed: "Saskatoon",
  serviceType: "Electrical",
};

const faqs = [
  {
    q: "Are your electricians licensed in Saskatchewan?",
    a: "Yes. WLG Homes has two Saskatchewan-licensed electricians on staff — Riley Lajuenesse and Braedon Gaudet. All electrical work is done by licensed trades and fully permitted.",
  },
  {
    q: "Do I need a permit for an electrical panel upgrade?",
    a: "Yes, panel upgrades require a permit in Saskatchewan. WLG Homes manages the permit process on your behalf so you don't have to deal with the paperwork.",
  },
  {
    q: "What size panel upgrade do I need?",
    a: "Most older Saskatoon homes have 100A panels. If you're adding a hot tub, EV charger, basement suite, or large appliances, a 200A upgrade is typically recommended. We'll assess your current load and advise you during the estimate.",
  },
  {
    q: "Do you do electrical work for new construction?",
    a: "Yes. We provide full electrical rough-in and trim for new builds, garages, and additions. We coordinate with the general contractor or framing crew to keep the project on schedule.",
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

export default function ElectricalPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="bg-[#1e2a3a] text-white py-20 px-4" aria-labelledby="electrical-heading">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-wider mb-3">WLG Homes</p>
          <h1 id="electrical-heading" className="text-4xl sm:text-5xl font-extrabold mb-4">
            Licensed Electrical Services in Saskatoon
          </h1>
          <p className="text-slate-300 text-lg mb-8">
            Panel upgrades, residential wiring, and new construction electrical.
            Two Saskatchewan-licensed electricians. Every job permitted and done to code.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-md transition-colors"
          >
            Get a Free Electrical Estimate
          </Link>
        </div>
      </section>

      {/* Image + Intro */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-xl overflow-hidden aspect-[4/3] relative">
            <Image
              src="/images/electrical.jpg"
              alt="WLG Homes licensed electrician completing a panel upgrade in Saskatoon"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              loading="lazy"
            />
          </div>
          <div>
            <h2 className="text-2xl font-extrabold text-[#1e2a3a] mb-4">
              Saskatoon Electrical Work Done by the Book
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              WLG Homes has two Saskatchewan-licensed electricians — Riley Lajuenesse and
              Braedon Gaudet — with decades of combined residential and commercial experience.
              Every electrical job we take on is fully permitted and inspected.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              Whether you need a 200A panel upgrade, wiring for a basement renovation,
              new circuits for a garage, or electrical rough-in for a new build, we handle
              it properly. No unlicensed work. No cutting corners on code.
            </p>
            <p className="text-slate-600 leading-relaxed">
              We also pull all required permits on your behalf, so you don&rsquo;t have to navigate
              the process yourself.
            </p>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16 bg-[#f8fafc]" aria-labelledby="electrical-services-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 id="electrical-services-heading" className="text-2xl font-extrabold text-[#1e2a3a] mb-8 text-center">
            What We Offer
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { title: "Panel Upgrades (100A to 200A)", desc: "Upgrade your electrical service to handle modern loads. Required for EV chargers, hot tubs, basement suites, and major renovations. Fully permitted." },
              { title: "Residential Wiring", desc: "New circuits, outlet additions, light fixture installation, and general home wiring for renovations and upgrades." },
              { title: "New Construction Electrical", desc: "Complete rough-in and trim for new builds, garages, and additions. We work with your schedule and coordinate with other trades on site." },
              { title: "Basement Suite Electrical", desc: "Dedicated circuits, panel capacity assessment, and full wiring for basement suite or secondary suite conversions — done to code." },
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
      <section className="py-16 bg-white" aria-labelledby="electrical-faq-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 id="electrical-faq-heading" className="text-2xl font-extrabold text-[#1e2a3a] mb-8 text-center">
            Electrical FAQs
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
      <section className="py-16 bg-blue-600 text-white text-center" aria-labelledby="electrical-cta-heading">
        <div className="max-w-2xl mx-auto px-4">
          <h2 id="electrical-cta-heading" className="text-3xl font-extrabold mb-4">
            Need a Licensed Electrician in Saskatoon?
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Free estimates for all electrical work. We&rsquo;ll assess your project,
            walk you through your options, and give you a clear quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-block bg-white text-blue-700 hover:bg-blue-50 font-bold px-7 py-3.5 rounded-md transition-colors">
              Get a Free Estimate
            </Link>
            <Link href="/portfolio" className="inline-block border-2 border-white/60 text-white hover:bg-white/10 font-semibold px-7 py-3.5 rounded-md transition-colors">
              View Electrical Projects
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
