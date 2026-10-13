import type { Locale } from "@/i18n/types";
import { categories, products, type Category, type Product } from "@/data/products";
import { networks, totalCount, type Network } from "@/data/networks";
import { useCases, type UseCase } from "@/data/useCases";
import { faq as faqEn, type FaqItem } from "@/data/faq";
import { compliance, logos, support } from "@/data/stats";
import {
  siteCopy,
  categoriesCopy,
  productsCopy,
  useCaseCategories,
  faqCopy,
  pricingPlans,
  contactThanks,
  resolveLang,
} from "@/data/content";

export type { Category, Product, Network, UseCase, FaqItem };

export type SiteData = {
  brand: string;
  legalName?: string;
  tagline: string;
  headline?: string;
  description: string;
  positioning?: string;
  stats: { label: string; value: string }[];
  compliance: string[];
  logos: string[];
  support: {
    firstResponse: string;
    rootCauseAnalysis: string;
    channels: string[];
  };
  lang?: string;
};

export type HomePayload = {
  site: SiteData;
  products: { categories: Category[]; products: Product[] };
  networks: { totalCount: number; networks: Network[] };
  useCases: { useCases: UseCase[] };
  faq: { faq: FaqItem[] };
};

export function getSite(locale?: Locale): SiteData {
  const lang = resolveLang(locale);
  const copy = siteCopy[lang];
  return {
    brand: "BlockSphere Tech",
    legalName: "BlockSphere Tech Pte. Ltd.",
    tagline: copy.tagline,
    headline: copy.headline,
    description: copy.description,
    positioning: copy.positioning,
    stats: [...copy.stats],
    compliance,
    logos,
    support: {
      ...support,
      channels: [...copy.supportChannels],
    },
    lang,
  };
}

export function getProducts(locale?: Locale): {
  categories: Category[];
  products: Product[];
} {
  const lang = resolveLang(locale);
  const catCopy = categoriesCopy[lang];
  const prodCopy = productsCopy[lang];

  return {
    categories: categories.map((c) => ({
      ...c,
      title: catCopy[c.id as keyof typeof catCopy]?.title || c.title,
      description:
        catCopy[c.id as keyof typeof catCopy]?.description || c.description,
    })),
    products: products.map((p) => ({
      ...p,
      name: prodCopy[p.id as keyof typeof prodCopy]?.name || p.name,
      tagline: prodCopy[p.id as keyof typeof prodCopy]?.tagline || p.tagline,
    })),
  };
}

export function getNetworks(featuredOnly = true): {
  totalCount: number;
  networks: Network[];
} {
  return {
    totalCount,
    networks: featuredOnly ? networks.filter((n) => n.featured) : networks,
  };
}

export function getUseCases(locale?: Locale): { useCases: UseCase[] } {
  const lang = resolveLang(locale);
  const cats = useCaseCategories[lang];
  return {
    useCases: useCases.map((u) => ({
      ...u,
      category: cats[u.id] || u.category,
    })),
  };
}

export function getFaq(locale?: Locale): { faq: FaqItem[] } {
  const lang = resolveLang(locale);
  return { faq: faqCopy[lang] || faqEn };
}

export function getHome(locale: Locale = "en"): HomePayload {
  return {
    site: getSite(locale),
    products: getProducts(locale),
    networks: getNetworks(true),
    useCases: getUseCases(locale),
    faq: getFaq(locale),
  };
}

/** @deprecated Use getHome — kept for call-site compatibility */
export async function fetchHome(locale: Locale): Promise<HomePayload> {
  return getHome(locale);
}

export function estimatePricing(
  computeUnits: number,
  rps: number,
  locale?: Locale
) {
  const lang = resolveLang(locale);
  const cu = Number(computeUnits) || 50_000_000;
  const rate = Number(rps) || 50;
  const plans = pricingPlans[lang];

  let plan = plans.starter;
  let price = 39;

  if (rate > 200 || cu > 500_000_000) {
    plan = plans.dedicated;
    price = 800;
  } else if (rate > 100 || cu > 185_000_000) {
    plan = plans.growth;
    price = 79;
  } else if (rate > 50) {
    plan = plans.limitless;
    price = 120;
  }

  return {
    computeUnits: cu,
    requestsPerSecond: rate,
    plan,
    pricePerMonth: price,
    currency: "USD" as const,
    lang,
  };
}

export function submitContact(
  payload: {
    name: string;
    email: string;
    company?: string;
    message: string;
  },
  locale?: Locale
) {
  const lang = resolveLang(locale);
  const { name, email, message } = payload;

  if (!name || !email || !message) {
    throw new Error("name, email, and message are required");
  }

  return {
    ok: true as const,
    message: contactThanks[lang],
    id: `msg_${Date.now()}`,
  };
}
