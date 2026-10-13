export type Locale = "en" | "zh" | "es";

export const LOCALES: { code: Locale; label: string; native: string }[] = [
  { code: "en", label: "English", native: "English" },
  { code: "zh", label: "Chinese", native: "中文" },
  { code: "es", label: "Spanish", native: "Español" },
];

export const DEFAULT_LOCALE: Locale = "en";

export type Messages = {
  nav: {
    products: string;
    networks: string;
    solutions: string;
    pricing: string;
    company: string;
    contactSales: string;
    startFree: string;
    menu: string;
  };
  hero: {
    startFree: string;
    viewDocs: string;
  };
  logos: {
    trusted: string;
  };
  platform: {
    eyebrow: string;
    title: string;
    subtitle: string;
    learnMore: string;
    metricNetworks: string;
    metricSignup: string;
    metricLatency: string;
    fromMo: string;
    fromUnit: string;
  };
  networks: {
    eyebrow: string;
    title: string;
    subtitle: string;
    explore: string;
  };
  useCases: {
    eyebrow: string;
    title: string;
    subtitle: string;
    caseStudy: string;
    challenge: string;
    outcome: string;
  };
  pricing: {
    eyebrow: string;
    title: string;
    subtitle: string;
    estimateTitle: string;
    estimateBody: string;
    computeUnits: string;
    rps: string;
    perMo: string;
    startTrial: string;
    enterprise: string;
    dedicatedTitle: string;
    dedicatedBody: string;
    speakSales: string;
    developers: string;
    freeTitle: string;
    freeBody: string;
  };
  security: {
    eyebrow: string;
    title: string;
    requestPack: string;
    uptime: string;
    regions: string;
    chains: string;
    support: string;
  };
  support: {
    eyebrow: string;
    title: string;
    subtitle: string;
    coverageTitle: string;
    coverageBody: string;
    firstResponse: string;
    rca: string;
    docsTitle: string;
    docsBody: string;
  };
  faq: {
    eyebrow: string;
    title: string;
    intro: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    subtitle: string;
    quote: string;
    name: string;
    email: string;
    company: string;
    message: string;
    submit: string;
    sending: string;
  };
  footer: {
    blurb: string;
    product: string;
    chains: string;
    developers: string;
    company: string;
    terms: string;
    privacy: string;
    cookies: string;
    rights: string;
  };
  common: {
    language: string;
  };
};
