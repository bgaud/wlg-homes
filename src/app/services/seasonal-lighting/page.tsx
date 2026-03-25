import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Christmas Lighting Installation Saskatoon - WLG Homes",
  description:
    "Professional Christmas and holiday lighting installation in Saskatoon by WLG Homes. Roofline lighting, tree wrapping, install and takedown included. Free estimates.",
  alternates: { canonical: "https://wlghomes.ca/services/seasonal-lighting" },
  openGraph: {
    title: "Christmas Lighting Installation Saskatoon - WLG Homes",
    description:
      "Professional Christmas and holiday lighting installation in Saskatoon by WLG Homes. Roofline lighting, tree wrapping, install and takedown included. Free estimates.",
    url: "https://wlghomes.ca/services/seasonal-lighting",
    images: [{ url: "/images/christmas-lights.jpg", width: 1200, height: 630, alt: "WLG Homes professional Christmas lighting on a Saskatoon home" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Christmas Lighting Installation Saskatoon - WLG Homes",
    description:
      "Professional Christmas and holiday lighting installation in Saskatoon by WLG Homes. Free estimates.",
    images: ["/images/christmas-lights.jpg"],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Professional Christmas Lighting Installation",
  description: "Holiday and Christmas lighting installation, maintenance, and takedown for homes in Saskatoon, SK.",
  provider: { "@type": "LocalBusiness", name: "WLG Homes", url: "https://wlghomes.ca" },
  areaServed: "Saskatoon",
  serviceType: "Seasonal Lighting",
};

const faqs = [
  {
    q: "What does the Christmas lighting service include?",
    a: "Our seasonal lighting service includes the full installation on your roofline, eaves, trees, or other areas you want lit. We handle takedown at the end of the season as well. We use quality commercial-grade lights.",
  },
  {
    q: "When should I book Christmas lighting installation?",
    a: "We recommend booking by late October to secure your preferred install date in November. Spots fill up quickly in Saskatoon as the holiday season approaches.",
  },
  {
    q: "Do I need to provide the lights?",
    a: "No. WLG Homes supplies commercial-grade LED lights for all installations. If you have specific lights you want used, let us know and we can discuss it during your estimate.",
  },
  {
    q: "Do you offer takedown-only service?",
    a: "Contact us and we&rsquo;ll let you know what&rsquo;s available for the current season. Our standard packages include both install and takedown.",
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

export default function SeasonalLightingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="bg-[#1e2a3a] text-white py-20 px-4" aria-labelledby="lighting-heading">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-wider mb-3">WLG Homes</p>
          <h1 id="lighting-heading" className="text-4xl sm:text-5xl font-extrabold mb-4">
            Christmas Lighting Installation in Saskatoon
          </h1>
          <p className="text-slate-300 text-lg mb-8">
            Professional holiday lighting installed, maintained, and taken down by WLG Homes.
            No ladders, no hassle — just a lit-up home for the season.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-md transition-colors"
          >
            Get a Free Lighting Estimate
          </Link>
        </div>
      </section>

      {/* Image + Intro */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-xl overflow-hidden aspect-[4/3] relative">
            <Image
              src="/images/christmas-lights.jpg"
              alt="Professional Christmas lighting installation on a Saskatoon home by WLG Homes"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              loading="lazy"
            />
          </div>
          <div>
            <h2 className="text-2xl font-extrabold text-[#1e2a3a] mb-4">
              Leave the Ladder to Us
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Getting on a ladder in a Saskatoon winter to hang Christmas lights is a task
              best left to professionals. WLG Homes handles the full install — roofline lighting,
              tree wrapping, and any other areas you want covered — safely and efficiently.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              We use quality commercial-grade LED lights that hold up through cold weather
              and look great from the street. When the season is over, we come back and
              take everything down for you.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Book early. Spots in Saskatoon fill up fast as the holiday season approaches.
            </p>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 bg-[#f8fafc]" aria-labelledby="lighting-includes-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 id="lighting-includes-heading" className="text-2xl font-extrabold text-[#1e2a3a] mb-8 text-center">
            What&rsquo;s Included
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { title: "Roofline & Eave Lighting", desc: "Clean, evenly spaced lights along your roofline, eaves, and gutters. Looks sharp from the street and stays secure through Saskatoon winters." },
              { title: "Tree & Shrub Wrapping", desc: "Professional wrapping of trees and shrubs in your yard for a full holiday look that complements the house lighting." },
              { title: "Full Takedown at Season End", desc: "When the season is over, we come back and take everything down cleanly. No lights left tangled in your trees." },
              { title: "Commercial-Grade LED Lights", desc: "We supply quality LED lights rated for outdoor use in cold temperatures. Bright, energy-efficient, and built to last the season." },
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
      <section className="py-16 bg-white" aria-labelledby="lighting-faq-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 id="lighting-faq-heading" className="text-2xl font-extrabold text-[#1e2a3a] mb-8 text-center">
            Seasonal Lighting FAQs
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
      <section className="py-16 bg-blue-600 text-white text-center" aria-labelledby="lighting-cta-heading">
        <div className="max-w-2xl mx-auto px-4">
          <h2 id="lighting-cta-heading" className="text-3xl font-extrabold mb-4">
            Book Your Saskatoon Christmas Lighting
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Spots are limited each season. Get in touch early to secure your install date.
          </p>
          <Link href="/contact" className="inline-block bg-white text-blue-700 hover:bg-blue-50 font-bold px-7 py-3.5 rounded-md transition-colors">
            Get a Free Estimate
          </Link>
        </div>
      </section>
    </>
  );
}
