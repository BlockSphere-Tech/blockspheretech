import AppProviders from "@/components/AppProviders";
import HomePage from "@/components/HomePage";
import { fetchHome } from "@/lib/api";

export const instant = false;

export default async function Home() {
  const initial = await fetchHome("en");

  return (
    <AppProviders>
      <HomePage initial={initial} />
    </AppProviders>
  );
}
