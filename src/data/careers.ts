export type CareerRole = {
  id: string;
  title: string;
  team: string;
  location: string;
  type: string;
  budget: string;
  summary: string;
  responsibilities: string[];
};

export const CAREERS_EMAIL =
  process.env.NEXT_PUBLIC_CAREERS_EMAIL || "careers@blockspheretech.io";

export const careerRoles: CareerRole[] = [
  {
    id: "solidity-engineer",
    title: "Solidity Engineer",
    team: "Smart Contracts",
    location: "Remote",
    type: "Full-time",
    budget: "$140k – $190k USD / year",
    summary:
      "Design and ship production Solidity for BlockSphere Tech’s on-chain products and customer integrations.",
    responsibilities: [
      "Write, test, and audit-ready Solidity for EVM protocols",
      "Own gas optimization, upgrade patterns, and threat modeling",
      "Partner with protocol and infra teams on mainnet releases",
    ],
  },
  {
    id: "smart-contract-engineer",
    title: "Smart Contract Engineer",
    team: "Protocol Engineering",
    location: "Remote",
    type: "Full-time",
    budget: "$130k – $180k USD / year",
    summary:
      "Build and harden smart contracts across EVM and adjacent ecosystems used by BlockSphere Tech customers.",
    responsibilities: [
      "Implement contract modules, interfaces, and integration adapters",
      "Run Foundry/Hardhat test suites and continuous security checks",
      "Document deployment runbooks and incident response playbooks",
    ],
  },
  {
    id: "protocol-engineer",
    title: "Protocol Engineer",
    team: "Core Protocol",
    location: "Remote",
    type: "Full-time",
    budget: "$160k – $220k USD / year",
    summary:
      "Shape BlockSphere Tech’s protocol architecture — consensus-adjacent tooling, indexing hooks, and cross-chain design.",
    responsibilities: [
      "Architect protocol components and cross-chain messaging flows",
      "Prototype, benchmark, and harden critical path services",
      "Collaborate with research, security, and node infrastructure teams",
    ],
  },
  {
    id: "product-manager",
    title: "Product Manager",
    team: "Product",
    location: "Remote",
    type: "Full-time",
    budget: "$130k – $180k USD / year",
    summary:
      "Own roadmap and delivery for BlockSphere Tech’s RPC, data, and compliance products used by institutional customers.",
    responsibilities: [
      "Define product strategy, priorities, and success metrics with customers and GTM",
      "Translate enterprise requirements into clear specs and release plans",
      "Partner with engineering and design to ship reliable platform features",
    ],
  },
  {
    id: "engineering-manager",
    title: "Engineering Manager",
    team: "Engineering",
    location: "Remote",
    type: "Full-time",
    budget: "$170k – $230k USD / year",
    summary:
      "Lead and grow remote engineering teams building BlockSphere Tech’s institutional blockchain infrastructure.",
    responsibilities: [
      "Hire, coach, and retain high-performing engineers across protocol and platform",
      "Set delivery cadence, quality bar, and operational excellence for production systems",
      "Collaborate with product and leadership on roadmap, capacity, and technical strategy",
    ],
  },
];

export function applyMailto(role: CareerRole) {
  const subject = encodeURIComponent(`BlockSphere Tech application — ${role.title}`);
  const body = encodeURIComponent(
    [
      `Hi BlockSphere Tech team,`,
      ``,
      `I would like to apply for the ${role.title} role.`,
      ``,
      `Name:`,
      `LinkedIn / GitHub:`,
      `Resume / portfolio:`,
      `Brief note:`,
      ``,
      `Thank you.`,
    ].join("\n")
  );
  return `mailto:${CAREERS_EMAIL}?subject=${subject}&body=${body}`;
}
