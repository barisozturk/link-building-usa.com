import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { breadcrumbJson, buildMetadata, webPageJson } from "@/lib/seo";
import { site } from "@/lib/site";

const page = {
  path: "/privacy-policy/",
  title: "Privacy Policy",
  h1: "Privacy policy",
  description: `How ${site.domain} collects, uses, and protects personal information submitted through this website.`,
  summary: "A plain-language overview of what we collect, why we collect it, and how to reach us about privacy requests.",
} as const;

export const metadata = buildMetadata({
  title: page.title,
  description: page.description,
  path: page.path,
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        kicker="Legal"
        title={page.h1}
        summary={page.summary}
        crumbs={[{ label: "Home", href: "/" }, { label: "Privacy" }]}
      />
      <section className="page-shell prose-site max-w-3xl py-16 md:py-20">
        <p>Last updated: September 12, 2026</p>
        <h2>Who we are</h2>
        <p>
          This website is operated by {site.name} ({site.domain}). Our office is at{" "}
          {site.address.street}, {site.address.locality}, {site.address.region}{" "}
          {site.address.postalCode}, {site.address.countryName}. Contact:{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
        <h2>Information we collect</h2>
        <p>
          When you use the contact form, we receive the name, email address, and message you
          submit. Our form provider (Formspree) processes that submission so we can reply. We
          may also receive standard server and analytics logs such as IP address, browser type,
          and pages visited.
        </p>
        <h2>How we use information</h2>
        <p>
          We use contact details to respond to enquiries, prepare proposals, and—if you become a
          client—deliver services. We do not sell personal information. We do not use contact
          form submissions for unrelated marketing lists without a clear opt-in.
        </p>
        <h2>Cookies and analytics</h2>
        <p>
          The site may use essential cookies required for security and basic functionality. If
          we enable analytics tools, they may set additional cookies to help us understand
          aggregate traffic. You can control cookies through your browser settings.
        </p>
        <h2>Retention</h2>
        <p>
          Enquiry messages are kept as long as needed to respond and for reasonable business
          records. You may ask us to delete correspondence that is no longer required for a
          live project or legal obligation.
        </p>
        <h2>Your choices</h2>
        <p>
          Email {site.email} to request access, correction, or deletion of personal information
          we hold about you, subject to applicable law.
        </p>
        <h2>Changes</h2>
        <p>
          We may update this policy as practices or regulations change. The “last updated” date
          at the top of this page will reflect the current version.
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
          { name: "Privacy", path: page.path },
        ])}
      />
    </>
  );
}
