import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { breadcrumbList } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Garage Builder Saskatoon - Full Detached Garage Builds",
  description:
    "Full detached garage builds in Saskatoon by WLG Homes - concrete pad coordination, complete framing, siding, roofing, and electrical under one crew. No subcontracting. Free estimates.",
  alternates: { canonical: "https://wlghomes.ca/services/full-builds" },
  openGraph: {
    title: "Garage Builder Saskatoon - Full Detached Garage Builds - WLG Homes",
    description:
      "Full detached garage builds in Saskatoon - concrete pad coordination, framing, siding, roofing, and electrical under one crew. Free estimates.",
    url: "https://wlghomes.ca/services/full-builds",
    images: [{ url: "/images/garage-build/08-finished.jpg", width: 1200, height: 900, alt: "Finished detached garage built by WLG Homes in Saskatoon" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Garage Builder Saskatoon - Full Detached Garage Builds - WLG Homes",
    description:
      "Full detached garage builds in Saskatoon - concrete pad coordination, framing, siding, roofing, and electrical under one crew. Free estimates.",
    images: ["/images/garage-build/08-finished.jpg"],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Full Garage & Home Builds",
  description:
    "Full detached garage and structure builds from the ground up, including concrete coordination, framing, siding, roofing, and electrical in Saskatoon, SK.",
  provider: { "@type": "LocalBusiness", name: "WLG Homes", url: "https://wlghomes.ca", telephone: "+13062706616" },
  areaServed: "Saskatoon",
  serviceType: "Full Builds",
};

const faqs = [
  {
    q: "What's included in a full garage build from WLG Homes?",
    a: "A full build covers coordination of the concrete pad pour, complete framing from sill plates to roof deck, siding installation, roofing, and basic electrical (lights and outlets) done by our licensed electricians. We also handle the permit application and coordinate with the city on your behalf.",
  },
  {
    q: "How long does a full garage build take?",
    a: "Once the concrete pad is poured and cured, a standard double garage shell - framing through siding and shingles - can be closed in as little as two days, around 28 hours of on-site work. Larger garages, a frost wall foundation, or a finished interior add time. See a real build from start to finish in our project story.",
  },
  {
    q: "What size of garage can you build?",
    a: "Most of our builds fall into three ranges: single car (12x22 to 14x22), double car (22x22 to 24x24, the most common size we build), and oversized double (24x28 to 26x30) with room for a workshop. We'll help you pick the right size for your lot and how you plan to use the space.",
  },
  {
    q: "Do you handle the concrete pad too?",
    a: "Yes, we coordinate the concrete pad pour as part of a full build. If you already have a pad poured and cured, we can start directly with framing - either way works, and we'll walk through the sequence during your estimate.",
  },
  {
    q: "Do you only build garages, or full homes too?",
    a: "Detached garages are what we're best known for and where most of our full builds happen. The same in-house crew - framing, roofing, and electrical under one roof, no subcontracting - also takes on additions and other ground-up structures. Tell us what you're planning and we'll give you a straight answer on whether it's a fit.",
  },
  {
    q: "Do you handle permits for a full build?",
    a: "Yes. Full builds require a building permit and, where new wiring is involved, an electrical permit. WLG Homes applies for both and coordinates with the City of Saskatoon, Warman, or Martensville so the project is inspection-ready at every stage.",
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

const breadcrumbSchema = breadcrumbList([
  { name: "Home", url: "https://wlghomes.ca" },
  { name: "Services", url: "https://wlghomes.ca/services" },
  { name: "Full Builds", url: "https://wlghomes.ca/services/full-builds" },
]);

const included = [
  { title: "Concrete Pad Coordination", desc: "We coordinate the concrete pad pour and cure before framing starts, or work with a pad you've already had poured." },
  { title: "Complete Framing", desc: "Sill plates to roof deck - walls, roof trusses or rafters, and sheathing, framed to inspection-ready standards." },
  { title: "Siding Installation", desc: "House wrap and siding installed to hold up against Saskatchewan wind, rain, and snow for the life of the building." },
  { title: "Roofing", desc: "Underlayment, drip edge, and shingles installed by the same crew that framed the roof - no handoff, no gaps in the schedule." },
  { title: "Licensed Electrical", desc: "Basic lighting and outlets as standard, with the option to add a sub-panel, 240V circuit, or EV charger wiring for a workshop." },
  { title: "Permits & Inspections", desc: "We apply for the building and electrical permits and coordinate every inspection so the project closes out clean." },
];

const sizes = [
  { name: "Single Car", range: "12x22 to 14x22", desc: "The smallest footprint, a simpler roof, and the most affordable option for a standalone garage." },
  { name: "Double Car", range: "22x22 to 24x24", desc: "The most common size we build - room for two vehicles with a wider roof span." },
  { name: "Oversized Double", range: "24x28 to 26x30", desc: "Room for two vehicles plus a workshop or extra storage." },
];

export default function FullBuildsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="bg-[#1e2a3a] text-white py-20 px-4" aria-labelledby="fullbuilds-heading">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-wider mb-3">WLG Homes</p>
          <h1 id="fullbuilds-heading" className="text-4xl sm:text-5xl font-extrabold mb-4">
            Full Garage & Structure Builds in Saskatoon
          </h1>
          <p className="text-slate-300 text-lg mb-8">
            From the concrete pad to the last shingle - framing, siding, roofing, and electrical,
            all under one crew. No subcontracting.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-md transition-colors"
          >
            Get a Free Build Estimate
          </Link>
        </div>
      </section>

      {/* Image + Intro */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-xl overflow-hidden aspect-[4/3] relative">
            <Image
              src="/images/garage-build/08-finished.jpg"
              alt="Finished detached garage built by WLG Homes in Saskatoon"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              loading="lazy"
            />
          </div>
          <div>
            <h2 className="text-2xl font-extrabold text-[#1e2a3a] mb-4">
              One Crew, Start to Finish
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              A full build means you're not coordinating separate framers, roofers, and electricians
              yourself. WLG Homes handles the concrete pad, complete framing, siding, roofing, and
              electrical with the same crew from day one to the final walkthrough.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              That matters most on timeline. Once the pad is poured and cured, we've closed in a
              standard double garage - framed, wrapped, sided, and shingled - in two days flat.
            </p>
            <p className="text-slate-600 leading-relaxed">
              <Link href="/blog/garage-build-saskatoon" className="text-blue-600 font-semibold hover:underline">
                See a real build from start to finish →
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 bg-[#f8fafc]" aria-labelledby="fullbuilds-includes-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 id="fullbuilds-includes-heading" className="text-2xl font-extrabold text-[#1e2a3a] mb-8 text-center">
            What's Included in a Full Build
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {included.map((item) => (
              <div key={item.title} className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
                <h3 className="font-bold text-[#1e2a3a] mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sizes */}
      <section className="py-16 bg-white" aria-labelledby="fullbuilds-sizes-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 id="fullbuilds-sizes-heading" className="text-2xl font-extrabold text-[#1e2a3a] mb-8 text-center">
            Garage Sizes We Build
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {sizes.map((size) => (
              <div key={size.name} className="bg-[#f8fafc] rounded-xl border border-slate-200 p-6">
                <p className="text-blue-600 text-xs font-semibold uppercase tracking-wider mb-1">{size.range}</p>
                <h3 className="font-bold text-[#1e2a3a] mb-2">{size.name}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{size.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-slate-500 text-sm text-center mt-8">
            Curious what a build actually costs? Read our full{" "}
            <Link href="/blog/detached-garage-cost-saskatoon" className="text-blue-600 font-semibold hover:underline">
              detached garage cost breakdown
            </Link>.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-[#f8fafc]" aria-labelledby="fullbuilds-faq-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 id="fullbuilds-faq-heading" className="text-2xl font-extrabold text-[#1e2a3a] mb-8 text-center">
            Full Build FAQs
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="border border-slate-200 rounded-lg p-5 bg-white">
                <h3 className="font-bold text-[#1e2a3a] mb-2">{faq.q}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600 text-white text-center" aria-labelledby="fullbuilds-cta-heading">
        <div className="max-w-2xl mx-auto px-4">
          <h2 id="fullbuilds-cta-heading" className="text-3xl font-extrabold mb-4">
            Ready to Start Your Build?
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Free, in-person estimates for full garage and structure builds in Saskatoon, Warman,
            and Martensville.
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
