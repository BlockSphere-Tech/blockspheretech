"use client";

import { useEffect, useState } from "react";
import { estimatePricing } from "@/lib/api";
import { useI18n } from "@/i18n/I18nProvider";

export default function PricingEstimator() {
  const { t, locale } = useI18n();
  const [cu, setCu] = useState(185_000_000);
  const [rps, setRps] = useState(300);
  const initial = estimatePricing(185_000_000, 300, "en");
  const [plan, setPlan] = useState(initial.plan);
  const [price, setPrice] = useState(initial.pricePerMonth);

  useEffect(() => {
    const result = estimatePricing(cu, rps, locale);
    setPlan(result.plan);
    setPrice(result.pricePerMonth);
  }, [cu, rps, locale]);

  return (
    <section id="pricing" className="border-y border-line bg-bg-elevated">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
          {t.pricing.eyebrow}
        </p>
        <h2 className="mt-3 max-w-2xl font-[family-name:var(--font-display)] text-3xl font-extrabold tracking-tight md:text-5xl">
          {t.pricing.title}
        </h2>
        <p className="mt-4 max-w-2xl text-muted">{t.pricing.subtitle}</p>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.3fr_1fr]">
          <div className="border border-line bg-bg p-6 md:p-8">
            <h3 className="font-[family-name:var(--font-display)] text-xl font-bold">
              {t.pricing.estimateTitle}
            </h3>
            <p className="mt-2 text-sm text-muted">{t.pricing.estimateBody}</p>

            <label className="mt-8 block">
              <div className="mb-2 flex justify-between text-sm">
                <span className="text-muted">{t.pricing.computeUnits}</span>
                <span className="font-[family-name:var(--font-mono)] text-ink">
                  {(cu / 1_000_000).toFixed(0)}M
                </span>
              </div>
              <input
                type="range"
                min={10_000_000}
                max={1_000_000_000}
                step={5_000_000}
                value={cu}
                onChange={(e) => setCu(Number(e.target.value))}
                className="w-full accent-[var(--accent)]"
              />
            </label>

            <label className="mt-6 block">
              <div className="mb-2 flex justify-between text-sm">
                <span className="text-muted">{t.pricing.rps}</span>
                <span className="font-[family-name:var(--font-mono)] text-ink">
                  {rps}
                </span>
              </div>
              <input
                type="range"
                min={10}
                max={500}
                step={10}
                value={rps}
                onChange={(e) => setRps(Number(e.target.value))}
                className="w-full accent-[var(--accent)]"
              />
            </label>

            <div className="mt-8 flex items-end justify-between border-t border-line pt-6">
              <div>
                <p className="text-sm text-muted">{plan}</p>
                <p className="mt-1 font-[family-name:var(--font-display)] text-4xl font-extrabold">
                  ${price}
                  <span className="text-base font-medium text-muted">
                    {" "}
                    {t.pricing.perMo}
                  </span>
                </p>
              </div>
              <a
                href="#contact"
                className="rounded-full bg-accent px-4 py-2.5 text-sm font-semibold text-white"
              >
                {t.pricing.startTrial}
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <a
              href="#contact"
              className="border border-line bg-bg p-6 transition-colors hover:border-accent/40"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                {t.pricing.enterprise}
              </p>
              <h3 className="mt-2 font-[family-name:var(--font-display)] text-xl font-bold">
                {t.pricing.dedicatedTitle}
              </h3>
              <p className="mt-2 text-sm text-muted">{t.pricing.dedicatedBody}</p>
              <span className="mt-4 inline-block text-sm font-semibold text-accent">
                {t.pricing.speakSales} →
              </span>
            </a>
            <a
              href="#contact"
              className="border border-line bg-bg p-6 transition-colors hover:border-accent/40"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                {t.pricing.developers}
              </p>
              <h3 className="mt-2 font-[family-name:var(--font-display)] text-xl font-bold">
                {t.pricing.freeTitle}
              </h3>
              <p className="mt-2 text-sm text-muted">{t.pricing.freeBody}</p>
              <code className="mt-4 block overflow-x-auto font-[family-name:var(--font-mono)] text-[11px] text-muted">
                https://shared.blockspheretech.io/&lt;ACCESS-TOKEN&gt;/
              </code>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
