import React from "react";

type BadgeVariant = "primary" | "secondary" | "muted";

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variantClasses: Record<BadgeVariant, string> = {
  primary:
    "bg-[var(--color-primary)]/10 text-[var(--color-primary-dark)] border border-[var(--color-primary)]/20",
  secondary:
    "bg-[var(--color-secondary-dark)] text-[var(--color-text-muted)] border border-[var(--color-border)]",
  muted:
    "bg-[var(--color-border)] text-[var(--color-text-muted)] border border-transparent",
};

export default function Badge({
  children,
  variant = "primary",
  className = "",
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
