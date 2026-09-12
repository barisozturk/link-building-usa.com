"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";
import { nav } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const onHome = pathname === "/";

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 border-b ${
        onHome
          ? "border-white/10 bg-[#0c1524]/90 text-white backdrop-blur-md"
          : "border-line bg-paper/90 text-ink backdrop-blur-md"
      }`}
    >
      <div className="page-shell flex h-[4.25rem] items-center justify-between gap-4">
        <Logo light={onHome} />
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {nav.map((item) => {
            const active =
              pathname === item.href || pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-[0.95rem] font-semibold transition ${
                  onHome
                    ? active
                      ? "text-white"
                      : "text-white/70 hover:text-white"
                    : active
                      ? "text-ink"
                      : "text-ink-muted hover:text-ink"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/contact/"
            className={`btn ml-1 ${onHome ? "btn-signal" : "btn-ink"} !min-h-10 !px-4 !text-sm`}
          >
            Get a proposal
          </Link>
        </nav>
        <button
          type="button"
          className={`grid h-10 w-10 place-items-center rounded-md border lg:hidden ${
            onHome ? "border-white/20 text-white" : "border-line text-ink"
          }`}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">Menu</span>
          <span aria-hidden className="flex w-4 flex-col gap-1.5">
            <span className={`h-0.5 w-full ${onHome ? "bg-white" : "bg-ink"}`} />
            <span className={`h-0.5 w-full ${onHome ? "bg-white" : "bg-ink"}`} />
            <span className={`h-0.5 w-full ${onHome ? "bg-white" : "bg-ink"}`} />
          </span>
        </button>
      </div>
      {open ? (
        <div
          id="mobile-nav"
          className={`border-t lg:hidden ${
            onHome ? "border-white/10 bg-[#0c1524]" : "border-line bg-paper"
          }`}
        >
          <nav className="page-shell flex flex-col gap-1 py-4" aria-label="Mobile">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-md px-3 py-3 text-base font-semibold ${
                  onHome ? "text-white hover:bg-white/5" : "text-ink hover:bg-fog"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/contact/" className="btn btn-signal mt-2">
              Get a proposal
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
