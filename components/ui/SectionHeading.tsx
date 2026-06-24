"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  label,
  title,
  subtitle,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <motion.div
      className={`flex flex-col gap-3 mb-12 ${alignClass} ${className}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {label && (
        <span className="text-xs font-bold tracking-[0.2em] uppercase text-[var(--color-primary)]">
          {label}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] leading-tight">
        {title}
      </h2>
      {/* Decorative underline */}
      <div
        className={`h-1 w-16 rounded-full bg-[var(--color-primary)] ${align === "center" ? "mx-auto" : ""}`}
      />
      {subtitle && (
        <p className="mt-2 text-base md:text-lg text-[var(--color-text-muted)] max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
