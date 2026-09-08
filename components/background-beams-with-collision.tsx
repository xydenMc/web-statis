"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Aceternity-style <BackgroundBeamsWithCollision> ported to React/Next.js.
 * - Generates N animated beams animating from a base point.
 * - On collision with the top, emits a burst of particles and the beam is removed.
 * - Background uses a pointer-events-none layer; pass children to wrap content.
 */

type Beam = {
  id: string;
  initialX: number;
  translateX: number;
  duration: number;
  delay: number;
  repeatDelay: number;
  className: string;
};

type Collision = {
  id: string;
  x: number;
  y: number;
  createdAt: number;
};

export function BackgroundBeamsWithCollision({
  children,
  className,
  beamCount = 18,
}: {
  children?: React.ReactNode;
  className?: string;
  beamCount?: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const parentRef = useRef<HTMLDivElement>(null);

  const [beams, setBeams] = useState<Beam[]>([]);
  const [collisions, setCollisions] = useState<Collision[]>([]);

  useEffect(() => {
    if (!parentRef.current) return;

    const width = parentRef.current.clientWidth ?? 1000;
    const generated: Beam[] = Array.from({ length: beamCount }, (_, i) => ({
      id: `beam-${i}`,
      initialX: Math.random() * (width * 1.2) - width * 0.1,
      translateX: Math.random() * (width * 1.2) - width * 0.1,
      duration: Math.random() * 5 + 5,
      delay: Math.random() * 2,
      repeatDelay: Math.random() * 8 + 2,
      className: cn(
        "absolute top-0 h-32 w-px",
        i % 8 === 0 && "h-40",
        i % 12 === 0 && "h-44",
        i % 3 === 0 && "opacity-60",
      ),
    }));
    setBeams(generated);

    const handleResize = () => {
      if (!parentRef.current) return;
      const w = parentRef.current.clientWidth ?? 1000;
      setBeams((prev) =>
        prev.map((b) => ({
          ...b,
          initialX: Math.random() * (w * 1.2) - w * 0.1,
          translateX: Math.random() * (w * 1.2) - w * 0.1,
        })),
      );
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [beamCount]);

  return (
    <div
      ref={parentRef}
      className={cn(
        "relative flex items-center w-full justify-center overflow-hidden",
        className,
      )}
    >
      <div
        ref={containerRef}
        aria-hidden
        className="absolute inset-0 w-full h-full pointer-events-none"
      >
        {beams.map((beam) => (
          <CollisionMechanism
            key={beam.id}
            beam={beam}
            onCollision={(x, y) => {
              const id = `${beam.id}-${Date.now()}`;
              setCollisions((prev) => [...prev, { id, x, y, createdAt: Date.now() }]);
              setBeams((prev) => prev.filter((b) => b.id !== beam.id));
              setTimeout(() => {
                setCollisions((prev) => prev.filter((c) => c.id !== id));
              }, 1500);
              setTimeout(() => {
                if (!parentRef.current) return;
                const width = parentRef.current.clientWidth ?? 1000;
                const newBeam: Beam = {
                  id: `beam-${Date.now()}-${beam.id}`,
                  initialX: Math.random() * (width * 1.2) - width * 0.1,
                  translateX: Math.random() * (width * 1.2) - width * 0.1,
                  duration: Math.random() * 5 + 5,
                  delay: 0,
                  repeatDelay: Math.random() * 8 + 2,
                  className: beam.className,
                };
                setBeams((prev) => [...prev, newBeam]);
              }, 1200);
            }}
          />
        ))}

        {collisions.map((c) => (
          <Explosion
            key={c.id}
            x={c.x}
            y={c.y}
            onComplete={() =>
              setCollisions((prev) => prev.filter((cc) => cc.id !== c.id))
            }
          />
        ))}
    </div>

      <div className="relative z-10 w-full">{children}
     </div>
  </div>
  );
}

function CollisionMechanism({
  beam,
  onCollision,
}: {
  beam: Beam;
  onCollision: (x: number, y: number) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const hasCollided = useRef(false);

  return (
    <motion.div
      ref={ref}
      className={cn("absolute", beam.className)}
      initial={{ x: beam.initialX, y: -40 }}
      animate={{
        x: beam.translateX,
        y: -10,
        opacity: [0, 1, 1, 0],
      }}
      transition={{
        duration: beam.duration,
        repeat: Infinity,
        repeatType: "loop",
        delay: beam.delay,
        repeatDelay: beam.repeatDelay,
        ease: "easeInOut",
      }}
      onAnimationComplete={() => {
        if (ref.current && !hasCollided.current) {
          const rect = ref.current.getBoundingClientRect();
          const parentRect = ref.current.offsetParent?.getBoundingClientRect();
          if (parentRect && rect.bottom <= parentRect.top + 4) {
            hasCollided.current = true;
            onCollision(rect.left - parentRect.left + rect.width / 2, 0);
          }
        }
      }}
    >
      <div
        style={{
          background:
            "linear-gradient(to top, transparent, rgba(0,242,254,0.6) 30%, rgba(105,0,236,0.7) 70%, transparent)",
        }}
        className="w-px h-full"
      />
  </motion.div>
  );
}

function Explosion({
  x,
  y,
  onComplete,
}: {
  x: number;
  y: number;
  onComplete: () => void;
}) {
  const particles = Array.from({ length: 16 }, (_, i) => i);
  return (
    <div
      className="absolute pointer-events-none"
      style={{ left: x, top: y }}
    >
      <AnimatePresence>
        {particles.map((i) => (
          <motion.span
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary-container shadow-[0_0_12px_#00f2fe]"
            initial={{
              x: 0,
              y: 0,
              opacity: 1,
              scale: 1,
            }}
            animate={{
              x: Math.cos((i / particles.length) * Math.PI * 2) * 60,
              y: Math.sin((i / particles.length) * Math.PI * 2) * 60,
              opacity: 0,
              scale: 0.5,
            }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            onAnimationComplete={i === 0 ? onComplete : undefined}
          />
        ))}
    </AnimatePresence>
      <motion.div
        className="absolute rounded-full border border-primary-container/70"
        initial={{ width: 0, height: 0, opacity: 1 }}
        animate={{ width: 120, height: 120, opacity: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      />
  </div>
  );
}
