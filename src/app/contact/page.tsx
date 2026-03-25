import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact WLG Homes - Free Estimate Saskatoon",
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
      {/* Hero */}
      <section className="bg-[#1e2a3a] text-white py-20 px-4" aria-labelledby="contact-hero-heading">
        <div className="max-w-3xl mx-auto text-center">
          <h1 id="contact-hero-heading" className="text-4xl sm:text-5xl font-extrabold mb-4">
            Get in Touch
          </h1>
          <p className="text-slate-300 text-lg">
            Request a free estimate or ask us anything. We&rsquo;ll get back to you within
            one business day.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-16 bg-[#f8fafc]" aria-labelledby="contact-form-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 grid lg:grid-cols-[1fr_360px] gap-12">
          <div className="bg-white rounded-xl border border-slate-200 p-8 shadow-sm">
            <h2 id="contact-form-heading" className="text-2xl font-extrabold text-[#1e2a3a] mb-6">
              Send Us a Message
            </h2>
            <ContactForm />
          </div>

          <aside aria-label="Contact information" className="space-y-6">
            <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
              <h2 className="text-lg font-bold text-[#1e2a3a] mb-4">Our Details</h2>
              <address className="not-italic text-sm text-slate-600 space-y-3">
                <p>
                  <span className="font-semibold text-[#1e2a3a] block">Location</span>
                  Saskatoon, SK, Canada
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
                    href="mailto:wlghomes2025@gmail.com"
                    className="text-blue-600 hover:underline"
                  >
                    wlghomes2025@gmail.com
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
                <strong>$150 off</strong> your next project when their job is complete.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
