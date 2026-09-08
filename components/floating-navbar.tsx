"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export type NavItem = {
  name: string;
  link: string;
  icon?: React.ReactNode;
};

export function FloatingNav({
  navItems,
  className,
}: {
  navItems: NavItem[];
  className?: string;
}) {
  const [active, setActive] = useState<string>(navItems[0]?.link ?? "#about");
  const [visible, setVisible] = useState<boolean>(true);

  // Scroll-spy + auto-hide-on-scroll-down behavior
  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setVisible(
        y < 24 || y < lastY || y + window.innerHeight >= document.body.offsetHeight - 24,
      );
      lastY = y;
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0.01 },
    );

    document.querySelectorAll("main section[id]").forEach((s) => observer.observe(s));

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  const onClick = (e: React.MouseEvent<HTMLAnchorElement>, link: string) => {
    if (link.startsWith("#")) {
      e.preventDefault();
      const el = document.querySelector(link);
      if (el) {
        (el as HTMLElement).scrollIntoView({ behavior: "smooth", block: "start" });
        setActive(link);
      }
    }
  };

  return (
    <AnimatePresence mode="wait">
      <motion.header
        key="floating-nav"
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className={cn(
          "fixed top-0 inset-x-0 z-50 px-gutter-mobile lg:px-gutter-desktop pt-space-sm",
          !visible && "pointer-events-none",
          className,
        )}
        style={{ opacity: visible ? 1 : 0, transition: "opacity 0.25s ease-out" }}
      >
        <div className="flex justify-center items-center">
          <nav
            className={cn(
              "flex items-center gap-space-xs",
              "bg-surface-container-high/40 px-space-xs py-space-2xs rounded-full",
              "backdrop-blur-md",
              "shadow-[0_20px_48px_-12px_rgba(0,0,0,0.55),inset_0_1px_1px_0_rgba(255,255,255,0.25)]",
              "border border-white/10",
            )}
          >
            {navItems.map((item) => {
              const isActive = active === item.link;
              return (
                <a
                  key={item.name}
                  href={item.link}
                  onClick={(e) => onClick(e, item.link)}
                  className={cn(
                    "transition-colors font-label-md text-label-md px-space-md py-space-xs rounded-full",
                    isActive
                      ? "bg-primary-container text-on-primary-container shadow-[0_0_16px_rgba(0,242,254,0.35)]"
                      : "text-on-surface-variant hover:text-on-surface",
                  )}
                >
                  {item.name}
            </a>
              );
            })}
      </nav>
    </div>
  </motion.header>
</AnimatePresence>
  );
}
