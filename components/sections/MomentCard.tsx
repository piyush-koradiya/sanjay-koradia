"use client";

import { motion } from "framer-motion";
import Badge from "@/components/ui/Badge";
import LazyImage from "@/components/ui/LazyImage";
import { Moment } from "@/lib/data/moments";

interface MomentCardProps {
  moment: Moment;
  index: number;
}

const categoryColour = {
  event: "primary",
  community: "secondary",
  development: "muted",
} as const;

const categoryLabel = {
  event: "Event",
  community: "Community",
  development: "Development",
};

export default function MomentCard({ moment, index }: MomentCardProps) {
  return (
    <motion.article
      className="bg-white rounded-[var(--radius-lg)] shadow-[var(--shadow-card)] overflow-hidden group"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }}
      whileHover={{ y: -6, boxShadow: "var(--shadow-card-hover)" }}
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <LazyImage
          src={moment.image}
          alt={moment.title}
          fill
          objectFit="cover"
          className="group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        {/* Date badge */}
        <span className="absolute top-3 right-3 bg-black/60 text-white text-[10px] font-semibold px-2.5 py-1 rounded-full backdrop-blur-sm">
          {moment.date}
        </span>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-3">
        <Badge variant={categoryColour[moment.category]}>
          {categoryLabel[moment.category]}
        </Badge>
        <h3 className="text-base font-bold text-[var(--color-text)] leading-snug line-clamp-2 group-hover:text-[var(--color-primary)] transition-colors">
          {moment.title}
        </h3>
        <p className="text-sm text-[var(--color-text-muted)] leading-relaxed line-clamp-3">
          {moment.description}
        </p>
      </div>
    </motion.article>
  );
}
