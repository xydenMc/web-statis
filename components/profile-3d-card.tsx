"use client";

import React, { useEffect, useRef } from "react";

/**
 * Aceternity-style 3D profile card:
 *  - On mount, animates a one-shot intro rotation (rotateX [0, -8, 0], rotateY [0, 12, 0]).
 *  - Then listens for mousemove to drive tilt + cursor glare.
 *  - Honors prefers-reduced-motion.
 */
export function Profile3DCard({
  imageSrc,
  alt,
}: {
  imageSrc: string;
  alt: string;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const wrap = wrapRef.current;
    const card = cardRef.current;
    const glare = glareRef.current;
    if (!wrap || !card) return;

    let isDragging = false;
    let startX = 0;
    let startY = 0;
    const maxTilt = 22;

    const setTransform = (
      rotX: number,
      rotY: number,
      glareX: number,
      glareY: number,
      scale = 1.02,
    ) => {
      card.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale3d(${scale}, ${scale}, ${scale})`;
      if (glare) {
        glare.style.background = `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.08) 45%, transparent 75%)`;
        glare.style.opacity = "0.65";
      }
    };

    const reset = () => {
      card.style.transition = "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)";
      card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
      if (glare) {
        glare.style.opacity = "0.4";
        glare.style.background =
          "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.05) 50%, transparent 80%)";
      }
      setTimeout(() => {
        card.style.transition = "transform 0.1s ease-out";
      }, 600);
    };

    // On-mount intro rotation (Aceternity signature).
    if (!reduce) {
      const start = performance.now();
      const intro = (now: number) => {
        const t = Math.min(1, (now - start) / 2000);
        const ease = (x: number) => 1 - Math.pow(1 - x, 3);
        const e = ease(t);
        const rotY = Math.sin(e * Math.PI) * 12;
        const rotX = -Math.sin(e * Math.PI) * 8;
        setTransform(rotX, rotY, 50, 50, 1 + e * 0.04);
        if (t < 1) requestAnimationFrame(intro);
        else reset();
      };
      requestAnimationFrame(intro);
    }

    const onMove = (e: MouseEvent) => {
      if (isDragging) return;
      const rect = wrap.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const cx = rect.width / 2;
      const cy = rect.height / 2;
      const rotX = -((y - cy) / cy) * maxTilt;
      const rotY = ((x - cx) / cx) * maxTilt;
      const gx = (x / rect.width) * 100;
      const gy = (y / rect.height) * 100;
      setTransform(rotX, rotY, gx, gy, 1.04);
    };
    const onLeave = () => {
      if (!isDragging) reset();
    };
    wrap.addEventListener("mousemove", onMove);
    wrap.addEventListener("mouseleave", onLeave);

    const down = (x: number, y: number) => {
      isDragging = true;
      startX = x;
      startY = y;
      card.style.transition = "none";
    };
    const move = (x: number, y: number) => {
      if (!isDragging) return;
      const dx = x - startX;
      const dy = y - startY;
      const rotY = Math.max(Math.min(dx * 0.25, maxTilt * 1.5), -maxTilt * 1.5);
      const rotX = Math.max(Math.min(-dy * 0.25, maxTilt * 1.5), -maxTilt * 1.5);
      const gx = Math.max(Math.min(50 + (rotY / maxTilt) * 40, 95), 5);
      const gy = Math.max(Math.min(50 - (rotX / maxTilt) * 40, 95), 5);
      setTransform(rotX, rotY, gx, gy, 1.06);
    };
    const up = () => {
      if (!isDragging) return;
      isDragging = false;
      reset();
    };

    wrap.addEventListener("mousedown", (e) => down(e.clientX, e.clientY));
    const handleWindowMouseMove = (e: MouseEvent) => move(e.clientX, e.clientY);
    window.addEventListener("mousemove", handleWindowMouseMove);
    window.addEventListener("mouseup", up);

    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) down(e.touches[0].clientX, e.touches[0].clientY);
    };
    const handleTouchMove = (e: TouchEvent) => {
      if (isDragging && e.touches.length === 1)
        move(e.touches[0].clientX, e.touches[0].clientY);
    };
    wrap.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchend", up);
    window.addEventListener("touchcancel", up);

    return () => {
      wrap.removeEventListener("mousemove", onMove);
      wrap.removeEventListener("mouseleave", onLeave);
      wrap.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("mousemove", handleWindowMouseMove);
      window.removeEventListener("mouseup", up);
      window.removeEventListener("touchend", up);
      window.removeEventListener("touchcancel", up);
    };
  }, []);

  return (
    <div
      className="lg:col-span-5 flex flex-col items-center lg:items-start"
      style={{ perspective: "1200px" }}
    >
      <div
        ref={wrapRef}
        className="relative group cursor-grab active:cursor-grabbing select-none"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="absolute -inset-2 rounded-xl bg-gradient-to-tr from-primary-container/40 via-secondary/30 to-tertiary-container/20 blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
        <div
          ref={cardRef}
          className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-xl overflow-hidden shadow-[0_24px_48px_-10px_rgba(0,0,0,0.7),inset_0_1px_2px_rgba(255,255,255,0.4)] bg-surface-container-high/50 backdrop-blur-2xl border border-white/15 transition-transform duration-100 ease-out will-change-transform"
        >
          <img
            src={imageSrc}
            alt={alt}
            className="w-full h-full object-cover object-center pointer-events-none transform scale-105 transition-transform duration-300 group-hover:scale-110"
          />
          <div
            ref={glareRef}
            className="absolute inset-0 pointer-events-none opacity-40 mix-blend-overlay transition-opacity duration-300"
            style={{
              background:
                "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.08) 50%, transparent 80%)",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/15 via-transparent to-surface-container-lowest/70 pointer-events-none" />
          
          <div className="absolute bottom-space-sm left-space-sm right-space-sm bg-surface-container-lowest/75 backdrop-blur-xl border border-white/10 rounded-full px-space-md py-space-xs flex items-center justify-between shadow-[0_4px_16px_rgba(0,0,0,0.3)]">
            <span className="flex items-center gap-space-xs text-primary font-label-md text-label-md">
              <span className="w-2 h-2 rounded-full bg-primary-container shadow-[0_0_8px_#00f2fe] animate-pulse" />
              Davin Loise S.A.H
           </span>
            <span className="text-on-surface-variant font-label-sm text-label-sm tracking-wide uppercase">
              XII RPL A
           </span>
         </div>
       </div>
     </div>
   </div>
  );
}
