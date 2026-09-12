import Link from "next/link";
import { Logo } from "@/components/Logo";
import {
  addressLines,
  footerCompany,
  footerServices,
  hours,
  site,
} from "@/lib/site";

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="mt-0.5 h-4 w-4 shrink-0" fill="none" aria-hidden>
      <rect x="3.5" y="5.5" width="17" height="13" rx="1.6" stroke="currentColor" strokeWidth="1.7" />
      <path
        d="M4 7.5 12 13l8-5.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" className="mt-0.5 h-4 w-4 shrink-0" fill="none" aria-hidden>
      <path
        d="M12 21s6.5-5.2 6.5-10.2A6.5 6.5 0 0 0 12 4.3a6.5 6.5 0 0 0-6.5 6.5C5.5 15.8 12 21 12 21Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="10.8" r="2.2" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="mt-24 border-t border-line bg-ink text-white">
      <div className="page-shell grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.35fr_1fr_1fr_1.15fr]">
        <div>
          <Logo light />
          <p className="mt-5 max-w-md text-[1.02rem] leading-relaxed text-white/70">
            Link Building USA helps brands grow their search visibility through high-quality
            backlinks earned on real publishers across the United States. We write the content
            ourselves, vet every site by hand, and build link profiles that hold up in both Google
            and AI search.
          </p>
          <p className="mt-6 text-sm text-white/55">{hours}</p>
        </div>
        <div>
          <p className="kicker !text-tide-soft">Services</p>
          <ul className="mt-4 space-y-2.5">
            {footerServices.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-white/75 transition hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="kicker !text-tide-soft">Company</p>
          <ul className="mt-4 space-y-2.5">
            {footerCompany.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-white/75 transition hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="kicker !text-tide-soft">Contact</p>
          <ul className="mt-4 space-y-4 text-white/75">
            <li>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-start gap-3 transition hover:text-white"
              >
                <MailIcon />
                <span>{site.email}</span>
              </a>
            </li>
            <li>
              <a
                href={site.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-start gap-3 transition hover:text-white"
              >
                <PinIcon />
                <span className="leading-relaxed">
                  {addressLines().map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="page-shell flex flex-col gap-4 py-6 text-sm text-white/55 md:flex-row md:items-center md:justify-between">
          <p>
            <a
              className="hover:text-white"
              href={site.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Open in Maps
            </a>
          </p>
          <p>
            © {new Date().getFullYear()} {site.domain}
          </p>
        </div>
        <address className="sr-only">{addressLines().join(", ")}</address>
      </div>
    </footer>
  );
}
