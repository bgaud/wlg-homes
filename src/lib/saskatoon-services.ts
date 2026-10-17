import { OFFICIAL } from "@/lib/official";

export interface LocalFaq {
  q: string;
  a: string;
}

export interface SaskatoonServicePage {
  slug: string;
  name: string;
  serviceType: string;
  parentPath: string;
  parentLabel: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  heroSubtitle: string;
  image: string;
  imageAlt: string;
  intro: string[];
  contextHeading: string;
  context: string[];
  offeringsHeading: string;
  offerings: { title: string; desc: string }[];
  permitHeading: string;
  permit: string[];
  permitLinks: { label: string; href: string }[];
  faqs: LocalFaq[];
  related: { label: string; href: string }[];
  targetSearch: string;
}

export const SASKATOON_SERVICES: Record<string, SaskatoonServicePage> = {
  framing: {
    slug: "framing",
    name: "Framing",
    serviceType: "Residential framing",
    parentPath: "/services/framing",
    parentLabel: "Framing services",
    h1: "Framing Contractor in Saskatoon",
    metaTitle: "Framing Contractor Saskatoon | Basement & Garage Framing",
    metaDescription:
      "Residential framing in Saskatoon by WLG Homes: basement framing, garage construction, additions, and new-build walls. Owners on site. Free estimates.",
    heroSubtitle:
      "Basement framing, garage walls, and additions built to inspection-ready standards across Saskatoon. Dawson Wiederhold frames the work; the same crew stays on the job.",
    image: "/images/framing.jpg",
    imageAlt: "Residential wall framing in progress on a Saskatoon job site",
    intro: [
      "Saskatoon framing jobs are rarely identical. A 1960s bungalow in Confederation Park needs different wall layouts, mechanical chases, and bearing checks than a newer two-storey in Evergreen or Stonebridge. WLG Homes frames for the house in front of us, not a template.",
      "Dawson Wiederhold, co-owner and lead framer, runs the carpentry. When the project also needs wiring, Riley Lajuenesse and Braedon Gaudet — both Saskatchewan-licensed electricians — rough in before walls close. You are not waiting on a separate company to show up after we leave.",
    ],
    contextHeading: "How Saskatoon houses change the framing plan",
    context: [
      "Mature neighbourhoods often have existing joists, furnace runs, and stairs that dictate where walls can go. Newer lots more often mean a clean concrete basement or a detached garage pad with alley or side-yard access. Both are normal work for this crew.",
      "The City of Saskatoon lists basement developments, garages, additions, and structural repairs among projects that need a building permit. We frame to the National Building Code as adopted in Saskatchewan and coordinate the permit so inspections happen before drywall, not after.",
    ],
    offeringsHeading: "Framing work we take on in Saskatoon",
    offerings: [
      {
        title: "Basement framing",
        desc: "Partition walls, door openings, and soffits around mechanical. Layouts that leave space for electrical rough-in and, where you are adding a bedroom, window locations the City will review on the floor plan.",
      },
      {
        title: "Garage framing",
        desc: "Sill plates through wall and roof framing for detached and attached garages. We coordinate with the pad and with roofing so the shell is ready for sheathing, siding, and shingles.",
      },
      {
        title: "Additions and structural openings",
        desc: "New walls, headers, and framing for additions or interior changes that alter structure. If the City asks for engineered drawings, we tell you before we start cutting.",
      },
      {
        title: "New-build wall and floor framing",
        desc: "Residential framing for new construction and infills, sequenced with electrical so rough-in is not an afterthought.",
      },
    ],
    permitHeading: "Permits for framing work in Saskatoon",
    permit: [
      "The City of Saskatoon requires a building permit for basement developments, new garages and other accessory buildings over 10 square metres (107 square feet), additions, and structural repairs. Cosmetic work such as painting or patching drywall is listed separately as work that does not need a building permit when that is the entire scope.",
      "Applications go through the City’s ePermitting portal. Building Standards can be reached at 306-975-2645 or building.standards@saskatoon.ca. WLG Homes prepares the drawings and submission details the City asks for and applies on your behalf where the job requires it.",
    ],
    permitLinks: [
      { label: "City of Saskatoon building permits", href: OFFICIAL.saskatoonBuildingPermits },
      { label: "Apply or track a permit (ePermitting)", href: OFFICIAL.saskatoonEPermitting },
    ],
    faqs: [
      {
        q: "Do I need a permit to frame a basement in Saskatoon?",
        a: "Yes. The City of Saskatoon lists basement developments among projects that require a building permit. Floor plans have to show room uses, dimensions, and window sizes. WLG Homes handles the application for work we are contracted to frame.",
      },
      {
        q: "Can you frame and wire the same basement?",
        a: "Yes. Framing and licensed electrical are both in-house. Rough-in happens before insulation and drywall, which is also when a TSASK electrical inspection is typically booked.",
      },
      {
        q: "Do you frame detached garages in established Saskatoon alleys?",
        a: "Yes. Access, setbacks, and driveway location are part of the City’s garage application. We walk the lot during the estimate and flag anything that needs a site plan or Urban Forestry review before we apply.",
      },
      {
        q: "What areas of Saskatoon do you frame in?",
        a: "Across the city — older core neighbourhoods and newer areas such as Stonebridge, Evergreen, and Hampton Village. If your address is in Saskatoon, Warman, Martensville, Delisle, or Prince Albert, ask and we will confirm the job is a fit.",
      },
    ],
    related: [
      { label: "Framing service overview", href: "/services/framing" },
      { label: "Garage and structure builds in Saskatoon", href: "/services/full-builds/saskatoon" },
      { label: "Basement renovations in Saskatoon", href: "/services/renovations/saskatoon" },
      { label: "Planning a basement development", href: "/blog/planning-a-basement-development-saskatoon" },
      { label: "Saskatoon service area", href: "/areas/saskatoon" },
    ],
    targetSearch: "framing contractor Saskatoon, basement framing Saskatoon",
  },
  electrical: {
    slug: "electrical",
    name: "Electrical",
    serviceType: "Residential electrical",
    parentPath: "/services/electrical",
    parentLabel: "Electrical services",
    h1: "Licensed Electrician in Saskatoon",
    metaTitle: "Licensed Electrician Saskatoon | Panel Upgrades & Wiring",
    metaDescription:
      "Saskatchewan-licensed electricians in Saskatoon for panel upgrades, garage wiring, basement circuits, and new construction. Permits through TSASK. Free estimates.",
    heroSubtitle:
      "Two Saskatchewan-licensed electricians on staff. Panel upgrades, garage and basement wiring, and new circuits — permitted through TSASK and inspected before walls close.",
    image: "/images/electrical.jpg",
    imageAlt: "Licensed electrician working on a residential panel in Saskatoon",
    intro: [
      "Electrical work in Saskatoon is split between two authorities: the City for building permits when walls, occupancy, or structure change, and the Technical Safety Authority of Saskatchewan (TSASK) for electrical permits. WLG Homes pulls the electrical permit as a licensed contractor so you are not left to guess which form applies.",
      "Riley Lajuenesse and Braedon Gaudet are Saskatchewan-licensed electricians and co-owners. When you hire WLG Homes, one of them is doing the work — not an unknown subtrade.",
    ],
    contextHeading: "What Saskatoon homes usually need",
    context: [
      "Older bungalows often still run on a 100A panel that was never meant for an EV charger, hot tub, and a finished basement at the same time. Newer infills more often need complete rough-in, a garage sub-panel, or extra circuits for a workshop.",
      "TSASK states that homeowners can request a copy of any electrical permit for work on their property. A contractor who will not show the permit is a problem. We provide the permit before work begins.",
    ],
    offeringsHeading: "Electrical services in Saskatoon",
    offerings: [
      {
        title: "Panel upgrades",
        desc: "Service and panel work to support added load. TSASK requires a licensed Saskatchewan electrical contractor for EV chargers, generators, battery storage, and renewable-energy systems — those jobs are not eligible for a homeowner wiring permit.",
      },
      {
        title: "Basement and renovation wiring",
        desc: "New circuits, smoke-alarm locations, lighting, and receptacles roughed in after framing and inspected before drywall. Building permits for the basement itself still go through the City.",
      },
      {
        title: "Garage and shop electrical",
        desc: "Lighting, receptacles, and sub-panels for attached or detached garages. Branch-circuit wiring of a home garage is listed by TSASK as electrical installation work that needs a permit.",
      },
      {
        title: "New-construction rough-in and trim",
        desc: "Full residential wiring sequenced with our framing crew so inspections happen in the right order.",
      },
    ],
    permitHeading: "Who issues electrical permits in Saskatoon",
    permit: [
      "The City of Saskatoon’s garage and renovation guides state that electrical and gas permits are administered by TSASK, not by City Building Standards. Contact TSASK at 1-866-530-8599 or info@tsask.ca, or apply through their electrical permit pages.",
      "A building permit may still be required if the same project includes basement development, a new garage, or structural work. We tell you which applications apply after we see the job.",
    ],
    permitLinks: [
      { label: "TSASK electrical permits", href: OFFICIAL.tsaskElectrical },
      { label: "TSASK homeowner electrical permit rules", href: OFFICIAL.tsaskHomeownerElectrical },
      { label: "City of Saskatoon building permits", href: OFFICIAL.saskatoonBuildingPermits },
    ],
    faqs: [
      {
        q: "Are WLG Homes electricians licensed in Saskatchewan?",
        a: "Yes. Riley Lajuenesse and Braedon Gaudet are Saskatchewan-licensed electricians and co-owners of WLG Homes. Electrical work is permitted and inspected.",
      },
      {
        q: "Do panel upgrades and EV chargers need a licensed contractor?",
        a: "TSASK requires a licensed Saskatchewan electrical contractor for EV chargers, generators, battery storage, and renewable-energy systems. Panel and service work is also permitted electrical installation. We apply for the contractor permit.",
      },
      {
        q: "Can I do my own garage wiring on a homeowner permit?",
        a: "TSASK publishes rules for home and farm owner electrical wiring permits, including limits on voltage, amperage, property type, and work that is not eligible. Read the current TSASK page before assuming a homeowner permit covers the job. Hiring us means we pull a contractor permit instead.",
      },
      {
        q: "Do you work outside Saskatoon?",
        a: "Yes. The same licensed crew serves Warman, Martensville, Delisle, and Prince Albert. Electrical permits still go through TSASK across Saskatchewan.",
      },
    ],
    related: [
      { label: "Electrical service overview", href: "/services/electrical" },
      { label: "Electrical permits in Saskatoon", href: "/blog/electrical-permits-saskatoon" },
      { label: "Framing in Saskatoon", href: "/services/framing/saskatoon" },
      { label: "Saskatoon service area", href: "/areas/saskatoon" },
    ],
    targetSearch: "licensed electrician Saskatoon, panel upgrade Saskatoon",
  },
  roofing: {
    slug: "roofing",
    name: "Roofing",
    serviceType: "Residential roofing",
    parentPath: "/services/roofing",
    parentLabel: "Roofing services",
    h1: "Roofing in Saskatoon",
    metaTitle: "Roofing Saskatoon | Shingle Replacement & Repairs",
    metaDescription:
      "Asphalt shingle replacement, repairs, and new roofs in Saskatoon by WLG Homes. Built for prairie winters. Free on-site estimates.",
    heroSubtitle:
      "Tear-off, deck inspection, underlayment, and architectural asphalt shingles installed by the same owners who frame and wire the rest of the house.",
    image: "/images/roofing.jpg",
    imageAlt: "Asphalt shingle roof replacement on a Saskatoon home",
    intro: [
      "Saskatoon roofs take freeze-thaw, snow, and wind. We replace and repair asphalt shingle roofs on houses and garages, and we install the roof on full garage builds we frame ourselves so the deck, drip edge, and shingles are one sequence.",
      "Estimates are on the roof, not from a photo. We look at flashing, valleys, ventilation, and the deck before we quote.",
    ],
    contextHeading: "Older streets and newer subdivisions",
    context: [
      "Homes in Nutana, Caswell Hill, and other mature neighbourhoods often have original or first-replacement roofs that are due for a close look. Newer areas more often need a garage roof tied into a recent house, or storm repairs. We work in both.",
      "The City of Saskatoon lists replacement or repair of roofing of exactly the same material (above the decking), matching the most recent approved building plans where those are available, as work that may not need a building permit. Changing materials, increasing roof-top loading, or structural repairs are listed on the permit-required side. Confirm your scope on the City’s building permit page before you assume no permit is needed.",
    ],
    offeringsHeading: "Roofing we do in Saskatoon",
    offerings: [
      {
        title: "Full shingle replacement",
        desc: "Tear-off, deck check, underlayment, drip edge, and new architectural asphalt shingles rated for this climate.",
      },
      {
        title: "Repairs",
        desc: "Isolated missing shingles, flashing, and small leaks when a full replacement is not the honest recommendation.",
      },
      {
        title: "New garage and structure roofs",
        desc: "Roofing as part of a full build, installed by the same crew that framed the roof deck.",
      },
      {
        title: "Honest assessments",
        desc: "A free look at whether repair or replacement is the better call. No invented remaining-life percentages.",
      },
    ],
    permitHeading: "When a Saskatoon roofing job needs a building permit",
    permit: [
      "Start with the City of Saskatoon building permits list. Same-material roofing replacement above the decking, matching the last approved plans, is called out as commonly not requiring a building permit. Structural repairs, added roof-top loading, and other alterations are on the required list.",
      "If the roof is part of a new garage or addition, that structure still needs its own building permit. Electrical work in the same project is still a TSASK permit.",
    ],
    permitLinks: [
      { label: "City of Saskatoon building permits", href: OFFICIAL.saskatoonBuildingPermits },
      { label: "Permit fees (City of Saskatoon)", href: OFFICIAL.saskatoonPermitFees },
    ],
    faqs: [
      {
        q: "Do I need a building permit to replace shingles in Saskatoon?",
        a: "The City lists replacement or repair of roofing of exactly the same material above the decking, as per the most recent approved building plans where available, as a common project that does not require a building permit. Different materials, structural work, or added roof load may. Check the current City page for your scope.",
      },
      {
        q: "Do you roof garages as well as houses?",
        a: "Yes. Garage roofs are part of our full builds, and we also reroof existing detached garages when the structure is sound.",
      },
      {
        q: "Will you tell me if a repair is enough?",
        a: "Yes. If a patch will actually stop the leak, we say so. If the field is at the end of its service, we recommend replacement instead of stacking repairs.",
      },
      {
        q: "Do you work in Warman and Martensville too?",
        a: "Yes. Roofing estimates and installations are available in Saskatoon, Warman, Martensville, Delisle, and Prince Albert.",
      },
    ],
    related: [
      { label: "Roofing service overview", href: "/services/roofing" },
      { label: "Full garage builds in Saskatoon", href: "/services/full-builds/saskatoon" },
      { label: "Saskatoon service area", href: "/areas/saskatoon" },
    ],
    targetSearch: "roofing Saskatoon, shingle replacement Saskatoon",
  },
  "full-builds": {
    slug: "full-builds",
    name: "Garage & structure builds",
    serviceType: "Detached garage and structure construction",
    parentPath: "/services/full-builds",
    parentLabel: "Full builds",
    h1: "Garage Builder in Saskatoon",
    metaTitle: "Garage Builder Saskatoon | Detached Garage Construction",
    metaDescription:
      "Detached garage and structure builds in Saskatoon: pad coordination, framing, siding, roofing, and licensed electrical under one crew. Free estimates.",
    heroSubtitle:
      "A detached garage from the pad up — framing, siding, roofing, and electrical by the owners. We apply for the City building permit and the TSASK electrical permit.",
    image: "/images/garage-build/08-finished.jpg",
    imageAlt: "Finished detached garage built by WLG Homes in Saskatoon",
    intro: [
      "Most full builds we take on in Saskatoon are detached garages: single, double, or oversized with shop space. The same in-house crew can take on other ground-up structures and additions when the scope fits.",
      "You are not coordinating a framer, a siding crew, a roofer, and an electrician. Dawson frames; Riley and Braedon wire; siding and shingles stay on the same schedule.",
    ],
    contextHeading: "Saskatoon lots, alleys, and zoning",
    context: [
      "Development rules depend on the zoning designation of the property. The City tells applicants to look up zoning on the Development Portal and read the Digital Zoning Bylaw for setbacks, height, and lot coverage. We walk the lot with you and will not guess a setback that the bylaw has to answer.",
      "A complete garage application, per the City’s garage guide, includes the Submission Details Form from the Detached Garage & Accessory Building Project Guide, a site plan (including driveway location and City-owned trees), and a drawing of truss or rafter direction plus door and window sizes. Driveway crossings within 3.0 metres of a City-owned tree go to Urban Forestry review.",
    ],
    offeringsHeading: "What a Saskatoon garage build with WLG includes",
    offerings: [
      {
        title: "Permit and site plan coordination",
        desc: "Building permit through ePermitting, electrical permit through TSASK, and the drawings the City lists on the garage project guide.",
      },
      {
        title: "Concrete pad coordination",
        desc: "We schedule the pad pour and cure, or start on a pad you already have, before framing.",
      },
      {
        title: "Shell: framing, wrap, siding, roof",
        desc: "On one documented Saskatoon double garage, the crew closed in the shell in two days of on-site work after the pad had cured. That is an example from a completed job, not a promised duration for every size and foundation type.",
      },
      {
        title: "Licensed electrical",
        desc: "Lights and receptacles as a baseline, with sub-panel or 240V options when the house service can support them.",
      },
    ],
    permitHeading: "Garage permits in Saskatoon",
    permit: [
      "The City requires a building permit for a garage or other accessory building greater than 10 square metres (107 square feet). Demolishing or relocating a building over that size also needs a permit. Call SaskPower at 1-888-757-6937 before you dig to locate lines and easements.",
      "Current building permit fees are published by the City (including a per-square-foot garage rate and a minimum fee). We point you at the official fee page rather than restating numbers that the City can update.",
    ],
    permitLinks: [
      { label: "City of Saskatoon garage project guide", href: OFFICIAL.saskatoonGarages },
      { label: "Building permits overview", href: OFFICIAL.saskatoonBuildingPermits },
      { label: "Building permit fees", href: OFFICIAL.saskatoonPermitFees },
      { label: "ePermitting", href: OFFICIAL.saskatoonEPermitting },
      { label: "Digital Zoning Bylaw", href: OFFICIAL.saskatoonZoningBylaw },
    ],
    faqs: [
      {
        q: "Do I need a permit to build a detached garage in Saskatoon?",
        a: "Yes, for a garage or accessory building larger than 10 square metres (107 square feet). The City’s garage guide lists the drawings and forms. WLG Homes applies through ePermitting for builds we are contracted to complete.",
      },
      {
        q: "Who issues the electrical permit for garage wiring?",
        a: "TSASK, not the City. The City’s garage page states that electrical and gas permits are administered by TSASK.",
      },
      {
        q: "How long does a garage build take?",
        a: "Permit review, locates, pad cure, and inspections each add time before carpentry starts. After a cured pad, we have closed in a standard double-garage shell in two days on a completed Saskatoon job. Frost walls, interior finish, and larger footprints add steps. See our garage timeline article for the full sequence.",
      },
      {
        q: "What sizes do you build?",
        a: "Common requests are single (about 12x22 to 14x22), double (22x22 to 24x24), and oversized double (24x28 to 26x30). Final size has to fit your zoning and the site plan the City approves.",
      },
    ],
    related: [
      { label: "Full builds overview", href: "/services/full-builds" },
      { label: "Saskatoon garage building permit guide", href: "/blog/saskatoon-garage-building-permit" },
      { label: "How long a garage build takes", href: "/blog/how-long-does-a-garage-build-take-saskatoon" },
      { label: "Hiring a garage builder", href: "/blog/hiring-a-garage-builder-saskatoon" },
      { label: "A completed garage build", href: "/blog/garage-build-saskatoon" },
    ],
    targetSearch: "garage builder Saskatoon, detached garage Saskatoon",
  },
  renovations: {
    slug: "renovations",
    name: "Renovations & basements",
    serviceType: "Home renovation and basement development",
    parentPath: "/services/renovations",
    parentLabel: "Renovations",
    h1: "Basement Development & Renovations in Saskatoon",
    metaTitle: "Basement Development Saskatoon | Renovation Contractor",
    metaDescription:
      "Basement development and home renovations in Saskatoon by WLG Homes. Framing and licensed electrical in-house, permits coordinated. Free estimates.",
    heroSubtitle:
      "Unfinished basements, structural renovations, and multi-trade remodels with the owners on site. Building permits through the City; electrical permits through TSASK.",
    image: "/images/hero.png",
    imageAlt: "Residential renovation and framing work by WLG Homes in Saskatoon",
    intro: [
      "Basement development is the renovation we are asked about most in Saskatoon: turning a concrete shell into bedrooms, a rec room, or a bathroom. We also take on structural renovations and remodels that use our framing, electrical, and roofing trades.",
      "If you want a secondary suite — a separate dwelling unit, not just a finished rec room — the City says to apply for a secondary suite permit, not only a basement development permit. That distinction matters before you draw walls.",
    ],
    contextHeading: "What the City asks for on a basement permit",
    context: [
      "The City’s renovation guide and Basement Development Project Guide ask for a completed guide form, floor plans with room uses, dimensions, and window sizes, and additional drawings when you add or enlarge windows, use spray foam, or go beyond Part 9 of the National Building Code.",
      "Houses built before 1990 need an Asbestos Removal Notification Form with the application. Houses built after 1 January 2019 may need the Energy Efficiency Compliance Form if you alter the building envelope, windows, or mechanical equipment. Plumbing for a new bathroom needs its own plumbing permit.",
    ],
    offeringsHeading: "Renovation work in Saskatoon",
    offerings: [
      {
        title: "Basement development",
        desc: "Layout, framing, electrical rough-in, and coordination through inspection. We do not invent a finish budget; finishes depend on what you choose after the walls are up.",
      },
      {
        title: "Bedrooms and egress windows",
        desc: "The City’s basement guide states bedroom windows must have a minimum opening of 0.35 m² (3.8 ft²) with no dimension less than 380 mm (15 in), and a 760 mm (30 in) clear path at a window well. We plan walls around those numbers instead of discovering them at inspection.",
      },
      {
        title: "Structural renovations",
        desc: "Openings, additions, and repairs that change structure. Engineered drawings when the City requires them.",
      },
      {
        title: "In-house electrical",
        desc: "The same licensed electricians rough in the basement so you are not hiring a second company between framing and drywall.",
      },
    ],
    permitHeading: "Basement and renovation permits in Saskatoon",
    permit: [
      "Basement developments are on the City’s list of projects that require a building permit. Cosmetic-only work (paint, patching drywall, carpet) is listed as commonly not requiring a permit when that is the entire scope. Replacing kitchen cabinets is also listed as not requiring a permit if National Building Code clearances are met.",
      "Apply through ePermitting. Building Standards: 306-975-2645, building.standards@saskatoon.ca. Current basement-development permit fees are on the City’s fee page.",
    ],
    permitLinks: [
      { label: "Home renovation, addition, or new construction", href: OFFICIAL.saskatoonRenovations },
      { label: "Basement Development Project Guide (PDF)", href: OFFICIAL.saskatoonBasementGuide },
      { label: "Building permits overview", href: OFFICIAL.saskatoonBuildingPermits },
      { label: "Building permit fees", href: OFFICIAL.saskatoonPermitFees },
    ],
    faqs: [
      {
        q: "Do I need a permit to finish a basement in Saskatoon?",
        a: "Yes. The City lists basement developments as requiring a building permit. If the basement will be an additional dwelling unit, apply for a secondary suite permit instead. Electrical and plumbing are separate permits.",
      },
      {
        q: "What drawings do I need?",
        a: "At minimum, the Basement Development Project Guide form and floor plans with dimensions, room uses, and window sizes. Site plans and elevations are required when you add or enlarge windows. Spray foam and some structural work have extra forms. The City PDF is the checklist.",
      },
      {
        q: "Do you handle the whole basement including drywall and flooring?",
        a: "Our core trades are framing, electrical, and roofing. Many homeowners have us take the basement through inspection-ready framing and wiring, then finish themselves or with other trades. Ask during the estimate what you want us to own.",
      },
      {
        q: "Can I use the planning check before I request a quote?",
        a: "Yes. The planning check is a free readiness checklist, not a price or a permit review. It helps you gather lot, layout, and timeline notes before we visit.",
      },
    ],
    related: [
      { label: "Renovations overview", href: "/services/renovations" },
      { label: "Basement development permit guide", href: "/blog/saskatoon-basement-development-permit" },
      { label: "Planning a basement development", href: "/blog/planning-a-basement-development-saskatoon" },
      { label: "Framing in Saskatoon", href: "/services/framing/saskatoon" },
      { label: "How to choose a renovation contractor", href: "/blog/how-to-choose-a-renovation-contractor-saskatoon" },
    ],
    targetSearch: "basement development Saskatoon, renovation contractor Saskatoon",
  },
  "seasonal-lighting": {
    slug: "seasonal-lighting",
    name: "Seasonal lighting",
    serviceType: "Holiday lighting installation",
    parentPath: "/services/seasonal-lighting",
    parentLabel: "Seasonal lighting",
    h1: "Christmas Lighting Installation in Saskatoon",
    metaTitle: "Christmas Lighting Installation Saskatoon",
    metaDescription:
      "Christmas and holiday lighting install and takedown for Saskatoon homes by WLG Homes. Commercial-grade lights, owners on the job. Free estimates.",
    heroSubtitle:
      "Rooflines, eaves, and trees lit for the season, then taken down when you want them down. We supply commercial-grade LED lights.",
    image: "/images/christmas-lights.jpg",
    imageAlt: "Holiday lighting installed on a Saskatoon home by WLG Homes",
    intro: [
      "Seasonal lighting is a defined service: install, maintain through the season if something fails, and takedown. It is not a construction permit job in the way a garage or basement is, and we do not treat it like one.",
      "Saskatoon winters mean ice on eaves and short daylight. We book installs before the worst of both. The owners do the work — the same people you would meet on a framing or electrical job.",
    ],
    contextHeading: "Houses we typically light",
    context: [
      "Bungalows, two-storeys, and rambling 1970s roofs all show up on the schedule. We look at pitch, access, and existing exterior receptacles during the estimate. If a new outdoor circuit is actually required, that is licensed electrical work with a TSASK permit — not part of hanging lights.",
      "The City of Saskatoon’s building permit list does not treat decorative lighting as a building-permit project. If you are unsure about a related electrical change, we will say so instead of stretching a lighting quote into wiring.",
    ],
    offeringsHeading: "What the lighting service covers",
    offerings: [
      {
        title: "Install",
        desc: "Roofline, eave, and tree lighting with commercial-grade LEDs we supply. If you want your own strings used, say so on the estimate.",
      },
      {
        title: "Takedown",
        desc: "Standard packages include taking the lights down after the season. Storage arrangements are confirmed when we quote.",
      },
      {
        title: "Repairs during the season",
        desc: "If a section fails, call us. We do not disappear after the install photo.",
      },
      {
        title: "Honest scope",
        desc: "We will not quote a full-house wrap we cannot reach safely. Three-storey peaks and fragile fascia get a straight answer.",
      },
    ],
    permitHeading: "Permits and electrical",
    permit: [
      "Hanging seasonal lights on an existing exterior receptacle is not listed on the City’s building-permit-required list. Adding or altering permanent wiring is electrical installation work under TSASK.",
      "If your home needs a new GFCI receptacle or circuit before lights can go up, that is a separate electrical quote with a permit. We will not bury that inside a lighting package.",
    ],
    permitLinks: [
      { label: "City of Saskatoon building permits", href: OFFICIAL.saskatoonBuildingPermits },
      { label: "TSASK electrical permits", href: OFFICIAL.tsaskElectrical },
    ],
    faqs: [
      {
        q: "When should I book Christmas lighting in Saskatoon?",
        a: "We recommend booking by late October if you want a November install. Weather and remaining daylight drive the calendar more than a marketing deadline.",
      },
      {
        q: "Do I provide the lights?",
        a: "No. WLG Homes supplies commercial-grade LED lights unless you ask us to use strings you already own.",
      },
      {
        q: "Do you only work in Saskatoon?",
        a: "Lighting is available in Saskatoon and the same communities we already serve for trades work: Warman, Martensville, Delisle, and Prince Albert, subject to schedule.",
      },
      {
        q: "Is this connected to your construction work?",
        a: "Same company, same owners. Many lighting clients later ask about roofing or a garage. There is no obligation to bundle the two.",
      },
    ],
    related: [
      { label: "Seasonal lighting overview", href: "/services/seasonal-lighting" },
      { label: "When to book Christmas lights", href: "/blog/best-time-to-book-christmas-lights-saskatoon" },
      { label: "Roofing in Saskatoon", href: "/services/roofing/saskatoon" },
      { label: "Saskatoon service area", href: "/areas/saskatoon" },
    ],
    targetSearch: "Christmas lights installation Saskatoon, holiday lighting Saskatoon",
  },
};

export function getSaskatoonService(slug: string): SaskatoonServicePage | undefined {
  return SASKATOON_SERVICES[slug];
}

export function allSaskatoonServiceSlugs(): string[] {
  return Object.keys(SASKATOON_SERVICES);
}
