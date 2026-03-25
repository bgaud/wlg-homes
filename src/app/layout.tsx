import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  metadataBase: new URL("https://wlghomes.ca"),
  title: {
    default: "WLG Homes | Saskatoon Trades & Construction",
    template: "%s | WLG Homes",
  },
  description:
    "WLG Homes offers expert roofing, framing, electrical, and renovation services in Saskatoon, SK. 45+ years combined experience.",
  keywords: [
    "roofing Saskatoon",
    "licensed electrician Saskatoon",
    "garage builders Saskatoon",
    "basement framing contractor",
    "electrical panel upgrades",
    "home wiring Saskatoon",
    "asphalt shingle replacement",
    "construction framing Saskatoon",
    "renovation contractor Saskatoon",
    "Christmas lighting installation",
  ],
  openGraph: {
    siteName: "WLG Homes",
    locale: "en_CA",
    type: "website",
    title: "WLG Homes | Saskatoon Trades & Construction",
    description:
      "WLG Homes offers expert roofing, framing, electrical, and renovation services in Saskatoon, SK. 45+ years combined experience.",
    url: "https://wlghomes.ca",
    images: [
      {
        url: "/images/hero.png",
        width: 1200,
        height: 630,
        alt: "WLG Homes - Saskatoon Trades & Construction",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WLG Homes | Saskatoon Trades & Construction",
    description:
      "WLG Homes offers expert roofing, framing, electrical, and renovation services in Saskatoon, SK. 45+ years combined experience.",
    images: ["/images/hero.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "WLG Homes",
  description:
    "Expert roofing, framing, electrical, and renovation services in Saskatoon, SK.",
  areaServed: "Saskatoon",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Saskatoon",
    addressRegion: "SK",
    addressCountry: "CA",
  },
  telephone: "+13062706616",
  email: "wlghomes2025@gmail.com",
  url: "https://wlghomes.ca",
  image: "https://wlghomes.ca/images/hero.png",
  openingHours: ["Mo-Fr 07:00-18:00", "Sa 08:00-16:00"],
  sameAs: [
    "https://share.google/u03WLiEyJxHnOhaKB",
    "https://www.facebook.com/profile.php?id=61584288716942",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-CA">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased flex flex-col min-h-screen">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
