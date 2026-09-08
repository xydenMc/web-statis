"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export type InfiniteCard = {
  icon: string; // Material Symbol name
  title: string;
  description: string;
  tags: string[];
};

export function InfiniteMovingCards({
  items,
  direction = "left",
  speed = "normal",
  pauseOnHover = true,
  className,
}: {
  items: InfiniteCard[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    // Items are rendered twice in JSX below for the seamless loop.
    // This effect just kicks off the CSS animation.
    setStart(true);
  }, []);

  const duration =
    speed === "fast" ? "20s" : speed === "slow" ? "60s" : "45s";

  const cardClasses =
    "relative w-[280px] sm:w-[300px] md:w-[320px] max-w-full shrink-0 rounded-xl bg-surface-container/60 backdrop-blur-xl border border-white/10 px-space-lg py-space-md shadow-[inset_0_1px_1px_rgba(255,255,255,0.18)] flex flex-col justify-between";

  const renderCard = (item: InfiniteCard, key: string, ariaHidden?: boolean) => (
    <li key={key} aria-hidden={ariaHidden} className={cardClasses}>
      <div className="flex flex-col gap-space-sm">
        <div className="w-10 h-10 rounded-full bg-primary-container/10 flex items-center justify-center text-primary-container shadow-[0_0_12px_rgba(0,242,254,0.25)]">
          <span className="material-symbols-outlined">{item.icon}</span>
       </div>
        <h3 className="text-primary font-headline-sm text-headline-sm">{item.title}</h3>
        <p className="text-on-surface-variant font-body-sm text-body-sm">
          {item.description}
       </p>
     </div>
      <div className="mt-space-md flex flex-wrap gap-space-2xs">
        {item.tags.map((tag) => (
          <span
            key={tag}
            className="px-space-xs py-1 rounded-full bg-surface-container-high/70 text-on-surface-variant font-label-sm text-label-sm"
          >
            {tag}
         </span>
        ))}
     </div>
   </li>
  );

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-full overflow-hidden marquee marquee-mask",
        className,
      )}
      style={{ ["--scroll-duration" as string]: duration }}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-space-md py-space-sm",
          start && (direction === "left" ? "animate-scroll-x" : "animate-scroll-x-reverse"),
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
      >
        {items.map((item, i) => renderCard(item, `${item.title}-${i}`))}
        {/* Duplicate set for seamless infinite scroll loop */}
        {items.map((item, i) => renderCard(item, `${item.title}-dup-${i}`, true))}
     </ul>
   </div>
  );
}
