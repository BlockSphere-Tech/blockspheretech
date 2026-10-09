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
  process.env.NEXT_PUBLIC_CAREERS_EMAIL || "careers@cryptara.io";

export const careerRoles: CareerRole[] = [
  {
    id: "solidity-engineer",
    title: "Solidity Engineer",
    team: "Smart Contracts",
    location: "Remote · Singapore timezone preferred",
    type: "Full-time",
    budget: "$140k – $190k USD / year",
    summary:
      "Design and ship production Solidity for Cryptara’s on-chain products and customer integrations.",
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
    location: "Remote · Global",
    type: "Full-time",
    budget: "$130k – $180k USD / year",
    summary:
      "Build and harden smart contracts across EVM and adjacent ecosystems used by Cryptara customers.",
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
    location: "Hybrid · Singapore / Remote",
    type: "Full-time",
    budget: "$160k – $220k USD / year",
    summary:
      "Shape Cryptara’s protocol architecture — consensus-adjacent tooling, indexing hooks, and cross-chain design.",
    responsibilities: [
      "Architect protocol components and cross-chain messaging flows",
      "Prototype, benchmark, and harden critical path services",
      "Collaborate with research, security, and node infrastructure teams",
    ],
  },
];

export function applyMailto(role: CareerRole) {
  const subject = encodeURIComponent(`Cryptara application — ${role.title}`);
  const body = encodeURIComponent(
    [
      `Hi Cryptara team,`,
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
