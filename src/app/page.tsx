import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import FAQAccordion from "@/components/FAQAccordion";
import BlogCard from "@/components/BlogCard";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "WLG Homes | Saskatoon Trades & Construction",
  description:
    "WLG Homes is Saskatoon's trusted trades team. Roofing, framing, electrical, and seasonal lighting. 45+ years of combined experience. Free estimates.",
  alternates: { canonical: "https://wlghomes.ca" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you offer free estimates?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we provide free, no-obligation estimates for all projects. Reach out through our contact form or give us a call and we'll schedule a time to visit your site.",
      },
    },
    {
      "@type": "Question",
      name: "Are you licensed and insured?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. WLG Homes carries full liability insurance and our electricians are licensed with the Saskatchewan electrical authority. We pull all required permits so your project is fully compliant.",
      },
    },
    {
      "@type": "Question",
      name: "What areas do you serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We are based in Saskatoon, SK and serve the greater Saskatoon area including surrounding communities. Contact us if you're unsure whether we cover your location.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a typical renovation take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on the scope. A basement framing project can take 2-4 days depending on the size, while a full home renovation would completely depend on the scope of work. We'll give you a detailed timeline during your estimate.",
      },
    },
    {
      "@type": "Question",
      name: "Do you handle permits?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We manage the permit process on your behalf for all work that requires it — including electrical, structural framing, and major renovations — so you don't have to deal with the paperwork.",
      },
    },
    {
      "@type": "Question",
      name: "What is your referral program?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Refer a friend or neighbour to WLG Homes and when that job is completed, you'll receive $150 off your next project. No limits — every referral counts.",
      },
    },
  ],
};

const services = [
  {
    title: "Framing & Construction",
    description:
      "Structural integrity starts here. We provide expert residential framing for new builds and additions.",
    img: "/images/framing.jpg",
    alt: "WLG Homes residential framing construction in Saskatoon",
    href: "/services/framing",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
      </svg>
    ),
  },
  {
    title: "Electrical Services",
    description:
      "Safe, efficient, and reliable electrical work for your home renovations and construction projects.",
    img: "/images/electrical.jpg",
    alt: "WLG Homes electrical panel installation by licensed electricians in Saskatoon",
    href: "/services/electrical",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="m13 10 2-5-8 9h6l-2 5 8-9h-6Z" />
      </svg>
    ),
  },
  {
    title: "Professional Roofing",
    description:
      "High-quality roofing solutions designed to withstand the harsh Saskatchewan climate year-round.",
    img: "/images/roofing.jpg",
    alt: "WLG Homes crew removing old shingles during a roof replacement in Saskatoon",
    href: "/services/roofing",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="m3 12 9-9 9 9M5 10v9a1 1 0 0 0 1 1h4v-4h4v4h4a1 1 0 0 0 1-1v-9" />
      </svg>
    ),
  },
  {
    title: "Seasonal Lighting",
    description:
      "Custom Christmas light installation to make your home shine during the holiday season.",
    img: "/images/christmas-lights.jpg",
    alt: "WLG Homes seasonal Christmas lighting installation on a Saskatoon home",
    href: "/services/seasonal-lighting",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2a4 4 0 0 1 4 4c0 1.5-.8 2.8-2 3.5V11h-4V9.5A4 4 0 0 1 12 2ZM9 11h6v1a3 3 0 0 1-6 0v-1Zm3 4v4m0 0H9m3 0h3" />
      </svg>
    ),
  },
];

export default function HomePage() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section
        className="relative flex items-center justify-center py-20 sm:py-28"
        aria-labelledby="hero-heading"
      >
        <Image
          src="/images/hero.png"
          alt="WLG Homes residential construction framing under a clear blue sky in Saskatoon"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#1e2a3a]/65" aria-hidden="true" />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-300 font-semibold mb-5">
            45+ Years of Collective Trades Experience
          </p>

          <h1
            id="hero-heading"
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6"
          >
            Building Excellence in{" "}
            <span className="italic text-[#c9a84c]">Saskatoon</span>
          </h1>

          <p className="text-slate-200 text-lg sm:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Expert framing, electrical, roofing, and seasonal lighting. We
            handle the hard stuff so you can enjoy your home.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-[#1e2a3a] hover:bg-[#2d3f56] text-white font-semibold px-8 py-4 rounded-xl transition-colors text-base min-w-[210px]"
            >
              Get Your Free Estimate
            </Link>
            <Link
              href="/portfolio"
              className="bg-transparent hover:bg-white/10 border-2 border-white/60 text-white font-semibold px-8 py-4 rounded-xl transition-colors text-base min-w-[210px]"
            >
              View Our Recent Work
            </Link>
          </div>
        </div>
      </section>

      {/* About (Two-column) */}
      <section className="py-20 bg-white" aria-labelledby="about-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-blue-600 text-sm font-semibold uppercase tracking-wider mb-3">
                Who We Are
              </p>
              <h2
                id="about-heading"
                className="text-3xl sm:text-4xl font-extrabold text-[#1e2a3a] mb-5"
              >
                Saskatoon&rsquo;s Trusted Trades Team
              </h2>
              <p className="text-slate-600 mb-4 leading-relaxed">
                WLG Homes was founded by 3 guys that did a lot of work for friends and
                family and decided to turn it into a business venture. Three experienced
                tradespeople — a Carpenter and 2 Licensed Electricians — with a combined
                45+ years in the industry. We&rsquo;ve built our reputation in Saskatoon on
                quality workmanship, honest pricing, and showing up when we say we will.
              </p>
              <p className="text-slate-600 mb-6 leading-relaxed">
                We handle everything from construction framing and roofing to
                electrical panel upgrades, basement framing, garage builds, and
                seasonal lighting — all under one roof. No subcontracting surprises,
                no runaround.
              </p>
              <Link
                href="/about"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-md transition-colors"
              >
                Meet the Team
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden aspect-[4/5]">
                <Image
                  src="/images/roofing2.jpg"
                  alt="Completed asphalt shingle roof by WLG Homes in Saskatoon at sunset"
                  width={400}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden aspect-[4/5] mt-8">
                <Image
                  src="/images/framing.jpg"
                  alt="Framing construction in progress"
                  width={400}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-[#f8fafc]" aria-labelledby="services-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-blue-600 text-sm font-semibold uppercase tracking-wider mb-2">
              What We Do
            </p>
            <h2
              id="services-heading"
              className="text-3xl sm:text-4xl font-extrabold text-[#1e2a3a]"
            >
              Our Services
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <article
                key={s.title}
                className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col"
              >
                <div className="aspect-[4/3] relative">
                  <Image
                    src={s.img}
                    alt={s.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    loading="lazy"
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="text-[#1e2a3a] mb-3">{s.icon}</div>
                  <h3 className="font-bold text-[#1e2a3a] text-base mb-2">{s.title}</h3>
                  <p className="text-blue-600 text-sm leading-relaxed mb-4">{s.description}</p>
                  <Link
                    href={s.href}
                    className="mt-auto text-sm font-semibold text-[#1e2a3a] hover:text-blue-600 transition-colors inline-flex items-center gap-1"
                    aria-label={`Learn more about ${s.title}`}
                  >
                    Learn More <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white" aria-labelledby="faq-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2
              id="faq-heading"
              className="text-3xl sm:text-4xl font-extrabold text-[#1e2a3a]"
            >
              Frequently Asked Questions
            </h2>
          </div>
          <FAQAccordion />
        </div>
      </section>

      {/* Referral */}
      <section className="py-16 bg-blue-600 text-white" aria-labelledby="referral-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <div className="text-4xl mb-4" aria-hidden="true">🤝</div>
          <h2 id="referral-heading" className="text-3xl font-extrabold mb-3">
            Our Referral Program
          </h2>
          <p className="text-blue-100 text-lg mb-6 max-w-xl mx-auto">
            Know someone who needs a roofer, framer, or electrician in Saskatoon?
            Refer them to WLG Homes and once their job is complete,{" "}
            <strong className="text-white">you get $150 off your next project.</strong>
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-700 hover:bg-blue-50 font-bold px-7 py-3.5 rounded-md transition-colors"
          >
            Refer a Friend
          </Link>
        </div>
      </section>

      {/* Blog Preview */}
      {posts.length > 0 && (
        <section className="py-20 bg-[#f8fafc]" aria-labelledby="blog-preview-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between mb-10">
              <h2 id="blog-preview-heading" className="text-3xl font-extrabold text-[#1e2a3a]">
                From the Blog
              </h2>
              <Link
                href="/blog"
                className="text-blue-600 text-sm font-semibold hover:underline"
                aria-label="View all blog posts"
              >
                View all →
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <BlogCard key={post.slug} {...post} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section className="py-20 bg-[#1e2a3a] text-white text-center" aria-labelledby="cta-heading">
        <div className="max-w-2xl mx-auto px-4">
          <h2 id="cta-heading" className="text-3xl sm:text-4xl font-extrabold mb-4">
            Get a Quote Today
          </h2>
          <p className="text-slate-300 text-lg mb-8">
            Ready to start your project? Our Saskatoon team is ready to help — no
            obligation, just honest advice and a fair price.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-md text-lg transition-colors"
          >
            Contact Us Now
          </Link>
        </div>
      </section>
    </>
  );
}
