"use client";

import { useT } from "@/contexts/LocaleContext";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import AboutTimeline from "@/components/sections/AboutTimeline";

const BIO_KEYS = ["para1", "para2", "para3", "para4", "para5"] as const;

export default function AboutContent() {
  const t = useT("about");

  return (
    <>
      {/* Hero Banner */}
      <div className="relative pt-36 pb-24 bg-gradient-to-br from-[var(--color-text)] via-[#2a2a2a] to-[var(--color-primary-dark)] overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `radial-gradient(circle, #FF7E55 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
        />
        <div className="container-site relative z-10 text-center">
          <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-[var(--color-primary-light)] mb-4">
            Biography
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            {t("pageTitle")}
          </h1>
          <div className="w-16 h-1 bg-[var(--color-primary)] rounded-full mx-auto mb-6" />
          <p className="text-base md:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            {t("pageSubtitle")}
          </p>
        </div>
      </div>

      {/* Biography */}
      <AnimatedSection className="section-py bg-[var(--color-secondary)]">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-12 lg:gap-16">
            <div>
              <SectionHeading title={t("bioTitle")} label="About" align="left" />
              <div className="flex flex-col gap-5">
                {BIO_KEYS.map((key) => (
                  <p
                    key={key}
                    className="text-base md:text-lg text-[var(--color-text-muted)] leading-relaxed"
                  >
                    {t(key)}
                  </p>
                ))}
              </div>
            </div>

            {/* Sidebar card */}
            <aside className="self-start sticky top-24">
              <div className="bg-white rounded-[var(--radius-xl)] shadow-[var(--shadow-card)] p-8 border border-[var(--color-border)]">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center text-4xl mx-auto mb-4">
                    🏛
                  </div>
                  <h3 className="text-lg font-bold text-[var(--color-text)]">
                    Sanjay Koradia
                  </h3>
                  <p className="text-sm text-[var(--color-primary)] font-semibold mt-1">
                    MLA · Junagadh
                  </p>
                </div>
                <div className="flex flex-col gap-3 text-sm">
                  {[
                    { label: "Constituency", value: "Junagadh, Gujarat" },
                    { label: "Founded", value: "Vanraj Food Industries" },
                    { label: "Values", value: "Honesty · Hardwork · Service" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex flex-col gap-0.5 border-b border-[var(--color-border)] pb-3 last:border-0"
                    >
                      <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-primary)]">
                        {item.label}
                      </span>
                      <span className="text-[var(--color-text-muted)]">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </AnimatedSection>

      {/* Timeline */}
      <AnimatedSection className="section-py bg-white" delay={0.1}>
        <div className="container-site">
          <SectionHeading title={t("timelineTitle")} label="Journey" />
          <AboutTimeline />
        </div>
      </AnimatedSection>

      {/* Values strip */}
      <section className="py-16 bg-[var(--color-primary)]">
        <div className="container-site">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { icon: "🤝", label: "Integrity" },
              { icon: "💪", label: "Hard Work" },
              { icon: "🌱", label: "Growth" },
              { icon: "❤", label: "Service" },
            ].map((v) => (
              <div key={v.label} className="flex flex-col items-center text-center gap-3">
                <span className="text-4xl">{v.icon}</span>
                <span className="text-white font-bold text-sm md:text-base tracking-wide">
                  {v.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
