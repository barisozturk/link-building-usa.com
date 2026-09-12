import Link from "next/link";

export function PageHero({
  kicker,
  title,
  summary,
  crumbs,
}: {
  kicker?: string;
  title: string;
  summary: string;
  crumbs?: { label: string; href?: string }[];
}) {
  return (
    <section className="border-b border-line bg-[linear-gradient(180deg,#eef3f7_0%,#f7fafc_100%)]">
      <div className="page-shell py-14 md:py-20">
        {crumbs?.length ? (
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-ink-muted">
            <ol className="flex flex-wrap items-center gap-2">
              {crumbs.map((crumb, index) => (
                <li key={`${crumb.label}-${index}`} className="inline-flex items-center gap-2">
                  {index > 0 ? <span aria-hidden>/</span> : null}
                  {crumb.href ? (
                    <Link href={crumb.href} className="hover:text-ink">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-ink">{crumb.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        ) : null}
        {kicker ? <p className="kicker">{kicker}</p> : null}
        <h1 className="display mt-3 max-w-4xl text-4xl text-ink md:text-5xl lg:text-[3.4rem]">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-muted">{summary}</p>
      </div>
    </section>
  );
}
