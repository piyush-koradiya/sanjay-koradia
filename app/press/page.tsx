import type { Metadata } from "next";
import PressPageContent from "@/components/pages/PressPageContent";

export const metadata: Metadata = {
  title: "Press & Media – News, Interviews & Podcasts",
  description:
    "Press releases, interviews, and podcast features on Sanjay Koradia (Sanjay Koradiya), MLA Junagadh. Stay updated on his work and vision for Gujarat.",
  keywords: [
    "Sanjay Koradia press",
    "Sanjay Koradiya interview",
    "Junagadh MLA news",
    "Sanjay Koradia media",
  ],
  alternates: { canonical: "/press" },
};

export default function PressPage() {
  return <PressPageContent />;
}
