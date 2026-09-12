import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { services, servicesIndex } from "@/content/services";
import { breadcrumbJson, buildMetadata, webPageJson } from "@/lib/seo";

export const metadata = buildMetadata({
  title: servicesIndex.title,
  description: servicesIndex.description,
  path: servicesIndex.path,
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        kicker="Services"
        title={servicesIndex.h1}
        summary={servicesIndex.summary}
        crumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
      />
      <section className="page-shell py-16 md:py-20">
        <div className="grid gap-10">
          {services.map((service, index) => (
            <article
              key={service.slug}
              className="grid gap-6 border-t border-line pt-10 md:grid-cols-[1fr_1.4fr] md:gap-12"
            >
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.14em] text-signal">
                  0{index + 1}
                </p>
                <h2 className="display mt-3 text-3xl text-ink">{service.h1}</h2>
              </div>
              <div>
                <p className="text-lg leading-relaxed text-ink-muted">{service.summary}</p>
                <Link href={service.path} className="btn btn-ink mt-6">
                  View {service.kicker.toLowerCase()}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
      <CtaBand />
      <JsonLd
        data={webPageJson({
          name: servicesIndex.h1,
          description: servicesIndex.description,
          path: servicesIndex.path,
        })}
      />
      <JsonLd
        data={breadcrumbJson([
          { name: "Home", path: "/" },
          { name: "Services", path: servicesIndex.path },
        ])}
      />
    </>
  );
}
