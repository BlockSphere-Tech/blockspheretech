"use client";

import { useState } from "react";
import type { FaqItem } from "@/lib/api";
import { useI18n } from "@/i18n/I18nProvider";

export default function Faq({ items }: { items: FaqItem[] }) {
  const { t } = useI18n();
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);

  return (
    <section id="faq" className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
        {t.faq.eyebrow}
      </p>
      <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-extrabold tracking-tight md:text-4xl">
        {t.faq.title}
      </h2>
      <p className="mt-4 max-w-2xl text-muted">{t.faq.intro}</p>

      <div className="mt-10 divide-y divide-[var(--line)] border-y border-line bg-bg-elevated">
        {items.map((item) => {
          const open = openId === item.id;
          return (
            <div key={item.id} className="px-1 md:px-2">
              <button
                type="button"
                onClick={() => setOpenId(open ? null : item.id)}
                className="flex w-full items-center justify-between gap-4 py-5 text-left"
              >
                <span className="font-[family-name:var(--font-display)] text-base font-bold md:text-lg">
                  {item.question}
                </span>
                <span className="font-[family-name:var(--font-mono)] text-accent">
                  {open ? "−" : "+"}
                </span>
              </button>
              {open && (
                <p className="pb-5 text-sm leading-relaxed text-muted md:text-base">
                  {item.answer}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
