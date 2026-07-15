"use client";

import Link from "next/link";
import { useT } from "@/contexts/LocaleContext";

export default function Footer() {
  const tFooter = useT("footer");
  const tNav = useT("nav");
  const year = new Date().getFullYear();

  const navLinks = [
    { href: "/", label: tNav("home") },
    { href: "/about", label: tNav("about") },
    { href: "/moments", label: tNav("moments") },
    { href: "/press", label: tNav("press") },
  ];

  return (
    <footer className="bg-[var(--color-text)] text-white">
      <div className="h-1 bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-primary-light)] to-[var(--color-primary-dark)]" />
      <div className="container-site py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div>
              <h3 className="text-xl font-bold text-[var(--color-primary)]">
                Sanjay Koradia
              </h3>
              <p className="text-xs text-gray-400 tracking-wider uppercase mt-0.5">
                MLA · Junagadh · Gujarat
              </p>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              {tFooter("tagline")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-gray-300 uppercase tracking-widest mb-4">
              {tFooter("quickLinks")}
            </h4>
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-[var(--color-primary)] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold text-gray-300 uppercase tracking-widest mb-4">
              {tFooter("contact")}
            </h4>
            <ul className="flex flex-col gap-3 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-primary)] mt-0.5">📍</span>
                <span>{tFooter("address")}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-primary)] mt-0.5">🌐</span>
                <a
                  href="https://sanjaykoradia.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--color-primary)] transition-colors"
                >
                  sanjaykoradia.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500">
            {tFooter("copyright").replace("{year}", String(year))}
          </p>
          <p className="text-xs text-gray-600">
            Built with ❤ for the people of Junagadh
          </p>
        </div>
      </div>
    </footer>
  );
}
