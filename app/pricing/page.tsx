import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { Faq } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { pricingFaq, pricingPackages, pricingPage } from "@/content/pricing";
import { breadcrumbJson, buildMetadata, webPageJson } from "@/lib/seo";

export const metadata = buildMetadata({
  title: pricingPage.title,
  description: pricingPage.description,
  path: pricingPage.path,
});

export default function PricingPage() {
  return (
    <>
      <PageHero
        kicker="Pricing"
        title={pricingPage.h1}
        summary={pricingPage.summary}
        crumbs={[{ label: "Home", href: "/" }, { label: "Pricing" }]}
      />
      <section className="page-shell py-16 md:py-20">
        <div className="grid gap-6 lg:grid-cols-3">
          {pricingPackages.map((pkg) => (
            <div
              key={pkg.name}
              className={`flex flex-col rounded-2xl border p-7 ${
                pkg.featured
                  ? "border-tide bg-ink text-white shadow-xl shadow-tide/10"
                  : "border-line bg-white"
              }`}
            >
              {pkg.featured ? (
                <p className="kicker !text-tide-soft">Most chosen</p>
              ) : (
                <p className="kicker">Package</p>
              )}
              <h2 className="display mt-3 text-3xl">{pkg.name}</h2>
              <p className="mt-4">
                <span className="text-4xl font-bold tracking-tight">{pkg.priceLabel}</span>
                <span className={pkg.featured ? "text-white/60" : "text-ink-muted"}>
                  {" "}
                  {pkg.from ? "from / placement" : "/ placement"}
                </span>
              </p>
              <p className={`mt-2 text-sm font-semibold ${pkg.featured ? "text-tide-soft" : "text-tide"}`}>
                {pkg.dr} · {pkg.traffic}
              </p>
              <p className={`mt-4 leading-relaxed ${pkg.featured ? "text-white/70" : "text-ink-muted"}`}>
                {pkg.summary}
              </p>
              <ul className={`mt-6 flex-1 space-y-3 text-sm ${pkg.featured ? "text-white/80" : "text-ink-soft"}`}>
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex gap-2">
                    <span aria-hidden className={pkg.featured ? "text-tide-soft" : "text-tide"}>
                      ✓
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact/"
                className={`btn mt-8 ${pkg.featured ? "btn-signal" : "btn-ink"}`}
              >
                Start with {pkg.name}
              </Link>
            </div>
          ))}
        </div>
        <div className="mx-auto mt-20 max-w-3xl">
          <p className="kicker">FAQ</p>
          <h2 className="display mt-3 text-3xl text-ink">Common questions</h2>
          <div className="mt-8">
            <Faq items={[...pricingFaq]} />
          </div>
        </div>
      </section>
      <CtaBand title="Need a custom monthly volume?" />
      <JsonLd
        data={webPageJson({
          name: pricingPage.h1,
          description: pricingPage.description,
          path: pricingPage.path,
        })}
      />
      <JsonLd
        data={breadcrumbJson([
          { name: "Home", path: "/" },
          { name: "Pricing", path: pricingPage.path },
        ])}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: pricingFaq.map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: { "@type": "Answer", text: item.a },
          })),
        }}
      />
    </>
  );
}
