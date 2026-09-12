import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { breadcrumbJson, buildMetadata, webPageJson } from "@/lib/seo";
import { site } from "@/lib/site";

const page = {
  path: "/terms/",
  title: "Terms of Use",
  h1: "Terms of use",
  description: `Terms governing use of the ${site.domain} website and related enquiries.`,
  summary: "The rules that apply when you browse this site or send us an enquiry.",
} as const;

export const metadata = buildMetadata({
  title: page.title,
  description: page.description,
  path: page.path,
});

export default function TermsPage() {
  return (
    <>
      <PageHero
        kicker="Legal"
        title={page.h1}
        summary={page.summary}
        crumbs={[{ label: "Home", href: "/" }, { label: "Terms" }]}
      />
      <section className="page-shell prose-site max-w-3xl py-16 md:py-20">
        <p>Last updated: September 12, 2026</p>
        <h2>Agreement</h2>
        <p>
          By using {site.domain}, you agree to these terms. If you do not agree, please do not
          use the site. Client engagements are governed by a separate written agreement when
          work begins.
        </p>
        <h2>Informational content</h2>
        <p>
          Blog posts, case studies, and service descriptions are provided for general
          information. They are not legal, financial, or medical advice, and results described
          in case studies are not guarantees for future campaigns.
        </p>
        <h2>Intellectual property</h2>
        <p>
          Site design, copy, and branding are owned by {site.name} unless otherwise noted. You
          may not copy substantial portions for commercial use without permission.
        </p>
        <h2>Enquiries and proposals</h2>
        <p>
          Submitting a contact form does not create a client relationship. Pricing shown on
          this site is indicative and may change based on niche difficulty, volume, and
          publisher availability.
        </p>
        <h2>Limitation of liability</h2>
        <p>
          To the fullest extent permitted by law, {site.name} is not liable for indirect or
          consequential damages arising from use of this website. Search rankings and traffic
          depend on many factors outside any single service.
        </p>
        <h2>Contact</h2>
        <p>
          Questions about these terms:{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a>, {site.address.street},{" "}
          {site.address.locality}, {site.address.region} {site.address.postalCode},{" "}
          {site.address.countryName}.
        </p>
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
          { name: "Terms", path: page.path },
        ])}
      />
    </>
  );
}
