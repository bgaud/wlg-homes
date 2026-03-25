import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Services - Roofing, Electrical, Framing & More in Saskatoon",
  description:
    "WLG Homes offers professional roofing, licensed electrical, residential framing, renovations, and seasonal lighting in Saskatoon, SK. Free estimates available.",
  alternates: { canonical: "https://wlghomes.ca/services" },
  openGraph: {
    title: "Services - Roofing, Electrical, Framing & More in Saskatoon",
    description:
      "WLG Homes offers professional roofing, licensed electrical, residential framing, renovations, and seasonal lighting in Saskatoon, SK. Free estimates available.",
    url: "https://wlghomes.ca/services",
    images: [{ url: "/images/hero.png", width: 1200, height: 630, alt: "WLG Homes services in Saskatoon" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Services - Roofing, Electrical, Framing & More in Saskatoon",
    description:
      "WLG Homes offers professional roofing, licensed electrical, residential framing, renovations, and seasonal lighting in Saskatoon, SK. Free estimates available.",
    images: ["/images/hero.png"],
  },
};

const services = [
  {
    title: "Professional Roofing",
    description: "Asphalt shingle replacement, repairs, and new roof construction built to handle Saskatoon's extreme climate.",
    img: "/images/roofing.jpg",
    alt: "WLG Homes roof replacement in Saskatoon",
    href: "/services/roofing",
  },
  {
    title: "Licensed Electrical Services",
    description: "Panel upgrades, new construction wiring, and residential electrical work by Saskatchewan-licensed electricians.",
    img: "/images/electrical.jpg",
    alt: "WLG Homes electrical panel upgrade by licensed electricians",
    href: "/services/electrical",
  },
  {
    title: "Framing & Construction",
    description: "New build framing, basement framing, garage construction, and structural work done right the first time.",
    img: "/images/framing.jpg",
    alt: "WLG Homes residential framing construction in Saskatoon",
    href: "/services/framing",
  },
  {
    title: "Renovations",
    description: "Full-scope home renovations in Saskatoon with no subcontracting surprises — owners on every job site.",
    img: "/images/roofing2.jpg",
    alt: "WLG Homes home renovation project in Saskatoon",
    href: "/services/renovations",
  },
  {
    title: "Seasonal Lighting",
    description: "Professional Christmas and holiday lighting installation, maintenance, and takedown for Saskatoon homes.",
    img: "/images/christmas-lights.jpg",
    alt: "WLG Homes Christmas lighting installation in Saskatoon",
    href: "/services/seasonal-lighting",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="bg-[#1e2a3a] text-white py-20 px-4" aria-labelledby="services-hero-heading">
        <div className="max-w-3xl mx-auto text-center">
          <h1 id="services-hero-heading" className="text-4xl sm:text-5xl font-extrabold mb-4">
            Our Services in Saskatoon
          </h1>
          <p className="text-slate-300 text-lg">
            Expert trades work across roofing, electrical, framing, renovations, and seasonal lighting.
            All services delivered by the owners — no subcontracting.
          </p>
        </div>
      </section>

      <section className="py-16 bg-[#f8fafc]" aria-labelledby="services-list-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="services-list-heading" className="sr-only">All Services</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <article
                key={service.title}
                className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col"
              >
                <div className="aspect-[16/9] relative">
                  <Image
                    src={service.img}
                    alt={service.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-extrabold text-[#1e2a3a] text-lg mb-2">{service.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4 flex-1">{service.description}</p>
                  <Link
                    href={service.href}
                    className="text-blue-600 text-sm font-semibold hover:underline inline-flex items-center gap-1"
                    aria-label={`Learn more about ${service.title}`}
                  >
                    Learn More <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#1e2a3a] text-white text-center" aria-labelledby="services-cta-heading">
        <div className="max-w-2xl mx-auto px-4">
          <h2 id="services-cta-heading" className="text-3xl font-extrabold mb-4">
            Not Sure What You Need?
          </h2>
          <p className="text-slate-300 text-lg mb-8">
            Get in touch and we&rsquo;ll walk you through the right approach for your project.
            Free estimates, no obligation.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-md text-lg transition-colors"
          >
            Get a Free Estimate
          </Link>
        </div>
      </section>
    </>
  );
}
