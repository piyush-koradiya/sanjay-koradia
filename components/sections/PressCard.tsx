"use client";

import { motion } from "framer-motion";
import { useT } from "@/contexts/LocaleContext";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { PressItem } from "@/lib/data/press";

interface PressCardProps {
  item: PressItem;
  index: number;
}

const typeVariant = {
  press: "primary",
  podcast: "secondary",
  interview: "muted",
} as const;

const typeIcon = {
  press: "📰",
  podcast: "🎙",
  interview: "💬",
};

export default function PressCard({ item, index }: PressCardProps) {
  const t = useT("press");

  return (
    <motion.article
      className="bg-white rounded-[var(--radius-lg)] shadow-[var(--shadow-card)] p-6 md:p-8 flex flex-col gap-5 border border-[var(--color-border)] hover:border-[var(--color-primary)]/30 transition-all group"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: "easeOut" }}
      whileHover={{ y: -3 }}
    >
      {/* Header row */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-xl">{typeIcon[item.type]}</span>
          <Badge variant={typeVariant[item.type]}>{item.purpose}</Badge>
        </div>
        <span className="text-xs text-[var(--color-text-light)] whitespace-nowrap font-medium shrink-0">
          {item.date}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-lg md:text-xl font-bold text-[var(--color-text)] leading-snug group-hover:text-[var(--color-primary)] transition-colors">
        {item.title}
      </h3>

      {/* Source */}
      <p className="text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-wider">
        {item.source}
      </p>

      <div className="h-px bg-[var(--color-border)]" />

      {/* Key Highlights */}
      <div>
        <h4 className="text-xs font-bold uppercase tracking-widest text-[var(--color-primary)] mb-3">
          {t("keyHighlights")}
        </h4>
        <ul className="flex flex-col gap-2">
          {item.highlights.map((highlight, i) => (
            <li
              key={i}
              className="flex items-start gap-2.5 text-sm text-[var(--color-text-muted)]"
            >
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] shrink-0" />
              <span className="leading-relaxed">{highlight}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <div className="mt-auto pt-2">
        <Button href={item.link} external variant="outline" size="sm">
          {t("readMore")}
          <svg
            className="w-3.5 h-3.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </Button>
      </div>
    </motion.article>
  );
}
