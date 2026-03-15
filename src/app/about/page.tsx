import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet the WLG Homes team — Dawson Wiederhold, Riley Lajuenesse, and Braedon Gaudet. 45+ years of combined trades experience serving Saskatoon, SK.",
};

const team = [
  {
    name: "Dawson Wiederhold",
    role: "Co-Owner & Lead Framer",
    bio: "Dawson has spent his career mastering residential and commercial framing in Saskatoon. His eye for structure and commitment to code compliance makes every build rock-solid.",
    img: "/images/dawson.png",
    alt: "Dawson Wiederhold, co-owner of WLG Homes",
  },
  {
    name: "Riley Lajuenesse",
    role: "Co-Owner & Licensed Electrician",
    bio: "Riley is a licensed electrician with extensive experience in residential wiring, panel upgrades, and new construction electrical. He ensures every job is done safely and up to code.",
    img: "/images/riley.png",
    alt: "Riley Lajuenesse, co-owner of WLG Homes",
  },
  {
    name: "Braedon Gaudet",
    role: "Co-Owner & Licensed Electrician",
    bio: "Braedon is a licensed electrician with deep experience in residential upgrades, commercial wiring, and home improvement projects. He makes sure the job is done right the first time.",
    img: "/images/braedon.png",
    alt: "Braedon Gaudet, co-owner of WLG Homes",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#1e2a3a] text-white py-20 px-4" aria-labelledby="about-hero-heading">
        <div className="max-w-3xl mx-auto text-center">
          <h1 id="about-hero-heading" className="text-4xl sm:text-5xl font-extrabold mb-4">
            About WLG Homes
          </h1>
          <p className="text-slate-300 text-lg">
            Three tradespeople. One mission. Building Saskatoon better.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 bg-white" aria-labelledby="story-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 id="story-heading" className="text-3xl font-extrabold text-[#1e2a3a] mb-6">
            Our Story
          </h2>
          <div className="flex justify-center mb-8">
            <Image
              src="/images/logo.png"
              alt="WLG Homes logo"
              width={180}
              height={80}
              className="object-contain"
            />
          </div>
          <div className="prose prose-slate max-w-none text-slate-600 space-y-4">
            <p>
              WLG Homes was born from a shared belief: Saskatoon homeowners deserve
              trades work they can actually trust. For years before the business ever
              had a name, the guys behind it were spending their weekends helping out
              family and friends — fixing up decks, framing garages, rewiring panels,
              replacing roofs. The kind of work you do because you care, not because
              you&rsquo;re getting paid for it.
            </p>
            <p>
              After years of doing it on the side, the demand was there and the
              decision was easy. They took the skills, the work ethic, and the
              reputation they&rsquo;d already built and turned it into something real.
              WLG Homes officially opened its doors as a business on January 1st, 2026 — and that same
              friends-and-family standard has carried over to every job since.
            </p>
            <p>
              Between them, they bring over 45 years of hands-on experience across
              framing, roofing, electrical, renovations, garage builds, basement
              framing, and seasonal lighting. They&rsquo;ve worked on everything from
              starter homes to large custom builds across the Saskatoon area.
            </p>
            <p>
              What sets WLG Homes apart isn&rsquo;t just the skill — it&rsquo;s the approach.
              They show up on time, communicate clearly, and don&rsquo;t cut corners. When
              you hire WLG Homes, you get the owners on your job site.
            </p>
          </div>
        </div>
      </section>

{/* CTA */}
      <section className="py-16 bg-blue-600 text-white text-center" aria-labelledby="about-cta-heading">
        <div className="max-w-xl mx-auto px-4">
          <h2 id="about-cta-heading" className="text-3xl font-extrabold mb-3">
            Work With Us
          </h2>
          <p className="text-blue-100 mb-6">
            Ready to get started on your next project in Saskatoon? Let&rsquo;s talk.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-700 hover:bg-blue-50 font-bold px-7 py-3.5 rounded-md transition-colors"
          >
            Get a Free Estimate
          </Link>
        </div>
      </section>
    </>
  );
}
