import { notFound } from "next/navigation";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { getService, services } from "@/content/services";
import { breadcrumbJson, buildMetadata, serviceJson, webPageJson } from "@/lib/seo";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export const dynamicParams = false;

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return params.then(({ slug }) => {
    const service = getService(slug);
    if (!service) return {};
    return buildMetadata({
      title: service.title,
      description: service.description,
      path: service.path,
    });
  });
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  return (
    <>
      <PageHero
        kicker={service.kicker}
        title={service.h1}
        summary={service.summary}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services/" },
          { label: service.kicker },
        ]}
      />
      <section className="page-shell py-16 md:py-20">
        <div className="grid gap-10 md:grid-cols-3">
          {service.highlights.map((item) => (
            <div key={item.title} className="border-t border-line pt-6">
              <h2 className="text-xl font-bold text-ink">{item.title}</h2>
              <p className="mt-3 leading-relaxed text-ink-muted">{item.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 max-w-3xl">
          <p className="kicker">How it runs</p>
          <h2 className="display mt-3 text-3xl text-ink">A clear sequence every month</h2>
          <ol className="mt-8 space-y-4">
            {service.process.map((step, index) => (
              <li key={step} className="flex gap-4 text-lg text-ink-soft">
                <span className="font-bold text-tide">{index + 1}.</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <CtaBand />
      <JsonLd
        data={webPageJson({
          name: service.h1,
          description: service.description,
          path: service.path,
        })}
      />
      <JsonLd
        data={serviceJson({
          name: service.h1,
          description: service.description,
          path: service.path,
        })}
      />
      <JsonLd
        data={breadcrumbJson([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services/" },
          { name: service.h1, path: service.path },
        ])}
      />
    </>
  );
}
