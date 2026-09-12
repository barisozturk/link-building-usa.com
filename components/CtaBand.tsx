import Link from "next/link";

export function CtaBand({
  title = "Ready to earn placements on US publishers?",
  text = "Tell us about your site, niche, and timeline. We’ll reply with a scoped proposal—no inventory dump, no vague “packages.”",
  href = "/contact/",
  label = "Request a proposal",
}: {
  title?: string;
  text?: string;
  href?: string;
  label?: string;
}) {
  return (
    <section className="page-shell my-20">
      <div className="overflow-hidden rounded-2xl bg-ink px-8 py-12 text-white md:px-12 md:py-14">
        <div className="relative max-w-3xl">
          <div
            className="pointer-events-none absolute -right-20 -top-24 h-56 w-56 rounded-full bg-tide/30 blur-3xl"
            aria-hidden
          />
          <p className="kicker !text-tide-soft">Next step</p>
          <h2 className="display mt-3 text-3xl md:text-4xl">{title}</h2>
          <p className="mt-4 text-lg leading-relaxed text-white/70">{text}</p>
          <Link href={href} className="btn btn-signal mt-8">
            {label}
          </Link>
        </div>
      </div>
    </section>
  );
}
