import Link from "next/link";
import { Logo } from "@/components/Logo";
import {
  addressInline,
  addressLines,
  footerCompany,
  footerServices,
  hours,
  site,
} from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-line bg-ink text-white">
      <div className="page-shell grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Logo light />
          <p className="mt-5 max-w-md text-[1.02rem] leading-relaxed text-white/70">
            We help brands earn editorial placements on United States publishers—so authority
            signals match the market you actually want to rank in.
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
      </div>
      <div className="border-t border-white/10">
        <div className="page-shell flex flex-col gap-4 py-6 text-sm text-white/55 md:flex-row md:items-center md:justify-between">
          <div>
            <p>{addressInline()}</p>
            <p className="mt-1">
              <a className="hover:text-white" href={`mailto:${site.email}`}>
                {site.email}
              </a>
              {" · "}
              <a
                className="hover:text-white"
                href={site.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Open in Maps
              </a>
            </p>
          </div>
          <p>© {new Date().getFullYear()} {site.domain}</p>
        </div>
        <address className="sr-only">
          {addressLines().join(", ")}
        </address>
      </div>
    </footer>
  );
}
