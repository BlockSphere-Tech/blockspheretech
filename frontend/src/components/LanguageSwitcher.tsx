"use client";

import { useEffect, useRef, useState } from "react";
import { useI18n } from "@/i18n/I18nProvider";
import { LOCALES } from "@/i18n/types";

export default function LanguageSwitcher({
  variant = "light",
}: {
  variant?: "light" | "dark";
}) {
  const { locale, setLocale, t } = useI18n();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const current = LOCALES.find((l) => l.code === locale) ?? LOCALES[0];

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const btnClass =
    variant === "dark"
      ? "border-white/20 text-white hover:bg-white/10"
      : "border-line text-ink hover:bg-bg-soft";

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        aria-label={t.common.language}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm font-medium transition-colors ${btnClass}`}
      >
        <span aria-hidden className="text-xs opacity-70">
          文A
        </span>
        <span>{current.native}</span>
        <span className="text-[10px] opacity-60">{open ? "▲" : "▼"}</span>
      </button>

      {open && (
        <div className="absolute right-0 z-50 mt-2 min-w-[10rem] overflow-hidden rounded-xl border border-line bg-bg-elevated py-1 shadow-[var(--shadow)]">
          {LOCALES.map((item) => (
            <button
              key={item.code}
              type="button"
              onClick={() => {
                setLocale(item.code);
                setOpen(false);
              }}
              className={`flex w-full items-center justify-between px-3.5 py-2.5 text-left text-sm transition-colors hover:bg-bg-soft ${
                item.code === locale
                  ? "font-semibold text-accent"
                  : "text-ink"
              }`}
            >
              <span>{item.native}</span>
              <span className="text-xs text-muted">{item.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
