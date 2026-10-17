import type { Metadata } from "next";
import { Fraunces, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RevealRoot from "@/components/RevealRoot";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";
import { localBusinessSchema, websiteSchema } from "@/lib/schema";
import { SITE_URL } from "@/lib/site";

const heading = Fraunces({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const body = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "WLG Homes | Saskatoon Trades & Construction",
    template: "%s | WLG Homes",
  },
  description:
    "WLG Homes is a Saskatoon-area trades and construction company. Framing, licensed electrical, roofing, full garage builds, renovations, and seasonal lighting. Free estimates.",
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
    "home builder Saskatoon",
  ],
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    siteName: "WLG Homes",
    locale: "en_CA",
    type: "website",
    title: "WLG Homes | Saskatoon Trades & Construction",
    description:
      "Framing, licensed electrical, roofing, full garage builds, renovations, and seasonal lighting in Saskatoon, Warman, Martensville, Delisle, and Prince Albert.",
    url: SITE_URL,
    images: [
      {
        url: "/images/hero.png",
        width: 1200,
        height: 630,
        alt: "WLG Homes residential construction framing in Saskatoon",
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

const jsonLd = [localBusinessSchema(), websiteSchema()];

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-CA" className={`${heading.variable} ${body.variable}`}>
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
          <RevealRoot>{children}</RevealRoot>
        </main>
        <Footer />
        <Analytics />
        <SpeedInsights />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-DW7C7E4NT2"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-DW7C7E4NT2');
          `}
        </Script>
      </body>
    </html>
  );
}
