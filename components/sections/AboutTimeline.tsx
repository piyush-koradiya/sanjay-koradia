"use client";

import { motion } from "framer-motion";
import { useT } from "@/contexts/LocaleContext";

const timelineItems = [
  { yearKey: "timeline1Year", eventKey: "timeline1Event" },
  { yearKey: "timeline2Year", eventKey: "timeline2Event" },
  { yearKey: "timeline3Year", eventKey: "timeline3Event" },
  { yearKey: "timeline4Year", eventKey: "timeline4Event" },
  { yearKey: "timeline5Year", eventKey: "timeline5Event" },
] as const;

export default function AboutTimeline() {
  const t = useT("about");

  return (
    <div className="relative max-w-2xl mx-auto">
      {/* Vertical line */}
      <div className="absolute left-6 top-2 bottom-2 w-0.5 bg-[var(--color-border)]" />

      <div className="flex flex-col gap-6">
        {timelineItems.map((item, i) => (
          <motion.div
            key={i}
            className="relative flex items-start gap-6 pl-16"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            {/* Dot */}
            <div className="absolute left-3.5 top-4 w-5 h-5 rounded-full bg-[var(--color-primary)] ring-4 ring-[var(--color-secondary)] z-10" />

            {/* Card */}
            <div className="flex-1 bg-[var(--color-secondary)] rounded-[var(--radius-md)] p-5 border border-[var(--color-border)]">
              <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-primary)] block mb-1.5">
                {t(item.yearKey)}
              </span>
              <p className="text-sm md:text-base text-[var(--color-text)] leading-relaxed font-medium">
                {t(item.eventKey)}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
