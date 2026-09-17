"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export type NavItem = {
  name: string;
  link: string;
  icon?: string;
};

export function FloatingNav({
  navItems,
  className,
}: {
  navItems: NavItem[];
  className?: string;
}) {
  const [active, setActive] = useState<string>(navItems[0]?.link ?? "#home");
  const [visible, setVisible] = useState<boolean>(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setVisible(
        y < 24 ||
          y < lastY ||
          y + window.innerHeight >= document.body.offsetHeight - 24 ||
          mobileMenuOpen,
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
      { rootMargin: "-30% 0px -50% 0px", threshold: 0.01 },
    );

    document.querySelectorAll("main section[id]").forEach((s) => observer.observe(s));

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, [mobileMenuOpen]);

  const onClick = (e: React.MouseEvent<HTMLAnchorElement>, link: string) => {
    if (link.startsWith("#")) {
      e.preventDefault();
      const el = document.querySelector(link);
      if (el) {
        (el as HTMLElement).scrollIntoView({ behavior: "smooth", block: "start" });
        setActive(link);
        setMobileMenuOpen(false);
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
          "fixed top-0 inset-x-0 z-50 px-[1.25rem] lg:px-[3rem] pt-[0.5rem] md:pt-[0.75rem]",
          !visible && "pointer-events-none",
          className,
        )}
        style={{ opacity: visible ? 1 : 0, transition: "opacity 0.25s ease-out" }}
      >
        {/* Desktop / tablet: centered nav with glass style */}
        <div className="hidden md:flex justify-center">
          <nav
            className={cn(
              "flex items-center gap-0.5 pointer-events-auto",
              "bg-surfaceContainerLow/70 px-1.5 py-1 rounded-full",
              "backdrop-blur-2xl",
              "shadow-[0_8px_32px_-12px_rgba(28,28,25,0.4),inset_0_1px_1px_0_rgba(255,255,255,0.18)]",
              "border border-border",
              "overflow-x-auto no-scrollbar max-w-full",
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
                    "transition-colors font-label-md text-xs px-3 py-2 rounded-full whitespace-nowrap shrink-0",
                    isActive
                      ? "bg-primary text-onPrimary font-semibold"
                      : "text-onSurfaceVariant hover:text-primary hover:bg-white/10",
                  )}
                >
                  {item.name}
                </a>
              );
            })}
          </nav>
        </div>

        {/* Mobile: hamburger only, no identity pill */}
        <div className="md:hidden flex justify-end">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
            className="flex items-center justify-center w-11 h-11 rounded-full bg-surfaceContainerLow/70 backdrop-blur-md border border-border text-primary hover:bg-surfaceContainerLow transition-colors pointer-events-auto"
          >
            <span className="material-symbols-outlined text-base">
              {mobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-2 overflow-hidden rounded-full bg-surfaceContainerLow/95 backdrop-blur-2xl border border-border p-2 shadow-2xl pointer-events-auto"
            >
              <div className="grid grid-cols-2 gap-1">
                {navItems.map((item) => {
                  const isActive = active === item.link;
                  return (
                    <a
                      key={item.name}
                      href={item.link}
                      onClick={(e) => onClick(e, item.link)}
                      className={cn(
                        "flex items-center gap-2 px-3 py-2.5 rounded-full text-xs font-medium transition-colors min-h-[44px]",
                        isActive
                          ? "bg-primary text-onPrimary font-semibold"
                          : "text-onSurfaceVariant hover:bg-white/10 hover:text-primary",
                      )}
                    >
                      {item.icon && (
                        <span className="material-symbols-outlined text-base">{item.icon}</span>
                      )}
                      <span>{item.name}</span>
                    </a>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </AnimatePresence>
  );
}