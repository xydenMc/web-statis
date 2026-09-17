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
    "relative w-[280px] sm:w-[300px] md:w-[320px] max-w-full shrink-0 rounded-xl bg-surfaceContainerLow/60 backdrop-blur-xl border border-border px-[1.5rem] py-[1rem] flex flex-col justify-between";

  const renderCard = (item: InfiniteCard, key: string, ariaHidden?: boolean) => (
    <li key={key} aria-hidden={ariaHidden} className={cardClasses}>
      <div className="flex flex-col gap-[0.75rem]">
        <div className="w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center text-primary">
          <span className="material-symbols-outlined">{item.icon}</span>
        </div>
        <h3 className="text-primary text-sm font-semibold uppercase tracking-wide">
          {item.title}
        </h3>
        <p className="text-onSurfaceVariant text-base leading-relaxed">
          {item.description}
        </p>
      </div>
      <div className="mt-[1rem] flex flex-wrap gap-[0.5rem]">
        {item.tags.map((tag) => (
          <span
            key={tag}
            className="px-[0.75rem] py-[0.25rem] rounded-full bg-surfaceContainerHigh/60 text-onSurfaceVariant text-xs font-medium border border-border/30"
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
        "scroller relative z-20 max-w-full overflow-hidden",
        className,
      )}
      style={({ "--scroll-duration": duration } as React.CSSProperties)}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-full min-w-full shrink-0 flex-nowrap gap-[1.5rem] py-[1rem] scroller-tape",
          start ? "scroller-tape" : "",
          speed === "fast" && "scroller-fast",
          speed === "slow" && "scroller-slow",
          pauseOnHover && "hover:[animation-play-state:paused]",
          direction === "right" && "scroller-right",
        )}
      >
        {items.map((item, i) => renderCard(item, `${item.title}-${i}`))}
        {/* Duplicate set for seamless infinite scroll loop */}
        {items.map((item, i) => renderCard(item, `${item.title}-dup-${i}`, true))}
      </ul>
    </div>
  );
}