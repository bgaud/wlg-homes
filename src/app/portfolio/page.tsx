import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Portfolio - Roofing, Framing & Electrical Projects Saskatoon",
  description:
    "Browse WLG Homes' portfolio of completed projects in Saskatoon — framing, roofing, electrical, basement renovations, garage builds, and Christmas lighting.",
  alternates: { canonical: "https://wlghomes.ca/portfolio" },
  openGraph: {
    title: "Portfolio - Roofing, Framing & Electrical Projects Saskatoon",
    description:
      "Browse WLG Homes' portfolio of completed projects in Saskatoon — framing, roofing, electrical, basement renovations, garage builds, and Christmas lighting.",
    url: "https://wlghomes.ca/portfolio",
    images: [{ url: "/images/hero.png", width: 1200, height: 630, alt: "WLG Homes completed projects in Saskatoon" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio - Roofing, Framing & Electrical Projects Saskatoon",
    description:
      "Browse WLG Homes' portfolio of completed projects in Saskatoon — framing, roofing, electrical, basement renovations, garage builds, and Christmas lighting.",
    images: ["/images/hero.png"],
  },
};

const projects = [
  {
    title: "Custom Screened-In Porch Build",
    category: "Framing",
    description:
      "Custom screened-in outdoor structure with decorative wood framing, screen panels, and metal roofing. Built to last and designed to impress.",
    img: "/images/screened-porch.jpg",
    alt: "Custom screened-in porch build by WLG Homes",
  },
  {
    title: "Asphalt Shingle Roof Replacement",
    category: "Roofing",
    description:
      "Full tear-off and asphalt shingle replacement on a 1,200 sqft bungalow. Completed in 2 days.",
    img: "/images/roofing4.jpg",
    alt: "Completed asphalt shingle roof replacement on a bungalow in Saskatoon",
  },
  {
    title: "Panel Upgrade",
    category: "Electrical",
    description:
      "Electrical panel upgrade from 100A to 200A for an older Saskatoon home, including new breakers and grounding improvements.",
    img: "/images/electrical.jpg",
    alt: "Electrical panel upgrade installation",
  },
  {
    title: "Asphalt Shingle Roof Replacement — Bi-Level",
    category: "Roofing",
    description:
      "Full tear-off and asphalt shingle replacement on a 1,500 sqft bi-level in Saskatoon. Clean installation with new underlayment and drip edge throughout.",
    img: "/images/roofing3.jpg",
    alt: "WLG Homes asphalt shingle roof replacement on a bi-level in Saskatoon",
  },
  {
    title: "Basement Framing in New 7-Plex",
    category: "Framing",
    description:
      "Complete basement framing for a 7-plex in Saskatoon, completed for Westridge Construction in the Aspen Ridge development.",
    img: "/images/framing.jpg",
    alt: "Basement framing renovation project",
  },
  {
    title: "Christmas Lighting Installation",
    category: "Seasonal Lighting",
    description:
      "Professional roofline and tree lighting installation for a Saskatoon home. Installed, maintained, and removed at season end.",
    img: "/images/christmas-lights.jpg",
    alt: "WLG Homes professional Christmas lighting installation on a Saskatoon home",
  },
];

const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

export default function PortfolioPage() {
  return (
    <>
      <section className="bg-[#1e2a3a] text-white py-20 px-4" aria-labelledby="portfolio-hero-heading">
        <div className="max-w-3xl mx-auto text-center">
          <h1 id="portfolio-hero-heading" className="text-4xl sm:text-5xl font-extrabold mb-4">
            Our Work
          </h1>
          <p className="text-slate-300 text-lg">
            A selection of completed projects across Saskatoon and surrounding areas.
          </p>
        </div>
      </section>

      <section className="py-16 bg-[#f8fafc]" aria-labelledby="projects-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 mb-10" role="list" aria-label="Project categories">
            {categories.map((cat) => (
              <span
                key={cat}
                role="listitem"
                className="bg-white border border-slate-200 text-slate-600 text-xs font-semibold px-3 py-1.5 rounded-full"
              >
                {cat}
              </span>
            ))}
          </div>

          <h2 id="projects-heading" className="sr-only">All Projects</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <article
                key={project.title}
                className="bg-white rounded-xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="aspect-[16/10] relative">
                  <Image
                    src={project.img}
                    alt={project.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading="lazy"
                  />
                  <span className="absolute top-3 left-3 bg-[#1e2a3a]/80 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-[#1e2a3a] text-base mb-2">{project.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{project.description}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/contact"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-7 py-3.5 rounded-md transition-colors"
            >
              Start Your Project
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
