"use client";

import { motion } from "framer-motion";
import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

export default function Card({
  children,
  className = "",
  hover = false,
  onClick,
}: CardProps) {
  return (
    <motion.div
      className={`bg-white rounded-[var(--radius-lg)] shadow-[var(--shadow-card)] overflow-hidden ${hover ? "cursor-pointer" : ""} ${className}`}
      whileHover={hover ? { y: -4, boxShadow: "var(--shadow-card-hover)" } : {}}
      transition={{ duration: 0.2, ease: "easeOut" }}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
}
