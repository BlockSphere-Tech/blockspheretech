import type { Metadata } from "next";
import AppProviders from "@/components/AppProviders";
import CareersPage from "@/components/CareersPage";

export const metadata: Metadata = {
  title: "Careers — Cryptara",
  description:
    "Open roles at Cryptara: Solidity Engineer, Smart Contract Engineer, and Protocol Engineer.",
};

export default function Careers() {
  return (
    <AppProviders>
      <CareersPage />
    </AppProviders>
  );
}
