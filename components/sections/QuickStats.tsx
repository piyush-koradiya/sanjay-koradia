"use client";

import { motion } from "framer-motion";
import { useT } from "@/contexts/LocaleContext";

export default function QuickStats() {
  const t = useT("home");

  const stats = [
    { value: t("statsYearsValue"), label: t("statsYears"), icon: "🏛" },
    { value: t("statsConstituencyValue"), label: t("statsConstituency"), icon: "📍" },
    { value: t("statsProjectsValue"), label: t("statsProjects"), icon: "🏗" },
  ];

  return (
    <section className="bg-[var(--color-primary)] py-14">
      <div className="container-site">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-white/20">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center text-center gap-2 py-6 sm:py-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              <span className="text-3xl mb-1">{stat.icon}</span>
              <span className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                {stat.value}
              </span>
              <span className="text-xs font-semibold text-white/70 uppercase tracking-[0.15em]">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
