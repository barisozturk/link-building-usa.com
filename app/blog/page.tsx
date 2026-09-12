import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { formatDate, orderedPosts } from "@/content/blog";
import { breadcrumbJson, buildMetadata, webPageJson } from "@/lib/seo";

const page = {
  path: "/blog/",
  title: "US Link Building Insights & Guides",
  h1: "Notes on earning links in the United States",
  description:
    "Practical guides on US publisher quality, guest posting, digital PR, regional placements, and measuring link campaign ROI for American brands.",
  summary:
    "Field notes for teams competing in American search—publisher vetting, outreach craft, and measurement without the vendor fog.",
} as const;

export const metadata = buildMetadata({
  title: page.title,
  description: page.description,
  path: page.path,
});

export default function BlogIndexPage() {
  const posts = orderedPosts();

  return (
    <>
      <PageHero
        kicker="Blog"
        title={page.h1}
        summary={page.summary}
        crumbs={[{ label: "Home", href: "/" }, { label: "Blog" }]}
      />
      <section className="page-shell py-16 md:py-20">
        <div className="grid gap-10 md:grid-cols-2">
          {posts.map((post) => (
            <article key={post.slug} className="border-t border-line pt-7">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-tide">
                {post.kicker}
              </p>
              <h2 className="mt-3 text-2xl font-bold leading-snug text-ink">
                <Link href={`/blog/${post.slug}/`} className="hover:text-tide">
                  {post.title}
                </Link>
              </h2>
              <p className="mt-3 leading-relaxed text-ink-muted">{post.excerpt}</p>
              <p className="mt-4 text-sm text-ink-muted">
                {formatDate(post.date)} · {post.minutes} min · {post.author}
              </p>
            </article>
          ))}
        </div>
      </section>
      <CtaBand />
      <JsonLd
        data={webPageJson({
          name: page.h1,
          description: page.description,
          path: page.path,
        })}
      />
      <JsonLd
        data={breadcrumbJson([
          { name: "Home", path: "/" },
          { name: "Blog", path: page.path },
        ])}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Blog",
          name: page.h1,
          description: page.description,
          url: "https://link-building-usa.com/blog/",
        }}
      />
    </>
  );
}
