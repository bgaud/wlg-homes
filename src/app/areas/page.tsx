import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Service Areas - Saskatoon, Warman & Martensville - WLG Homes",
  description:
    "WLG Homes serves Saskatoon and surrounding communities including Stonebridge, Evergreen, Warman, and Martensville. Roofing, framing, electrical, and renovations. Free estimates.",
  alternates: { canonical: "https://wlghomes.ca/areas" },
  openGraph: {
    title: "Service Areas - Saskatoon, Warman & Martensville - WLG Homes",
    description:
      "WLG Homes serves Saskatoon and surrounding communities. Roofing, framing, electrical, and renovations. Free estimates.",
    url: "https://wlghomes.ca/areas",
    images: [{ url: "/images/hero.png", width: 1200, height: 630, alt: "WLG Homes service areas in Saskatoon" }],
  },
};

const areas = [
  {
    name: "Stonebridge",
    slug: "stonebridge",
    city: "Saskatoon, SK",
    description:
      "Saskatoon's largest master-planned community. WLG Homes serves Stonebridge for roofing, basement framing, electrical panel upgrades, and Christmas lighting.",
  },
  {
    name: "Evergreen",
    slug: "evergreen",
    city: "Saskatoon, SK",
    description:
      "Northwest Saskatoon neighbourhood with a mix of mid-2000s and newer homes. We provide roofing, electrical, and basement development services throughout Evergreen.",
  },
  {
    name: "Warman",
    slug: "warman",
    city: "Warman, SK",
    description:
      "One of Saskatchewan's fastest-growing cities. WLG Homes serves Warman for roofing, garage construction, basement framing, and electrical work.",
  },
  {
    name: "Martensville",
    slug: "martensville",
    city: "Martensville, SK",
    description:
      "A growing community just north of Saskatoon. We provide roofing, framing, electrical, and renovation services throughout Martensville.",
  },
];

export default function AreasPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#1e2a3a] text-white py-20 px-4" aria-labelledby="areas-heading">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-wider mb-3">WLG Homes</p>
          <h1 id="areas-heading" className="text-4xl sm:text-5xl font-extrabold mb-4">
            Areas We Serve
          </h1>
          <p className="text-slate-300 text-lg">
            WLG Homes is based in Saskatoon and serves the greater Saskatoon area including Warman and Martensville. Free estimates throughout our service area.
          </p>
        </div>
      </section>

      {/* Area cards */}
      <section className="py-16 bg-white" aria-labelledby="areas-list-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 id="areas-list-heading" className="sr-only">Service area list</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {areas.map((area) => (
              <article key={area.slug} className="bg-[#f8fafc] rounded-xl border border-slate-200 p-6 shadow-sm flex flex-col">
                <p className="text-blue-600 text-xs font-semibold uppercase tracking-wider mb-1">{area.city}</p>
                <h2 className="text-xl font-extrabold text-[#1e2a3a] mb-3">{area.name}</h2>
                <p className="text-slate-600 text-sm leading-relaxed mb-5 flex-1">{area.description}</p>
                <Link
                  href={`/areas/${area.slug}`}
                  className="inline-block bg-[#1e2a3a] hover:bg-[#2d3f56] text-white font-semibold px-5 py-2.5 rounded-md transition-colors text-sm self-start"
                >
                  View {area.name} →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Broader service area note */}
      <section className="py-12 bg-[#f8fafc]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-xl font-extrabold text-[#1e2a3a] mb-3">Don&rsquo;t See Your Area?</h2>
          <p className="text-slate-600 text-sm leading-relaxed mb-6">
            We work throughout Saskatoon and the surrounding region. If you&rsquo;re not sure whether we cover your location, give us a call or send a message - we&rsquo;ll let you know quickly.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold px-7 py-3.5 rounded-md transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#1e2a3a] text-white text-center" aria-labelledby="areas-cta-heading">
        <div className="max-w-2xl mx-auto px-4">
          <h2 id="areas-cta-heading" className="text-3xl font-extrabold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-slate-300 text-lg mb-8">
            Free estimates for roofing, framing, electrical, and seasonal lighting across our service area.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-md transition-colors"
          >
            Get a Free Estimate
          </Link>
        </div>
      </section>
    </>
  );
}
