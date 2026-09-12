import type { Metadata } from "next";
import { absUrl, site } from "./site";

type BuildMeta = {
  title: string;
  description: string;
  path: string;
  absoluteTitle?: boolean;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  authors?: { name: string }[];
  image?: string;
  imageAlt?: string;
};

export function buildMetadata({
  title,
  description,
  path,
  absoluteTitle,
  type = "website",
  publishedTime,
  modifiedTime,
  authors,
  image,
  imageAlt,
}: BuildMeta): Metadata {
  const url = absUrl(path);
  const ogImage = image ?? site.ogImage;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: url },
    robots: { index: true, follow: true },
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      locale: site.locale,
      type,
      images: [
        {
          url: absUrl(ogImage),
          width: 1200,
          height: 630,
          alt: imageAlt ?? `${site.name}`,
        },
      ],
      ...(type === "article"
        ? {
            publishedTime,
            modifiedTime: modifiedTime ?? publishedTime,
            ...(authors?.length
              ? { authors: authors.map((author) => author.name) }
              : {}),
          }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absUrl(ogImage)],
    },
  };
}

export function breadcrumbJson(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absUrl(item.path),
    })),
  };
}

export function organizationJson() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: site.name,
    url: site.url,
    email: site.email,
    image: absUrl(site.logoPath),
    logo: absUrl(site.logoPath),
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.locality,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.countryCode,
    },
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    openingHours: "Mo-Fr 09:00-18:00",
  };
}

export function websiteJson() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: site.url,
    publisher: { "@type": "Organization", name: site.name, url: site.url },
  };
}

export function webPageJson(opts: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: opts.name,
    description: opts.description,
    url: absUrl(opts.path),
    isPartOf: { "@type": "WebSite", name: site.name, url: site.url },
  };
}

export function serviceJson(opts: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    url: absUrl(opts.path),
    provider: {
      "@type": "ProfessionalService",
      name: site.name,
      url: site.url,
    },
    areaServed: "US",
  };
}

export function blogPostingJson(opts: {
  title: string;
  description: string;
  path: string;
  datePublished: string;
  authorName: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: opts.title,
    description: opts.description,
    url: absUrl(opts.path),
    datePublished: opts.datePublished,
    dateModified: opts.datePublished,
    author: { "@type": "Person", name: opts.authorName },
    publisher: {
      "@type": "Organization",
      name: site.name,
      logo: { "@type": "ImageObject", url: absUrl(site.logoPath) },
    },
    mainEntityOfPage: absUrl(opts.path),
  };
}
