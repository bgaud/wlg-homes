import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import LocalCtas from "@/components/LocalCtas";
import { allAreaSlugs, getArea } from "@/lib/areas";
import { breadcrumbList, faqPageSchema, serviceSchema } from "@/lib/schema";
import { SITE_URL } from "@/lib/site";

interface Props {
  params: Promise<{ area: string }>;
}

export function generateStaticParams() {
  return allAreaSlugs().map((area) => ({ area }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { area } = await params;
  const data = getArea(area);
  if (!data) return {};
  const url = `${SITE_URL}/areas/${data.slug}`;
  return {
    title: data.metaTitle,
    description: data.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: data.metaTitle,
      description: data.metaDescription,
      url,
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
  const data = getArea(area);
  if (!data) notFound();

  const pageUrl = `${SITE_URL}/areas/${data.slug}`;
  const schemas = [
    serviceSchema({
      name: `WLG Homes trades services in ${data.name}`,
      description: data.metaDescription,
      url: pageUrl,
      serviceType: "Framing, electrical, roofing, garage builds, renovations, seasonal lighting",
      areaServed: [data.city],
    }),
    faqPageSchema(data.faqs),
    breadcrumbList([
      { name: "Home", url: SITE_URL },
      { name: "Service Areas", url: `${SITE_URL}/areas` },
      { name: data.name, url: pageUrl },
    ]),
  ];

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <section className="bg-[#1e2a3a] text-white py-16 sm:py-20 px-4" aria-labelledby="area-heading">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-wider mb-3">WLG Homes</p>
          <h1 id="area-heading" className="text-3xl sm:text-5xl font-extrabold mb-4">
            Trades Services in {data.name}
          </h1>
          <p className="text-slate-300 text-base sm:text-lg mb-8">{data.heroSubtitle}</p>
          <LocalCtas className="justify-center" invert />
          <p className="mt-6">
            <a
              href="tel:13062706616"
              className="inline-flex items-center justify-center min-h-12 text-white font-semibold hover:underline"
            >
              Call 306-270-6616
            </a>
          </p>
        </div>
      </section>

      <nav aria-label="Breadcrumb" className="bg-white border-b border-slate-100">
        <ol className="max-w-5xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap gap-x-2 gap-y-1 text-sm text-slate-500">
          <li>
            <Link href="/" className="hover:text-blue-600">
              Home
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link href="/areas" className="hover:text-blue-600">
              Service Areas
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="text-[#1e2a3a] font-medium">{data.name}</li>
        </ol>
      </nav>

      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-slate-600 leading-relaxed mb-4 text-lg">{data.intro}</p>
          <p className="text-slate-600 leading-relaxed">{data.context}</p>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-[#f8fafc]" aria-labelledby="area-services-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 id="area-services-heading" className="text-2xl font-extrabold text-[#1e2a3a] mb-8 text-center">
            Services we offer in {data.name}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.services.map((s) => (
              <div key={s.title} className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm flex flex-col">
                <h3 className="font-bold text-[#1e2a3a] mb-2">{s.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4 flex-1">{s.desc}</p>
                <Link href={s.href} className="text-sm font-semibold text-blue-600 hover:underline">
                  Learn more →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-white" aria-labelledby="area-notes-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-8">
          <h2 id="area-notes-heading" className="text-2xl font-extrabold text-[#1e2a3a]">
            What {data.name} homeowners typically need
          </h2>
          {data.notes.map((note) => (
            <div key={note.title}>
              <h3 className="font-bold text-[#1e2a3a] mb-2">{note.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">{note.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-[#f8fafc]" aria-labelledby="area-permit-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 id="area-permit-heading" className="text-2xl font-extrabold text-[#1e2a3a] mb-4">
            {data.permitHeading}
          </h2>
          {data.permit.map((para) => (
            <p key={para.slice(0, 48)} className="text-slate-600 leading-relaxed mb-4 text-sm">
              {para}
            </p>
          ))}
          <ul className="space-y-2">
            {data.permitLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-blue-600 text-sm font-semibold hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label} ↗
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-white" aria-labelledby="area-trust-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 id="area-trust-heading" className="text-2xl font-extrabold text-[#1e2a3a] mb-6">
            Why {data.name} homeowners choose WLG Homes
          </h2>
          <ul className="space-y-4 text-slate-600 text-sm leading-relaxed">
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold mt-0.5">✓</span>
              <span>
                <strong className="text-[#1e2a3a]">Owners on every job.</strong> You are hiring three tradespeople — a
                lead framer and two licensed electricians — not a crew of subcontractors.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold mt-0.5">✓</span>
              <span>
                <strong className="text-[#1e2a3a]">Licensed and insured.</strong> Full liability insurance and
                Saskatchewan-licensed electricians on staff. Work is permitted where required.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold mt-0.5">✓</span>
              <span>
                <strong className="text-[#1e2a3a]">Free estimates.</strong> We visit your site in {data.name}, assess
                the scope in person, and give you a written quote.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold mt-0.5">✓</span>
              <span>
                <strong className="text-[#1e2a3a]">45+ years of combined experience.</strong> Between the three owners,
                we have worked on hundreds of residential projects across the Saskatoon area.
              </span>
            </li>
          </ul>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-[#f8fafc]" aria-labelledby="area-faq-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 id="area-faq-heading" className="text-2xl font-extrabold text-[#1e2a3a] mb-8 text-center">
            {data.name} FAQs
          </h2>
          <div className="space-y-4">
            {data.faqs.map((faq) => (
              <div key={faq.q} className="border border-slate-200 rounded-lg p-5 bg-white">
                <h3 className="font-bold text-[#1e2a3a] mb-2">{faq.q}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-extrabold text-[#1e2a3a] mb-4">Related guides</h2>
          <ul className="space-y-2">
            {data.related.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-blue-600 text-sm font-semibold hover:underline">
                  {item.label} →
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 bg-blue-600 text-white text-center" aria-labelledby="area-cta-heading">
        <div className="max-w-2xl mx-auto px-4">
          <h2 id="area-cta-heading" className="text-3xl font-extrabold mb-4">
            Get a free estimate in {data.name}
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Roofing, framing, electrical, a garage, a basement, or seasonal lighting — we will come to your property in{" "}
            {data.name} and give you a straight answer.
          </p>
          <LocalCtas className="justify-center" invert />
          <p className="mt-6">
            <Link href="/areas" className="text-white/90 text-sm font-semibold hover:underline">
              All service areas →
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
