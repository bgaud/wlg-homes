import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import FAQAccordion from "@/components/FAQAccordion";
import BlogCard from "@/components/BlogCard";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "WLG Homes | Saskatoon Trades & Construction",
  description:
    "WLG Homes is Saskatoon's trusted trades team. Roofing, framing, electrical, full garage builds, renovations, and seasonal lighting. 45+ years of combined experience. Free estimates.",
  alternates: { canonical: "https://wlghomes.ca" },
  openGraph: {
    title: "WLG Homes | Saskatoon Trades & Construction",
    description:
      "Framing, licensed electrical, roofing, full garage builds, renovations, and seasonal lighting in Saskatoon, Warman, Martensville, Delisle, and Prince Albert.",
    url: "https://wlghomes.ca",
    images: [
      {
        url: "/images/hero.png",
        width: 1200,
        height: 630,
        alt: "WLG Homes residential construction framing under a clear blue sky in Saskatoon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WLG Homes | Saskatoon Trades & Construction",
    description:
      "Framing, licensed electrical, roofing, full garage builds, renovations, and seasonal lighting in the Saskatoon area.",
    images: ["/images/hero.png"],
  },
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
        text: "Yes - we provide free, no-obligation estimates for all projects. Reach out through our contact form or give us a call and we'll schedule a time to visit your site.",
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
        text: "We are based in Saskatoon, SK and serve Saskatoon, Warman, Martensville, Delisle, and Prince Albert. Contact us if you are nearby and unsure whether we cover your location.",
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
        text: "Yes. We manage the permit process on your behalf for all work that requires it - including electrical, structural framing, and major renovations - so you don't have to deal with the paperwork.",
      },
    },
    {
      "@type": "Question",
      name: "What is your referral program?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Refer a friend or neighbour to WLG Homes and when that job is completed, you'll receive up to $150 cash upon payment. No limits - every referral counts.",
      },
    },
    {
      "@type": "Question",
      name: "How does a WLG Homes project work from first contact to the job site?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Request a free, no-obligation estimate. WLG Homes visits the site, talks through scope, and handles required permits for electrical, structural framing, and major renovations. The owners work on the job site rather than subcontracting the core trades.",
      },
    },
    {
      "@type": "Question",
      name: "What is included in WLG Homes services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Services include framing and construction, licensed electrical, roofing, full garage and structure builds from pad coordination through siding, roofing, and electrical, renovations, and seasonal lighting. Exact inclusions depend on the job and are confirmed in the estimate.",
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
    title: "Full Builds",
    description:
      "Complete garage and structure builds from the concrete pad up - framing, siding, roofing, and electrical all under one crew.",
    img: "/images/garage-build/06-siding-progress.jpg",
    alt: "WLG Homes crew building a full detached garage in Saskatoon - siding installation in progress",
    href: "/services/full-builds",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
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
        className="relative flex items-center justify-center min-h-[32rem] sm:min-h-[40rem] py-20 sm:py-28"
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
            className="font-heading text-4xl sm:text-6xl lg:text-7xl font-semibold text-white leading-tight mb-6"
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
              className="bg-[#1e2a3a] hover:bg-[#2d3f56] text-white font-semibold px-8 py-4 rounded-xl transition-colors text-base min-h-12 min-w-[210px] inline-flex items-center justify-center"
            >
              Get Your Free Estimate
            </Link>
            <Link
              href="/planning-check"
              className="bg-transparent hover:bg-white/10 border-2 border-white/60 text-white font-semibold px-8 py-4 rounded-xl transition-colors text-base min-h-12 min-w-[210px] inline-flex items-center justify-center"
            >
              Free Planning Check
            </Link>
          </div>
          <p className="mt-5">
            <Link
              href="/portfolio"
              className="text-sm text-slate-200 hover:text-white underline underline-offset-4"
            >
              View our recent work
            </Link>
          </p>
        </div>
      </section>

      {/* About (Two-column) */}
      <section className="reveal py-20 bg-white" aria-labelledby="about-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-blue-600 text-sm font-semibold uppercase tracking-wider mb-3">
                Who We Are
              </p>
              <h2
                id="about-heading"
                className="font-heading text-3xl sm:text-4xl font-semibold text-[#1e2a3a] mb-5"
              >
                Saskatoon&rsquo;s Trusted Trades Team
              </h2>
              <p className="text-slate-600 mb-4 leading-relaxed">
                WLG Homes was founded by 3 guys that did a lot of work for friends and
                family and decided to turn it into a business venture. Three experienced
                tradespeople - a Carpenter and 2 Licensed Electricians - with a combined
                45+ years in the industry. We&rsquo;ve built our reputation in Saskatoon on
                quality workmanship, honest pricing, and showing up when we say we will.
              </p>
              <p className="text-slate-600 mb-6 leading-relaxed">
                We handle everything from construction framing and roofing to
                electrical panel upgrades, basement framing, garage builds, and
                seasonal lighting - all under one roof. No subcontracting surprises,
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
                  src="/images/garage-siding-installation.jpg"
                  alt="WLG Homes crew installing siding on a Saskatoon garage build"
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
      <section className="reveal py-20 bg-[#f8fafc]" aria-labelledby="services-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-blue-600 text-sm font-semibold uppercase tracking-wider mb-2">
              What We Do
            </p>
            <h2
              id="services-heading"
              className="font-heading text-3xl sm:text-4xl font-semibold text-[#1e2a3a]"
            >
              Our Services
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <article
                key={s.title}
                className="card-lift bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm flex flex-col"
              >
                <div className="aspect-[4/3] relative img-zoom">
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
          <p className="text-center mt-10">
            <Link
              href="/services"
              className="text-sm font-semibold text-blue-700 hover:underline"
            >
              See all services, including renovations and seasonal lighting →
            </Link>
          </p>
        </div>
      </section>

      <section className="reveal py-20 bg-white" aria-labelledby="process-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <p className="text-blue-600 text-sm font-semibold uppercase tracking-wider mb-2">
              How a project works
            </p>
            <h2
              id="process-heading"
              className="font-heading text-3xl sm:text-4xl font-semibold text-[#1e2a3a] mb-4"
            >
              Questions homeowners actually ask
            </h2>
            <p className="text-slate-600">
              Straight answers from what we already do in Saskatoon and nearby communities.
              For a tailored checklist, use the free planning check.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <article className="rounded-2xl border border-slate-200 bg-[#f8fafc] p-6 sm:p-8">
              <h3 className="font-heading text-xl font-semibold text-[#1e2a3a] mb-3">
                How does the process work?
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Request a free, no-obligation estimate. We visit the site, talk through
                scope, and handle required permits for electrical, structural framing, and
                major renovations. You work with the owners on the job site, not a chain
                of subcontractors.
              </p>
            </article>
            <article className="rounded-2xl border border-slate-200 bg-[#f8fafc] p-6 sm:p-8">
              <h3 className="font-heading text-xl font-semibold text-[#1e2a3a] mb-3">
                How long does it take?
              </h3>
              <p className="text-slate-600 leading-relaxed">
                It depends on the work. Basement framing can take 2-4 days depending on
                size. A standard double garage shell can be closed in as little as two
                days once the pad is cured. A full home renovation depends entirely on
                scope. You get a timeline with the estimate, not a guess from this page.
              </p>
            </article>
            <article className="rounded-2xl border border-slate-200 bg-[#f8fafc] p-6 sm:p-8">
              <h3 className="font-heading text-xl font-semibold text-[#1e2a3a] mb-3">
                What is included?
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Services cover framing and construction, licensed electrical, roofing,
                full garage and structure builds (pad coordination through siding,
                roofing, and electrical), renovations, and seasonal lighting. Full-build
                inclusions are listed on the full builds page. We do not publish a
                one-size price list because every job is different.
              </p>
            </article>
            <article className="rounded-2xl border border-slate-200 bg-[#f8fafc] p-6 sm:p-8">
              <h3 className="font-heading text-xl font-semibold text-[#1e2a3a] mb-3">
                Where do you work?
              </h3>
              <p className="text-slate-600 leading-relaxed">
                We are based in Saskatoon and serve Saskatoon, Warman, Martensville,
                Delisle, and Prince Albert. If you are nearby and do not see your
                community listed, ask. We will tell you whether we can take the job.
              </p>
            </article>
          </div>
          <div className="text-center mt-10">
            <Link
              href="/planning-check"
              className="inline-flex items-center justify-center min-h-12 bg-[#1e2a3a] hover:bg-[#2d3f56] text-white font-semibold px-7 py-3 rounded-lg transition-colors"
            >
              Take the free planning check
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="reveal py-20 bg-[#f8fafc]" aria-labelledby="faq-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2
              id="faq-heading"
              className="font-heading text-3xl sm:text-4xl font-semibold text-[#1e2a3a]"
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
          <h2 id="referral-heading" className="font-heading text-3xl font-semibold mb-3">
            Our Referral Program
          </h2>
          <p className="text-blue-100 text-lg mb-6 max-w-xl mx-auto">
            Know someone who needs a roofer, framer, or electrician in Saskatoon?
            Refer them to WLG Homes and once their job is complete,{" "}
            <strong className="text-white">you get up to $150 cash.</strong>
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center min-h-12 bg-white text-blue-700 hover:bg-blue-50 font-bold px-7 py-3.5 rounded-md transition-colors"
          >
            Refer a Friend
          </Link>
        </div>
      </section>

      {/* Blog Preview */}
      {posts.length > 0 && (
        <section className="reveal py-20 bg-white" aria-labelledby="blog-preview-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between gap-4 mb-10">
              <h2 id="blog-preview-heading" className="font-heading text-3xl font-semibold text-[#1e2a3a]">
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
          <h2 id="cta-heading" className="font-heading text-3xl sm:text-4xl font-semibold mb-4">
            Get a Quote Today
          </h2>
          <p className="text-slate-300 text-lg mb-8">
            Ready to start your project? Our Saskatoon team is ready to help - no
            obligation, just honest advice and a fair price.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center min-h-12 bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-md text-lg transition-colors"
            >
              Contact Us Now
            </Link>
            <Link
              href="/planning-check"
              className="inline-flex items-center justify-center min-h-12 border-2 border-white/50 hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-md text-lg transition-colors"
            >
              Planning check
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
