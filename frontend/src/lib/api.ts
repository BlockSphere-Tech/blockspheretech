import type { Locale } from "@/i18n/types";

const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000/api";

async function get<T>(path: string, locale?: Locale): Promise<T> {
  const separator = path.includes("?") ? "&" : "?";
  const url = locale
    ? `${API_URL}${path}${separator}lang=${locale}`
    : `${API_URL}${path}`;
  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) {
    throw new Error(`API ${path} failed: ${res.status}`);
  }
  return res.json() as Promise<T>;
}

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

export type Product = {
  id: string;
  category: string;
  name: string;
  tagline: string;
  priceFrom: number | null;
  priceUnit: string | null;
  href: string;
};

export type Category = {
  id: string;
  title: string;
  description: string;
};

export type Network = {
  id: string;
  name: string;
  networks: string[];
  featured: boolean;
};

export type UseCase = {
  id: string;
  category: string;
  name: string;
  stats: { label: string; value: string }[];
  challenge: string;
  outcome: string;
  highlights: string[];
};

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export type HomePayload = {
  site: SiteData;
  products: { categories: Category[]; products: Product[] };
  networks: { totalCount: number; networks: Network[] };
  useCases: { useCases: UseCase[] };
  faq: { faq: FaqItem[] };
};

export function fetchSite(locale?: Locale) {
  return get<SiteData>("/site", locale);
}

export function fetchProducts(locale?: Locale) {
  return get<{ categories: Category[]; products: Product[] }>(
    "/products",
    locale
  );
}

export function fetchNetworks(locale?: Locale) {
  return get<{ totalCount: number; networks: Network[] }>(
    "/networks?featured=true",
    locale
  );
}

export function fetchUseCases(locale?: Locale) {
  return get<{ useCases: UseCase[] }>("/use-cases", locale);
}

export function fetchFaq(locale?: Locale) {
  return get<{ faq: FaqItem[] }>("/faq", locale);
}

export async function fetchHome(locale: Locale): Promise<HomePayload> {
  const [site, products, networks, useCases, faq] = await Promise.all([
    fetchSite(locale),
    fetchProducts(locale),
    fetchNetworks(locale),
    fetchUseCases(locale),
    fetchFaq(locale),
  ]);
  return { site, products, networks, useCases, faq };
}

export async function estimatePricing(
  computeUnits: number,
  rps: number,
  locale?: Locale
) {
  const lang = locale ? `&lang=${locale}` : "";
  const res = await fetch(
    `${API_URL}/pricing/estimate?computeUnits=${computeUnits}&rps=${rps}${lang}`
  );
  if (!res.ok) throw new Error("Pricing estimate failed");
  return res.json() as Promise<{
    plan: string;
    pricePerMonth: number;
    computeUnits: number;
    requestsPerSecond: number;
  }>;
}

export async function submitContact(
  payload: {
    name: string;
    email: string;
    company?: string;
    message: string;
  },
  locale?: Locale
) {
  const url = locale ? `${API_URL}/contact?lang=${locale}` : `${API_URL}/contact`;
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...payload, lang: locale }),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || "Contact failed");
  return data as { ok: boolean; message: string; id: string };
}
