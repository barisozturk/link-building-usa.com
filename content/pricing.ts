export type PricingPackage = {
  name: string;
  price: number;
  priceLabel: string;
  from: boolean;
  dr: string;
  traffic: string;
  summary: string;
  featured: boolean;
  features: string[];
};

export type PricingFaq = {
  q: string;
  a: string;
};

export const pricingPage = {
  path: "/pricing/",
  title: "US Editorial Link Packages & Pricing",
  description:
    "Transparent pricing for American publisher outreach and editorial placements. Choose Starter, Growth, or Authority tiers with clear DR and traffic floors.",
  h1: "US editorial link packages",
  summary:
    "Every package is a placement on a vetted United States publisher—written for readers, reported with a live URL, and approved by you before it goes live.",
} as const;

export const pricingPackages: PricingPackage[] = [
  {
    name: "Starter",
    price: 275,
    priceLabel: "$275",
    from: true,
    dr: "DR 30+",
    traffic: "Traffic 1k+",
    summary:
      "Editorial placements on solid American sites at Ahrefs DR 30+ with at least 1,000 estimated monthly organic visits—vetted by hand, not pulled from a blind list.",
    featured: false,
    features: [
      "One US editorial placement per unit",
      "Ahrefs DR 30+ and traffic floor verified before delivery",
      "Prospect sample with metrics and pricing before you commit",
      "Live URL logged in your shared sheet",
    ],
  },
  {
    name: "Growth",
    price: 425,
    priceLabel: "$425",
    from: false,
    dr: "DR 40+",
    traffic: "Traffic 5k+",
    summary:
      "Stronger American hosts at Ahrefs DR 40+ with 5,000+ monthly organic visits—built for brands that need consistent monthly velocity without sacrificing page quality.",
    featured: true,
    features: [
      "One US editorial placement per unit",
      "Ahrefs DR 40+ and traffic floor verified before delivery",
      "Topical fit review for American audiences",
      "Priority outreach to news and trade desks in your niche",
      "Live URL, surrounding copy, and destination reported",
    ],
  },
  {
    name: "Authority",
    price: 650,
    priceLabel: "$650",
    from: false,
    dr: "DR 60+",
    traffic: "Traffic 10k+",
    summary:
      "High-authority US placements at Ahrefs DR 60+ with 10,000+ monthly organic visits—for competitive categories where the neighborhood of the linking page matters as much as the metric.",
    featured: false,
    features: [
      "One US editorial placement per unit",
      "Ahrefs DR 60+ and traffic floor verified before delivery",
      "Stricter outbound and neighborhood screening",
      "Digital PR-style angles where the desk requires them",
      "White-label reporting available for agencies",
    ],
  },
];

export const pricingIncludes = [
  "One editorial placement on an American publisher page",
  "A host drawn from our catalogue of 100,000+ high-authority US backlink opportunities",
  "Ahrefs DR, organic traffic estimates, Moz DA, and Majestic TF checked before delivery",
  "The live URL, the copy around the link, and the destination all reported",
  "Your approval on a prospect pool before anything publishes",
];

export const pricingDeliverySteps = [
  {
    title: "Set the criteria",
    body: "Share niche, Ahrefs DR, Moz DA, Majestic TF, a traffic floor, monthly volume, and any domains or categories to skip. The campaign is built around those numbers.",
  },
  {
    title: "Review a sample list",
    body: "Within a day you receive real US prospects with metrics and pricing attached. You see what you are buying before you commit to a monthly run rate.",
  },
  {
    title: "Approve your pool",
    body: "We expand to a full list that fits your floors. Most clients approve roughly twice their monthly target so outreach always has room to work. Nothing publishes without your sign-off.",
  },
  {
    title: "Write and place the article",
    body: "We write copy for American readers—clear structure, relevant examples, and a brand mention only where it belongs in the sentence. Submission follows each desk’s process.",
  },
  {
    title: "Log the live link",
    body: "When the piece publishes, the URL lands in your shared Google Sheet with status, destination, and notes. Outreach keeps adding fresh US opportunities each month.",
  },
];

export const pricingFaq: PricingFaq[] = [
  {
    q: "Are prices per link or per month?",
    a: "Prices shown are per editorial placement. Monthly campaigns are simply a volume of placements at the tier you choose. Agencies often mix Growth and Authority units across clients.",
  },
  {
    q: "Do you guarantee rankings in Google US?",
    a: "No. Rankings depend on the destination page, competition, and the rest of your site. We guarantee the placement criteria you approve—live URL, metric floors, and topical fit—not a position number.",
  },
  {
    q: "Can we restrict placements to certain US states or metros?",
    a: "Yes. Regional briefs are common for multi-location brands and local service businesses. We filter prospects by geography and audience when that is part of the brief.",
  },
  {
    q: "What metrics do you verify on every host?",
    a: "Ahrefs DR and organic traffic estimates, Moz DA, and Majestic TF, plus a human read of the site, archive quality, and outbound neighborhood. A high DR alone is never enough.",
  },
  {
    q: "How fast do placements typically go live?",
    a: "Many contributed pieces publish within two to six weeks of approval, depending on desk calendars. Digital PR and newsroom coverage can move faster or slower with the news cycle. Statuses stay visible in the shared sheet.",
  },
  {
    q: "Do you offer white-label delivery for agencies?",
    a: "Yes. Reporting, sheet access, and client-facing language can be white-labeled. Volume quotes for multi-client rosters are available on request.",
  },
];

export const pricingAgencyQuote = {
  kicker: "For agencies",
  title: "Need a custom US volume quote?",
  body: "Running American publisher outreach across several clients, needing white-label delivery, or mixing tiers at scale? Tell us your roster, metric floors, and timeline—we will send a proposal that matches how you bill.",
  label: "Request a custom quote",
};
