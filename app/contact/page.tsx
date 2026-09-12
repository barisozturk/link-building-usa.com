import { ContactForm } from "@/components/ContactForm";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { breadcrumbJson, buildMetadata, webPageJson } from "@/lib/seo";
import { addressLines, hours, site } from "@/lib/site";

const page = {
  path: "/contact/",
  title: "Contact Our San Francisco Link Team",
  h1: "Tell us about the pages you need to support",
  description:
    "Contact our San Francisco team for a scoped proposal on American publisher outreach, guest posting, or digital PR links.",
  summary:
    "Share your site, niche, and floors. We reply with a clear proposal—not a generic rate dump.",
} as const;

export const metadata = buildMetadata({
  title: page.title,
  description: page.description,
  path: page.path,
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        kicker="Contact"
        title={page.h1}
        summary={page.summary}
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />
      <section className="page-shell grid gap-12 py-16 md:grid-cols-[1.1fr_0.9fr] md:py-20">
        <ContactForm />
        <aside className="h-fit rounded-2xl border border-line bg-fog p-7">
          <p className="kicker">Office</p>
          <h2 className="display mt-3 text-2xl text-ink">San Francisco</h2>
          <address className="mt-4 not-italic leading-relaxed text-ink-soft">
            {addressLines().map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </address>
          <p className="mt-5 text-sm text-ink-muted">{hours}</p>
          <p className="mt-6">
            <a className="link-tide font-semibold" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </p>
          <p className="mt-3">
            <a
              className="btn btn-ghost mt-2"
              href={site.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Open in Google Maps
            </a>
          </p>
          <div className="mt-8 overflow-hidden rounded-xl border border-line bg-white">
            <iframe
              title="Office location map"
              src="https://maps.google.com/maps?q=40%20Boardman%20Pl%2C%20San%20Francisco%2C%20CA%2094103&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="h-56 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </aside>
      </section>
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
          { name: "Contact", path: page.path },
        ])}
      />
    </>
  );
}
