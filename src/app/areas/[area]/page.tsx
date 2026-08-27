import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { breadcrumbList } from "@/lib/schema";

interface AreaData {
  name: string;
  city: string;
  slug: string;
  metaTitle: string;
  metaDescription: string;
  heroSubtitle: string;
  intro: string;
  context: string;
  roofingNote: string;
  electricalNote: string;
  framingNote: string;
}

const areas: Record<string, AreaData> = {
  warman: {
    name: "Warman",
    city: "Warman",
    slug: "warman",
    metaTitle: "Roofing, Framing & Electrical in Warman, SK",
    metaDescription:
      "WLG Homes provides roofing, framing, electrical, and renovation services in Warman, SK. Licensed trades. Free estimates. 306-270-6616.",
    heroSubtitle:
      "Serving Warman homeowners with roofing, framing, electrical, and seasonal lighting. Free estimates from Saskatoon's trusted trades team.",
    intro:
      "WLG Homes serves Warman, SK for roofing, framing, electrical, and renovation work. Located just north of Saskatoon, Warman has grown significantly over the past decade and we make regular trips out for estimates and project work throughout the community.",
    context:
      "Warman is one of Saskatchewan's fastest-growing cities, with a large share of newer homes built in the last 10-15 years. That means lots of unfinished basements waiting to be developed, garages to build, and electrical work to support growing families who moved out from Saskatoon.",
    roofingNote:
      "Warman's newer homes are generally in good shape roofing-wise, but any home with a roof over 10 years old is worth having checked - especially after a hail event. WLG Homes provides free roofing assessments in Warman and can turn quotes around quickly.",
    electricalNote:
      "New construction electrical, panel upgrades, and EV charger installations are common requests we get from Warman homeowners. Everything is done to Saskatchewan electrical code, fully permitted, and inspected before we close walls.",
    framingNote:
      "We've done basement framing and garage construction projects throughout Warman. We handle the permit application with the City of Warman on your behalf and frame to inspection-ready standards.",
  },
  martensville: {
    name: "Martensville",
    city: "Martensville",
    slug: "martensville",
    metaTitle: "Roofing, Framing & Electrical in Martensville, SK",
    metaDescription:
      "WLG Homes provides roofing, framing, electrical, and renovation services in Martensville, SK. Licensed trades. Free estimates. 306-270-6616.",
    heroSubtitle:
      "Serving Martensville homeowners with roofing, framing, electrical, and seasonal lighting. Free estimates from Saskatoon's trusted trades team.",
    intro:
      "WLG Homes serves Martensville, SK for roofing, framing, electrical work, and home renovations. Martensville is a short drive from Saskatoon and we regularly work in the community for homeowners who want a reliable trades team without the city premium.",
    context:
      "Martensville has seen steady residential growth over the past 15 years, with a mix of newer builds and homes from the late 2000s. The community attracts families looking for newer housing stock at more accessible prices, and many of those homeowners are now investing in basement development, garage builds, and home upgrades.",
    roofingNote:
      "Homes in Martensville from the late 2000s and early 2010s are entering the age range where a roofing assessment makes sense. WLG Homes can get out to Martensville for a free estimate and give you an honest read on whether your roof needs work before winter.",
    electricalNote:
      "Whether it's a panel upgrade to support an EV charger, electrical rough-in for a basement development, or new circuits for a workshop or garage, WLG Homes handles the full electrical scope in Martensville with proper permits through Saskatchewan's electrical authority.",
    framingNote:
      "Basement framing and detached garage construction are two of the most common projects we do in Martensville. We coordinate permits with the City of Martensville and frame to the National Building Code standards required for inspection sign-off.",
  },
  saskatoon: {
    name: "Saskatoon",
    city: "Saskatoon",
    slug: "saskatoon",
    metaTitle: "Roofing, Framing & Electrical in Saskatoon, SK",
    metaDescription:
      "WLG Homes offers roofing, framing, electrical, and renovation services across Saskatoon, SK. Licensed trades, free estimates, owners on every job. Call 306-270-6616.",
    heroSubtitle:
      "Saskatoon's local trades team - roofing, framing, electrical, and full garage builds. Free estimates, owners on every job site.",
    intro:
      "WLG Homes is based in Saskatoon and works across the city and surrounding communities. From mature neighbourhoods in the core to the newest developments on the edges of the city, we handle roofing, framing, electrical, full garage builds, and home renovations for Saskatoon homeowners.",
    context:
      "Saskatoon is a city of contrasts - older bungalows with aging roofs and electrical systems sitting a few blocks from brand-new infills. We work in all of it. Whether you're in a 1960s home in Confederation Park that needs a panel upgrade or a newer build in Evergreen that needs a detached garage, WLG Homes has the trades to handle it.",
    roofingNote:
      "Saskatoon's climate is hard on roofs - extreme temperature swings, heavy snow loads, and freeze-thaw cycles every spring. Older neighbourhoods like Nutana, Caswell Hill, and Hampton Village have a lot of homes with original or first-replacement roofs that are due. WLG Homes provides free on-site roofing assessments across the city.",
    electricalNote:
      "With two Saskatchewan-licensed electricians on our crew, we handle panel upgrades, new construction wiring, basement suite circuits, EV charger installations, and hot tub hookups throughout Saskatoon. All work is fully permitted through SaskPower and inspected before walls close.",
    framingNote:
      "We do basement framing, detached garage builds, and structural framing for additions and renovations across Saskatoon. We've built garages from scratch in established alleys and framed out hundreds of basements from Silverspring to Stonebridge.",
  },
  delisle: {
    name: "Delisle",
    city: "Delisle",
    slug: "delisle",
    metaTitle: "Roofing, Framing & Electrical in Delisle, SK",
    metaDescription:
      "WLG Homes provides roofing, framing, electrical, and renovation services in Delisle, SK. Licensed trades from Saskatoon. Free estimates. 306-270-6616.",
    heroSubtitle:
      "Serving Delisle homeowners with roofing, framing, electrical, and full builds. Free estimates from Saskatoon's trusted trades team.",
    intro:
      "WLG Homes serves Delisle, SK for roofing, framing, electrical work, and home renovations. Located southwest of Saskatoon, Delisle is a community we travel to regularly for homeowners who want quality trades work without waiting on an unfamiliar crew.",
    context:
      "Delisle is a tight-knit community with a mix of older established homes and newer builds. Homeowners here often need the same work as any Saskatoon neighbourhood - roofing that handles Saskatchewan winters, electrical upgrades for modern demands, and garage builds or basement framing to add usable space.",
    roofingNote:
      "Many homes in Delisle have roofs that are 15 to 25 years old and due for a serious look before another Saskatchewan winter. WLG Homes will make the trip out for a free roofing assessment and give you an honest read on whether repairs or a full replacement is the right call.",
    electricalNote:
      "From panel upgrades and new circuits to EV charger installations and shop wiring, WLG Homes handles residential electrical work in Delisle with proper permits through Saskatchewan's electrical authority. Both of our electricians are Saskatchewan-licensed.",
    framingNote:
      "Garage builds and basement framing are two of the most common projects we take on outside the city. We coordinate the permit process with the Rural Municipality and frame to code standards required for inspection sign-off in Delisle.",
  },
  "prince-albert": {
    name: "Prince Albert",
    city: "Prince Albert",
    slug: "prince-albert",
    metaTitle: "Roofing, Framing & Electrical in Prince Albert, SK",
    metaDescription:
      "WLG Homes provides roofing, framing, electrical, and renovation services in Prince Albert, SK. Licensed trades. Free estimates. 306-270-6616.",
    heroSubtitle:
      "Serving Prince Albert homeowners with roofing, framing, electrical, and full builds. Free estimates from an experienced Saskatchewan trades team.",
    intro:
      "WLG Homes serves Prince Albert, SK for roofing, framing, electrical, and renovation work. We make the drive north for the right projects and bring the same standard of work to Prince Albert that we deliver in Saskatoon - no shortcuts, owners on every job.",
    context:
      "Prince Albert has a wide range of housing stock, from older homes in established neighbourhoods to newer builds on the edges of the city. Common needs we see in PA include aging roofs, electrical panels that need upgrading for modern loads, and demand for detached garages and basement development.",
    roofingNote:
      "The climate in Prince Albert is even harsher than Saskatoon for roofing - colder winters, heavier snow, and freeze-thaw cycles that push shingles and flashing to their limits. If your roof is more than 15 years old, a proper assessment before winter is worth it. WLG Homes provides free estimates in Prince Albert.",
    electricalNote:
      "Panel upgrades, new construction wiring, and residential electrical work in Prince Albert - all done by Saskatchewan-licensed electricians and fully permitted. We coordinate with the City of Prince Albert on permits and get work inspected before closing walls.",
    framingNote:
      "Basement framing and garage construction in Prince Albert follow the same National Building Code standards as anywhere in Saskatchewan. We handle the permit coordination and frame to inspection-ready standards so your project doesn't stall at the inspection stage.",
  },
};

const services = [
  { title: "Roofing", desc: "Asphalt shingle replacement, repairs, and new construction roofing.", href: "/services/roofing" },
  { title: "Framing", desc: "Basement framing, garage construction, new builds, and additions.", href: "/services/framing" },
  { title: "Electrical", desc: "Panel upgrades, residential wiring, and new construction electrical.", href: "/services/electrical" },
  { title: "Renovations", desc: "Basement development, structural changes, and multi-trade remodels.", href: "/services/renovations" },
  { title: "Seasonal Lighting", desc: "Christmas and holiday lighting installation and takedown.", href: "/services/seasonal-lighting" },
];

interface Props {
  params: Promise<{ area: string }>;
}

export function generateStaticParams() {
  return Object.keys(areas).map((area) => ({ area }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { area } = await params;
  const data = areas[area];
  if (!data) return {};
  return {
    title: data.metaTitle,
    description: data.metaDescription,
    alternates: { canonical: `https://wlghomes.ca/areas/${area}` },
    openGraph: {
      title: data.metaTitle,
      description: data.metaDescription,
      url: `https://wlghomes.ca/areas/${area}`,
      images: [{ url: "/images/hero.png", width: 1200, height: 630, alt: `WLG Homes serving ${data.name}` }],
    },
    twitter: {
      card: "summary_large_image",
      title: data.metaTitle,
      description: data.metaDescription,
      images: ["/images/hero.png"],
    },
  };
}

export default async function AreaPage({ params }: Props) {
  const { area } = await params;
  const data = areas[area];
  if (!data) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `WLG Homes - Trades Services in ${data.name}`,
    description: data.metaDescription,
    provider: {
      "@type": "LocalBusiness",
      name: "WLG Homes",
      url: "https://wlghomes.ca",
      telephone: "+13062706616",
    },
    areaServed: { "@type": "City", name: data.city },
    serviceType: "Roofing, Framing, Electrical, Renovations, Seasonal Lighting",
  };

  const breadcrumbSchema = breadcrumbList([
    { name: "Home", url: "https://wlghomes.ca" },
    { name: "Service Areas", url: "https://wlghomes.ca/areas" },
    { name: data.name, url: `https://wlghomes.ca/areas/${data.slug}` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="bg-[#1e2a3a] text-white py-20 px-4" aria-labelledby="area-heading">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-wider mb-3">WLG Homes</p>
          <h1 id="area-heading" className="text-4xl sm:text-5xl font-extrabold mb-4">
            Trades Services in {data.name}
          </h1>
          <p className="text-slate-300 text-lg mb-8">{data.heroSubtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-md transition-colors"
            >
              Get a Free Estimate
            </Link>
            <a
              href="tel:13062706616"
              className="inline-block border-2 border-white/60 text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-md transition-colors"
            >
              Call 306-270-6616
            </a>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-slate-600 leading-relaxed mb-4 text-lg">{data.intro}</p>
          <p className="text-slate-600 leading-relaxed">{data.context}</p>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-[#f8fafc]" aria-labelledby="area-services-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 id="area-services-heading" className="text-2xl font-extrabold text-[#1e2a3a] mb-8 text-center">
            Services We Offer in {data.name}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.title} className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm flex flex-col">
                <h3 className="font-bold text-[#1e2a3a] mb-2">{s.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4 flex-1">{s.desc}</p>
                <Link
                  href={s.href}
                  className="text-sm font-semibold text-blue-600 hover:underline"
                >
                  Learn more →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Area-specific notes */}
      <section className="py-16 bg-white" aria-labelledby="area-notes-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-8">
          <h2 id="area-notes-heading" className="text-2xl font-extrabold text-[#1e2a3a]">
            What {data.name} Homeowners Typically Need
          </h2>
          <div>
            <h3 className="font-bold text-[#1e2a3a] mb-2">Roofing</h3>
            <p className="text-slate-600 leading-relaxed text-sm">{data.roofingNote}</p>
          </div>
          <div>
            <h3 className="font-bold text-[#1e2a3a] mb-2">Electrical</h3>
            <p className="text-slate-600 leading-relaxed text-sm">{data.electricalNote}</p>
          </div>
          <div>
            <h3 className="font-bold text-[#1e2a3a] mb-2">Framing & Construction</h3>
            <p className="text-slate-600 leading-relaxed text-sm">{data.framingNote}</p>
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="py-16 bg-[#f8fafc]" aria-labelledby="area-trust-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 id="area-trust-heading" className="text-2xl font-extrabold text-[#1e2a3a] mb-6">
            Why {data.name} Homeowners Choose WLG Homes
          </h2>
          <ul className="space-y-4 text-slate-600 text-sm leading-relaxed">
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold mt-0.5">✓</span>
              <span><strong className="text-[#1e2a3a]">Owners on every job.</strong> You&rsquo;re hiring three experienced tradespeople - a lead framer and two licensed electricians - not a crew of subcontractors.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold mt-0.5">✓</span>
              <span><strong className="text-[#1e2a3a]">Licensed and insured.</strong> Full liability insurance and Saskatchewan-licensed electricians on staff. All work is permitted where required and done to code.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold mt-0.5">✓</span>
              <span><strong className="text-[#1e2a3a]">Free estimates.</strong> We visit your site in {data.name}, assess the scope in person, and give you a clear written quote. No pressure, no runaround.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold mt-0.5">✓</span>
              <span><strong className="text-[#1e2a3a]">45+ years of combined experience.</strong> Between the three owners, we&rsquo;ve worked on hundreds of residential projects across the Saskatoon area.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600 text-white text-center" aria-labelledby="area-cta-heading">
        <div className="max-w-2xl mx-auto px-4">
          <h2 id="area-cta-heading" className="text-3xl font-extrabold mb-4">
            Get a Free Estimate in {data.name}
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Roofing, framing, electrical, or seasonal lighting - we&rsquo;ll come to your property in {data.name}, assess the scope, and give you a straight answer on cost.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-block bg-white text-blue-700 hover:bg-blue-50 font-bold px-7 py-3.5 rounded-md transition-colors">
              Contact Us
            </Link>
            <Link href="/areas" className="inline-block border-2 border-white/60 text-white hover:bg-white/10 font-semibold px-7 py-3.5 rounded-md transition-colors">
              All Service Areas
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
