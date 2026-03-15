import Link from "next/link";
import Image from "next/image";

const services = [
  "Renovations",
  "Construction Framing",
  "Roofing",
  "Electrical",
  "Garage Framing",
  "Basement Framing",
  "Seasonal Lighting",
];

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#1e2a3a] text-slate-300" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Col 1: Brand */}
          <div className="flex flex-col items-start">
            <Link href="/" aria-label="WLG Homes — go to homepage">
              <Image
                src="/images/logo.png"
                alt="WLG Homes logo"
                width={260}
                height={130}
                className="w-full max-w-[260px] h-auto mb-4"
              />
            </Link>
            <p className="text-sm leading-relaxed">
              Saskatoon&rsquo;s trusted trades team. Framing, roofing, electrical,
              renovations, and more — built on 45+ years of combined experience.
            </p>
          </div>

          {/* Col 2: Services */}
          <div>
            <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">
              Services
            </h3>
            <ul role="list" className="space-y-1.5">
              {services.map((s) => (
                <li key={s}>
                  <Link
                    href="/contact"
                    className="text-sm hover:text-white transition-colors"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">
              Quick Links
            </h3>
            <ul role="list" className="space-y-1.5">
              {quickLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">
              Contact
            </h3>
            <address className="not-italic text-sm space-y-2">
              <p>Saskatoon, SK, Canada</p>
              <p>
                <a
                  href="mailto:wlghomes2025@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  wlghomes2025@gmail.com
                </a>
              </p>
              <p>
                Call or Text:{" "}
                <a
                  href="tel:13062706616"
                  className="hover:text-white transition-colors"
                >
                  1-306-270-6616
                </a>
              </p>
              <p className="pt-1">
                <Link
                  href="/contact"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-4 py-2 rounded-md transition-colors"
                >
                  Get a Free Estimate
                </Link>
              </p>
            </address>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-xs text-slate-500 flex flex-col sm:flex-row justify-between gap-2">
          <p>&copy; {new Date().getFullYear()} WLG Homes. All rights reserved.</p>
          <p>Saskatoon, SK, Canada</p>
        </div>
      </div>
    </footer>
  );
}
