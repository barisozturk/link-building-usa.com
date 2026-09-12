export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  date: string;
  minutes: number;
  kicker: string;
  headings: string[];
  related: string[];
  author: string;
};

export const posts: BlogPost[] = [
  {
    slug: "evaluate-us-publisher-quality",
    title: "How to Evaluate Publisher Quality in the United States",
    description:
      "A practical checklist for vetting US publishers before outreach: editorial standards, real traffic, outbound patterns, and metric floors that hold up in American search.",
    excerpt:
      "Domain rating alone does not tell you whether an American site is worth a placement. Open the homepage, read three articles, then decide.",
    date: "2026-09-08",
    minutes: 12,
    kicker: "Publisher quality",
    headings: [
      "Open the site the way a US reader would",
      "Separate living traffic from inflated charts",
      "Read metrics as a panel, not a single score",
      "Audit outbound links and neighborhood risk",
      "Confirm topical fit for American audiences",
      "Write an approval rule your team can repeat",
    ],
    related: [
      "natural-us-backlink-profiles",
      "guest-posts-american-news",
      "measuring-us-link-campaign-roi",
    ],
    author: "Sofia Reyes",
  },
  {
    slug: "guest-posts-american-news",
    title: "Earning Guest Posts on American News and Trade Sites",
    description:
      "How US brands earn contributed articles on American newsrooms and trade desks: angles that land, pitch structure, and what editors in the States actually reject.",
    excerpt:
      "American news and trade editors do not want another generic how-to. They want a story their readers would open without a backlink attached.",
    date: "2026-08-28",
    minutes: 12,
    kicker: "Guest posting",
    headings: [
      "Map which American desks still take contributed work",
      "Lead with a newsroom angle, not a product brief",
      "Write for US readers, spelling, and examples",
      "Negotiate placement without sounding like a link vendor",
      "Track live URLs and refuse weak rewrites",
    ],
    related: [
      "digital-pr-american-startups",
      "evaluate-us-publisher-quality",
      "regional-vs-national-us-links",
    ],
    author: "Ethan Brooks",
  },
  {
    slug: "edu-gov-links-united-states",
    title: "When .edu and .gov Mentions Help US SEO Campaigns",
    description:
      "When American .edu and .gov mentions actually move US rankings, how to earn them legitimately, and which institutional shortcuts to avoid.",
    excerpt:
      "Institutional domains in the United States still carry weight—when the page is real, the mention is earned, and the topic belongs on campus or in public service.",
    date: "2026-08-14",
    minutes: 11,
    kicker: "Institutional links",
    headings: [
      "What institutional domains signal in US search",
      "Legitimate paths to university mentions",
      "Public-sector pages that can cite a brand",
      "Grey-market shortcuts that backfire",
      "Set expectations so stakeholders do not force bad tactics",
    ],
    related: [
      "natural-us-backlink-profiles",
      "evaluate-us-publisher-quality",
      "measuring-us-link-campaign-roi",
    ],
    author: "Aisha Thompson",
  },
  {
    slug: "regional-vs-national-us-links",
    title: "Regional vs National Placements for American Brands",
    description:
      "When city and state publishers outperform national titles for US brands, how to mix regional and national placements, and how to brief campaigns by geography.",
    excerpt:
      "A national feature looks impressive in a slide deck. A Dallas business journal link can do more for the query that actually converts.",
    date: "2026-07-30",
    minutes: 12,
    kicker: "Market geography",
    headings: [
      "National coverage is not always the right graph",
      "Where regional US publishers punch above their metrics",
      "Match geography to the pages that earn revenue",
      "Build a mixed portfolio without diluting focus",
      "Report regional work so executives understand the win",
    ],
    related: [
      "guest-posts-american-news",
      "ecommerce-backlinks-us-market",
      "digital-pr-american-startups",
    ],
    author: "Lauren Kim",
  },
  {
    slug: "ecommerce-backlinks-us-market",
    title: "Building Editorial Backlinks for US Ecommerce Brands",
    description:
      "How American ecommerce brands earn editorial backlinks that support category pages: gift guides, trade coverage, seasonal timing, and clean destination URLs.",
    excerpt:
      "Nobody links to a PDP. US stores that win build linkable assets, then route authority to the category pages that sell.",
    date: "2026-07-16",
    minutes: 13,
    kicker: "Ecommerce",
    headings: [
      "Stop pitching product pages as link destinations",
      "Assets American editors will actually cite",
      "Seasonality on the US retail calendar",
      "Trade press versus consumer lifestyle titles",
      "Internal linking that makes placements compound",
    ],
    related: [
      "regional-vs-national-us-links",
      "natural-us-backlink-profiles",
      "measuring-us-link-campaign-roi",
    ],
    author: "Marcus Hale",
  },
  {
    slug: "natural-us-backlink-profiles",
    title: "What a Natural US Backlink Profile Looks Like",
    description:
      "What a natural American backlink profile looks like: diverse publishers, realistic anchors, mixed link types, and brand signals that match how US sites actually get cited.",
    excerpt:
      "A natural US profile looks earned across news, trade, blogs, and occasional institutional mentions—not like a spreadsheet of identical guest posts.",
    date: "2026-07-02",
    minutes: 12,
    kicker: "Link profiles",
    headings: [
      "Natural means believable for a US brand",
      "Diversify publisher types across the American web",
      "Keep anchor text human and mostly branded",
      "Mix link types without forcing a ratio",
      "Audit questions that surface manufactured profiles",
    ],
    related: [
      "evaluate-us-publisher-quality",
      "edu-gov-links-united-states",
      "measuring-us-link-campaign-roi",
    ],
    author: "Noah Patel",
  },
  {
    slug: "digital-pr-american-startups",
    title: "Digital PR Angles That Win Coverage for American Startups",
    description:
      "Digital PR angles that earn US press coverage for American startups: original data, founder stories with a news hook, and reactive commentary that journalists will quote.",
    excerpt:
      "Startups in the United States do not need a bigger press list. They need an angle a reporter covering their beat would pitch to an editor.",
    date: "2026-06-18",
    minutes: 13,
    kicker: "Digital PR",
    headings: [
      "Separate launch noise from a real newsroom story",
      "Original data beats another product announcement",
      "Founder narratives that still earn a link",
      "Reactive commentary for US news cycles",
      "Turn coverage into durable SEO assets",
    ],
    related: [
      "guest-posts-american-news",
      "regional-vs-national-us-links",
      "measuring-us-link-campaign-roi",
    ],
    author: "Caleb Wright",
  },
  {
    slug: "measuring-us-link-campaign-roi",
    title: "How to Measure ROI from US Link Acquisition Campaigns",
    description:
      "How to measure ROI from American link acquisition: leading indicators, Search Console signals, referral quality, and when rankings are the wrong primary KPI.",
    excerpt:
      "If the only success metric is a guaranteed ranking date, the campaign is already mis-briefed. Measure the work US search actually rewards.",
    date: "2026-06-04",
    minutes: 14,
    kicker: "Measurement",
    headings: [
      "Define the job before you define the ROI formula",
      "Leading indicators that appear before rankings move",
      "Search Console and analytics views that matter in the US",
      "Cost per placement versus cost per outcome",
      "Know when to continue and when to change the brief",
    ],
    related: [
      "natural-us-backlink-profiles",
      "ecommerce-backlinks-us-market",
      "evaluate-us-publisher-quality",
    ],
    author: "Diego Alvarez",
  },
];

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}

export function orderedPosts() {
  return [...posts].sort((a, b) => b.date.localeCompare(a.date));
}

export function adjacentPosts(slug: string) {
  const ordered = orderedPosts();
  const index = ordered.findIndex((post) => post.slug === slug);
  if (index < 0) return { previous: undefined, next: undefined };
  return {
    previous: index < ordered.length - 1 ? ordered[index + 1] : undefined,
    next: index > 0 ? ordered[index - 1] : undefined,
  };
}

export function formatDate(iso: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(`${iso}T00:00:00`));
}
