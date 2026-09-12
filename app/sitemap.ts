import type { MetadataRoute } from "next";
import { orderedPosts } from "@/content/blog";
import { orderedCaseStudies } from "@/content/case-studies";
import { services } from "@/content/services";
import { absUrl } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    "/",
    "/services/",
    "/pricing/",
    "/case-studies/",
    "/blog/",
    "/about/",
    "/our-team/",
    "/contact/",
    "/privacy-policy/",
    "/terms/",
  ];

  const entries: MetadataRoute.Sitemap = [
    ...staticPaths.map((path) => ({
      url: absUrl(path),
      lastModified: new Date("2026-09-12"),
      changeFrequency: path === "/" ? ("weekly" as const) : ("monthly" as const),
      priority: path === "/" ? 1 : 0.7,
    })),
    ...services.map((service) => ({
      url: absUrl(service.path),
      lastModified: new Date("2026-09-12"),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...orderedPosts().map((post) => ({
      url: absUrl(`/blog/${post.slug}/`),
      lastModified: new Date(post.date),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...orderedCaseStudies().map((study) => ({
      url: absUrl(`/case-studies/${study.slug}/`),
      lastModified: new Date("2026-09-12"),
      changeFrequency: "monthly" as const,
      priority: 0.65,
    })),
  ];

  return entries;
}
