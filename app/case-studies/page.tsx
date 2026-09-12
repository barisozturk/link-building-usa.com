import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { orderedCaseStudies } from "@/content/case-studies";
import { breadcrumbJson, buildMetadata, webPageJson } from "@/lib/seo";

const page = {
  path: "/case-studies/",
  title: "US Link Building Case Studies",
  h1: "Results from American publisher campaigns",
  description:
    "Case studies showing how US brands earned editorial placements and grew visibility through American publisher outreach across SaaS, ecommerce, fintech, and more.",
  summary:
    "Real campaign shapes across American industries—editorial placements, referring-domain quality, and visibility lifts you can inspect.",
} as const;

export const metadata = buildMetadata({
  title: page.title,
  description: page.description,
  path: page.path,
});

export default function CaseStudiesIndexPage() {
  const studies = orderedCaseStudies();

  return (
    <>
      <PageHero
        kicker="Case studies"
        title={page.h1}
        summary={page.summary}
        crumbs={[{ label: "Home", href: "/" }, { label: "Case studies" }]}
      />
      <section className="page-shell py-16 md:py-20">
        <div className="grid gap-8 md:grid-cols-2">
          {studies.map((study) => (
            <Link
              key={study.slug}
              href={`/case-studies/${study.slug}/`}
              className="group rounded-2xl border border-line bg-white p-7 transition hover:border-tide/40 hover:shadow-lg hover:shadow-tide/5"
            >
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-tide">
                {study.industry} · {study.period}
              </p>
              <h2 className="mt-3 text-2xl font-bold leading-snug text-ink group-hover:text-tide">
                {study.title}
              </h2>
              <p className="mt-3 leading-relaxed text-ink-muted">{study.summary}</p>
              <div className="mt-6 flex flex-wrap gap-5">
                {study.stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="text-lg font-bold text-signal">{stat.value}</p>
                    <p className="text-xs text-ink-muted">{stat.label}</p>
                  </div>
                ))}
              </div>
            </Link>
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
          { name: "Case studies", path: page.path },
        ])}
      />
    </>
  );
}
