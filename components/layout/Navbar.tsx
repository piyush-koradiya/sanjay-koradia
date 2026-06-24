"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useLocale, useT, type Locale } from "@/contexts/LocaleContext";
import BJPLotus from "@/components/ui/BJPLotus";

const LOCALES: { code: Locale; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "hi", label: "HI" },
  { code: "gu", label: "GU" },
];

export default function Navbar() {
  const t = useT("nav");
  const { locale, setLocale } = useLocale();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: t("home") },
    { href: "/about", label: t("about") },
    { href: "/moments", label: t("moments") },
    { href: "/press", label: t("press") },
  ];

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  /* ── Colour tokens that flip based on scroll state ── */
  const logoName = scrolled ? "text-[var(--color-primary)]" : "text-white";
  const logoSub = scrolled ? "text-[var(--color-text-muted)]" : "text-white/60";
  const linkBase = scrolled
    ? "text-[var(--color-text)] hover:text-[var(--color-primary)] hover:bg-[var(--color-primary)]/5"
    : "text-white/85 hover:text-white hover:bg-white/10";
  const linkActive = scrolled ? "text-[var(--color-primary)]" : "text-white";
  const localeBg = scrolled ? "bg-[var(--color-secondary-dark)]" : "bg-white/15 backdrop-blur-sm";
  const localeInactive = scrolled ? "text-[var(--color-text-muted)] hover:text-[var(--color-primary)]" : "text-white/70 hover:text-white";
  const hamburgerBar = scrolled ? "bg-[var(--color-text)]" : "bg-white";

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md border-b border-[var(--color-border)]"
          : "bg-transparent"
      }`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className="container-site flex items-center justify-between h-16 md:h-20">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group shrink-0">
          {/* BJP Lotus icon */}
          <BJPLotus
            size={38}
            className={`shrink-0 transition-all duration-300 group-hover:scale-110 drop-shadow-sm ${
              scrolled ? "text-[var(--color-primary)]" : "text-white"
            }`}
          />
          {/* Text stack */}
          <div className="flex flex-col leading-tight">
            <span className={`text-base md:text-lg font-bold transition-colors duration-300 ${logoName}`}>
              Sanjay Koradia
            </span>
            <span className={`text-[10px] md:text-[11px] font-semibold tracking-[0.14em] uppercase transition-colors duration-300 ${logoSub}`}>
              MLA · Junagadh
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative px-4 py-2 text-sm font-semibold rounded-lg transition-colors duration-200 ${
                isActive(link.href) ? linkActive : linkBase
              }`}
            >
              {link.label}
              {isActive(link.href) && (
                <motion.span
                  layoutId="nav-indicator"
                  className="absolute bottom-0 left-3 right-3 h-0.5 bg-[var(--color-primary)] rounded-full"
                />
              )}
            </Link>
          ))}
        </nav>

        {/* Right: locale switcher + hamburger */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Locale switcher */}
          <div className={`flex items-center gap-1 rounded-lg p-1 transition-colors duration-300 ${localeBg}`}>
            {LOCALES.map((l) => (
              <button
                key={l.code}
                onClick={() => setLocale(l.code)}
                className={`px-2.5 py-1 text-xs font-bold rounded-md transition-all duration-200 cursor-pointer ${
                  locale === l.code
                    ? "bg-[var(--color-primary)] text-white shadow-sm"
                    : localeInactive
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>

          {/* Hamburger (mobile) */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5 rounded-lg cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <motion.span
              className={`w-5 h-0.5 rounded-full block transition-colors duration-300 ${hamburgerBar}`}
              animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className={`w-5 h-0.5 rounded-full block transition-colors duration-300 ${hamburgerBar}`}
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className={`w-5 h-0.5 rounded-full block transition-colors duration-300 ${hamburgerBar}`}
              animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu — always white background for readability */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-white border-t border-[var(--color-border)] shadow-lg"
          >
            <nav className="container-site py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`px-4 py-3 text-sm font-semibold rounded-lg transition-colors duration-200 ${
                    isActive(link.href)
                      ? "bg-[var(--color-primary)]/10 text-[var(--color-primary)]"
                      : "text-[var(--color-text)] hover:bg-[var(--color-secondary-dark)]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
