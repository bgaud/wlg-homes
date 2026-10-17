import {
  AREAS_SERVED,
  SERVICES,
  SITE_EMAIL,
  SITE_NAME,
  SITE_PHONE_E164,
  SITE_URL,
  SOCIAL_LINKS,
} from "@/lib/site";

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export function breadcrumbList(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["HomeAndConstructionBusiness", "GeneralContractor", "LocalBusiness"],
    "@id": `${SITE_URL}/#business`,
    name: SITE_NAME,
    legalName: SITE_NAME,
    description:
      "WLG Homes is a Saskatoon-area trades and construction company offering framing, electrical, roofing, full garage and structure builds, renovations, and seasonal lighting. Three owner-operators: a carpenter and two licensed electricians.",
    url: SITE_URL,
    image: `${SITE_URL}/images/hero.png`,
    logo: `${SITE_URL}/images/logo.png`,
    email: SITE_EMAIL,
    telephone: SITE_PHONE_E164,
    foundingDate: "2026-01-01",
    priceRange: "$$",
    // TODO: add street address and postal code when the owner confirms a public business address.
    address: {
      "@type": "PostalAddress",
      addressLocality: "Saskatoon",
      addressRegion: "SK",
      addressCountry: "CA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 52.2379344,
      longitude: -106.6449313,
    },
    areaServed: AREAS_SERVED.map((name) => ({
      "@type": "City",
      name,
    })),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:00",
        closes: "16:00",
      },
    ],
    sameAs: [...SOCIAL_LINKS],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "WLG Homes services",
      itemListElement: SERVICES.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.name,
          description: service.description,
          url: `${SITE_URL}${service.path}`,
          provider: { "@id": `${SITE_URL}/#business` },
          areaServed: AREAS_SERVED.map((name) => ({
            "@type": "City",
            name,
          })),
        },
      })),
    },
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: "en-CA",
    publisher: { "@id": `${SITE_URL}/#business` },
    description:
      "Official website for WLG Homes, a Saskatoon-area home construction and trades company.",
  };
}

export function serviceSchema(opts: {
  name: string;
  description: string;
  url: string;
  serviceType: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    url: opts.url,
    serviceType: opts.serviceType,
    provider: {
      "@id": `${SITE_URL}/#business`,
      "@type": "HomeAndConstructionBusiness",
      name: SITE_NAME,
      url: SITE_URL,
      telephone: SITE_PHONE_E164,
    },
    areaServed: AREAS_SERVED.map((name) => ({
      "@type": "City",
      name,
    })),
  };
}
