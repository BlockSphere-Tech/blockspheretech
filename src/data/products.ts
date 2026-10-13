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

export const products: Product[] = [
  {
    id: "shared-nodes",
    category: "infrastructure",
    name: "Shared Nodes",
    tagline: "Endpoints on every network, billed by compute units.",
    priceFrom: 39,
    priceUnit: "mo",
    href: "/products/shared-nodes",
  },
  {
    id: "limitless-nodes",
    category: "infrastructure",
    name: "Limitless Nodes",
    tagline: "Fixed RPS capacity, no compute unit caps.",
    priceFrom: 120,
    priceUnit: "mo",
    href: "/products/limitless-nodes",
  },
  {
    id: "dedicated-nodes",
    category: "infrastructure",
    name: "Dedicated Nodes",
    tagline: "Single-tenant nodes for regulated workloads at scale.",
    priceFrom: 800,
    priceUnit: "mo",
    href: "/products/dedicated-nodes",
  },
  {
    id: "archival-nodes",
    category: "infrastructure",
    name: "Full & Archival Nodes",
    tagline: "Live chain state or complete history, back to genesis.",
    priceFrom: null,
    priceUnit: null,
    href: "/products/archival-nodes",
  },
  {
    id: "solana-shreds",
    category: "data",
    name: "Solana Shreds",
    tagline: "Transactions ahead of block confirmation.",
    priceFrom: 250,
    priceUnit: "mo",
    href: "/products/solana-shreds",
  },
  {
    id: "realtime-streams",
    category: "data",
    name: "Real-Time Streams",
    tagline: "Blocks, transactions, and logs streamed as they land.",
    priceFrom: null,
    priceUnit: null,
    href: "/products/streams",
  },
  {
    id: "webhooks",
    category: "data",
    name: "Webhooks",
    tagline: "Chain events delivered to your endpoint, no polling.",
    priceFrom: null,
    priceUnit: null,
    href: "/products/webhooks",
  },
  {
    id: "market-data",
    category: "data",
    name: "Market Data",
    tagline: "Normalized trades from DEXs and prediction markets.",
    priceFrom: null,
    priceUnit: null,
    href: "/products/market-data",
  },
  {
    id: "crypto-aml",
    category: "risk",
    name: "Crypto AML Check",
    tagline: "Sanctions and risk screening for any address.",
    priceFrom: 0.5,
    priceUnit: "check",
    href: "/products/aml",
  },
  {
    id: "wallet-audit",
    category: "risk",
    name: "Full Wallet Audit",
    tagline: "Complete counterparty profile: history, exposure, entities.",
    priceFrom: 0.2,
    priceUnit: "request",
    href: "/products/wallet-audit",
  },
  {
    id: "rug-pull",
    category: "risk",
    name: "Rug Pull Scanner",
    tagline: "Contract and liquidity risk before capital is committed.",
    priceFrom: 0.2,
    priceUnit: "request",
    href: "/products/rug-pull",
  },
  {
    id: "tron-energy",
    category: "payments",
    name: "TRON Energy Rental",
    tagline: "TRC-20 USDT transfers at significantly lower cost.",
    priceFrom: null,
    priceUnit: null,
    href: "/products/tron-energy",
  },
  {
    id: "near-staking",
    category: "staking",
    name: "NEAR Staking",
    tagline: "Delegation at competitive rates on operated infrastructure.",
    priceFrom: null,
    priceUnit: null,
    href: "/products/near-staking",
  },
];

export const categories: Category[] = [
  {
    id: "infrastructure",
    title: "RPC Infrastructure",
    description:
      "Managed endpoints and single-tenant nodes, from a free key to a dedicated cluster.",
  },
  {
    id: "data",
    title: "Data",
    description:
      "Streams, webhooks and indexed history, already shaped for your product.",
  },
  {
    id: "risk",
    title: "Risk & Compliance",
    description:
      "Screening, wallet audits and risk APIs, on our own models and our own nodes.",
  },
  {
    id: "payments",
    title: "Payment Solutions",
    description: "Cheaper transfers today, agentic payment rails next.",
  },
  {
    id: "staking",
    title: "Staking",
    description:
      "Our own validators, and validator operation for anyone who would rather not run one.",
  },
];
