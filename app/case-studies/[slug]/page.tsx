import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import {
  adjacentCaseStudies,
  getCaseStudy,
  orderedCaseStudies,
} from "@/content/case-studies";
import { getPost } from "@/content/blog";
import { blogPostingJson, breadcrumbJson, buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return orderedCaseStudies().map((study) => ({ slug: study.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};
  return buildMetadata({
    title: study.title,
    description: study.description,
    path: `/case-studies/${study.slug}/`,
    type: "article",
  });
}

function Section({ title, paragraphs }: { title: string; paragraphs: string[] }) {
  return (
    <section className="mt-12">
      <h2 className="display text-3xl text-ink">{title}</h2>
      <div className="prose-site mt-5">
        {paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 48)}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();
  const { previous: prev, next } = adjacentCaseStudies(study.slug);

  const relatedLinks = study.related
    .map((relatedSlug) => {
      const relatedStudy = getCaseStudy(relatedSlug);
      if (relatedStudy) {
        return {
          href: `/case-studies/${relatedStudy.slug}/`,
          label: relatedStudy.client,
          kind: "Case study",
        };
      }
      const relatedPost = getPost(relatedSlug);
      if (relatedPost) {
        return {
          href: `/blog/${relatedPost.slug}/`,
          label: relatedPost.title,
          kind: "Guide",
        };
      }
      return null;
    })
    .filter(Boolean) as { href: string; label: string; kind: string }[];

  return (
    <>
      <article>
        <header className="border-b border-line bg-[linear-gradient(180deg,#eef3f7_0%,#f7fafc_100%)]">
          <div className="page-shell py-14 md:py-20">
            <nav aria-label="Breadcrumb" className="mb-6 text-sm text-ink-muted">
              <ol className="flex flex-wrap items-center gap-2">
                <li>
                  <Link href="/" className="hover:text-ink">
                    Home
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li>
                  <Link href="/case-studies/" className="hover:text-ink">
                    Case studies
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li className="text-ink">{study.client}</li>
              </ol>
            </nav>
            <p className="kicker">
              {study.industry} · {study.period}
            </p>
            <h1 className="display mt-3 max-w-4xl text-4xl text-ink md:text-5xl">
              {study.title}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-muted">
              {study.summary}
            </p>
            <div className="mt-10 grid max-w-2xl gap-6 sm:grid-cols-3">
              {study.stats.map((stat) => (
                <div key={stat.label} className="border-t border-line pt-4">
                  <p className="text-2xl font-bold text-signal">{stat.value}</p>
                  <p className="mt-1 text-sm text-ink-muted">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </header>
        <div className="page-shell max-w-3xl py-14">
          <Section title="The challenge" paragraphs={study.challenge} />
          <Section title="The approach" paragraphs={study.approach} />
          <Section title="The results" paragraphs={study.results} />
          {relatedLinks.length ? (
            <section className="mt-14 border-t border-line pt-10">
              <p className="kicker">Related</p>
              <ul className="mt-4 space-y-3">
                {relatedLinks.map((item) => (
                  <li key={item.href}>
                    <span className="mr-2 text-xs font-bold uppercase tracking-[0.12em] text-ink-muted">
                      {item.kind}
                    </span>
                    <Link href={item.href} className="font-semibold text-ink hover:text-tide">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}
        </div>
        <nav
          className="page-shell flex flex-col gap-4 border-t border-line py-10 sm:flex-row sm:justify-between"
          aria-label="Adjacent case studies"
        >
          {prev ? (
            <Link href={`/case-studies/${prev.slug}/`} className="max-w-sm hover:text-tide">
              <span className="block text-xs font-bold uppercase tracking-[0.14em] text-ink-muted">
                Previous
              </span>
              <span className="mt-1 block font-semibold">{prev.client}</span>
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link
              href={`/case-studies/${next.slug}/`}
              className="max-w-sm text-left sm:text-right hover:text-tide"
            >
              <span className="block text-xs font-bold uppercase tracking-[0.14em] text-ink-muted">
                Next
              </span>
              <span className="mt-1 block font-semibold">{next.client}</span>
            </Link>
          ) : null}
        </nav>
      </article>
      <CtaBand />
      <JsonLd
        data={blogPostingJson({
          title: study.title,
          description: study.description,
          path: `/case-studies/${study.slug}/`,
          datePublished: "2025-06-01",
          authorName: "Editorial team",
        })}
      />
      <JsonLd
        data={breadcrumbJson([
          { name: "Home", path: "/" },
          { name: "Case studies", path: "/case-studies/" },
          { name: study.title, path: `/case-studies/${study.slug}/` },
        ])}
      />
    </>
  );
}
