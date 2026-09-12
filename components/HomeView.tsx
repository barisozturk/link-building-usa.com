import Image from "next/image";
import Link from "next/link";
import { HeroLogoMarquee } from "@/components/TrustedBy";
import { orderedPosts } from "@/content/blog";
import { orderedCaseStudies } from "@/content/case-studies";
import { home } from "@/content/home";
import { operations } from "@/lib/site";

const serviceLinks = [
  { href: "/services/usa-guest-posting/", title: "USA guest posting" },
  { href: "/services/publisher-outreach/", title: "Publisher outreach" },
  { href: "/services/digital-pr-links/", title: "Digital PR links" },
] as const;

export function HomeView() {
  const studies = orderedCaseStudies().slice(0, 4);
  const notes = orderedPosts().slice(0, 3);

  return (
    <>
      <section className="hero-atmosphere relative overflow-hidden text-white">
        <div className="hero-grid absolute inset-0" aria-hidden />
        <div
          className="animate-drift pointer-events-none absolute -right-16 top-24 h-72 w-72 rounded-full bg-signal/25 blur-3xl"
          aria-hidden
        />
        <div
          className="animate-drift pointer-events-none absolute -left-10 bottom-10 h-64 w-64 rounded-full bg-tide/30 blur-3xl"
          aria-hidden
          style={{ animationDelay: "1.2s" }}
        />
        <div className="page-shell relative grid min-h-[calc(100vh-4.25rem)] items-center gap-10 py-14 md:grid-cols-12 md:gap-8 md:py-16">
          <div className="md:col-span-6 lg:col-span-6">
            <p className="kicker animate-rise !text-tide-soft">San Francisco · United States</p>
            <h1 className="display animate-rise-delay-1 mt-4 text-5xl text-white md:text-6xl lg:text-[4.1rem]">
              {home.h1}
            </h1>
            <div className="animate-draw mt-5 h-1 w-28 bg-signal" aria-hidden />
            <p className="animate-rise-delay-2 mt-6 max-w-xl text-base leading-relaxed text-white/75 md:text-lg">
              {home.supporting}
            </p>
            <div className="animate-rise-delay-3 mt-9 flex flex-wrap gap-3">
              <Link href="/contact/" className="btn btn-signal">
                Request a proposal
              </Link>
              <Link
                href="/case-studies/"
                className="btn border border-white/25 bg-white/5 text-white hover:bg-white/10"
              >
                See case studies
              </Link>
            </div>
          </div>
          <div className="animate-rise-delay-2 flex justify-center md:col-span-6 md:justify-end">
            <Image
              src="/link-building-usa-hero.webp"
              alt={home.heroImageAlt}
              width={1024}
              height={1024}
              priority
              className="h-auto w-full max-w-[20rem] object-contain sm:max-w-[24rem] lg:max-w-[28rem]"
            />
          </div>
        </div>
      </section>

      <HeroLogoMarquee label={home.trustedBy} />

      <section className="border-b border-line bg-paper">
        <div className="page-shell grid gap-6 py-8 sm:grid-cols-3">
          {[
            { label: "US publishers on file", value: operations.publishersOnFile },
            { label: "Years in the industry", value: "8+" },
            { label: "Metrics we file", value: "DR · DA · TF · traffic" },
          ].map((item) => (
            <div key={item.label}>
              <p className="text-2xl font-bold tracking-tight text-ink">{item.value}</p>
              <p className="mt-1 text-sm text-ink-muted">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="page-shell py-20 md:py-24">
        <p className="kicker">{home.promise.kicker}</p>
        <h2 className="display mt-3 max-w-3xl text-3xl text-ink md:text-4xl">
          {home.promise.title}
        </h2>
        <p className="mt-5 max-w-3xl text-lg leading-relaxed text-ink-muted">
          {home.promise.body}
        </p>
      </section>

      <section className="border-y border-line bg-[linear-gradient(180deg,#f7fafc_0%,#eef3f7_100%)]">
        <div className="page-shell py-20 md:py-24">
          <p className="kicker">{home.servicesTeaser.kicker}</p>
          <h2 className="display mt-3 max-w-3xl text-3xl text-ink md:text-4xl">
            {home.servicesTeaser.title}
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-muted">
            {home.servicesTeaser.body}
          </p>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {home.servicesTeaser.items?.map((item, index) => (
              <div key={item.title} className="border-t border-line pt-6">
                <p className="text-sm font-bold uppercase tracking-[0.14em] text-signal">
                  0{index + 1}
                </p>
                <h3 className="mt-3 text-xl font-bold text-ink">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-ink-muted">{item.body}</p>
                <Link
                  href={serviceLinks[index].href}
                  className="link-tide mt-5 inline-block text-sm font-semibold"
                >
                  Explore {serviceLinks[index].title}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-shell py-20 md:py-24">
        <p className="kicker">{home.methodology.kicker}</p>
        <h2 className="display mt-3 max-w-3xl text-3xl text-ink md:text-4xl">
          {home.methodology.title}
        </h2>
        <p className="mt-5 max-w-3xl text-lg leading-relaxed text-ink-muted">
          {home.methodology.body}
        </p>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {home.methodology.items?.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-line bg-white p-7 shadow-[0_12px_40px_rgba(12,21,36,0.04)]"
            >
              <h3 className="text-xl font-bold text-ink">{item.title}</h3>
              <p className="mt-3 leading-relaxed text-ink-muted">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-ink py-20 text-white md:py-24">
        <div className="page-shell">
          <p className="kicker !text-tide-soft">{home.standards.kicker}</p>
          <h2 className="display mt-3 max-w-3xl text-3xl md:text-4xl">
            {home.standards.title}
          </h2>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-white/65">
            {home.standards.body}
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {home.standards.items?.map((item, index) => (
              <div key={item.title} className="border-t border-white/15 pt-6">
                <p className="text-sm font-bold uppercase tracking-[0.14em] text-signal">
                  0{index + 1}
                </p>
                <h3 className="mt-3 text-xl font-bold">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-white/65">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-shell py-20 md:py-24">
        <p className="kicker">{home.process.kicker}</p>
        <h2 className="display mt-3 max-w-3xl text-3xl text-ink md:text-4xl">
          {home.process.title}
        </h2>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-muted">
          {home.process.body}
        </p>
        <ol className="mt-12 grid gap-8 md:grid-cols-3">
          {home.process.items?.map((item, index) => (
            <li key={item.title} className="relative">
              <span className="display text-5xl text-fog-deep">{index + 1}</span>
              <h3 className="mt-2 text-xl font-bold text-ink">{item.title}</h3>
              <p className="mt-3 leading-relaxed text-ink-muted">{item.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="border-y border-line bg-fog">
        <div className="page-shell py-20 md:py-24">
          <p className="kicker">{home.whyUs.kicker}</p>
          <h2 className="display mt-3 max-w-3xl text-3xl text-ink md:text-4xl">
            {home.whyUs.title}
          </h2>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-ink-muted">
            {home.whyUs.body}
          </p>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {home.whyUs.items?.map((item) => (
              <div key={item.title} className="border-l-2 border-signal pl-5">
                <h3 className="text-lg font-bold text-ink">{item.title}</h3>
                <p className="mt-2 leading-relaxed text-ink-muted">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink py-20 text-white md:py-24">
        <div className="page-shell">
          <p className="kicker !text-tide-soft">{home.proof.kicker}</p>
          <div className="mt-3 flex flex-wrap items-end justify-between gap-6">
            <h2 className="display max-w-2xl text-3xl md:text-4xl">{home.proof.title}</h2>
            <Link href="/case-studies/" className="btn btn-signal">
              All case studies
            </Link>
          </div>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/65">
            {home.proof.body}
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {studies.map((study) => (
              <Link
                key={study.slug}
                href={`/case-studies/${study.slug}/`}
                className="group rounded-xl border border-white/10 bg-white/5 p-6 transition hover:border-white/25 hover:bg-white/8"
              >
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-tide-soft">
                  {study.industry} · {study.period}
                </p>
                <h3 className="mt-3 text-xl font-bold leading-snug group-hover:text-tide-soft">
                  {study.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">{study.summary}</p>
                <div className="mt-5 flex flex-wrap gap-4">
                  {study.stats.slice(0, 2).map((stat) => (
                    <div key={stat.label}>
                      <p className="text-lg font-bold text-signal">{stat.value}</p>
                      <p className="text-xs text-white/50">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="page-shell py-20 md:py-24">
        <p className="kicker">{home.industries.kicker}</p>
        <h2 className="display mt-3 max-w-3xl text-3xl text-ink md:text-4xl">
          {home.industries.title}
        </h2>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-muted">
          {home.industries.body}
        </p>
        <div className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2">
          {home.industries.items?.map((item) => (
            <div key={item.title} className="border-l-2 border-tide pl-5">
              <h3 className="text-lg font-bold text-ink">{item.title}</h3>
              <p className="mt-2 text-ink-muted">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-line bg-fog">
        <div className="page-shell py-20 md:py-24">
          <p className="kicker">{home.notes.kicker}</p>
          <h2 className="display mt-3 max-w-3xl text-3xl text-ink md:text-4xl">
            {home.notes.title}
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-muted">
            {home.notes.body}
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {notes.map((post) => (
              <article key={post.slug} className="border-t border-line pt-6">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-tide">
                  {post.kicker}
                </p>
                <h3 className="mt-3 text-xl font-bold leading-snug text-ink">
                  <Link href={`/blog/${post.slug}/`} className="hover:text-tide">
                    {post.title}
                  </Link>
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{post.excerpt}</p>
              </article>
            ))}
          </div>
          <Link href="/blog/" className="btn btn-ghost mt-10">
            Read the blog
          </Link>
        </div>
      </section>

      <section className="page-shell py-20 md:py-24">
        <div className="overflow-hidden rounded-2xl bg-[linear-gradient(135deg,#0d6e6a_0%,#0c1524_55%,#c45d1a_140%)] px-8 py-12 text-white md:px-12">
          <p className="kicker !text-white/70">Start here</p>
          <h2 className="display mt-3 max-w-2xl text-3xl md:text-4xl">{home.cta.title}</h2>
          <p className="mt-4 max-w-xl text-lg text-white/75">{home.cta.body}</p>
          <Link href="/contact/" className="btn btn-signal mt-8">
            Get a proposal
          </Link>
        </div>
      </section>
    </>
  );
}
