"use client";

import { useEffect, useMemo, useState } from "react";
import type { UseCase } from "@/lib/api";
import { useI18n } from "@/i18n/I18nProvider";

export default function UseCases({ useCases }: { useCases: UseCase[] }) {
  const { t } = useI18n();
  const categories = useMemo(
    () => [...new Set(useCases.map((u) => u.category))],
    [useCases]
  );
  const [activeCategory, setActiveCategory] = useState(categories[0] ?? "");

  useEffect(() => {
    if (!categories.includes(activeCategory)) {
      setActiveCategory(categories[0] ?? "");
    }
  }, [categories, activeCategory]);

  const active =
    useCases.find((u) => u.category === activeCategory) ?? useCases[0];

  if (!active) return null;

  return (
    <section id="use-cases" className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
        {t.useCases.eyebrow}
      </p>
      <h2 className="mt-3 max-w-2xl font-[family-name:var(--font-display)] text-3xl font-extrabold tracking-tight md:text-5xl">
        {t.useCases.title}
      </h2>
      <p className="mt-4 max-w-2xl text-muted">{t.useCases.subtitle}</p>

      <div className="mt-10 flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActiveCategory(cat)}
            className={`rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
              activeCategory === cat
                ? "bg-accent text-white"
                : "bg-bg-elevated text-muted ring-1 ring-[var(--line)] hover:text-ink"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_1.15fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
            {t.useCases.caseStudy}
          </p>
          <h3 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-extrabold">
            {active.name}
          </h3>

          <div className="mt-8 grid grid-cols-3 gap-4">
            {active.stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-[family-name:var(--font-display)] text-xl font-extrabold md:text-2xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs text-muted">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 space-y-5">
            <div>
              <p className="text-sm font-bold text-ink">{t.useCases.challenge}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {active.challenge}
              </p>
            </div>
            <div>
              <p className="text-sm font-bold text-accent">{t.useCases.outcome}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {active.outcome}
              </p>
            </div>
          </div>
        </div>

        <ul className="space-y-3 surface-card border border-line p-6 md:p-8">
          {active.highlights.map((item) => (
            <li
              key={item}
              className="flex gap-3 border-b border-line pb-3 text-sm leading-relaxed text-muted last:border-0 last:pb-0"
            >
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
