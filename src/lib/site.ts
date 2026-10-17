export const SITE_URL = "https://wlghomes.ca";
export const SITE_NAME = "WLG Homes";
export const SITE_EMAIL = "info@wlghomes.ca";
export const SITE_PHONE_DISPLAY = "1-306-270-6616";
export const SITE_PHONE_TEL = "13062706616";
export const SITE_PHONE_E164 = "+13062706616";

export const AREAS_SERVED = [
  "Saskatoon",
  "Warman",
  "Martensville",
  "Delisle",
  "Prince Albert",
] as const;

export const SERVICES = [
  {
    name: "Framing & Construction",
    path: "/services/framing",
    description:
      "Residential framing for new builds, additions, basement framing, and garage construction in the Saskatoon area.",
  },
  {
    name: "Electrical Services",
    path: "/services/electrical",
    description:
      "Licensed electrical work including panel upgrades, new construction wiring, and residential electrical in Saskatchewan.",
  },
  {
    name: "Professional Roofing",
    path: "/services/roofing",
    description:
      "Asphalt shingle replacement, repairs, and new roof construction built for the Saskatchewan climate.",
  },
  {
    name: "Full Builds",
    path: "/services/full-builds",
    description:
      "Complete garage and structure builds from the concrete pad up: framing, siding, roofing, and electrical under one crew.",
  },
  {
    name: "Renovations",
    path: "/services/renovations",
    description:
      "Home renovations and basement development with the owners on the job site.",
  },
  {
    name: "Seasonal Lighting",
    path: "/services/seasonal-lighting",
    description:
      "Christmas and holiday lighting installation, maintenance, and takedown for Saskatoon-area homes.",
  },
] as const;

export const PROJECT_TYPES = [
  "Framing & construction",
  "Electrical",
  "Roofing",
  "Full garage / structure build",
  "Renovation / basement",
  "Seasonal lighting",
  "Other",
] as const;

export const TIMELINE_OPTIONS = [
  "As soon as possible",
  "1-3 months",
  "3-6 months",
  "6-12 months",
  "Just exploring",
] as const;

export const BUDGET_OPTIONS = [
  "Still figuring it out",
  "Under $10,000",
  "$10,000-$25,000",
  "$25,000-$50,000",
  "$50,000-$100,000",
  "$100,000 or more",
  "Prefer not to say",
] as const;

export const SOCIAL_LINKS = [
  "https://www.facebook.com/profile.php?id=61584288716942",
  "https://www.google.com/maps/place/WLG+Homes/@52.2379344,-106.6449313,9z/data=!3m1!4b1!4m6!3m5!1s0x2c693299ff943e9d:0xeed9c522fc9ab8bc!8m2!3d52.2379344!4d-106.6449313!16s%2Fg%2F11z1jxd2j4",
] as const;
