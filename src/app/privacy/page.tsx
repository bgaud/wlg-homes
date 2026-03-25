import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for WLG Homes — how we collect, use, and protect your information.",
  alternates: { canonical: "https://wlghomes.ca/privacy" },
  robots: { index: false },
};

export default function PrivacyPage() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h1 className="text-4xl font-extrabold text-[#1e2a3a] mb-4">Privacy Policy</h1>
        <p className="text-slate-500 text-sm mb-10">Last updated: January 1, 2026</p>

        <div className="prose prose-slate max-w-none space-y-6 text-slate-600">
          <section aria-labelledby="privacy-intro">
            <h2 id="privacy-intro" className="text-xl font-bold text-[#1e2a3a] mb-2">Overview</h2>
            <p>
              WLG Homes (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) operates the website wlghomes.ca.
              This page explains what information we collect when you use our website and how we use it.
              We are committed to protecting your privacy and handling your information responsibly.
            </p>
          </section>

          <section aria-labelledby="privacy-collect">
            <h2 id="privacy-collect" className="text-xl font-bold text-[#1e2a3a] mb-2">Information We Collect</h2>
            <p>We collect information you provide directly to us, including:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Your name, email address, and phone number when you submit our contact form</li>
              <li>The details of your project or service inquiry</li>
            </ul>
            <p className="mt-3">
              We also collect standard analytics data through Vercel Analytics, which may include
              page views, referring URLs, and general geographic region. This data is aggregated
              and does not identify you personally.
            </p>
          </section>

          <section aria-labelledby="privacy-use">
            <h2 id="privacy-use" className="text-xl font-bold text-[#1e2a3a] mb-2">How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Respond to your inquiry and provide a project estimate</li>
              <li>Communicate with you about your project</li>
              <li>Improve our website and services</li>
            </ul>
            <p className="mt-3">
              We do not sell, rent, or share your personal information with third parties for
              marketing purposes.
            </p>
          </section>

          <section aria-labelledby="privacy-storage">
            <h2 id="privacy-storage" className="text-xl font-bold text-[#1e2a3a] mb-2">Data Storage & Security</h2>
            <p>
              Contact form submissions are processed and stored securely. We take reasonable
              measures to protect your information from unauthorized access. However, no method
              of transmission over the internet is 100% secure.
            </p>
          </section>

          <section aria-labelledby="privacy-cookies">
            <h2 id="privacy-cookies" className="text-xl font-bold text-[#1e2a3a] mb-2">Cookies</h2>
            <p>
              Our website may use minimal cookies or local storage to support analytics and
              site performance. We do not use cookies for advertising or tracking across
              third-party sites.
            </p>
          </section>

          <section aria-labelledby="privacy-rights">
            <h2 id="privacy-rights" className="text-xl font-bold text-[#1e2a3a] mb-2">Your Rights</h2>
            <p>
              You may request access to, correction of, or deletion of any personal information
              we hold about you by contacting us at{" "}
              <a href="mailto:wlghomes2025@gmail.com" className="text-blue-600 hover:underline">
                wlghomes2025@gmail.com
              </a>
              .
            </p>
          </section>

          <section aria-labelledby="privacy-contact">
            <h2 id="privacy-contact" className="text-xl font-bold text-[#1e2a3a] mb-2">Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <address className="not-italic mt-2">
              <strong>WLG Homes</strong><br />
              Saskatoon, SK, Canada<br />
              <a href="mailto:wlghomes2025@gmail.com" className="text-blue-600 hover:underline">
                wlghomes2025@gmail.com
              </a><br />
              <a href="tel:13062706616" className="text-blue-600 hover:underline">
                1-306-270-6616
              </a>
            </address>
          </section>
        </div>
      </div>
    </section>
  );
}
