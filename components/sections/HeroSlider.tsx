"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { useT } from "@/contexts/LocaleContext";

type HomeKey =
  | "heroSlide1Title"
  | "heroSlide1Subtitle"
  | "heroSlide2Title"
  | "heroSlide2Subtitle"
  | "heroSlide3Title"
  | "heroSlide3Subtitle"
  | "heroCta"
  | "momentsCta";

interface Slide {
  titleKey: HomeKey;
  subtitleKey: HomeKey;
  gradient: string;
}

const slides: Slide[] = [
  {
    titleKey: "heroSlide1Title",
    subtitleKey: "heroSlide1Subtitle",
    gradient: "linear-gradient(120deg, rgba(255,126,85,0.92) 0%, rgba(30,20,10,0.80) 100%)",
  },
  {
    titleKey: "heroSlide2Title",
    subtitleKey: "heroSlide2Subtitle",
    gradient: "linear-gradient(120deg, rgba(20,15,10,0.90) 0%, rgba(255,126,85,0.55) 100%)",
  },
  {
    titleKey: "heroSlide3Title",
    subtitleKey: "heroSlide3Subtitle",
    gradient: "linear-gradient(120deg, rgba(26,26,26,0.92) 0%, rgba(255,126,85,0.65) 100%)",
  },
];

export default function HeroSlider() {
  const t = useT("home");

  return (
    <section className="relative w-full h-screen min-h-[560px] max-h-[900px] overflow-hidden">
      {/* Global override: hide inactive fade slides */}
      <style>{`
        .hero-swiper .swiper-slide {
          opacity: 0 !important;
          pointer-events: none;
          transition: opacity 0.8s ease;
        }
        .hero-swiper .swiper-slide-active {
          opacity: 1 !important;
          pointer-events: auto;
        }
        .hero-swiper .swiper-button-next,
        .hero-swiper .swiper-button-prev {
          color: #fff;
          background: rgba(255,126,85,0.3);
          width: 44px;
          height: 44px;
          border-radius: 50%;
          backdrop-filter: blur(4px);
        }
        .hero-swiper .swiper-button-next:after,
        .hero-swiper .swiper-button-prev:after {
          font-size: 14px;
          font-weight: 700;
        }
        .hero-swiper .swiper-pagination-bullet {
          background: rgba(255,255,255,0.5);
          width: 8px;
          height: 8px;
        }
        .hero-swiper .swiper-pagination-bullet-active {
          background: #FF7E55 !important;
          width: 24px;
          border-radius: 4px;
        }
      `}</style>

      <Swiper
        className="hero-swiper h-full w-full"
        modules={[Autoplay, Navigation, Pagination, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        navigation
        pagination={{ clickable: true }}
        loop
        speed={800}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative h-full w-full">
            {/* Solid dark background so there's no bleed-through */}
            <div className="absolute inset-0 bg-[#1a1a1a]" />

            {/* Gradient overlay */}
            <div
              className="absolute inset-0"
              style={{ background: slide.gradient }}
            />

            {/* Decorative pattern */}
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`,
                backgroundSize: "40px 40px",
              }}
            />

            {/* Content */}
            <div className="relative z-10 h-full flex items-center">
              <div className="container-site w-full">
                <div className="max-w-2xl">
                  <p className="text-xs font-bold tracking-[0.25em] uppercase text-[var(--color-primary-light)] mb-5">
                    Sanjay Koradia · MLA Junagadh
                  </p>

                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-5">
                    {t(slide.titleKey)}
                  </h1>

                  <p className="text-base md:text-xl text-white/75 mb-8 leading-relaxed max-w-xl">
                    {t(slide.subtitleKey)}
                  </p>

                  <div className="flex flex-wrap gap-4">
                    <Button href="/about" size="lg" variant="primary">
                      {t("heroCta")}
                    </Button>
                    <Button
                      href="/moments"
                      size="lg"
                      variant="outline"
                      className="border-white/60 text-white hover:bg-white hover:text-[var(--color-primary-dark)]"
                    >
                      {t("momentsCta")}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="w-px h-10 bg-white/30 block" />
        <span className="w-1.5 h-1.5 rounded-full bg-white/50 block" />
      </motion.div>
    </section>
  );
}
