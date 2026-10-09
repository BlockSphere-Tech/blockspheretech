"use client";

import type { SiteData } from "@/lib/api";
import { useI18n } from "@/i18n/I18nProvider";

export default function Security({ site }: { site: SiteData }) {
  const { t } = useI18n();

  return (
    <section className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            {t.security.eyebrow}
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-extrabold tracking-tight md:text-4xl">
            {t.security.title}
          </h2>
          <p className="mt-4 text-muted">
            {site.positioning ||
              "Attestations, contracts, and operational evidence prepared before procurement asks."}
          </p>
          <a
            href="#contact"
            className="mt-8 inline-flex rounded-full border border-line bg-bg-elevated px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
          >
            {t.security.requestPack}
          </a>
        </div>

        <div>
          <div className="flex flex-wrap gap-2">
            {site.compliance.map((item) => (
              <span
                key={item}
                className="rounded-full border border-line bg-bg-elevated px-3.5 py-2 text-sm font-medium"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-2 gap-6">
            {[
              { value: "99.99%", label: t.security.uptime },
              { value: "3 regions", label: t.security.regions },
              { value: "130+", label: t.security.chains },
              { value: "24/7", label: t.security.support },
            ].map((item) => (
              <div key={item.label}>
                <p className="font-[family-name:var(--font-display)] text-2xl font-extrabold">
                  {item.value}
                </p>
                <p className="mt-1 text-sm text-muted">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
