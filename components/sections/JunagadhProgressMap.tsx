"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { animate, AnimatePresence, motion } from "framer-motion";
import { useT } from "@/contexts/LocaleContext";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  MAP_VIEWBOX,
  MAP_REGIONS,
  MAP_CIRCLES,
  EAST_ZONE_PATH,
} from "@/lib/data/junagadhMapGeometry";
import { AREA_PROGRESS_MAP } from "@/lib/data/junagadhProgress";

const { width: W, height: H } = MAP_VIEWBOX;
const ASPECT = W / H;
const CIRCLE_R = 16;

interface Box {
  x: number;
  y: number;
  w: number;
  h: number;
}

const FULL_VIEW: Box = { x: 0, y: 0, w: W, h: H };

/** Extract a bounding box from an SVG path's coordinate list. */
function pathBox(d: string): Box {
  const nums = d.match(/-?\d+(\.\d+)?/g)?.map(Number) ?? [];
  let minX = Infinity;
  let minY = Infinity;
  let maxX = -Infinity;
  let maxY = -Infinity;
  for (let i = 0; i + 1 < nums.length; i += 2) {
    const x = nums[i];
    const y = nums[i + 1];
    if (x < minX) minX = x;
    if (y < minY) minY = y;
    if (x > maxX) maxX = x;
    if (y > maxY) maxY = y;
  }
  return { x: minX, y: minY, w: maxX - minX, h: maxY - minY };
}

/** Build a padded, aspect-correct viewBox that frames a region. */
function frameBox(box: Box, padFactor = 2.2): Box {
  const cx = box.x + box.w / 2;
  const cy = box.y + box.h / 2;
  let tw = Math.max(box.w, 30) * padFactor;
  let th = Math.max(box.h, 30) * padFactor;
  if (tw / th > ASPECT) th = tw / ASPECT;
  else tw = th * ASPECT;
  return { x: cx - tw / 2, y: cy - th / 2, w: tw, h: th };
}

export default function JunagadhProgressMap() {
  const t = useT("progress");

  const boxes = useMemo(() => {
    const map = new Map<number, Box>();
    MAP_REGIONS.forEach((r) => map.set(r.id, pathBox(r.d)));
    MAP_CIRCLES.forEach((c) =>
      map.set(c.id, {
        x: c.cx - CIRCLE_R,
        y: c.cy - CIRCLE_R,
        w: CIRCLE_R * 2,
        h: CIRCLE_R * 2,
      }),
    );
    return map;
  }, []);

  const [selected, setSelected] = useState<number | null>(null);
  const [hovered, setHovered] = useState<number | null>(null);
  const [view, setView] = useState<Box>(FULL_VIEW);
  const viewRef = useRef<Box>(FULL_VIEW);
  const animRef = useRef<ReturnType<typeof animate> | null>(null);

  useEffect(() => {
    viewRef.current = view;
  }, [view]);

  const animateTo = useCallback((target: Box) => {
    animRef.current?.stop();
    const from = { ...viewRef.current };
    animRef.current = animate(0, 1, {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (p) =>
        setView({
          x: from.x + (target.x - from.x) * p,
          y: from.y + (target.y - from.y) * p,
          w: from.w + (target.w - from.w) * p,
          h: from.h + (target.h - from.h) * p,
        }),
    });
  }, []);

  const handleSelect = useCallback(
    (id: number) => {
      if (selected === id) {
        setSelected(null);
        animateTo(FULL_VIEW);
        return;
      }
      setSelected(id);
      const box = boxes.get(id);
      if (box) animateTo(frameBox(box));
    },
    [selected, boxes, animateTo],
  );

  const reset = useCallback(() => {
    setSelected(null);
    animateTo(FULL_VIEW);
  }, [animateTo]);

  const area = selected != null ? AREA_PROGRESS_MAP[selected] : null;

  const regionStyle = (id: number) => {
    const isSel = selected === id;
    const isHover = hovered === id;
    if (isSel) return { fill: "var(--color-primary)", fillOpacity: 0.22, strokeWidth: 2.4 };
    if (isHover) return { fill: "var(--color-primary)", fillOpacity: 0.1, strokeWidth: 2 };
    return { fill: "#ffffff", fillOpacity: 1, strokeWidth: 1.6 };
  };

  return (
    <section className="section-py bg-white">
      <div className="container-site">
        <SectionHeading label={t("subtitle")} title={t("title")} subtitle={t("intro")} />

        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-8 items-start">
          {/* Map */}
          <div className="relative rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-secondary)]/40 p-3 sm:p-5">
            <AnimatePresence>
              {selected != null && (
                <motion.button
                  type="button"
                  onClick={reset}
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  className="absolute z-10 top-4 right-4 inline-flex items-center gap-1.5 rounded-full bg-white/90 backdrop-blur px-4 py-2 text-sm font-semibold text-[var(--color-primary)] shadow-md hover:bg-white"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M9 14 4 9l5-5" />
                    <path d="M4 9h11a5 5 0 0 1 5 5v3" />
                  </svg>
                  {t("reset")}
                </motion.button>
              )}
            </AnimatePresence>

            <svg
              viewBox={`${view.x} ${view.y} ${view.w} ${view.h}`}
              className="w-full h-auto select-none"
              style={{ aspectRatio: `${W} / ${H}` }}
              role="img"
              aria-label={t("title")}
            >
              {/* Eastern detached zone outline */}
              <path
                d={EAST_ZONE_PATH}
                fill="var(--color-primary)"
                fillOpacity={0.04}
                stroke="var(--color-primary)"
                strokeOpacity={0.45}
                strokeWidth={1.4}
                strokeDasharray="6 5"
                vectorEffect="non-scaling-stroke"
              />

              {/* Region polygons */}
              {MAP_REGIONS.map((r) => {
                const s = regionStyle(r.id);
                return (
                  <motion.path
                    key={r.id}
                    d={r.d}
                    fill={s.fill}
                    fillOpacity={s.fillOpacity}
                    stroke="var(--color-primary)"
                    strokeWidth={s.strokeWidth}
                    strokeLinejoin="round"
                    vectorEffect="non-scaling-stroke"
                    className="cursor-pointer"
                    onClick={() => handleSelect(r.id)}
                    onMouseEnter={() => setHovered(r.id)}
                    onMouseLeave={() => setHovered(null)}
                  />
                );
              })}

              {/* Region number labels */}
              {MAP_REGIONS.map((r) => (
                <text
                  key={`l${r.id}`}
                  x={r.labelX}
                  y={r.labelY}
                  textAnchor="middle"
                  dominantBaseline="central"
                  className="pointer-events-none"
                  fontSize={13}
                  fontWeight={700}
                  fill={selected === r.id ? "var(--color-primary-dark)" : "#374151"}
                >
                  {r.id}
                </text>
              ))}

              {/* Circle (village) markers */}
              {MAP_CIRCLES.map((c) => {
                const isSel = selected === c.id;
                const isHover = hovered === c.id;
                return (
                  <g
                    key={`c${c.id}`}
                    className="cursor-pointer"
                    onClick={() => handleSelect(c.id)}
                    onMouseEnter={() => setHovered(c.id)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    <circle
                      cx={c.cx}
                      cy={c.cy}
                      r={CIRCLE_R}
                      fill={isSel ? "var(--color-primary)" : "#ffffff"}
                      fillOpacity={isSel ? 0.25 : isHover ? 0.85 : 1}
                      stroke="var(--color-primary)"
                      strokeWidth={isSel ? 2.6 : 1.8}
                      vectorEffect="non-scaling-stroke"
                    />
                    <text
                      x={c.cx}
                      y={c.cy}
                      textAnchor="middle"
                      dominantBaseline="central"
                      className="pointer-events-none"
                      fontSize={12}
                      fontWeight={700}
                      fill={isSel ? "var(--color-primary-dark)" : "#374151"}
                    >
                      {c.id}
                    </text>
                  </g>
                );
              })}
            </svg>

            <p className="mt-2 text-center text-xs text-[var(--color-text-muted)]">
              {t("hint")}
            </p>
          </div>

          {/* Details panel */}
          <div className="lg:sticky lg:top-28">
            <AnimatePresence mode="wait">
              {area ? (
                <motion.div
                  key={area.id}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -16 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-white shadow-[var(--shadow-card)] overflow-hidden"
                >
                  <div className="bg-[var(--color-primary)] px-6 py-5 text-white">
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-lg font-bold">
                        {area.id}
                      </span>
                      <div>
                        <p className="text-xs uppercase tracking-wider text-white/80">
                          {t("areaLabel")}
                        </p>
                        <h3 className="text-xl font-bold leading-tight">{area.name}</h3>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="grid grid-cols-2 gap-4 mb-5">
                      <div className="rounded-[var(--radius-md)] bg-[var(--color-secondary)] p-4 text-center">
                        <p className="text-2xl font-bold text-[var(--color-primary)]">
                          {area.projects}
                        </p>
                        <p className="text-xs text-[var(--color-text-muted)] mt-1">
                          {t("projects")}
                        </p>
                      </div>
                      <div className="rounded-[var(--radius-md)] bg-[var(--color-secondary)] p-4 text-center">
                        <p className="text-2xl font-bold text-[var(--color-primary)]">
                          {area.progressPct}%
                        </p>
                        <p className="text-xs text-[var(--color-text-muted)] mt-1">
                          {t("completed")}
                        </p>
                      </div>
                    </div>

                    {/* Progress bar */}
                    <div className="mb-6">
                      <div className="h-2.5 w-full rounded-full bg-[var(--color-secondary-dark)] overflow-hidden">
                        <motion.div
                          className="h-full rounded-full bg-[var(--color-primary)]"
                          initial={{ width: 0 }}
                          animate={{ width: `${area.progressPct}%` }}
                          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                        />
                      </div>
                    </div>

                    <h4 className="text-sm font-bold uppercase tracking-wider text-[var(--color-text)] mb-3">
                      {t("highlights")}
                    </h4>
                    <ul className="space-y-3">
                      {area.highlights.map((h, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: 10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.15 + i * 0.07 }}
                          className="flex items-start gap-3 text-sm text-[var(--color-text-muted)] leading-relaxed"
                        >
                          <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)]/15">
                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                              <path d="M20 6 9 17l-5-5" />
                            </svg>
                          </span>
                          {h}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center text-center rounded-[var(--radius-lg)] border border-dashed border-[var(--color-border)] bg-[var(--color-secondary)]/50 px-6 py-14"
                >
                  <span className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-primary)]/10">
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </span>
                  <h3 className="text-lg font-bold text-[var(--color-text)]">
                    {t("emptyTitle")}
                  </h3>
                  <p className="mt-2 text-sm text-[var(--color-text-muted)] max-w-xs">
                    {t("emptyText")}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
