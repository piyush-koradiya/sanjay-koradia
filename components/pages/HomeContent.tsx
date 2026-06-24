"use client";

import { useT } from "@/contexts/LocaleContext";
import HeroSlider from "@/components/sections/HeroSlider";
import QuickStats from "@/components/sections/QuickStats";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import JunagadhProgressMap from "@/components/sections/JunagadhProgressMap";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export default function HomeContent() {
  const t = useT("home");

  return (
    <>
      <HeroSlider />
      <QuickStats />

      {/* Mission Section */}
      <AnimatedSection className="section-py bg-[var(--color-secondary)]">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <SectionHeading
                label={t("missionSubtitle")}
                title={t("missionTitle")}
                align="left"
              />
              <p className="text-[var(--color-text-muted)] leading-relaxed text-base md:text-lg mb-8">
                {t("missionText")}
              </p>
              <Button href="/about" variant="primary" size="md">
                {t("missionCta")}
              </Button>
            </div>

            {/* Visual panel */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md rounded-[var(--radius-xl)] overflow-hidden aspect-[4/3] bg-[var(--color-secondary-dark)] shadow-[var(--shadow-card-hover)]">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-primary)]/5" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="text-6xl mb-5">🇮🇳</div>
                    <p className="text-2xl font-bold text-[var(--color-primary)]">
                      Sanjay Koradia
                    </p>
                    <p className="text-sm text-[var(--color-text-muted)] mt-2 tracking-wider uppercase">
                      MLA · Junagadh, Gujarat
                    </p>
                  </div>
                </div>
              </div>
              {/* Decorative blobs */}
              <div className="absolute -bottom-6 -right-6 w-28 h-28 rounded-full bg-[var(--color-primary)]/10 -z-10" />
              <div className="absolute -top-6 -left-6 w-20 h-20 rounded-full bg-[var(--color-primary)]/15 -z-10" />
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Progress across Junagadh (interactive map) */}
      <JunagadhProgressMap />
    </>
  );
}
