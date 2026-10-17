"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/blog", label: "Blog" },
  { href: "/planning-check", label: "Planning Check" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#0f1e35]/90 backdrop-blur-md border-b border-blue-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            aria-label="WLG Homes - go to homepage"
            className="flex items-center"
          >
            <Image
              src="/images/logo.png"
              alt="WLG Homes logo"
              width={120}
              height={60}
              className="h-12 w-auto"
              priority
            />
          </Link>

          <nav aria-label="Main navigation" className="hidden lg:flex items-center gap-5">
            {navLinks.map(({ href, label }) => {
              const isActive =
                href === "/" ? pathname === "/" : pathname.startsWith(href);
              return (
                <Link
                  key={href}
                  href={href}
                  aria-current={isActive ? "page" : undefined}
                  className={`text-sm font-medium transition-colors pb-0.5 ${
                    isActive
                      ? "text-white border-b-2 border-[#c9a84c]"
                      : "text-slate-300 hover:text-white border-b-2 border-transparent"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
            <a
              href="tel:13062706616"
              className="text-slate-300 hover:text-white text-sm font-medium transition-colors min-h-11 inline-flex items-center"
              aria-label="Call WLG Homes at 306-270-6616"
            >
              306-270-6616
            </a>
            <Link
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2.5 rounded-md transition-colors min-h-11 inline-flex items-center"
            >
              Get a Quote
            </Link>
          </nav>

          <button
            className="lg:hidden text-white p-2.5 rounded-md min-h-11 min-w-11 focus-visible:ring-2 focus-visible:ring-blue-400"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          id="mobile-menu"
          aria-label="Mobile navigation"
          className="lg:hidden bg-[#1e2a3a] border-t border-white/10 px-4 pb-4"
        >
          <ul role="list" className="flex flex-col gap-1 pt-2">
            {navLinks.map(({ href, label }) => {
              const isActive =
                href === "/" ? pathname === "/" : pathname.startsWith(href);
              return (
                <li key={href}>
                  <Link
                    href={href}
                    aria-current={isActive ? "page" : undefined}
                    onClick={() => setMenuOpen(false)}
                    className={`block px-3 py-3 rounded-md text-base font-medium min-h-11 ${
                      isActive
                        ? "bg-blue-600 text-white"
                        : "text-slate-300 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
            <li>
              <a
                href="tel:13062706616"
                className="block px-3 py-3 rounded-md text-base font-medium text-slate-300 hover:bg-white/10 hover:text-white min-h-11"
                aria-label="Call WLG Homes at 306-270-6616"
              >
                Call: 306-270-6616
              </a>
            </li>
            <li>
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="block mt-2 bg-blue-600 hover:bg-blue-700 text-white text-base font-semibold px-3 py-3 rounded-md text-center min-h-12"
              >
                Get a Quote
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
