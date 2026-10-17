import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { breadcrumbList } from "@/lib/schema";

const breadcrumbSchema = breadcrumbList([
  { name: "Home", url: "https://wlghomes.ca" },
  { name: "Contact", url: "https://wlghomes.ca/contact" },
]);

export const metadata: Metadata = {
  title: "Contact Us - Free Estimate Saskatoon",
  description:
    "Get in touch with WLG Homes in Saskatoon. Request a free estimate for roofing, framing, electrical, or renovation work. We respond within 1 business day.",
  alternates: { canonical: "https://wlghomes.ca/contact" },
  openGraph: {
    title: "Contact WLG Homes - Free Estimate Saskatoon",
    description:
      "Get in touch with WLG Homes in Saskatoon. Request a free estimate for roofing, framing, electrical, or renovation work. We respond within 1 business day.",
    url: "https://wlghomes.ca/contact",
    images: [{ url: "/images/hero.png", width: 1200, height: 630, alt: "Contact WLG Homes - Saskatoon trades contractors" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact WLG Homes - Free Estimate Saskatoon",
    description:
      "Get in touch with WLG Homes in Saskatoon. Request a free estimate for roofing, framing, electrical, or renovation work. We respond within 1 business day.",
    images: ["/images/hero.png"],
  },
};

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {/* Hero */}
      <section className="bg-[#1e2a3a] text-white py-16 sm:py-20 px-4" aria-labelledby="contact-hero-heading">
        <div className="max-w-3xl mx-auto text-center">
          <h1 id="contact-hero-heading" className="font-heading text-4xl sm:text-5xl font-semibold mb-4">
            Request a free estimate
          </h1>
          <p className="text-slate-300 text-lg">
            Tell us about the project, lot, and timing. We will get back to you within
            one business day with a clear next step, not a pressure pitch.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-16 bg-[#f8fafc]" aria-labelledby="contact-form-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 grid lg:grid-cols-[1fr_360px] gap-12">
          <div className="bg-white rounded-xl border border-slate-200 p-5 sm:p-8 shadow-sm">
            <h2 id="contact-form-heading" className="font-heading text-2xl font-semibold text-[#1e2a3a] mb-2">
              Quote request
            </h2>
            <p className="text-slate-500 text-sm mb-6">
              Required fields take about a minute. Prefer a checklist first? Try the{" "}
              <a href="/planning-check" className="text-blue-700 font-semibold hover:underline">
                project planning check
              </a>
              .
            </p>
            <ContactForm />
          </div>

          <aside aria-label="Contact information" className="space-y-6">
            <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
              <h2 className="text-lg font-bold text-[#1e2a3a] mb-4">Our Details</h2>
              <address className="not-italic text-sm text-slate-600 space-y-3">
                <p>
                  <span className="font-semibold text-[#1e2a3a] block">Location</span>
                  Saskatoon, SK, Canada
                  {/* TODO: add public street address and postal code when the owner confirms it */}
                </p>
                <p>
                  <span className="font-semibold text-[#1e2a3a] block">Phone</span>
                  <a
                    href="tel:13062706616"
                    className="text-blue-600 hover:underline"
                  >
                    1-306-270-6616
                  </a>
                </p>
                <p>
                  <span className="font-semibold text-[#1e2a3a] block">Email</span>
                  <a
                    href="mailto:info@wlghomes.ca"
                    className="text-blue-600 hover:underline"
                  >
                    info@wlghomes.ca
                  </a>
                </p>
                <p>
                  <span className="font-semibold text-[#1e2a3a] block">Hours</span>
                  Mon–Fri: 7am – 6pm
                  <br />
                  Sat: 8am – 4pm
                  <br />
                  Sun: Closed
                </p>
              </address>
            </div>

            <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
              <p className="text-blue-800 font-semibold text-sm mb-1">Referral Program</p>
              <p className="text-blue-700 text-sm">
                Refer a job to WLG Homes and earn{" "}
                <strong>up to $150 cash</strong> upon payment when their job is complete.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
