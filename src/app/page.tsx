import AppProviders from "@/components/AppProviders";
import HomePage from "@/components/HomePage";
import { getHome } from "@/lib/api";

export default function Home() {
  const initial = getHome("en");

  return (
    <AppProviders>
      <HomePage initial={initial} />
    </AppProviders>
  );
}
