import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbList } from "@/lib/schema";

const breadcrumbSchema = breadcrumbList([
  { name: "Home", url: "https://wlghomes.ca" },
  { name: "Referral Program", url: "https://wlghomes.ca/referral" },
]);

export const metadata: Metadata = {
  title: "Referral Program - Earn $150 Cash in Saskatoon",
  description:
    "Refer a friend or neighbour to WLG Homes and earn up to $150 cash when their job is complete. No limits - every referral counts. Saskatoon's trades team.",
  alternates: { canonical: "https://wlghomes.ca/referral" },
  openGraph: {
    title: "Referral Program - Earn $150 Cash | WLG Homes Saskatoon",
    description:
      "Refer a friend or neighbour to WLG Homes and earn up to $150 cash when their job is complete. No limits - every referral counts.",
    url: "https://wlghomes.ca/referral",
    images: [{ url: "/images/hero.png", width: 1200, height: 630, alt: "WLG Homes Referral Program" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Referral Program - Earn $150 Cash | WLG Homes Saskatoon",
    description:
      "Refer a friend or neighbour to WLG Homes and earn up to $150 cash when their job is complete. No limits - every referral counts.",
    images: ["/images/hero.png"],
  },
};

const steps = [
  {
    step: "1",
    title: "Refer Someone You Know",
    description:
      "Tell a friend, neighbour, or coworker about WLG Homes. Share our number or send them to wlghomes.ca.",
  },
  {
    step: "2",
    title: "They Book a Job",
    description:
      "When they contact us, make sure they mention your name so we can track the referral.",
  },
  {
    step: "3",
    title: "You Get Paid",
    description:
      "Once their job is complete and payment is received, you get up to $150 cash. Simple as that.",
  },
];

const services = [
  "Roofing replacement or repair",
  "Electrical panel upgrades or new wiring",
  "Basement or garage framing",
  "Full home renovations",
  "Seasonal lighting installation",
];

export default function ReferralPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {/* Hero */}
      <section className="bg-[#1e2a3a] text-white py-20 px-4" aria-labelledby="referral-hero-heading">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Referral Program
          </p>
          <h1 id="referral-hero-heading" className="text-4xl sm:text-5xl font-extrabold mb-4">
            Refer a Friend. Earn{" "}
            <span className="text-[#c9a84c]">Up to $150 Cash.</span>
          </h1>
          <p className="text-slate-300 text-lg max-w-xl mx-auto">
            Know someone in Saskatoon who needs a roofer, electrician, or framer?
            Send them our way and we'll pay you when the job is done.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 bg-white" aria-labelledby="how-it-works-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 id="how-it-works-heading" className="text-3xl font-extrabold text-[#1e2a3a] text-center mb-12">
            How It Works
          </h2>
          <div className="grid sm:grid-cols-3 gap-8">
            {steps.map((s) => (
              <div key={s.step} className="text-center">
                <div className="w-12 h-12 rounded-full bg-blue-600 text-white text-xl font-extrabold flex items-center justify-center mx-auto mb-4">
                  {s.step}
                </div>
                <h3 className="font-bold text-[#1e2a3a] text-lg mb-2">{s.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligible services */}
      <section className="py-16 bg-[#f8fafc]" aria-labelledby="eligible-services-heading">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <h2 id="eligible-services-heading" className="text-2xl font-extrabold text-[#1e2a3a] mb-6 text-center">
            Eligible Services
          </h2>
          <p className="text-slate-500 text-sm text-center mb-8">
            Referrals count for any completed job, including:
          </p>
          <ul className="space-y-3">
            {services.map((service) => (
              <li key={service} className="flex items-center gap-3 bg-white border border-slate-200 rounded-lg px-5 py-4 shadow-sm">
                <span className="text-blue-600 font-bold text-lg" aria-hidden="true">&#10003;</span>
                <span className="text-slate-700 text-sm font-medium">{service}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Fine print */}
      <section className="py-10 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <h2 className="text-lg font-bold text-[#1e2a3a] mb-3">Program Details</h2>
          <ul className="text-slate-500 text-sm space-y-2 list-disc list-inside">
            <li>Referral must be a new customer who has not previously worked with WLG Homes.</li>
            <li>The referred job must be completed and payment received before the referral reward is paid.</li>
            <li>Cash reward is up to $150 depending on job size and scope.</li>
            <li>No limit on how many referrals you can make - every completed job earns you cash.</li>
            <li>Make sure your referral mentions your name when they contact us.</li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600 text-white text-center" aria-labelledby="referral-cta-heading">
        <div className="max-w-xl mx-auto px-4">
          <h2 id="referral-cta-heading" className="text-3xl font-extrabold mb-3">
            Ready to Refer Someone?
          </h2>
          <p className="text-blue-100 mb-2">
            Have them call or text us at{" "}
            <a href="tel:13062706616" className="text-white font-bold underline hover:no-underline">
              1-306-270-6616
            </a>{" "}
            and mention your name, or send them to our contact page.
          </p>
          <p className="text-blue-100 mb-8">
            Questions? Reach us at{" "}
            <a href="mailto:info@wlghomes.ca" className="text-white underline hover:no-underline">
              info@wlghomes.ca
            </a>
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-700 hover:bg-blue-50 font-bold px-8 py-4 rounded-md transition-colors"
          >
            Send a Referral
          </Link>
        </div>
      </section>
    </>
  );
}
