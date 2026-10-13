import type { Metadata } from "next";
import AppProviders from "@/components/AppProviders";
import CareersPage from "@/components/CareersPage";

export const metadata: Metadata = {
  title: "Careers — BlockSphere Tech",
  description:
    "Open remote roles at BlockSphere Tech: Solidity Engineer, Smart Contract Engineer, Protocol Engineer, Product Manager, and Engineering Manager.",
};

export default function Careers() {
  return (
    <AppProviders>
      <CareersPage />
    </AppProviders>
  );
}
