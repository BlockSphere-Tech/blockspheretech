"use client";

import type { SiteData } from "@/lib/api";
import { useI18n } from "@/i18n/I18nProvider";
import {
  SUPPORT_EMAIL,
  SUPPORT_MAILTO,
  TELEGRAM_HANDLE,
  TELEGRAM_URL,
} from "@/data/contact";

function channelHref(channel: string) {
  if (channel === SUPPORT_EMAIL || channel.includes(".")) {
    return `mailto:${channel}`;
  }
  if (channel === TELEGRAM_HANDLE || channel.startsWith("@")) {
    return TELEGRAM_URL;
  }
  return SUPPORT_MAILTO;
}

export default function Support({ site }: { site: SiteData }) {
  const { t } = useI18n();

  return (
    <section className="border-y border-line bg-bg-elevated">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
          {t.support.eyebrow}
        </p>
        <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-extrabold tracking-tight md:text-4xl">
          {t.support.title}
        </h2>
        <p className="mt-4 max-w-xl text-muted">{t.support.subtitle}</p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="border border-line bg-bg p-6 md:p-8">
            <h3 className="font-[family-name:var(--font-display)] text-xl font-bold">
              {t.support.coverageTitle}
            </h3>
            <p className="mt-2 text-sm text-muted">{t.support.coverageBody}</p>
            <div className="mt-8 grid grid-cols-2 gap-6">
              <div>
                <p className="text-xs text-muted">{t.support.firstResponse}</p>
                <p className="mt-1 font-[family-name:var(--font-display)] text-3xl font-extrabold text-accent">
                  {site.support.firstResponse}
                </p>
              </div>
              <div>
                <p className="text-xs text-muted">{t.support.rca}</p>
                <p className="mt-1 font-[family-name:var(--font-display)] text-3xl font-extrabold">
                  {site.support.rootCauseAnalysis}
                </p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {site.support.channels.map((channel) => (
                <a
                  key={channel}
                  href={channelHref(channel)}
                  target={channel === TELEGRAM_HANDLE ? "_blank" : undefined}
                  rel={
                    channel === TELEGRAM_HANDLE
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="rounded-full border border-line bg-bg px-3 py-1 text-xs font-medium text-muted transition-colors hover:border-accent/40 hover:text-accent"
                >
                  {channel}
                </a>
              ))}
            </div>
          </div>

          <div className="border border-line bg-bg p-6 md:p-8">
            <h3 className="font-[family-name:var(--font-display)] text-xl font-bold">
              {t.support.docsTitle}
            </h3>
            <p className="mt-2 text-sm text-muted">{t.support.docsBody}</p>
            <ul className="mt-6 grid grid-cols-2 gap-3 text-sm">
              {[
                "Quickstart",
                "API reference",
                "SLA",
                "Shred Streams",
                "gRPC",
                "MEV protection",
                "AML",
                "Status page",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#contact"
                    className="font-medium text-muted hover:text-accent"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
