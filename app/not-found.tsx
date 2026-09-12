import Link from "next/link";

export default function NotFound() {
  return (
    <section className="page-shell py-24 text-center">
      <p className="kicker">404</p>
      <h1 className="display mt-3 text-4xl text-ink md:text-5xl">Page not found</h1>
      <p className="mx-auto mt-4 max-w-md text-ink-muted">
        That URL is not on this site. Head home or browse services and case studies.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link href="/" className="btn btn-ink">
          Home
        </Link>
        <Link href="/contact/" className="btn btn-ghost">
          Contact
        </Link>
      </div>
    </section>
  );
}
