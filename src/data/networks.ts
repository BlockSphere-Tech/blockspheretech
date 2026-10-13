export type Network = {
  id: string;
  name: string;
  networks: string[];
  featured: boolean;
};

export const networks: Network[] = [
  {
    id: "ethereum",
    name: "Ethereum",
    networks: ["Hoodi", "Mainnet", "Sepolia"],
    featured: true,
  },
  {
    id: "bsc",
    name: "BNB Smart Chain",
    networks: ["Mainnet", "Testnet"],
    featured: true,
  },
  {
    id: "solana",
    name: "Solana",
    networks: ["Alpenglow", "Devnet", "Mainnet", "Testnet"],
    featured: true,
  },
  {
    id: "base",
    name: "Base",
    networks: ["Mainnet", "Sepolia", "Goerli"],
    featured: true,
  },
  {
    id: "arbitrum",
    name: "Arbitrum",
    networks: ["Mainnet", "Sepolia"],
    featured: true,
  },
  {
    id: "polygon",
    name: "Polygon",
    networks: ["Amoy", "Mainnet"],
    featured: true,
  },
  {
    id: "bitcoin",
    name: "Bitcoin",
    networks: ["Mainnet", "Testnet"],
    featured: true,
  },
  {
    id: "sui",
    name: "Sui",
    networks: ["Mainnet"],
    featured: true,
  },
  {
    id: "tron",
    name: "Tron",
    networks: ["Mainnet", "Testnet"],
    featured: true,
  },
  {
    id: "avalanche",
    name: "Avalanche",
    networks: ["Mainnet", "Fuji"],
    featured: false,
  },
  {
    id: "optimism",
    name: "Optimism",
    networks: ["Mainnet", "Sepolia"],
    featured: false,
  },
  {
    id: "near",
    name: "NEAR",
    networks: ["Mainnet", "Testnet"],
    featured: false,
  },
];

export const totalCount = 130;
