"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import en from "@/messages/en.json";
import hi from "@/messages/hi.json";
import gu from "@/messages/gu.json";

export type Locale = "en" | "hi" | "gu";
type Messages = typeof en;

const allMessages: Record<Locale, Messages> = { en, hi, gu };

interface LocaleContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (namespace: keyof Messages, key: string) => string;
}

const LocaleContext = createContext<LocaleContextType>({
  locale: "en",
  setLocale: () => {},
  t: (_ns, key) => key,
});

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    const saved = localStorage.getItem("sk_locale") as Locale | null;
    if (saved && ["en", "hi", "gu"].includes(saved)) {
      setLocaleState(saved);
    }
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem("sk_locale", newLocale);
  };

  const t = (namespace: keyof Messages, key: string): string => {
    const msgs = allMessages[locale];
    const ns = msgs[namespace] as Record<string, string>;
    return ns?.[key] ?? key;
  };

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  return useContext(LocaleContext);
}

/** Convenience hook — mirrors next-intl's useTranslations(namespace) */
export function useT(namespace: keyof Messages) {
  const { t } = useLocale();
  return (key: string) => t(namespace, key);
}
