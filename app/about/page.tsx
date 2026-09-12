import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { breadcrumbJson, buildMetadata, webPageJson } from "@/lib/seo";
import { addressInline, operations, site } from "@/lib/site";

const page = {
  path: "/about/",
  title: "About Our US Link Acquisition Team",
  h1: "Built in San Francisco for American search",
  description:
    "Learn how our San Francisco team approaches editorial placements on United States publishers—from metric floors to the shared sheets we update when URLs go live.",
  summary:
    "We are an editorial link acquisition practice focused on United States publishers. The work lives in prospect lists, pitch threads, and shared reporting sheets—not in vague “authority packages.”",
} as const;

export const metadata = buildMetadata({
  title: page.title,
  description: page.description,
  path: page.path,
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        kicker="About"
        title={page.h1}
        summary={page.summary}
        crumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      />
      <section className="page-shell grid gap-12 py-16 md:grid-cols-[1.2fr_0.8fr] md:py-20">
        <div className="prose-site max-w-none">
          <h2>Why a US-only focus</h2>
          <p>
            Brands competing in American Google results need citations from pages Americans
            actually read. A strong European blog or a thin global “guest post” network rarely
            substitutes for a relevant trade desk, regional lifestyle title, or national
            vertical that already covers your category in the United States.
          </p>
          <p>
            We keep the publisher file American on purpose: newsrooms, trade magazines, niche
            blogs with real audiences, and digital PR opportunities where a journalist—not a
            marketplace—decides the mention.
          </p>
          <h2>How we work</h2>
          <p>
            Criteria first. You set DR, traffic, topical floors, destinations, and anything we
            should never touch. We return a sample pool with pricing attached. Writing and
            outreach start only after you approve the hosts. Live URLs land in a shared sheet
            the day they publish.
          </p>
          <p>
            Metrics are filing columns—{operations.metrics}. They never replace opening the
            homepage, reading three articles, and checking outbound neighborhoods.
          </p>
          <h2>Where we are</h2>
          <p>
            Our desk is in San Francisco at {addressInline()}. Reach us at{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a>, or{" "}
            <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer">
              open the office in Google Maps
            </a>
            .
          </p>
        </div>
        <aside className="h-fit rounded-2xl border border-line bg-fog p-7">
          <p className="kicker">At a glance</p>
          <dl className="mt-6 space-y-5">
            <div>
              <dt className="text-sm text-ink-muted">Publishers on file</dt>
              <dd className="text-2xl font-bold text-ink">{operations.publishersOnFile}</dd>
            </div>
            <div>
              <dt className="text-sm text-ink-muted">Outreach</dt>
              <dd className="text-lg font-semibold text-ink">{operations.monthlyOutreach}</dd>
            </div>
            <div>
              <dt className="text-sm text-ink-muted">Office</dt>
              <dd className="text-ink-soft">{addressInline()}</dd>
            </div>
            <div>
              <dt className="text-sm text-ink-muted">Email</dt>
              <dd>
                <a className="link-tide" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
              </dd>
            </div>
          </dl>
        </aside>
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
          { name: "About", path: page.path },
        ])}
      />
    </>
  );
}
