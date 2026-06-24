import type { Metadata } from "next";
import HomeContent from "@/components/pages/HomeContent";

export const metadata: Metadata = {
  title: "Sanjay Koradia – MLA Junagadh | Official Website",
  description:
    "Official website of Sanjay Koradia (Sanjay Koradiya), MLA of Junagadh, Gujarat. Dedicated to the progress and welfare of every citizen of Junagadh.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return <HomeContent />;
}
