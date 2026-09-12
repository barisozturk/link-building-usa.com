export type CaseStudyStat = {
  label: string;
  value: string;
};

export type CaseStudyLogo = {
  bg: string;
  mark: string;
  name: string;
};

export type CaseStudy = {
  slug: string;
  client: string;
  industry: string;
  title: string;
  summary: string;
  description: string;
  challenge: string[];
  approach: string[];
  results: string[];
  stats: CaseStudyStat[];
  logo: CaseStudyLogo;
  period: string;
  related: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "northpeak-analytics-saas",
    client: "Northpeak Analytics",
    industry: "B2B SaaS",
    title: "US editorial placements that moved SaaS category pages",
    summary:
      "A Denver analytics platform had strong English tech blogs and quiet commercial URLs. Six months of American trade and product-review outreach rebuilt the neighborhood around the pages that sell.",
    description:
      "How Northpeak Analytics earned US editorial placements on trade and SaaS publishers, lifting category visibility and referring-domain quality over six months.",
    challenge: [
      "Northpeak sells reporting software to mid-market operations teams across the United States. Product marketing had invested heavily in English guest posts on general marketing blogs. The referring-domain chart looked busy. Search Console for the category and comparison URLs that feed pipeline did not.",
      "Competitors with thinner products outranked on commercial queries because their citations sat on operations, logistics, and vertical SaaS titles American buyers already read. Northpeak’s profile looked like a content mill’s portfolio, not a B2B vendor’s.",
      "The brief was not more volume. It was: make the money pages look like they belong next to American trade coverage, with anchors a writer would actually type.",
    ],
    approach: [
      "We named three destination URLs—two comparisons and one category hub—and paused outreach to unfinished templates. Prospects came from US trade press covering operations software, analytics, and mid-market IT, not from a recycled “SaaS guest post” list.",
      "Every host was read for bylines, outbound patterns, and topical overlap. Ahrefs DR, Moz DA, and Majestic TF were filed together so a single vendor score could not veto a magazine buyers already trust. Exact-match commercial anchors were capped.",
      "Angles centered on how US ops teams assemble monthly reports, with a small original dataset editors could quote. Guest posts ran where desks still accept them; reported mentions were preferred when the title already covered the beat.",
    ],
    results: [
      "Organic sessions on the three target URLs rose 58% against the prior six months. Non-brand clicks in Search Console for the US property moved 41%.",
      "Queries in the US top ten for the commercial cluster went from 9 to 23. Referral sessions from accepted hosts stayed modest in absolute terms but clicked—useful as a quality signal.",
      "The referring-domain mix shifted toward trade and product titles. Unsolicited mentions from adjacent American blogs began appearing without outreach, which is the unglamorous proof the graph noticed.",
    ],
    stats: [
      { label: "Category organic", value: "+58%" },
      { label: "Top-10 queries", value: "9 → 23" },
      { label: "Editorial placements", value: "36" },
    ],
    logo: { bg: "#1e3a5f", mark: "NA", name: "Northpeak Analytics" },
    period: "Jan–Jun 2025",
    related: [
      "harborline-market-ecommerce",
      "clearledger-fintech",
      "evaluate-us-publisher-quality",
    ],
  },
  {
    slug: "harborline-market-ecommerce",
    client: "Harborline Market",
    industry: "Ecommerce",
    title: "American publisher outreach for ecommerce category growth",
    summary:
      "A coastal home-goods retailer replaced coupon-site residue with lifestyle and retail editorial links aimed at three category pages that actually convert.",
    description:
      "Harborline Market rebuilt its US ecommerce backlink profile with American lifestyle and retail publishers, growing category organic traffic over seven months.",
    challenge: [
      "Harborline’s catalogue was strong in kitchen and home. The previous vendor had filled the profile with coupon blogs, deal aggregators, and thin round-ups that happened to mention the brand. Rank tracking from a vanity location looked flattering. Rank tracking against the queries shoppers type did not.",
      "Category pages competed against national retailers with deeper editorial neighborhoods. Gift-guide season approached and the site had almost no placements on the consumer titles that publish those lists.",
      "Internal linking from blog assets to categories was incomplete. Outreach into the wrong destination would have taught the graph the wrong URL.",
    ],
    approach: [
      "The brief named three category hubs and a seasonal gift-guide asset as the only destinations. Coupon and deal networks were declined on sight, regardless of DR.",
      "Prospects mixed national lifestyle verticals with regional lifestyle titles in markets where Harborline ships fastest. Seasonal pitches followed the US retail calendar—back-to-school, holiday gifting, spring refresh—not a flat monthly quota.",
      "Copy used American product language, shipping expectations, and price context shoppers recognize. Anchors stayed mostly branded or descriptive. Live URLs were checked for surrounding outbound quality before they counted toward the month.",
    ],
    results: [
      "Combined organic sessions on the three category pages rose 47%. Non-brand US clicks in Search Console rose 36%.",
      "Referring domains classified as editorial consumer or retail trade rose from 14 to 49. Coupon-classified residue stopped growing.",
      "Holiday gift-guide mentions drove a measurable referral spike that converted above site average—proof the placements reached shoppers, not just crawlers.",
    ],
    stats: [
      { label: "Category organic", value: "+47%" },
      { label: "Editorial RDs", value: "14 → 49" },
      { label: "Campaign length", value: "7 months" },
    ],
    logo: { bg: "#0f5c4c", mark: "HM", name: "Harborline Market" },
    period: "Sep 2024–Mar 2025",
    related: [
      "atelier-west-fashion",
      "northpeak-analytics-saas",
      "ecommerce-backlinks-us-market",
    ],
  },
  {
    slug: "clearledger-fintech",
    client: "ClearLedger",
    industry: "Fintech",
    title: "Compliance-safe US mentions for a payments brand",
    summary:
      "A YMYL payments company needed citations a compliance lead could open. The campaign was slower, narrower, and still moved the educational URLs that had to rank in American search.",
    description:
      "ClearLedger earned US fintech and business-press mentions that survived legal review, improving visibility on educational payment guides over eight months.",
    challenge: [
      "ClearLedger moves money for US SMEs. The pages that needed visibility were educational: fee explanations, settlement timelines, and how to read a remittance. Those URLs sit in a YMYL neighborhood. A compliance lead will open every citation.",
      "The inherited file mixed global fintech round-ups, personal-finance blogs with thin US relevance, and a handful of solid American business mentions. Search demand and vocabulary were local to US banking habits.",
      "Volume vendors offered “finance guest posts” that would never pass legal. The brief required a decline rate stakeholders would accept.",
    ],
    approach: [
      "Prospect lists were filtered for American business, accounting, and fintech trade titles with identifiable desks. Networks of identical “write for us” finance blogs were removed before the client saw a sample.",
      "Every draft went through a lightweight claims checklist before submission: no unverifiable performance promises, no regulatory overreach, product named only where a finance reader would expect a named tool.",
      "Reported expert quotes were prioritized when desks were running payments or SME cash-flow stories. Contributed articles ran only on hosts that still maintained an editorial review.",
    ],
    results: [
      "Organic sessions on three educational guides rose 51%. Placements accepted after legal review totaled 22; more than half of the long-list prospects were declined before pitch.",
      "The backlink neighborhood became something the compliance lead could screenshot in a board pack. Referral traffic from accepted hosts was small and high-intent.",
      "Two commercial terms adjacent to the guides entered the US top ten. Rankings were reported against US locations only—no blended “global fintech” chart.",
    ],
    stats: [
      { label: "Guide organic", value: "+51%" },
      { label: "Placements accepted", value: "22" },
      { label: "Prospects declined", value: "57%" },
    ],
    logo: { bg: "#1a365d", mark: "CL", name: "ClearLedger" },
    period: "Feb–Sep 2025",
    related: [
      "northpeak-analytics-saas",
      "redwood-clinic-health",
      "natural-us-backlink-profiles",
    ],
  },
  {
    slug: "redwood-clinic-health",
    client: "Redwood Clinic Network",
    industry: "Healthcare",
    title: "Regional US health publishers for a multi-clinic network",
    summary:
      "A West Coast clinic network needed local and regional health coverage that matched how patients search by metro—not national wellness round-ups with no geographic fit.",
    description:
      "Redwood Clinic Network used regional American health and lifestyle publishers to grow organic visibility for location and service pages over nine months.",
    challenge: [
      "Redwood operates clinics across several Western metros. Patients search with city modifiers and service terms. National wellness blogs with no geographic relevance were not moving those results.",
      "Prior outreach had chased high-DR national health sites that accepted almost any contributed post. The links looked strong in a tool and weak next to the queries that book appointments.",
      "Medical claims required careful wording. Marketing wanted speed. Clinical review wanted restraint. The campaign had to satisfy both.",
    ],
    approach: [
      "Geography led the brief. Prospects prioritized regional health sections, city lifestyle titles, and state business journals covering healthcare employers—not generic national wellness mills.",
      "Destination URLs were location hubs and a small set of service explainers cleared by clinical review. Anchors stayed branded or geographic; exact-match medical keyword spam was refused.",
      "Pitches offered patient-education angles and regional access stories editors already cover. Anything that sounded like a treatment claim without clearance was rewritten or dropped.",
    ],
    results: [
      "Organic sessions on location hubs rose 44%. Appointment-related landing pages saw a 29% lift in non-brand clicks from US Search Console.",
      "Regional referring domains in target metros more than tripled. National wellness residue stopped being added.",
      "Clinic marketers finally had a publisher file they could defend in regional leadership meetings—city by city, not as one blended health chart.",
    ],
    stats: [
      { label: "Location organic", value: "+44%" },
      { label: "Regional RDs", value: "3.1×" },
      { label: "Campaign length", value: "9 months" },
    ],
    logo: { bg: "#7f1d1d", mark: "RC", name: "Redwood Clinic" },
    period: "Mar–Nov 2025",
    related: [
      "cascade-trails-travel",
      "clearledger-fintech",
      "regional-vs-national-us-links",
    ],
  },
  {
    slug: "cascade-trails-travel",
    client: "Cascade Trails Co.",
    industry: "Travel",
    title: "US travel press citations for a Pacific Northwest brand",
    summary:
      "An outdoor travel company earned American travel and regional lifestyle coverage that supported trip pages and a destination guide hub—not homepage-only vanity links.",
    description:
      "Cascade Trails Co. grew US organic visibility with travel-press and regional lifestyle placements aimed at trip and destination URLs over six months.",
    challenge: [
      "Cascade sells guided trips and gear bundles tied to Pacific Northwest destinations. The homepage ranked for brand. Trip and guide URLs stalled behind aggregators and national outdoor publishers.",
      "Previous placements sat on generic travel blogs that accepted anyone. Seasonal demand spikes were not matched by a publisher calendar.",
      "The team needed links that looked like travel journalism, because that is what their buyers read while planning.",
    ],
    approach: [
      "Destinations were trip templates and a destination guide hub with internal links into bookable pages. Homepage-only pitches were declined.",
      "Outreach mixed national outdoor and travel desks with Pacific Northwest lifestyle and city titles. Seasonal angles followed US travel planning cycles—summer hiking, fall foliage, winter escapes.",
      "Original route notes and packing data gave editors something to cite. Product mentions appeared only where a gear sentence already belonged.",
    ],
    results: [
      "Organic sessions on trip and guide URLs rose 62%. Brand traffic stayed relatively flat—discovery work, not branded capture.",
      "Twenty-eight editorial placements went live on the approved pool. Referral sessions from travel hosts converted above site average during peak planning months.",
      "Several secondary destination queries entered page one in US results, giving the content team a reason to keep investing in guide depth.",
    ],
    stats: [
      { label: "Trip/guide organic", value: "+62%" },
      { label: "Editorial placements", value: "28" },
      { label: "Campaign length", value: "6 months" },
    ],
    logo: { bg: "#14532d", mark: "CT", name: "Cascade Trails" },
    period: "Apr–Sep 2025",
    related: [
      "voltshift-energy",
      "redwood-clinic-health",
      "digital-pr-american-startups",
    ],
  },
  {
    slug: "voltshift-energy",
    client: "VoltShift Energy",
    industry: "Cleantech",
    title: "Trade and policy coverage for a US cleantech scale-up",
    summary:
      "A cleantech scale-up needed citations on energy trade press and regional business journals—not lifestyle blogs that vaguely mention “green.”",
    description:
      "VoltShift Energy earned American energy-trade and business-press placements that improved organic visibility on commercial and explainer pages over eight months.",
    challenge: [
      "VoltShift sells commercial energy hardware and software into US facilities teams. Decision-makers read energy trade press, utility news, and regional business journals. They do not discover vendors on soft lifestyle blogs.",
      "The existing profile mixed ESG round-ups and unrelated sustainability guest posts. Metrics looked fine. Relevance did not.",
      "Policy and incentive content changed quickly. Outdated claims in outreach drafts would have embarrassed the brand.",
    ],
    approach: [
      "The approved pool centered on US energy trade titles, cleantech verticals, and business journals in states where VoltShift sells hardest. Lifestyle “eco” blogs were excluded by default.",
      "Digital PR used a facilities energy-spend survey and reactive commentary on incentive news. Legal reviewed claims about savings and compliance before any pitch left the building.",
      "Explainers and commercial category pages were the only destinations. Anchors stayed branded or topical without stuffing incentive keywords.",
    ],
    results: [
      "Organic sessions on commercial and explainer clusters rose 49%. Referring domains from energy and business press rose from 11 to 38.",
      "Sales reported inbound demos that cited trade coverage during evaluation—qualitative proof the neighborhood matched the buyer.",
      "The shared sheet became the source of truth for which policy stories were still accurate enough to pitch.",
    ],
    stats: [
      { label: "Target organic", value: "+49%" },
      { label: "Trade/business RDs", value: "11 → 38" },
      { label: "Campaign length", value: "8 months" },
    ],
    logo: { bg: "#854d0e", mark: "VS", name: "VoltShift Energy" },
    period: "Jan–Aug 2025",
    related: [
      "cascade-trails-travel",
      "brightspan-edtech",
      "guest-posts-american-news",
    ],
  },
  {
    slug: "atelier-west-fashion",
    client: "Atelier West",
    industry: "Fashion DTC",
    title: "Lifestyle editorial links for a West Coast fashion DTC",
    summary:
      "A DTC fashion brand swapped directory and coupon residue for American lifestyle and regional fashion coverage that supported lookbook and category URLs.",
    description:
      "Atelier West earned US lifestyle and fashion editorial placements that grew organic revenue share and cleaned up a fragile ecommerce link neighborhood.",
    challenge: [
      "Atelier West sold well on paid social. Organic category terms stalled. The link profile carried directory submissions, coupon stubs, and a few national fashion mentions that never connected to money pages.",
      "Competitors appeared in seasonal lookbooks and city fashion features. Atelier’s press page listed coverage that did not pass a followed link—or linked only to the homepage.",
      "The brand wanted national glossies and ignored regional lifestyle titles that their actual customers read in LA, Seattle, and Austin.",
    ],
    approach: [
      "We rebuilt the destination map: category pages, a seasonal lookbook hub, and a materials story editors could cite. Homepage-only vanity was no longer the default ask.",
      "The pool mixed national fashion and lifestyle verticals with regional titles in core metros. Coupon and deal sites were hard-declined even when DR looked tempting.",
      "Angles included a small consumer survey on capsule wardrobes and founder storytelling tied to West Coast manufacturing—not catalog dumps dressed as articles.",
    ],
    results: [
      "Organic revenue share from US search rose 33% year over year on the tracked categories. Referring domains classified as lifestyle editorial rose while coupon residue stopped growing.",
      "Thirty-one placements went live on the approved pool. Two published rewrites that turned into link farms were declined and replaced.",
      "Regional features drove referral spikes that matched metro ad cohorts—evidence geography in the publisher file was doing real work.",
    ],
    stats: [
      { label: "Organic revenue share", value: "+33%" },
      { label: "Editorial placements", value: "31" },
      { label: "Campaign length", value: "10 months" },
    ],
    logo: { bg: "#4a1942", mark: "AW", name: "Atelier West" },
    period: "Feb–Nov 2025",
    related: [
      "harborline-market-ecommerce",
      "brightspan-edtech",
      "ecommerce-backlinks-us-market",
    ],
  },
  {
    slug: "brightspan-edtech",
    client: "Brightspan Learning",
    industry: "Edtech",
    title: "Education and district-facing US citations for an edtech platform",
    summary:
      "An edtech platform needed mentions on education trade sites and district-facing resources—not generic startup blogs that never reach curriculum buyers.",
    description:
      "Brightspan Learning earned American education-trade and nonprofit placements that improved visibility on educator and district landing pages over seven months.",
    challenge: [
      "Brightspan sells to US districts and school leaders. Buyers research on education trade press, association resources, and practitioner blogs. Startup round-ups did not move those queries.",
      "The inherited profile was heavy on SaaS directories and light on education-specific hosts. Product pages were being pitched as destinations; educators wanted research and implementation stories.",
      "Procurement cycles are long. The campaign needed durable citations, not a one-month spike for a launch week.",
    ],
    approach: [
      "Destinations shifted to educator guides, implementation case pages, and a research summary hub with internal links to product. Cold pitches to product URLs stopped.",
      "Prospects prioritized US education trade titles, state association news pages where appropriate, and practitioner publications. Generic startup blogs were filtered out.",
      "Angles included anonymized outcomes data and classroom implementation lessons teachers would recognize. Claims were reviewed against what district buyers can legally hear in marketing.",
    ],
    results: [
      "Organic sessions on educator and district landing clusters rose 46%. Education-classified referring domains rose from 8 to 34.",
      "Demo request forms attributed a meaningful share of assisted conversions to trade referral sessions during the last quarter of the engagement.",
      "The publisher file is now something sales can mention in RFP conversations—coverage on titles district stakeholders already respect.",
    ],
    stats: [
      { label: "Educator-page organic", value: "+46%" },
      { label: "Education RDs", value: "8 → 34" },
      { label: "Campaign length", value: "7 months" },
    ],
    logo: { bg: "#1e40af", mark: "BL", name: "Brightspan Learning" },
    period: "May–Nov 2025",
    related: [
      "voltshift-energy",
      "atelier-west-fashion",
      "edu-gov-links-united-states",
    ],
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}

export function orderedCaseStudies() {
  return [...caseStudies];
}

export function adjacentCaseStudies(slug: string) {
  const ordered = orderedCaseStudies();
  const index = ordered.findIndex((study) => study.slug === slug);
  if (index < 0) return { previous: undefined, next: undefined };
  return {
    previous: index > 0 ? ordered[index - 1] : undefined,
    next: index < ordered.length - 1 ? ordered[index + 1] : undefined,
  };
}
