import Image from "next/image";
import Link from "next/link";
import LocalCtas from "@/components/LocalCtas";
import type { SaskatoonServicePage } from "@/lib/saskatoon-services";
import { SITE_URL } from "@/lib/site";
import { breadcrumbList, faqPageSchema, serviceSchema } from "@/lib/schema";

export default function LocalServiceView({ page }: { page: SaskatoonServicePage }) {
  const url = `${SITE_URL}/services/${page.slug}/saskatoon`;
  const schemas = [
    serviceSchema({
      name: page.h1,
      description: page.metaDescription,
      url,
      serviceType: page.serviceType,
      areaServed: ["Saskatoon"],
    }),
    faqPageSchema(page.faqs),
    breadcrumbList([
      { name: "Home", url: SITE_URL },
      { name: "Services", url: `${SITE_URL}/services` },
      { name: page.parentLabel, url: `${SITE_URL}${page.parentPath}` },
      { name: `${page.name} in Saskatoon`, url },
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

      <section className="bg-[#1e2a3a] text-white py-16 sm:py-20 px-4" aria-labelledby="local-service-heading">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-wider mb-3">Saskatoon</p>
          <h1 id="local-service-heading" className="text-3xl sm:text-5xl font-extrabold mb-4">
            {page.h1}
          </h1>
          <p className="text-slate-300 text-base sm:text-lg mb-8">{page.heroSubtitle}</p>
          <LocalCtas className="justify-center" invert estimateLabel="Get a Free Estimate" />
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
            <Link href="/services" className="hover:text-blue-600">
              Services
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link href={page.parentPath} className="hover:text-blue-600">
              {page.parentLabel}
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="text-[#1e2a3a] font-medium">Saskatoon</li>
        </ol>
      </nav>

      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          <div className="rounded-xl overflow-hidden aspect-[4/3] relative">
            <Image
              src={page.image}
              alt={page.imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              loading="lazy"
            />
          </div>
          <div>
            <h2 className="text-2xl font-extrabold text-[#1e2a3a] mb-4">Work in Saskatoon, not a generic template</h2>
            {page.intro.map((para) => (
              <p key={para.slice(0, 40)} className="text-slate-600 leading-relaxed mb-4 last:mb-0">
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-[#f8fafc]" aria-labelledby="local-context-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 id="local-context-heading" className="text-2xl font-extrabold text-[#1e2a3a] mb-4">
            {page.contextHeading}
          </h2>
          {page.context.map((para) => (
            <p key={para.slice(0, 40)} className="text-slate-600 leading-relaxed mb-4 last:mb-0">
              {para}
            </p>
          ))}
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-white" aria-labelledby="local-offerings-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 id="local-offerings-heading" className="text-2xl font-extrabold text-[#1e2a3a] mb-8 text-center">
            {page.offeringsHeading}
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {page.offerings.map((item) => (
              <div key={item.title} className="bg-[#f8fafc] rounded-xl border border-slate-200 p-6">
                <h3 className="font-bold text-[#1e2a3a] mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-[#f8fafc]" aria-labelledby="local-permit-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 id="local-permit-heading" className="text-2xl font-extrabold text-[#1e2a3a] mb-4">
            {page.permitHeading}
          </h2>
          {page.permit.map((para) => (
            <p key={para.slice(0, 40)} className="text-slate-600 leading-relaxed mb-4">
              {para}
            </p>
          ))}
          <ul className="space-y-2">
            {page.permitLinks.map((link) => (
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

      <section className="py-12 sm:py-16 bg-white" aria-labelledby="local-faq-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 id="local-faq-heading" className="text-2xl font-extrabold text-[#1e2a3a] mb-8 text-center">
            Questions Saskatoon homeowners ask
          </h2>
          <div className="space-y-4">
            {page.faqs.map((faq) => (
              <div key={faq.q} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-[#1e2a3a] mb-2">{faq.q}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-[#f8fafc]" aria-labelledby="local-related-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 id="local-related-heading" className="text-2xl font-extrabold text-[#1e2a3a] mb-6">
            Related pages
          </h2>
          <ul className="grid sm:grid-cols-2 gap-3">
            {page.related.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-blue-600 text-sm font-semibold hover:underline">
                  {item.label} →
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 bg-blue-600 text-white text-center" aria-labelledby="local-cta-heading">
        <div className="max-w-2xl mx-auto px-4">
          <h2 id="local-cta-heading" className="text-3xl font-extrabold mb-4">
            Ready to talk through the job?
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Request a free estimate or run the planning check first. Neither one is a price quote or legal advice.
          </p>
          <LocalCtas className="justify-center" invert />
        </div>
      </section>
    </>
  );
}
