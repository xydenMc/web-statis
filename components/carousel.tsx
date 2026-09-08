"use client";

import React, { useEffect, useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export type CarouselSlide = {
  badge: string;
  tags: string[];
  title: string;
  description: string;
  impact: string;
  icon: string;
  iconTone: "primary" | "secondary" | "pink";
  tech: string[];
  image?: string;
};

export function Carousel({
  slides,
  autoplay = true,
  interval = 5500,
}: {
  slides: CarouselSlide[];
  autoplay?: boolean;
  interval?: number;
}) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = slides.length;
  const dirRef = useRef<1 | -1>(1);

  const goTo = useCallback(
    (i: number) => {
      dirRef.current = i > index ? 1 : -1;
      setIndex(((i % total) + total) % total);
    },
    [index, total],
  );

  useEffect(() => {
    if (!autoplay || paused) return;
    const t = setInterval(() => {
      dirRef.current = 1;
      setIndex((i) => (i + 1) % total);
    }, interval);
    return () => clearInterval(t);
  }, [autoplay, paused, interval, total]);

  const slide = slides[index];

  const tone =
    slide.iconTone === "primary"
      ? "bg-primary-container/10 text-primary-container shadow-[0_0_12px_rgba(0,242,254,0.25)]"
      : slide.iconTone === "pink"
        ? "bg-tertiary-container/20 text-tertiary-fixed-dim shadow-[0_0_12px_rgba(255,175,212,0.25)]"
        : "bg-secondary/15 text-secondary shadow-[0_0_12px_rgba(209,188,255,0.25)]";

  return (
    <div
      className="relative w-full"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="relative">
      <div className="relative overflow-hidden rounded-xl bg-surface-container-low/60 backdrop-blur-2xl border border-white/10 shadow-[0_24px_56px_-16px_rgba(0,0,0,0.55),inset_0_1px_1px_0_rgba(255,255,255,0.22)] p-space-lg lg:p-space-2xl lg:px-20 min-h-[420px]">
        <AnimatePresence mode="wait" custom={dirRef.current}>
          <motion.div
            key={slide.title}
            initial={{ opacity: 0, x: dirRef.current === 1 ? 60 : -60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: dirRef.current === 1 ? -60 : 60 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center"
          >
            <div className="lg:col-span-7 flex flex-col gap-space-md">
              <div className="flex items-center justify-between">
                <span className="font-label-md text-label-md tracking-wider uppercase text-on-surface-variant">
                  {slide.badge}
              </span>
                <div className="flex items-center gap-space-2xs">
                  {slide.tags.map((t) => (
                    <span
                      key={t}
                      className="px-space-xs py-0.5 rounded-full bg-surface-container-high/60 text-on-surface-variant font-label-sm text-label-sm"
                    >
                      {t}
                  </span>
                  ))}
              </div>
            </div>
              <h3 className="text-primary font-headline-lg text-headline-lg tracking-tight">
                {slide.title}
            </h3>
              <p className="text-on-surface-variant font-body-lg text-body-lg max-w-2xl leading-relaxed">
                {slide.description}
            </p>
              <p className="text-on-surface-variant font-body-md text-body-md">
                <strong className="text-primary">Impact</strong> {slide.impact}
            </p>
              <div className="flex flex-wrap items-center gap-space-xs">
                {slide.tech.map((t) => (
                  <span
                    key={t}
                    className="px-space-sm py-1 rounded-full bg-surface-container-high/40 text-on-surface-variant font-label-sm text-label-sm"
                  >
                    {t}
                </span>
                ))}
            </div>
          </div>
            <div className="lg:col-span-5 flex items-center justify-center">
              <div className="w-full max-w-md rounded-2xl overflow-hidden">
                {slide.image ? (
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-auto block rounded-2xl"
                  />
                ) : (
                  <span className="material-symbols-outlined text-[88px]">
                    {slide.icon}
                  </span>
                )}
              </div>
            </div>
        </motion.div>
      </AnimatePresence>
    </div>

        {/* Prev / Next — di luar overflow kartu, sedikit menonjol ke kiri/kanan */}
        <button
          aria-label="Slide sebelumnya"
          onClick={() => goTo(index - 1)}
          className="absolute left-3 lg:-left-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-surface-container-high/80 hover:bg-primary-container text-primary hover:text-on-primary-container backdrop-blur-md border border-white/10 shadow-[0_8px_20px_rgba(0,0,0,0.35)] flex items-center justify-center transition-colors"
        >
          <span className="material-symbols-outlined">chevron_left</span>
      </button>
        <button
          aria-label="Slide berikutnya"
          onClick={() => goTo(index + 1)}
          className="absolute right-3 lg:-right-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-surface-container-high/80 hover:bg-primary-container text-primary hover:text-on-primary-container backdrop-blur-md border border-white/10 shadow-[0_8px_20px_rgba(0,0,0,0.35)] flex items-center justify-center transition-colors"
        >
          <span className="material-symbols-outlined">chevron_right</span>
      </button>
      </div>

      {/* Dots */}
      <div className="mt-space-md flex items-center justify-center gap-space-2xs">
        {slides.map((s, i) => (
          <button
            key={s.title}
            onClick={() => goTo(i)}
            aria-label={`Buka slide ${i + 1}: ${s.title}`}
            className={cn(
              "h-1.5 rounded-full transition-all duration-300",
              i === index
                ? "w-8 bg-primary-container shadow-[0_0_10px_rgba(0,242,254,0.6)]"
                : "w-1.5 bg-surface-container-high/70 hover:bg-on-surface-variant",
            )}
          />
        ))}
    </div>
  </div>
  );
}
