export const servicesIndex = {
  path: "/services/",
  title: "US Link Acquisition Services",
  h1: "Services for American search visibility",
  description:
    "Guest posting, publisher outreach, and digital PR link campaigns scoped for brands competing in United States search results.",
  summary:
    "Three coordinated motions—each built around United States publishers, American readers, and the pages you actually need to support.",
} as const;

export const services = [
  {
    slug: "usa-guest-posting",
    path: "/services/usa-guest-posting/",
    title: "USA Guest Posting Services",
    h1: "USA guest posting on vetted publishers",
    description:
      "Contributed articles on American news and trade sites—written for US readers, placed only after you approve the host, and reported with live URLs.",
    summary:
      "We pitch and place contributed pieces on United States publishers that still accept editorial contributions—and decline the ones that look like paid-link farms.",
    kicker: "Guest posting",
    highlights: [
      {
        title: "Hosts you approve first",
        body: "Every prospect arrives with metrics, topical notes, and pricing. Nothing publishes until you say yes.",
      },
      {
        title: "Copy for American readers",
        body: "Examples, spelling, and sourcing match how US audiences research—not translated filler from another market.",
      },
      {
        title: "Anchors that look earned",
        body: "Branded and descriptive anchors dominate. Exact-match commercial strings stay rare on purpose.",
      },
    ],
    process: [
      "Brief niche, floors, destinations, and skip list",
      "Receive a sample pool of American hosts",
      "Approve placements; we write and place",
      "Collect live URLs in your shared sheet",
    ],
  },
  {
    slug: "publisher-outreach",
    path: "/services/publisher-outreach/",
    title: "US Publisher Outreach Campaigns",
    h1: "Publisher outreach across the US web",
    description:
      "Systematic outreach to United States publishers using Ahrefs, Moz, and Majestic floors plus human review of every domain.",
    summary:
      "Prospecting is not a CSV dump. We work a living US publisher file, pitch relevant desks, and keep new opportunities flowing every month.",
    kicker: "Outreach",
    highlights: [
      {
        title: "45,000+ US sites on file",
        body: "A maintained American publisher database filtered by niche, traffic, and outbound hygiene—not a scraped global list.",
      },
      {
        title: "Metric floors you define",
        body: "Ahrefs DR, estimated traffic, Moz DA, and Majestic TF are filed together so one score cannot hide a weak page.",
      },
      {
        title: "Human neighborhood checks",
        body: "We open the site, read the bylines, and walk the outbound links before a domain enters your approved pool.",
      },
    ],
    process: [
      "Lock criteria and monthly volume",
      "Prospect and score American hosts",
      "Pitch, negotiate, and place",
      "Report URLs with surrounding context",
    ],
  },
  {
    slug: "digital-pr-links",
    path: "/services/digital-pr-links/",
    title: "Digital PR Link Building for US Brands",
    h1: "Digital PR that earns American coverage",
    description:
      "Data-led and newsroom angles that earn editorial links from US journalists covering your beat—not recycled guest-post templates.",
    summary:
      "When the desk will not take a guest post, we build a story: original data, timely commentary, and assets journalists can quote.",
    kicker: "Digital PR",
    highlights: [
      {
        title: "Angles before assets",
        body: "We start with what a US reporter would open—then build the chart, survey, or expert note that supports it.",
      },
      {
        title: "Desks that match your beat",
        body: "Pitches go to journalists covering your category in the United States, not a blast list of unrelated lifestyle blogs.",
      },
      {
        title: "Links that survive scrutiny",
        body: "Coverage sits in real articles with real bylines. You get the URL, the outlet, and the context.",
      },
    ],
    process: [
      "Workshop story angles with your team",
      "Produce the data or asset",
      "Pitch relevant US desks",
      "Track coverage and link outcomes",
    ],
  },
] as const;

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
