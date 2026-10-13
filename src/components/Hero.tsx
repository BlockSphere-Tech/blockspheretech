"use client";

import type { SiteData } from "@/lib/api";
import Logo from "./Logo";
import { useI18n } from "@/i18n/I18nProvider";

const complianceMeta = [
  { label: "SOC 2 Type II", icon: "shield" },
  { label: "DORA and GDPR", icon: "seal" },
  { label: "ISO 27001, 27017", icon: "globe" },
];

function ComplianceIcon({ type }: { type: string }) {
  if (type === "shield") {
    return (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
        <path
          d="M9 2L14.5 4.2V8.8C14.5 12.1 12.2 15.1 9 16C5.8 15.1 3.5 12.1 3.5 8.8V4.2L9 2Z"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        <path
          d="M6.5 9L8.2 10.7L11.7 7.2"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  if (type === "seal") {
    return (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
        <circle cx="9" cy="9" r="6.2" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="9" cy="9" r="2.4" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    );
  }
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
      <circle cx="9" cy="9" r="6.2" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M3 9H15M9 3C10.8 5 11.7 7 11.7 9C11.7 11 10.8 13 9 15C7.2 13 6.3 11 6.3 9C6.3 7 7.2 5 9 3Z"
        stroke="currentColor"
        strokeWidth="1.4"
      />
    </svg>
  );
}

export default function Hero({ site }: { site: SiteData }) {
  const { t } = useI18n();
  const headline = site.headline || site.tagline;

  return (
    <section className="relative overflow-hidden hero-surface text-on-hero">
      <div className="hero-geometry pointer-events-none absolute inset-0" />
      <div
        className="hero-orb animate-float pointer-events-none left-[8%] top-[22%] hidden h-28 w-28 md:block"
        aria-hidden
      />
      <div
        className="hero-orb pointer-events-none right-[10%] top-[18%] hidden h-40 w-40 rotate-12 md:block"
        aria-hidden
      />
      <div
        className="hero-orb pointer-events-none bottom-[18%] right-[22%] hidden h-20 w-20 -rotate-6 md:block"
        aria-hidden
      />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-5 pb-16 pt-16 text-center md:px-8 md:pb-24 md:pt-20">
        <div className="animate-rise mb-8 scale-110 opacity-95">
          <Logo variant="light" size="lg" />
        </div>

        <p className="animate-rise-delay-1 text-xs font-semibold uppercase tracking-[0.22em] text-on-hero-muted">
          {site.tagline}
        </p>

        <h1 className="animate-rise-delay-1 mt-4 max-w-4xl font-[family-name:var(--font-display)] text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl">
          {headline}
        </h1>

        <p className="animate-rise-delay-2 mt-5 max-w-2xl text-base leading-relaxed text-on-hero-muted md:text-lg">
          {site.description}
        </p>

        <div className="animate-rise-delay-3 mt-9 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-accent shadow-[0_10px_30px_rgba(8,24,90,0.2)] transition-transform hover:scale-[1.02]"
          >
            {t.hero.startFree}
            <span aria-hidden>↗</span>
          </a>
          <a
            href="#platform"
            className="inline-flex items-center gap-2 rounded-full border border-white/35 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/12"
          >
            {t.hero.viewDocs}
            <span aria-hidden>↗</span>
          </a>
        </div>

        <div className="animate-rise-delay-3 mt-14 w-full max-w-3xl rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-md md:p-8">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-4">
            {site.stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-[family-name:var(--font-display)] text-3xl font-extrabold text-white md:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-on-hero-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-on-hero-muted">
          {complianceMeta.map((item) => (
            <span key={item.label} className="inline-flex items-center gap-2">
              <ComplianceIcon type={item.icon} />
              {item.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
