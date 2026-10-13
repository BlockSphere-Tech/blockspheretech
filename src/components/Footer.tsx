"use client";

import Logo from "./Logo";
import LanguageSwitcher from "./LanguageSwitcher";
import { useI18n } from "@/i18n/I18nProvider";
import {
  SUPPORT_EMAIL,
  SUPPORT_MAILTO,
  TELEGRAM_HANDLE,
  TELEGRAM_URL,
} from "@/data/contact";

type FooterLink = { label: string; href: string };

export default function Footer() {
  const { t } = useI18n();

  const columns: { title: string; links: FooterLink[] }[] = [
    {
      title: t.footer.product,
      links: [
        { label: "Shared Nodes", href: "/#platform" },
        { label: "Dedicated Nodes", href: "/#platform" },
        { label: "Data Streams", href: "/#platform" },
        { label: "Webhooks", href: "/#platform" },
        { label: "Pricing", href: "/#pricing" },
        { label: "Enterprise", href: "/#contact" },
      ],
    },
    {
      title: t.footer.chains,
      links: [
        { label: "Ethereum", href: "/#networks" },
        { label: "BNB Smart Chain", href: "/#networks" },
        { label: "Polygon", href: "/#networks" },
        { label: "Solana", href: "/#networks" },
        { label: "Base", href: "/#networks" },
        { label: "Arbitrum", href: "/#networks" },
      ],
    },
    {
      title: t.footer.developers,
      links: [
        { label: "Documentation", href: "/#platform" },
        { label: "RPC Benchmark", href: "/#platform" },
        { label: "Get Started", href: "/#pricing" },
        { label: "Guides", href: "/#platform" },
        { label: "Status", href: "/#contact" },
      ],
    },
    {
      title: t.footer.company,
      links: [
        { label: "About", href: "/#faq" },
        { label: "Blog", href: "/#faq" },
        { label: "Contact", href: "/#contact" },
        { label: "Careers", href: "/careers" },
        { label: "FAQ", href: "/#faq" },
      ],
    },
  ];

  return (
    <footer className="border-t border-line bg-bg-elevated">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">
          <div className="max-w-sm">
            <a href="/">
              <Logo size="md" />
            </a>
            <p className="mt-4 text-sm leading-relaxed text-muted">{t.footer.blurb}</p>
            <div className="mt-4 space-y-1.5 text-sm">
              <a
                href={SUPPORT_MAILTO}
                className="block text-muted transition-colors hover:text-ink"
              >
                {SUPPORT_EMAIL}
              </a>
              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-muted transition-colors hover:text-ink"
              >
                {TELEGRAM_HANDLE}
              </a>
            </div>
            <div className="mt-5">
              <LanguageSwitcher />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {columns.map((col) => (
              <div key={col.title}>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                  {col.title}
                </p>
                <ul className="mt-4 space-y-2">
                  {col.links.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        className="text-sm text-muted transition-colors hover:text-ink"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-line pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>{t.footer.rights}</p>
          <div className="flex gap-4">
            <a href="/#contact" className="hover:text-ink">
              {t.footer.terms}
            </a>
            <a href="/#contact" className="hover:text-ink">
              {t.footer.privacy}
            </a>
            <a href="/#contact" className="hover:text-ink">
              {t.footer.cookies}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
