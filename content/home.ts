export type HomeSection = {
  kicker?: string;
  title: string;
  body: string;
  items?: { title: string; body: string }[];
};

export const home = {
  path: "/",
  title: "Link Building USA | #1 Link Building Services in the USA",
  h1: "Link Building USA",
  description:
    "Link Building USA is a specialist backlink agency in the United States, with a large database of American sites across every niche. Get in touch today.",
  supporting:
    "Link Building USA is a leading SEO backlink services agency in the United States. Over the 8 years in the industry, we have managed to develop a huge database of USA backlinks across various niches. If you are looking to build a high-quality link building profile in the USA, get in touch with us now!",
  trustedBy: "Trusted by leading brands",
  heroImageAlt: "Low-poly United States map with a network of publisher backlink connections",
  promise: {
    kicker: "The promise",
    title: "USA Backlinks from websites that your buyers already trust!",
    body: "We build authority the way US search rewards it: relevant mentions on pages Americans actually read, with metrics you can verify and a shared sheet that updates when each URL goes live. Every link building campaign in USA starts with the commercial pages you need to support—not a vanity chart of referring domains that never touch revenue URLs.",
  } satisfies HomeSection,
  servicesTeaser: {
    kicker: "Services",
    title: "Outreach, guest posting, and digital PR for the US market",
    body: "USA Link building campaigns are scoped for American search—not a generic “international” folder. Choose the motion that fits the pages you need to support.",
    items: [
      {
        title: "USA guest posting",
        body: "Contributed articles on American news and trade sites, written for readers and placed only after you approve the host.",
      },
      {
        title: "Publisher outreach",
        body: "Prospecting across our US database with Ahrefs, Moz, and Majestic floors, plus a human review of every domain.",
      },
      {
        title: "Digital PR links",
        body: "Data-led and newsroom angles that earn coverage from journalists covering your beat in the United States.",
      },
    ],
  } satisfies HomeSection,
  process: {
    kicker: "Process",
    title: "You set the floors. We fill the sheet.",
    body: "Criteria first, sample list within a day, approved pool before writing, live URLs as they publish. Outreach keeps feeding new American opportunities every month.",
    items: [
      {
        title: "Brief the numbers",
        body: "Niche, DR/DA/TF, traffic floor, monthly volume, and any skip list.",
      },
      {
        title: "Approve the pool",
        body: "Review real prospects with pricing attached—nothing goes live blind.",
      },
      {
        title: "Publish and report",
        body: "Articles written for US readers, links logged the moment they appear.",
      },
    ],
  } satisfies HomeSection,
  methodology: {
    kicker: "Methodology",
    title: "How we run link building for the US market",
    body: "American search is not a single ranking board—it is a set of audiences, desks, and regional habits. Our methodology keeps that reality in the brief so every placement earns its keep.",
    items: [
      {
        title: "Audience before domain score",
        body: "We open the homepage, read recent articles, and ask whether a US buyer in your category would trust the mention. Ahrefs DR, Moz DA, and Majestic TF are filed together after that human read—not instead of it.",
      },
      {
        title: "Destination URLs named up front",
        body: "Category hubs, comparison pages, and money templates get the neighborhood. Blog posts and soft resources support them. We do not dump authority onto URLs that are unfinished or off-strategy.",
      },
      {
        title: "Anchors that look earned",
        body: "Branded and descriptive anchors dominate the mix. Exact-match commercial strings stay rare on purpose, because natural US profiles do not read like a spreadsheet of keywords.",
      },
      {
        title: "Reporting you can audit",
        body: "Live URLs, host metrics, destination, and surrounding context land in a shared sheet the day they publish. If a placement drifts from the brief, we decline it before it counts.",
      },
    ],
  } satisfies HomeSection,
  standards: {
    kicker: "Quality standard",
    title: "What qualifies as a US backlink worth buying",
    body: "We decline more hosts than we accept. That filter is the product: a smaller list of American publishers that still look like publications when you zoom in.",
    items: [
      {
        title: "Real editorial footprint",
        body: "Bylines, publish cadence, and topical sections that match how Americans research your category—not a thin contributed-post mill with identical templates.",
      },
      {
        title: "Traffic that behaves like an audience",
        body: "Estimated organic visits are a floor, not a trophy. We look for distribution across pages and queries that suggest readers, not inflated charts.",
      },
      {
        title: "Outbound neighborhood hygiene",
        body: "We walk the outbound links around candidate URLs. Paid-link footprints, gambling spam, and unrelated affiliate clusters are grounds to skip—even when the DR looks flattering.",
      },
    ],
  } satisfies HomeSection,
  whyUs: {
    kicker: "Why us",
    title: "Eight years running USA link building campaigns",
    body: "Link Building USA was built around one market. That focus shows up in a catalogue of 100,000+ high-authority US backlink opportunities, 100+ campaigns delivered, and briefs written for American brands and agencies.",
    items: [
      {
        title: "100,000+ US backlink opportunities",
        body: "Across eight years we have grown a large catalogue of high-authority, high-traffic USA placements spanning news, trade, niche blogs, and digital PR—continuously refreshed, not scraped once and frozen.",
      },
      {
        title: "Agency-ready white-label options",
        body: "Marketing teams and SEO agencies get scoped proposals, sample hosts, and reporting that can sit inside your client workflow without renaming the work as a marketplace dump.",
      },
      {
        title: "100+ campaigns in the USA",
        body: "Ongoing and completed programs for brands competing in American search—planned for the queries and pages that move pipeline, with placements that survive a compliance review.",
      },
    ],
  } satisfies HomeSection,
  proof: {
    kicker: "Proof",
    title: "Campaigns measured on US outcomes",
    body: "Case studies cover SaaS, ecommerce, fintech, healthcare, travel, cleantech, fashion, and edtech brands competing in American search—with editorial placements, referral signals, and visibility lifts you can inspect.",
  } satisfies HomeSection,
  industries: {
    kicker: "Industries",
    title: "Built for brands that sell into the United States",
    body: "Whether you are a coastal DTC label or a national B2B platform, the publisher file is filtered for the audience that buys from you—not a one-size regional package.",
    items: [
      { title: "B2B SaaS", body: "Category and comparison pages that need trade and tech citations." },
      { title: "Ecommerce", body: "Category authority without coupon-site sludge." },
      { title: "Fintech & healthcare", body: "YMYL-aware placements you can show compliance." },
      { title: "Travel, energy, education", body: "Vertical desks that match how Americans research." },
    ],
  } satisfies HomeSection,
  notes: {
    kicker: "From the desk",
    title: "Notes on Link Building in USA",
    body: "Publisher quality, regional versus national placements, natural profiles, and ROI measurement—written for teams running US SEO, not recycled from another market.",
  } satisfies HomeSection,
  cta: {
    title: "Tell us your needs and we prepare your link building campaign in US!",
    body: "Send your site, niche, and metrics you care about. We reply with a scoped proposal and a sample of US backlinks that fit your criteria.",
  },
} as const;
