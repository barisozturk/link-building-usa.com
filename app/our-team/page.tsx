import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { memberEmail, team } from "@/content/team";
import { breadcrumbJson, buildMetadata, webPageJson } from "@/lib/seo";
import { absUrl, site } from "@/lib/site";

const title = "Our US Link Building Team";
const h1 = "Our team";
const description =
  "Meet the San Francisco team that plans, pitches, and reviews editorial placements on United States publishers—from outreach to digital PR.";

export const metadata = buildMetadata({
  title,
  description,
  path: "/our-team/",
});

export default function OurTeamPage() {
  return (
    <>
      <PageHero
        kicker="People"
        title={h1}
        summary="Named specialists plan, pitch, and review every campaign. Outreach, editorial, digital PR, and publisher relations sit side by side—because the work does too."
        crumbs={[{ label: "Home", href: "/" }, { label: "Our team" }]}
      />

      <section className="page-shell py-16 lg:py-20">
        <ul className="grid gap-5 lg:grid-cols-2">
          {team.map((member) => {
            const email = memberEmail(member.name);
            return (
              <li key={member.slug} id={member.slug} className="scroll-mt-28">
                <article className="grid h-full overflow-hidden rounded-2xl border border-line bg-white sm:grid-cols-[11.5rem_minmax(0,1fr)]">
                  <div className="relative aspect-[4/5] bg-fog sm:aspect-auto sm:min-h-[17rem]">
                    <Image
                      src={member.photo}
                      alt={member.name}
                      fill
                      sizes="(min-width: 1024px) 200px, 40vw"
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="flex flex-col p-6 md:p-7">
                    <h2 className="display text-2xl text-ink md:text-[1.7rem]">
                      {member.name}
                    </h2>
                    <p className="mt-1 text-sm font-semibold text-tide">{member.role}</p>
                    <p className="mt-4 flex-1 text-[1.02rem] leading-relaxed text-ink-muted">
                      {member.bio}
                    </p>
                    <a
                      href={`mailto:${email}`}
                      className="mt-5 inline-flex items-center gap-2 text-sm text-ink-muted hover:text-tide"
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line">
                        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden>
                          <rect
                            x="3.5"
                            y="5.5"
                            width="17"
                            height="13"
                            rx="1.6"
                            stroke="currentColor"
                            strokeWidth="1.7"
                          />
                          <path
                            d="M4 7.5 12 13l8-5.5"
                            stroke="currentColor"
                            strokeWidth="1.7"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      {email}
                    </a>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>

        <p className="mt-12 max-w-2xl text-ink-muted">
          Want to work with the people behind the pitches?{" "}
          <Link href="/contact/" className="link-tide font-semibold">
            Start a conversation
          </Link>{" "}
          or read how we think about US link acquisition on the{" "}
          <Link href="/blog/" className="link-tide font-semibold">
            blog
          </Link>
          .
        </p>
      </section>

      <CtaBand />
      <JsonLd
        data={webPageJson({
          name: h1,
          description,
          path: "/our-team/",
        })}
      />
      <JsonLd
        data={breadcrumbJson([
          { name: "Home", path: "/" },
          { name: "Our team", path: "/our-team/" },
        ])}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: `${site.name} team`,
          numberOfItems: team.length,
          itemListElement: team.map((member, index) => ({
            "@type": "ListItem",
            position: index + 1,
            item: {
              "@type": "Person",
              name: member.name,
              jobTitle: member.role,
              image: absUrl(member.photo),
              worksFor: { "@type": "Organization", name: site.name, url: site.url },
            },
          })),
        }}
      />
    </>
  );
}
