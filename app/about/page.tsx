import type { Metadata } from "next";
import AboutContent from "@/components/pages/AboutContent";

export const metadata: Metadata = {
  title: "About Sanjay Koradia – Biography & Journey",
  description:
    "Learn about Sanjay Koradia (Sanjay Koradiya), MLA of Junagadh. His journey from a farmer's family in Nani Vavdi to serving the people of Junagadh, Gujarat.",
  keywords: [
    "Sanjay Koradia biography",
    "Sanjay Koradiya about",
    "Junagadh MLA biography",
    "Vanraj Food Industries",
  ],
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return <AboutContent />;
}
