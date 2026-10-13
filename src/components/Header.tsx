"use client";

import { useState } from "react";
import Logo from "./Logo";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeToggle from "./ThemeToggle";
import { useI18n } from "@/i18n/I18nProvider";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { t } = useI18n();

  const links = [
    { href: "#platform", label: t.nav.products },
    { href: "#networks", label: t.nav.networks },
    { href: "#use-cases", label: t.nav.solutions },
    { href: "#pricing", label: t.nav.pricing },
    { href: "#faq", label: t.nav.company },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-line header-surface backdrop-blur-xl">
      <div className="flex h-[4.25rem] w-full items-center gap-4 px-5 md:px-8 lg:px-10">
        <a href="/" aria-label="BlockSphere Tech home" className="shrink-0">
          <Logo size="md" />
        </a>

        <nav className="ml-2 hidden flex-1 items-center gap-7 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href.startsWith("#") ? `/${link.href}` : link.href}
              className="text-[0.95rem] font-medium text-muted transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/careers"
            className="text-[0.95rem] font-medium text-muted transition-colors hover:text-ink"
          >
            Careers
          </a>
        </nav>

        <div className="ml-auto hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <LanguageSwitcher />
          <a
            href="/#contact"
            className="text-sm font-medium text-muted transition-colors hover:text-ink"
          >
            {t.nav.contactSales}
          </a>
          <a
            href="/#pricing"
            className="rounded-full bg-accent px-4 py-2.5 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(22,56,199,0.25)] transition-transform hover:scale-[1.02]"
          >
            {t.nav.startFree}
          </a>
        </div>

        <div className="ml-auto flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <LanguageSwitcher />
          <button
            type="button"
            aria-label={t.nav.menu}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-line text-ink"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="flex flex-col gap-1.5">
              <span className="block h-0.5 w-5 bg-ink" />
              <span className="block h-0.5 w-5 bg-ink" />
              <span className="block h-0.5 w-3.5 bg-ink" />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-line bg-bg-elevated px-5 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href.startsWith("#") ? `/${link.href}` : link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-muted"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/careers"
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-muted"
            >
              Careers
            </a>
            <a
              href="/#pricing"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex w-fit rounded-full bg-accent px-4 py-2.5 text-sm font-semibold text-white"
            >
              {t.nav.startFree}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
