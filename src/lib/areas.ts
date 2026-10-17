import { OFFICIAL } from "@/lib/official";
import type { LocalFaq } from "@/lib/saskatoon-services";

export interface AreaServiceLink {
  title: string;
  desc: string;
  href: string;
}

export interface AreaPageData {
  name: string;
  city: string;
  slug: string;
  metaTitle: string;
  metaDescription: string;
  heroSubtitle: string;
  intro: string;
  context: string;
  notes: { title: string; body: string }[];
  permitHeading: string;
  permit: string[];
  permitLinks: { label: string; href: string }[];
  faqs: LocalFaq[];
  services: AreaServiceLink[];
  related: { label: string; href: string }[];
  targetSearch: string;
}

const SASKATOON_SERVICE_LINKS: AreaServiceLink[] = [
  { title: "Framing", desc: "Basement, garage, and addition framing across Saskatoon.", href: "/services/framing/saskatoon" },
  { title: "Electrical", desc: "Licensed panel upgrades, garage wiring, and renovation circuits.", href: "/services/electrical/saskatoon" },
  { title: "Roofing", desc: "Asphalt shingle replacement, repairs, and new garage roofs.", href: "/services/roofing/saskatoon" },
  { title: "Garage & structure builds", desc: "Detached garages from the pad up, one crew.", href: "/services/full-builds/saskatoon" },
  { title: "Renovations & basements", desc: "Basement development and structural renovations.", href: "/services/renovations/saskatoon" },
  { title: "Seasonal lighting", desc: "Christmas lighting install and takedown.", href: "/services/seasonal-lighting/saskatoon" },
];

const REGIONAL_SERVICE_LINKS: AreaServiceLink[] = [
  { title: "Roofing", desc: "Asphalt shingle replacement, repairs, and new construction roofing.", href: "/services/roofing" },
  { title: "Framing", desc: "Basement framing, garage construction, new builds, and additions.", href: "/services/framing" },
  { title: "Electrical", desc: "Panel upgrades, residential wiring, and new construction electrical.", href: "/services/electrical" },
  { title: "Garage & structure builds", desc: "Full garage builds: pad coordination, framing, siding, roofing, electrical.", href: "/services/full-builds" },
  { title: "Renovations", desc: "Basement development, structural changes, and multi-trade remodels.", href: "/services/renovations" },
  { title: "Seasonal lighting", desc: "Christmas and holiday lighting installation and takedown.", href: "/services/seasonal-lighting" },
];

export const AREAS: Record<string, AreaPageData> = {
  saskatoon: {
    name: "Saskatoon",
    city: "Saskatoon",
    slug: "saskatoon",
    metaTitle: "Trades Contractor Saskatoon | Roofing, Framing & Electrical",
    metaDescription:
      "WLG Homes is based in Saskatoon: framing, licensed electrical, roofing, garage builds, basement renovations, and seasonal lighting. Free estimates. 306-270-6616.",
    heroSubtitle:
      "Saskatoon’s local trades team — roofing, framing, electrical, and full garage builds. Free estimates, owners on every job site.",
    intro:
      "WLG Homes is based in Saskatoon and works across the city. From mature neighbourhoods in the core to newer developments on the edges, we handle roofing, framing, electrical, full garage builds, basement development, and holiday lighting for Saskatoon homeowners.",
    context:
      "Saskatoon housing stock is mixed: older bungalows with aging roofs and 100A panels a few blocks from new infills that need a detached garage or a finished basement. We work in all of it. Each service has its own Saskatoon page with the permit path for that trade.",
    notes: [
      {
        title: "Roofing",
        body: "Saskatoon’s climate is hard on roofs — temperature swings, snow, and freeze-thaw. Older neighbourhoods such as Nutana, Caswell Hill, and Hampton Village have many original or first-replacement roofs. We provide free on-site assessments. Same-material shingle replacement may not need a building permit; confirm on the City’s permit list.",
      },
      {
        title: "Electrical",
        body: "Two Saskatchewan-licensed electricians handle panel upgrades, new wiring, basement circuits, garage sub-panels, and EV charger work. Electrical permits are issued by TSASK, not the City. Building permits still apply when the same job includes a basement or a new garage.",
      },
      {
        title: "Framing and garage builds",
        body: "Basement framing, detached garages, and structural work. Garage applications need a site plan and zoning check; accessory buildings over 10 square metres require a building permit. We apply through ePermitting for contracted work.",
      },
      {
        title: "Basement renovations",
        body: "Finished rec rooms use a basement development permit. A separate dwelling unit needs a secondary suite permit. Bedroom windows have published minimum opening sizes in the City’s basement guide.",
      },
    ],
    permitHeading: "Permits in Saskatoon",
    permit: [
      "Building permits: City of Saskatoon Building Standards, via ePermitting. Questions: 306-975-2645 or building.standards@saskatoon.ca.",
      "Electrical and gas permits: Technical Safety Authority of Saskatchewan (TSASK), 1-866-530-8599.",
      "Call SaskPower at 1-888-757-6937 before you dig. Zoning rules are in the Digital Zoning Bylaw — we do not invent setbacks.",
    ],
    permitLinks: [
      { label: "Building permits", href: OFFICIAL.saskatoonBuildingPermits },
      { label: "ePermitting", href: OFFICIAL.saskatoonEPermitting },
      { label: "Garage project guide", href: OFFICIAL.saskatoonGarages },
      { label: "Renovation and basement guide", href: OFFICIAL.saskatoonRenovations },
      { label: "TSASK electrical", href: OFFICIAL.tsaskElectrical },
    ],
    faqs: [
      {
        q: "Does WLG Homes work in every Saskatoon neighbourhood?",
        a: "Yes. We take jobs across the city, including older core neighbourhoods and newer areas such as Stonebridge, Evergreen, and Hampton Village. If your address is in Saskatoon, ask and we will confirm schedule.",
      },
      {
        q: "Who do I call about a building permit?",
        a: "City of Saskatoon Building Standards. Apply and track through ePermitting. For work we are hired to do, we submit the application. Electrical permits are a separate TSASK process.",
      },
      {
        q: "Can I get a quote without knowing the permit path yet?",
        a: "Yes. Use the contact form for a free on-site estimate, or run the planning check first to gather layout and timeline notes. The planning check is not a permit review and not a price.",
      },
      {
        q: "Do you serve Warman and Martensville from Saskatoon?",
        a: "Yes. Those communities have their own area pages. The crew is the same three owners.",
      },
    ],
    services: SASKATOON_SERVICE_LINKS,
    related: [
      { label: "Garage building permit (Saskatoon)", href: "/blog/saskatoon-garage-building-permit" },
      { label: "Basement development permit", href: "/blog/saskatoon-basement-development-permit" },
      { label: "Electrical permits", href: "/blog/electrical-permits-saskatoon" },
      { label: "Planning check", href: "/planning-check" },
    ],
    targetSearch: "contractor Saskatoon, home trades Saskatoon",
  },
  warman: {
    name: "Warman",
    city: "Warman",
    slug: "warman",
    metaTitle: "Roofing, Framing & Electrical in Warman, SK",
    metaDescription:
      "WLG Homes provides roofing, framing, electrical, garage builds, and renovations in Warman, SK. Licensed trades. Free estimates. 306-270-6616.",
    heroSubtitle:
      "Serving Warman homeowners with roofing, framing, electrical, garage builds, and seasonal lighting. Free estimates from Saskatoon’s trades team.",
    intro:
      "WLG Homes serves Warman, SK for roofing, framing, electrical, garage builds, and renovation work. Located just north of Saskatoon, Warman is a regular trip for estimates and project work.",
    context:
      "Much of Warman’s housing is relatively new, which often means unfinished basements, first garages, and electrical upgrades as families add loads. Older pockets still need roofing assessments. We do not treat Warman as a Saskatoon add-on: City of Warman issues its own building and development permits.",
    notes: [
      {
        title: "Roofing",
        body: "Newer homes are often in good shape, but any roof past its first decade is worth checking, especially after a storm. We provide free roofing assessments in Warman.",
      },
      {
        title: "Electrical",
        body: "Panel upgrades, EV chargers, and basement rough-in are common requests. Electrical permits are through TSASK. Building permits for the structure still go to the City of Warman.",
      },
      {
        title: "Framing, garages, and basements",
        body: "The City of Warman publishes detached-garage, attached-garage, and basement-development checklists on its Applications / Forms page. We use those lists when we apply on your behalf.",
      },
    ],
    permitHeading: "Permits in Warman",
    permit: [
      "The City of Warman states that a permit is required to construct, erect, place, alter, repair, renovate, or demolish any building within the city. Sheds less than 100 square feet and fences do not require a permit, per the City’s FAQ.",
      "The same FAQ says a typical application can be approved in 12–16 business days depending on complexity, that building permits are valid for twelve months if construction has begun within the first six months, and that work started without a permit may be charged double the permit fee.",
      "Applications that change a building’s footprint need a site plan. Forms and checklists: warman.ca Applications / Forms.",
    ],
    permitLinks: [
      { label: "City of Warman applications and forms", href: OFFICIAL.warmanPermits },
      { label: "City of Warman permit FAQs", href: OFFICIAL.warmanPermitFaq },
      { label: "TSASK electrical permits", href: OFFICIAL.tsaskElectrical },
    ],
    faqs: [
      {
        q: "Do I need a building permit in Warman for a garage or basement?",
        a: "The City of Warman requires a permit to construct, alter, repair, renovate, or demolish a building. It publishes separate checklists for detached garages, attached garages, and basement development. Confirm your project on the City’s forms page. Sheds under 100 square feet and fences are listed as not requiring a permit.",
      },
      {
        q: "How long does Warman take to review a permit?",
        a: "The City’s FAQ says a typical application can be applied for and approved within 12–16 business days, with longer review for larger or discretionary-use files. That is the City’s published range, not a WLG guarantee.",
      },
      {
        q: "Does WLG Homes come to Warman for estimates?",
        a: "Yes. Estimates are free and on site. We also serve Martensville on the same northern loop when schedules line up.",
      },
      {
        q: "Who issues electrical permits in Warman?",
        a: "TSASK, as in the rest of Saskatchewan. The City of Warman handles building and development permits.",
      },
    ],
    services: REGIONAL_SERVICE_LINKS,
    related: [
      { label: "Saskatoon garage permit guide (compare process)", href: "/blog/saskatoon-garage-building-permit" },
      { label: "Hiring a garage builder", href: "/blog/hiring-a-garage-builder-saskatoon" },
      { label: "Full garage builds", href: "/services/full-builds" },
    ],
    targetSearch: "garage builder Warman, basement development Warman",
  },
  martensville: {
    name: "Martensville",
    city: "Martensville",
    slug: "martensville",
    metaTitle: "Roofing, Framing & Electrical in Martensville, SK",
    metaDescription:
      "WLG Homes provides roofing, framing, electrical, garage builds, and renovations in Martensville, SK. Licensed trades. Free estimates. 306-270-6616.",
    heroSubtitle:
      "Serving Martensville homeowners with roofing, framing, electrical, garage builds, and seasonal lighting. Free estimates from Saskatoon’s trades team.",
    intro:
      "WLG Homes serves Martensville, SK for roofing, framing, electrical work, garage builds, and home renovations. Martensville is a short drive from Saskatoon and a regular stop for site visits.",
    context:
      "Martensville has a mix of newer builds and homes from the late 2000s. Families who moved north of the city often come back to unfinished basements, a first detached garage, or a panel that cannot support an EV charger. Permits here are Martensville’s, not Saskatoon’s.",
    notes: [
      {
        title: "Roofing",
        body: "Homes from the late 2000s and early 2010s are entering the age where a roofing assessment is worth doing before another winter. We will come to Martensville for a free look.",
      },
      {
        title: "Electrical",
        body: "The City of Martensville states that gas, plumbing, and electrical permits are regulated by TSASK. We pull electrical permits as licensed contractors.",
      },
      {
        title: "Framing, garages, and basements",
        body: "Martensville requires a development permit and a building permit before construction; the City provides a combined application. BuildTECH Consulting and Inspections Inc. reviews plans and inspects on the City’s behalf. The City’s page says smaller projects such as decks and detached garages are typically inspected once, and finishing a basement or secondary suite usually requires two inspections.",
      },
    ],
    permitHeading: "Permits in Martensville",
    permit: [
      "A building permit is required for new construction, demolishing a building, or making structural alterations. A development permit approves location, size, and use under Zoning Bylaw 1-2015. A building permit cannot be issued without a development permit.",
      "Work must comply with The Construction Codes Act and the National Building Code of Canada 2020, per the City. Inspection fees are included in the building permit fee; extra plan reviews or inspections may be charged.",
    ],
    permitLinks: [
      { label: "City of Martensville building, renovating & permits", href: OFFICIAL.martensvillePermits },
      { label: "TSASK electrical permits", href: OFFICIAL.tsaskElectrical },
    ],
    faqs: [
      {
        q: "Do I need both a development permit and a building permit in Martensville?",
        a: "Yes. The City states that a building permit cannot be issued without a development permit, and both must be approved before construction or a change of use. Combined application forms are on the City website.",
      },
      {
        q: "Who inspects the work?",
        a: "BuildTECH Consulting and Inspections Inc. reviews plans and inspects for the City. An inspection schedule is attached to the permit. The City’s page describes typical counts: one inspection for many small projects such as decks and detached garages, two for finishing a basement or secondary suite, and four for new home construction.",
      },
      {
        q: "Are electrical permits through the City?",
        a: "No. Martensville directs gas, plumbing, and electrical permits to TSASK (tsask.ca or 1-866-530-8599).",
      },
      {
        q: "Will WLG Homes come to Martensville for a basement or garage quote?",
        a: "Yes. Free on-site estimates. Warman is next door if you are comparing the two cities’ permit pages.",
      },
    ],
    services: REGIONAL_SERVICE_LINKS,
    related: [
      { label: "Planning a basement development", href: "/blog/planning-a-basement-development-saskatoon" },
      { label: "Full garage builds", href: "/services/full-builds" },
      { label: "Renovations", href: "/services/renovations" },
    ],
    targetSearch: "garage builder Martensville, basement development Martensville",
  },
  delisle: {
    name: "Delisle",
    city: "Delisle",
    slug: "delisle",
    metaTitle: "Roofing, Framing & Electrical in Delisle, SK",
    metaDescription:
      "WLG Homes provides roofing, framing, electrical, garage builds, and renovations in Delisle, SK. Licensed trades from Saskatoon. Free estimates. 306-270-6616.",
    heroSubtitle:
      "Serving Delisle homeowners with roofing, framing, electrical, and full builds. Free estimates from Saskatoon’s trades team.",
    intro:
      "WLG Homes serves Delisle, SK for roofing, framing, electrical work, garage builds, and home renovations. Southwest of Saskatoon, Delisle is a community we travel to for homeowners who want the same crew that works in the city.",
    context:
      "Delisle has a mix of older established homes and newer builds. The jobs look familiar — winter-ready roofing, electrical upgrades, garages, and basement framing — but permits are issued locally, not by Saskatoon. The Town of Delisle publishes a building permit page and asks applicants to contact the Town Office.",
    notes: [
      {
        title: "Roofing",
        body: "Many homes have roofs that have already seen a long stretch of prairie weather. We will come out for a free assessment and say whether a repair or a replacement is the honest call.",
      },
      {
        title: "Electrical",
        body: "Panel upgrades, new circuits, EV chargers, and shop wiring are done by Saskatchewan-licensed electricians with TSASK permits. That is provincial, not municipal.",
      },
      {
        title: "Framing and garages",
        body: "We coordinate the building permit with the Town of Delisle for contracted work. Confirm current forms and fees with the Town Office at 306-493-2242 or delisle@sasktel.net — we do not invent Delisle bylaw details that are not on the Town site.",
      },
    ],
    permitHeading: "Permits in Delisle",
    permit: [
      "The Town of Delisle lists a Building Permit page and directs inquiries to the Town Office: 201 1st Street West, 306-493-2242, delisle@sasktel.net. The Town also publishes a Zoning Bylaw on its bylaws page.",
      "Electrical permits remain with TSASK. We will not guess Rural Municipality rules for properties outside town limits — if your site is not in the Town of Delisle, say so on the estimate and we will confirm which office applies.",
    ],
    permitLinks: [
      { label: "Town of Delisle building permit", href: OFFICIAL.delisleBuildingPermit },
      { label: "TSASK electrical permits", href: OFFICIAL.tsaskElectrical },
    ],
    faqs: [
      {
        q: "Will you travel to Delisle for a small job?",
        a: "We travel to Delisle for the work we already list — roofing, framing, electrical, garage builds, renovations, and seasonal lighting. Tell us the scope on the contact form and we will say if the trip makes sense.",
      },
      {
        q: "Where do I apply for a building permit in Delisle?",
        a: "Start with the Town of Delisle building permit page and the Town Office. We coordinate the application for jobs we are hired to build. Electrical permits are TSASK.",
      },
      {
        q: "Do Saskatoon garage setback rules apply in Delisle?",
        a: "No. Saskatoon’s zoning bylaw applies in Saskatoon. Delisle has its own zoning bylaw. We check the lot against the town that actually issues the permit.",
      },
      {
        q: "Are your electricians licensed for work outside Saskatoon?",
        a: "Yes. Saskatchewan electrical licensing and TSASK permits apply province-wide.",
      },
    ],
    services: REGIONAL_SERVICE_LINKS,
    related: [
      { label: "Hiring a garage builder", href: "/blog/hiring-a-garage-builder-saskatoon" },
      { label: "Full garage builds", href: "/services/full-builds" },
      { label: "Electrical services", href: "/services/electrical" },
    ],
    targetSearch: "contractor Delisle SK, garage builder Delisle",
  },
  "prince-albert": {
    name: "Prince Albert",
    city: "Prince Albert",
    slug: "prince-albert",
    metaTitle: "Roofing, Framing & Electrical in Prince Albert, SK",
    metaDescription:
      "WLG Homes provides roofing, framing, electrical, garage builds, and renovations in Prince Albert, SK. Licensed trades. Free estimates. 306-270-6616.",
    heroSubtitle:
      "Serving Prince Albert homeowners with roofing, framing, electrical, and full builds. Free estimates from an experienced Saskatchewan trades team.",
    intro:
      "WLG Homes serves Prince Albert, SK for roofing, framing, electrical, garage builds, and renovation work. We make the drive north for the right projects and bring the same owners-on-site standard we use in Saskatoon.",
    context:
      "Prince Albert’s housing ranges from older established streets to newer edges of the city. Common calls we take seriously: aging roofs, panels that cannot carry modern loads, detached garages, and basement development. Permits are City of Prince Albert files, with processing times the City publishes itself.",
    notes: [
      {
        title: "Roofing",
        body: "Winters north of Saskatoon are not milder. If the roof is old, an assessment before winter is worth doing. Estimates in Prince Albert are free.",
      },
      {
        title: "Electrical",
        body: "Panel upgrades and residential wiring by Saskatchewan-licensed electricians, permitted through TSASK. Building permits for related construction still go to the City.",
      },
      {
        title: "Framing, garages, and basements",
        body: "The City requires a building permit before construction, additions, renovations, or a change of use. Applications can be submitted at Community Development, 3rd Floor, City Hall, or emailed to solutions@citypa.com. The City says processing may take up to 20 days depending on the type of work, and longer if information is missing.",
      },
    ],
    permitHeading: "Permits in Prince Albert",
    permit: [
      "You must have a building or demolition permit before work starts. If you are not the owner, the City requires an Owner’s Authorization Form. The City also states that the contractor named on the application must have a valid City of Prince Albert business licence for the permit to be issued.",
      "The City publishes a fee table (including rates for garages and for secondary suites or full basement development). Use the official page for current amounts. Inspections listed on the permit are booked by you or your contractor.",
    ],
    permitLinks: [
      { label: "City of Prince Albert building and demolition permits", href: OFFICIAL.princeAlbertPermits },
      { label: "TSASK electrical permits", href: OFFICIAL.tsaskElectrical },
    ],
    faqs: [
      {
        q: "How long does a Prince Albert building permit take?",
        a: "The City of Prince Albert states that an application may take up to 20 days to process depending on the type of work, and longer if required information is missing. That is the City’s figure, not a WLG timeline.",
      },
      {
        q: "Do I need a permit before WLG Homes starts?",
        a: "Yes. The City says you must have a building or demolition permit before any work starts. We do not start construction ahead of the permit.",
      },
      {
        q: "Does the contractor need a Prince Albert business licence?",
        a: "The City’s building permit page says the contractor on the application must have a valid City of Prince Albert business licence for the permit to be issued. We confirm that requirement against the current City page when we quote a Prince Albert job.",
      },
      {
        q: "Is the drive from Saskatoon a problem for smaller jobs?",
        a: "We make the drive for projects that fit our trades. Describe the scope on the contact form and we will tell you straight whether it is a fit.",
      },
    ],
    services: REGIONAL_SERVICE_LINKS,
    related: [
      { label: "How long a garage build takes", href: "/blog/how-long-does-a-garage-build-take-saskatoon" },
      { label: "Full garage builds", href: "/services/full-builds" },
      { label: "Roofing", href: "/services/roofing" },
    ],
    targetSearch: "contractor Prince Albert SK, garage builder Prince Albert",
  },
};

export function getArea(slug: string): AreaPageData | undefined {
  return AREAS[slug];
}

export function allAreaSlugs(): string[] {
  return Object.keys(AREAS);
}
