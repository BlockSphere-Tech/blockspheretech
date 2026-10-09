const express = require("express");
const { products, categories } = require("../data/products");
const { networks, totalCount } = require("../data/networks");
const { useCases } = require("../data/useCases");
const { faq: faqEn } = require("../data/faq");
const { compliance, logos, support } = require("../data/stats");
const {
  site: siteI18n,
  categories: categoriesI18n,
  products: productsI18n,
  useCaseCategories,
  faq: faqI18n,
  pricingPlans,
  resolveLang,
} = require("../i18n/content");

const router = express.Router();
const contactMessages = [];

const contactThanks = {
  en: "Thank you. A solutions engineer will respond shortly.",
  zh: "感谢您的留言。解决方案工程师将尽快回复。",
  es: "Gracias. Un ingeniero de soluciones responderá en breve.",
};

router.get("/health", (_req, res) => {
  res.json({ ok: true, service: "cryptara-api", timestamp: new Date().toISOString() });
});

router.get("/locales", (_req, res) => {
  res.json({
    locales: [
      { code: "en", label: "English", native: "English" },
      { code: "zh", label: "Chinese", native: "中文" },
      { code: "es", label: "Spanish", native: "Español" },
    ],
    default: "en",
  });
});

router.get("/site", (req, res) => {
  const lang = resolveLang(req.query.lang);
  const copy = siteI18n[lang];
  res.json({
    brand: "Cryptara",
    legalName: "Cryptara Pte. Ltd.",
    tagline: copy.tagline,
    headline: copy.headline,
    description: copy.description,
    positioning: copy.positioning,
    stats: copy.stats,
    compliance,
    logos,
    support: {
      ...support,
      channels: copy.supportChannels,
    },
    lang,
  });
});

router.get("/products", (req, res) => {
  const lang = resolveLang(req.query.lang);
  const { category } = req.query;
  const catCopy = categoriesI18n[lang];
  const prodCopy = productsI18n[lang];

  const localizedCategories = categories.map((c) => ({
    ...c,
    title: catCopy[c.id]?.title || c.title,
    description: catCopy[c.id]?.description || c.description,
  }));

  const list = (category ? products.filter((p) => p.category === category) : products).map(
    (p) => ({
      ...p,
      name: prodCopy[p.id]?.name || p.name,
      tagline: prodCopy[p.id]?.tagline || p.tagline,
    })
  );

  res.json({ categories: localizedCategories, products: list, lang });
});

router.get("/products/:id", (req, res) => {
  const lang = resolveLang(req.query.lang);
  const product = products.find((p) => p.id === req.params.id);
  if (!product) {
    return res.status(404).json({ error: "Product not found" });
  }
  const copy = productsI18n[lang][product.id] || {};
  return res.json({
    ...product,
    name: copy.name || product.name,
    tagline: copy.tagline || product.tagline,
    lang,
  });
});

router.get("/networks", (req, res) => {
  const featuredOnly = req.query.featured === "true";
  const list = featuredOnly ? networks.filter((n) => n.featured) : networks;
  res.json({ totalCount, networks: list, lang: resolveLang(req.query.lang) });
});

router.get("/use-cases", (req, res) => {
  const lang = resolveLang(req.query.lang);
  const cats = useCaseCategories[lang];
  res.json({
    lang,
    useCases: useCases.map((u) => ({
      ...u,
      category: cats[u.id] || u.category,
    })),
  });
});

router.get("/use-cases/:id", (req, res) => {
  const lang = resolveLang(req.query.lang);
  const item = useCases.find((u) => u.id === req.params.id);
  if (!item) {
    return res.status(404).json({ error: "Use case not found" });
  }
  return res.json({
    ...item,
    category: useCaseCategories[lang][item.id] || item.category,
    lang,
  });
});

router.get("/faq", (req, res) => {
  const lang = resolveLang(req.query.lang);
  res.json({
    lang,
    faq: faqI18n[lang] || faqEn,
  });
});

router.get("/pricing/estimate", (req, res) => {
  const lang = resolveLang(req.query.lang);
  const cu = Number(req.query.computeUnits) || 50_000_000;
  const rps = Number(req.query.rps) || 50;
  const plans = pricingPlans[lang];

  let plan = plans.starter;
  let price = 39;

  if (rps > 200 || cu > 500_000_000) {
    plan = plans.dedicated;
    price = 800;
  } else if (rps > 100 || cu > 185_000_000) {
    plan = plans.growth;
    price = 79;
  } else if (rps > 50) {
    plan = plans.limitless;
    price = 120;
  }

  res.json({
    computeUnits: cu,
    requestsPerSecond: rps,
    plan,
    pricePerMonth: price,
    currency: "USD",
    lang,
  });
});

router.post("/contact", (req, res) => {
  const lang = resolveLang(req.query.lang || req.body?.lang);
  const { name, email, company, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({
      error: "name, email, and message are required",
    });
  }

  const entry = {
    id: `msg_${Date.now()}`,
    name: String(name).slice(0, 120),
    email: String(email).slice(0, 180),
    company: company ? String(company).slice(0, 120) : null,
    message: String(message).slice(0, 4000),
    lang,
    createdAt: new Date().toISOString(),
  };

  contactMessages.push(entry);

  return res.status(201).json({
    ok: true,
    message: contactThanks[lang],
    id: entry.id,
  });
});

module.exports = router;
