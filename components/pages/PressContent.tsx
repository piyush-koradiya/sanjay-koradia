"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useT } from "@/contexts/LocaleContext";
import PressCard from "@/components/sections/PressCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { pressItems } from "@/lib/data/press";

type FilterType = "all" | "press" | "podcast" | "interview";

export default function PressContent() {
  const t = useT("press");
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");

  const filters: { key: FilterType; label: string }[] = [
    { key: "all", label: t("filterAll") },
    { key: "press", label: t("filterPress") },
    { key: "podcast", label: t("filterPodcast") },
    { key: "interview", label: t("filterInterview") },
  ];

  const filtered =
    activeFilter === "all"
      ? pressItems
      : pressItems.filter((p) => p.type === activeFilter);

  return (
    <section className="section-py bg-[var(--color-secondary)]">
      <div className="container-site">
        <SectionHeading title={t("pageTitle")} align="center" />

        {/* Filter pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {filters.map((f) => (
            <motion.button
              key={f.key}
              onClick={() => setActiveFilter(f.key)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeFilter === f.key
                  ? "bg-[var(--color-primary)] text-white shadow-md"
                  : "bg-white text-[var(--color-text-muted)] border border-[var(--color-border)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
              }`}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              {f.label}
            </motion.button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((item, i) => (
            <PressCard key={item.id} item={item} index={i} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-[var(--color-text-muted)]">
            No press items found for this category.
          </div>
        )}
      </div>
    </section>
  );
}
