"use client";

import { useEffect, useMemo, useState } from "react";
import type { Category, Product } from "@/lib/api";
import { useI18n } from "@/i18n/I18nProvider";

export default function Platform({
  categories,
  products,
}: {
  categories: Category[];
  products: Product[];
}) {
  const { t, format } = useI18n();
  const [active, setActive] = useState(categories[0]?.id ?? "infrastructure");

  useEffect(() => {
    if (!categories.some((c) => c.id === active)) {
      setActive(categories[0]?.id ?? "infrastructure");
    }
  }, [categories, active]);

  const activeCategory = useMemo(
    () => categories.find((c) => c.id === active) ?? categories[0],
    [active, categories]
  );

  const filtered = products.filter((p) => p.category === active);

  function formatPrice(product: Product) {
    if (product.priceFrom == null) return null;
    const price = `$${product.priceFrom}`;
    if (product.priceUnit === "mo") {
      return format(t.platform.fromMo, { price });
    }
    if (product.priceUnit === "check" || product.priceUnit === "request") {
      return format(t.platform.fromUnit, {
        price,
        unit: product.priceUnit,
      });
    }
    return format(t.platform.fromMo, { price });
  }

  return (
    <section id="platform" className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
        {t.platform.eyebrow}
      </p>
      <h2 className="mt-3 max-w-2xl font-[family-name:var(--font-display)] text-3xl font-extrabold tracking-tight text-ink md:text-5xl">
        {t.platform.title}
      </h2>
      <p className="mt-4 max-w-2xl text-muted">{t.platform.subtitle}</p>

      <div className="mt-10 flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => setActive(cat.id)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              active === cat.id
                ? "bg-accent text-white"
                : "bg-bg-elevated text-muted ring-1 ring-[var(--line)] hover:text-ink"
            }`}
          >
            {cat.title}
          </button>
        ))}
      </div>

      {activeCategory && (
        <p className="mt-6 max-w-2xl text-sm text-muted">
          {activeCategory.description}
        </p>
      )}

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((product) => (
          <article
            key={product.id}
            className="group surface-card border border-line p-6 transition-all hover:-translate-y-0.5 hover:border-accent/30"
          >
            {formatPrice(product) && (
              <p className="font-[family-name:var(--font-mono)] text-xs font-medium text-accent">
                {formatPrice(product)}
              </p>
            )}
            <h3 className="mt-2 font-[family-name:var(--font-display)] text-lg font-bold text-ink">
              {product.name}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {product.tagline}
            </p>
            <span className="mt-5 inline-flex text-sm font-semibold text-accent opacity-0 transition-opacity group-hover:opacity-100">
              {t.platform.learnMore} →
            </span>
          </article>
        ))}
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 border-t border-line pt-8 sm:grid-cols-3">
        {[
          { value: "130+", label: t.platform.metricNetworks },
          { value: "30s", label: t.platform.metricSignup },
          { value: "<5ms", label: t.platform.metricLatency },
        ].map((item) => (
          <div key={item.label}>
            <p className="font-[family-name:var(--font-display)] text-3xl font-extrabold text-ink">
              {item.value}
            </p>
            <p className="mt-1 text-sm text-muted">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
