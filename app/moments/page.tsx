import type { Metadata } from "next";
import MomentsPageContent from "@/components/pages/MomentsPageContent";

export const metadata: Metadata = {
  title: "Moments – Events & Community Engagement",
  description:
    "Browse photos and highlights from events, community programmes, and development projects led by Sanjay Koradia (Sanjay Koradiya), MLA Junagadh.",
  keywords: [
    "Sanjay Koradia moments",
    "Sanjay Koradiya events",
    "Junagadh MLA events",
    "Junagadh development",
  ],
  alternates: { canonical: "/moments" },
};

export default function MomentsPage() {
  return <MomentsPageContent />;
}
