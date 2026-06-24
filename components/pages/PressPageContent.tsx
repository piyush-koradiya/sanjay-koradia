"use client";

import { useT } from "@/contexts/LocaleContext";
import PressContent from "./PressContent";
import PageBanner from "@/components/ui/PageBanner";

export default function PressPageContent() {
  const t = useT("press");

  return (
    <>
      <PageBanner
        label="Media"
        title={t("pageTitle")}
        subtitle={t("pageSubtitle")}
      />
      <PressContent />
    </>
  );
}
