"use client";

import { useState } from "react";

export type FaqItem = { q: string; a: string };

export function Faq({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((item, index) => {
        const isOpen = open === index;
        return (
          <div key={item.q}>
            <button
              type="button"
              className="flex w-full items-start justify-between gap-4 py-5 text-left"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : index)}
            >
              <span className="text-lg font-semibold text-ink">{item.q}</span>
              <span
                className="mt-1 grid h-7 w-7 shrink-0 place-items-center rounded-full border border-line text-sm text-ink-muted"
                aria-hidden
              >
                {isOpen ? "–" : "+"}
              </span>
            </button>
            {isOpen ? (
              <p className="pb-5 pr-12 text-[1.02rem] leading-relaxed text-ink-muted">
                {item.a}
              </p>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
