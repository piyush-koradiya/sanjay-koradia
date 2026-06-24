"use client";

import { useT } from "@/contexts/LocaleContext";
import MomentsContent from "./MomentsContent";
import PageBanner from "@/components/ui/PageBanner";

export default function MomentsPageContent() {
  const t = useT("moments");

  return (
    <>
      <PageBanner
        label="Gallery"
        title={t("pageTitle")}
        subtitle={t("pageSubtitle")}
      />
      <MomentsContent />
    </>
  );
}
