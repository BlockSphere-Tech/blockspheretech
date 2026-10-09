"use client";

import { useI18n } from "@/i18n/I18nProvider";

export default function LogoMarquee({ logos }: { logos: string[] }) {
  const { t } = useI18n();
  const loop = [...logos, ...logos];

  return (
    <section className="border-b border-line bg-bg-elevated py-10">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted">
          {t.logos.trusted}
        </p>
      </div>
      <div className="overflow-hidden">
        <div className="marquee-track flex w-max gap-12 px-5">
          {loop.map((logo, i) => (
            <span
              key={`${logo}-${i}`}
              className="whitespace-nowrap font-[family-name:var(--font-display)] text-lg font-bold tracking-tight text-ink/45"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
