import { HomeView } from "@/components/HomeView";
import { JsonLd } from "@/components/JsonLd";
import { home } from "@/content/home";
import { buildMetadata, webPageJson } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = buildMetadata({
  title: home.title,
  description: home.description,
  path: home.path,
  absoluteTitle: true,
  imageAlt: home.h1,
});

export default function HomePage() {
  return (
    <>
      <HomeView />
      <JsonLd
        data={webPageJson({
          name: home.h1,
          description: home.description,
          path: home.path,
        })}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: home.h1,
          description: home.description,
          url: site.url,
          provider: {
            "@type": "ProfessionalService",
            name: site.name,
            url: site.url,
          },
          areaServed: "US",
        }}
      />
    </>
  );
}
