"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useT } from "@/contexts/LocaleContext";
import MomentCard from "@/components/sections/MomentCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { moments } from "@/lib/data/moments";

type Category = "all" | "event" | "community" | "development";

export default function MomentsContent() {
  const t = useT("moments");
  const [activeFilter, setActiveFilter] = useState<Category>("all");

  const filters: { key: Category; label: string }[] = [
    { key: "all", label: t("filterAll") },
    { key: "event", label: t("filterEvent") },
    { key: "community", label: t("filterCommunity") },
    { key: "development", label: t("filterDevelopment") },
  ];

  const filtered =
    activeFilter === "all"
      ? moments
      : moments.filter((m) => m.category === activeFilter);

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

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          layout
        >
          {filtered.map((moment, i) => (
            <MomentCard key={moment.id} moment={moment} index={i} />
          ))}
        </motion.div>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-[var(--color-text-muted)]">
            No moments found for this category.
          </div>
        )}
      </div>
    </section>
  );
}
