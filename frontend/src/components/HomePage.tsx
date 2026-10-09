"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LogoMarquee from "@/components/LogoMarquee";
import Platform from "@/components/Platform";
import Networks from "@/components/Networks";
import UseCases from "@/components/UseCases";
import PricingEstimator from "@/components/PricingEstimator";
import Security from "@/components/Security";
import Support from "@/components/Support";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useI18n } from "@/i18n/I18nProvider";
import { fetchHome, type HomePayload } from "@/lib/api";

export default function HomePage({ initial }: { initial: HomePayload }) {
  const { locale } = useI18n();
  const [data, setData] = useState(initial);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (data.site.lang === locale) return;
    let cancelled = false;
    setLoading(true);
    fetchHome(locale)
      .then((next) => {
        if (!cancelled) setData(next);
      })
      .catch(() => {
        /* keep previous data */
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [locale, data.site.lang]);

  return (
    <>
      <Header />
      <main
        className={`flex-1 transition-opacity duration-200 ${
          loading ? "opacity-80" : "opacity-100"
        }`}
      >
        <Hero site={data.site} />
        <LogoMarquee logos={data.site.logos} />
        <Platform
          categories={data.products.categories}
          products={data.products.products}
        />
        <Networks
          networks={data.networks.networks}
          totalCount={data.networks.totalCount}
        />
        <UseCases useCases={data.useCases.useCases} />
        <PricingEstimator />
        <Security site={data.site} />
        <Support site={data.site} />
        <Faq items={data.faq.faq} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
