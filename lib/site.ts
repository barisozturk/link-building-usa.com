export const site = {
  name: "Link Building USA",
  shortName: "LinkBuildingUSA",
  domain: "link-building-usa.com",
  url: "https://link-building-usa.com",
  email: "fabi@site-media.co.uk",
  locale: "en_US",
  lang: "en-US",
  logoPath: "/logo-dark.png",
  ogImage: "/og.svg",
  formspree: "https://formspree.io/f/xqenglqv",
  mapsUrl: "https://maps.app.goo.gl/L35Kfypo4b4Wh6kC7",
  address: {
    street: "40 Boardman Pl.",
    locality: "San Francisco",
    region: "CA",
    postalCode: "94103",
    countryCode: "US",
    countryName: "United States",
  },
} as const;

export const nav = [
  { href: "/services/", label: "Services" },
  { href: "/pricing/", label: "Pricing" },
  { href: "/case-studies/", label: "Case Studies" },
  { href: "/blog/", label: "Blog" },
  { href: "/our-team/", label: "Our Team" },
  { href: "/about/", label: "About" },
  { href: "/contact/", label: "Contact" },
] as const;

export const footerServices = [
  { href: "/services/usa-guest-posting/", label: "USA guest posting" },
  { href: "/services/publisher-outreach/", label: "Publisher outreach" },
  { href: "/services/digital-pr-links/", label: "Digital PR links" },
  { href: "/pricing/", label: "Pricing" },
] as const;

export const footerCompany = [
  { href: "/about/", label: "About" },
  { href: "/our-team/", label: "Our team" },
  { href: "/case-studies/", label: "Case studies" },
  { href: "/blog/", label: "Blog" },
  { href: "/contact/", label: "Contact" },
  { href: "/privacy-policy/", label: "Privacy" },
  { href: "/terms/", label: "Terms" },
] as const;

export const hours = "Monday–Friday, 9:00 AM–6:00 PM PT";

export const operations = {
  backlinkOpportunities: "100,000+",
  backlinkOpportunitiesLabel: "high-authority & traffic US backlink opportunities",
  yearsExperience: "8+",
  yearsExperienceLabel: "Years of experience running USA link building campaigns",
  campaigns: "100+",
  campaignsLabel: "Ongoing & completed Link Building Campaigns in the USA",
  metrics: "Ahrefs DR, organic traffic estimates, Moz DA, and Majestic TF",
} as const;

export function absUrl(path = "/") {
  if (path.startsWith("http")) return path;
  const normalised = path.startsWith("/") ? path : `/${path}`;
  return `${site.url}${normalised}`;
}

export function addressLines() {
  const { street, locality, region, postalCode, countryName } = site.address;
  return [street, `${locality}, ${region} ${postalCode}`, countryName];
}

export function addressInline() {
  return addressLines().join(", ");
}
