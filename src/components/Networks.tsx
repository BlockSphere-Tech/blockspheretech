"use client";

import type { Network } from "@/lib/api";
import { useI18n } from "@/i18n/I18nProvider";

export default function Networks({
  networks,
  totalCount,
}: {
  networks: Network[];
  totalCount: number;
}) {
  const { t, format } = useI18n();

  return (
    <section id="networks" className="border-y border-line bg-bg-elevated">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
          {t.networks.eyebrow}
        </p>
        <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-extrabold tracking-tight md:text-4xl">
          {format(t.networks.title, { count: totalCount })}
        </h2>
        <p className="mt-4 max-w-2xl text-muted">{t.networks.subtitle}</p>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {networks.map((network) => (
            <div
              key={network.id}
              className="border border-line bg-bg p-4 transition-colors hover:border-accent/40 hover:bg-bg-soft"
            >
              <p className="font-[family-name:var(--font-display)] text-base font-bold">
                {network.name}
              </p>
              <p className="mt-2 font-[family-name:var(--font-mono)] text-[11px] leading-relaxed text-muted">
                {network.networks.join(" · ")}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-sm font-medium text-muted">
          {t.networks.explore} <span className="text-accent">→</span>
        </p>
      </div>
    </section>
  );
}
