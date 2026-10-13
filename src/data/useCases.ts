export type UseCase = {
  id: string;
  category: string;
  name: string;
  stats: { label: string; value: string }[];
  challenge: string;
  outcome: string;
  highlights: string[];
};

export const useCases: UseCase[] = [
  {
    id: "trust-wallet",
    category: "Non-Custodial Wallets",
    name: "Trust Wallet",
    stats: [
      { label: "Active users", value: "124M" },
      { label: "Countries", value: "93" },
      { label: "Of software wallet market", value: "35%" },
    ],
    challenge:
      "Serving 124M wallet users required Bitcoin address indexing and a patched Cosmos client under one multi-chain SLA.",
    outcome:
      "Trust Wallet consolidated 12 networks onto managed infrastructure, with an estimated 4,500 engineering hours saved.",
    highlights: [
      "Bitcoin full node with Blockbook indexing for address and transaction lookups",
      "Cosmos node running a custom client patch maintained in-house",
      "Fault-tolerant cluster spanning 12 networks, including long-tail chains",
      "EU-weighted routing through the Frankfurt cluster for latency and residency",
      "99.99% uptime under SLA, backed by 24/7 engineering support",
    ],
  },
  {
    id: "national-bank",
    category: "Banking and Fintech",
    name: "A top-10 national bank",
    stats: [
      { label: "In assets", value: "$80B" },
      { label: "Cryptocurrencies supported", value: "20+" },
      { label: "From first call to production", value: "3 weeks" },
    ],
    challenge:
      "A listed top-10 bank needed an isolated, audit-ready EU node environment under a contract framework that did not exist.",
    outcome:
      "The bank went from first call to a production cluster in three weeks, with an estimated 1,200 DevOps hours saved.",
    highlights: [
      "Isolated EU node cluster with strict IP allowlisting and full policy review",
      "Standard hardware: 2x1TB and 2x2TB NVMe, 1M+ IOPS, 25 GB/s uplink",
      "Mixed network coverage, from Polygon to Cardano and Bitcoin",
      "SOC 2 attestation supported by more than 10 independent security tests",
      "Custom legal and contractual framework built from scratch",
    ],
  },
  {
    id: "mexc",
    category: "Crypto Exchanges",
    name: "MEXC",
    stats: [
      { label: "Users", value: "40M" },
      { label: "Cryptocurrencies listed", value: "3,000" },
      { label: "In reserves", value: "$6B" },
    ],
    challenge:
      "Exchange-scale load required dedicated capacity with cross-tier failover and Ethereum client diversity in one setup.",
    outcome:
      "MEXC held 99.99% uptime through peak trading load, with an estimated 3,000 engineering hours saved.",
    highlights: [
      "Dedicated node cluster across five networks, exposed through 100 endpoints",
      "Cross-tier failover, with shared nodes backing dedicated capacity",
      "Ethereum client diversity: Prysm, Teku, and Geth in a single setup",
      "Enterprise capacity of 100B compute units per month, sustained at 300 RPS",
      "JSON-RPC and WebSocket access routed through the Frankfurt cluster",
    ],
  },
  {
    id: "tangem",
    category: "Hardware Wallets",
    name: "Tangem",
    stats: [
      { label: "Wallets sold", value: "6M" },
      { label: "Security incidents", value: "Zero" },
      { label: "Blockchains supported", value: "90+" },
    ],
    challenge:
      "A hardware wallet shipping 6M units needed EVM and UTXO networks under a single dedicated setup and one contract.",
    outcome:
      "Tangem has held three years of 99.99% uptime and doubled its supported network count on BlockSphere Tech infrastructure.",
    highlights: [
      "Fault-tolerant dedicated cluster spanning more than 10 blockchain networks",
      "EVM and UTXO chains in one setup, from Ethereum and BNB Chain to Cardano",
      "Latency held below 10ms on the most frequently requested RPC methods",
      "Mixed monthly and annual contract terms to match the budget cycle",
      "Network coverage doubled with no additional procurement cycle required",
    ],
  },
  {
    id: "coingate",
    category: "Payment Processors",
    name: "CoinGate",
    stats: [
      { label: "Payments processed", value: "7M+" },
      { label: "Countries served", value: "180+" },
      { label: "A crypto order is placed", value: "Every 20s" },
    ],
    challenge:
      "A MiCA-licensed payment gateway needed 13 networks and a DORA-grade ICT posture from one infrastructure provider.",
    outcome:
      "CoinGate gained a DORA and GDPR framework built from scratch, with an estimated 1,400 hours of engineering work saved.",
    highlights: [
      "Single cluster across 13 networks: UTXO, EVM, Solana, XRPL, and TRON",
      "Testnet parity for every network running in the production cluster",
      "DORA-ready ICT posture: incident reporting, resilience testing, exit plans",
      "SOC 2 Type II attestation covering shared and dedicated node products",
      "Self-service network management with no procurement cycle per chain",
    ],
  },
  {
    id: "blockaid",
    category: "Web3 Security",
    name: "Blockaid",
    stats: [
      { label: "In digital assets protected", value: "$500B+" },
      { label: "Fortune Crypto 40 clients", value: "10+" },
      { label: "Malicious txs screened", value: "5B+" },
    ],
    challenge:
      "Real-time transaction screening required sub-7ms multi-chain nodes running proprietary binaries in three regions.",
    outcome:
      "Blockaid extended screening to networks with no commercial RPC support, with an estimated 1,500 hours of work saved.",
    highlights: [
      "Load-balanced clusters of two to three full nodes for every network",
      "Deployment across New York, Frankfurt, and Singapore for global coverage",
      "Three-stage rollout of proprietary binaries on every synced node",
      "First commercial Abstract RPC node, plus Worldchain and Zero on request",
      "Dedicated Grafana dashboards, 3-hour RCA, first response under 5 minutes",
    ],
  },
];
