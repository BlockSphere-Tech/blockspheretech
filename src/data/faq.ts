export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export const faq: FaqItem[] = [
  {
    id: "what-is-blocksphere",
    question: "What is BlockSphere Tech?",
    answer:
      "BlockSphere Tech is an enterprise blockchain infrastructure provider. We deliver managed and single-tenant RPC endpoints, indexed and streaming data, sanctions and risk screening, payment rails, and staking infrastructure — purchased on one account and delivered under one contract.",
  },
  {
    id: "which-blockchains",
    question: "Which blockchains does BlockSphere Tech support?",
    answer:
      "BlockSphere Tech supports more than 130 networks, including Ethereum, Solana, Bitcoin, BNB Chain, TRON, XRP Ledger, Base, Polygon, Cardano, and NEAR, on both mainnet and testnet.",
  },
  {
    id: "pricing",
    question: "How is BlockSphere Tech priced?",
    answer:
      "Shared Nodes start at $49 per month, Limitless Nodes at $150 per month, and Dedicated Nodes at $1,000 per month. Annual billing reduces these to $39, $120, and $800 per month. A free tier is available with no credit card required.",
  },
  {
    id: "free-tier",
    question: "Does BlockSphere Tech offer a free tier?",
    answer:
      "Yes. The free tier provides access to shared endpoints across supported networks with no credit card required at sign-up.",
  },
  {
    id: "soc2",
    question: "Is BlockSphere Tech SOC 2 compliant?",
    answer:
      "BlockSphere Tech maintains a SOC 2 Type II attestation covering shared and dedicated node products, supporting enterprise security reviews and vendor due diligence.",
  },
  {
    id: "gdpr-dora",
    question: "Is BlockSphere Tech aligned with GDPR and DORA?",
    answer:
      "BlockSphere Tech operates GDPR-aligned data handling and maintains a DORA-ready ICT provider posture, including incident reporting, resilience testing, subcontracting transparency, and exit arrangements.",
  },
  {
    id: "locations",
    question: "Where does BlockSphere Tech operate infrastructure?",
    answer:
      "BlockSphere Tech operates infrastructure in New York, Frankfurt, and Singapore, with EU-weighted routing available for customers with data residency requirements.",
  },
  {
    id: "node-types",
    question:
      "What is the difference between Shared, Dedicated, and Limitless Nodes?",
    answer:
      "Shared Nodes provide managed endpoints billed by compute units. Limitless Nodes provide fixed requests-per-second capacity with no compute unit caps. Dedicated Nodes are single-tenant deployments for high-throughput and regulated workloads.",
  },
  {
    id: "archive",
    question: "Does BlockSphere Tech provide archive nodes?",
    answer:
      "Yes. Archival nodes with complete historical state from the genesis block are available across supported networks, including indexed archive data for Solana and Sui.",
  },
  {
    id: "support",
    question: "What are BlockSphere Tech's support commitments?",
    answer:
      "First response is under five minutes, with root cause analysis within three hours, available 24/7 from the engineering team.",
  },
];
