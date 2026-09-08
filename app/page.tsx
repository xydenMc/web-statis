"use client";

import React, { useEffect } from "react";
import { BackgroundBeamsWithCollision } from "@/components/background-beams-with-collision";
import { FloatingNav } from "@/components/floating-navbar";
import { InfiniteMovingCards, type InfiniteCard } from "@/components/infinite-moving-cards";
import { Carousel, type CarouselSlide } from "@/components/carousel";
import { Profile3DCard } from "@/components/profile-3d-card";

const NAV_ITEMS = [
  { name: "About", link: "#about" },
  { name: "Skills", link: "#skills" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

const SKILLS: InfiniteCard[] = [
  {
    icon: "html",
    title: "HTML",
    description: "Bahasa markup standar untuk web - struktur dan semantic content.",
    tags: ["Semantic HTML", "Accessibility", "SEO"],
  },
  {
    icon: "style",
    title: "CSS",
    description: "Styling dan layout - desain responsif dengan modern layout techniques.",
    tags: ["Flexbox", "Grid", "Responsive Design"],
  },
  {
    icon: "php",
    title: "PHP",
    description: "Backend scripting - server-side programming untuk web development.",
    tags: ["Laravel", "CI4", "MySQL", "API Development"],
  },
  {
    icon: "code",
    title: "C#",
    description: "Bahasa pemrograman .NET - object-oriented untuk aplikasi enterprise.",
    tags: [".NET Core", "ASP.NET", "OOP"],
  },
  {
    icon: "code",
    title: "C++",
    description: "Bahasa pemrograman performa tinggi - system programming & memory management.",
    tags: ["STL", "OOP", "Memory Management"],
  },
  {
    icon: "html",
    title: "HTML",
    description: "Bahasa markup standar untuk web - struktur dan semantic content.",
    tags: ["Semantic HTML", "Accessibility", "SEO"],
  },
  {
    icon: "php",
    title: "PHP",
    description: "Backend scripting - server-side programming untuk web development.",
    tags: ["Laravel", "CI4", "MySQL", "API Development"],
  },
  {
    icon: "code",
    title: "C#",
    description: "Bahasa pemrograman .NET - object-oriented untuk aplikasi enterprise.",
    tags: [".NET Core", "ASP.NET", "OOP"],
  },
];

const PROJECTS: CarouselSlide[] = [
  {
    badge: "01 / Restaurant SaaS",
    tags: ["SaaS", "POS", "Restaurant Tech"],
    title: "Restcom",
    description:
      "All-in-one restaurant management platform untuk mengelola menu, paket menu, pesanan, kasir, dapur, pembayaran, QR meja, dan laporan bisnis dalam satu sistem.",
    impact:
      "Menghubungkan seluruh alur operasional restoran dari pelanggan hingga back-office melalui satu platform terintegrasi.",
    icon: "restaurant",
    iconTone: "primary",
    tech: ["CodeIgniter 4", "PHP", "MySQL", "Bootstrap", "JavaScript"],
    image: "/project_2.png",
  },
  {
    badge: "02 / Full-Stack & UI System",
    tags: ["CodeIgniter 4", "Liquid Glass", "Tailwind/Bootstrap"],
    title: "AIMpro Care",
    description:
      "Sistem manajemen terintegrasi untuk Quality Control (QC) hardware dan aktivasi garansi digital berbasis fluid glass interface. Dilengkapi pelacakan QR code instan dan alur POS modern.",
    impact:
      "Mengotomatisasi validasi unit dan aktivasi garansi secara real-time, memangkas proses manual serta mengamankan alur after-sales dengan presisi tinggi.",
    icon: "verified_user",
    iconTone: "primary",
    tech: ["CodeIgniter 4", "Bootstrap 5", "Endroid QR", "MySQL"],
    image: "/project_1.png",
  },
];

export default function Page() {
  // Scroll-reveal
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(".scroll-reveal");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      elements.forEach((el) => el.classList.add("revealed"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("revealed");
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    elements.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <FloatingNav navItems={NAV_ITEMS} />

      {/* Decorative atmospheric orbs */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[38rem] h-[38rem] rounded-full bg-primary-container/20 blur-[130px]" />
        <div className="absolute top-1/3 -right-40 w-[42rem] h-[42rem] rounded-full bg-secondary-container/25 blur-[150px]" />
        <div className="absolute -bottom-32 left-1/3 w-[36rem] h-[36rem] rounded-full bg-tertiary-container/15 blur-[140px]" />
      </div>

      <BackgroundBeamsWithCollision className="min-h-screen">
        <main className="w-full pt-20 max-w-container-max mx-auto px-gutter-mobile lg:px-gutter-desktop relative z-10">
          <div className="flex flex-col w-full pb-space-3xl gap-space-3xl relative">
            {/* Hero / About */}
            <section
              id="about"
              className="relative w-full pt-space-xl scroll-reveal revealed"
            >
              <div className="relative overflow-hidden rounded-xl bg-surface-container-low/60 backdrop-blur-2xl shadow-[0_24px_56px_-16px_rgba(0,0,0,0.6),inset_0_1px_1px_0_rgba(255,255,255,0.2)] border border-white/10 p-space-lg lg:p-space-2xl">
                <div className="absolute -top-32 -right-24 w-96 h-96 rounded-full bg-primary-container/15 blur-[120px] pointer-events-none" />
                <div className="absolute -bottom-24 -left-12 w-80 h-80 rounded-full bg-secondary-container/20 blur-[130px] pointer-events-none" />

                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
                  <Profile3DCard
                    imageSrc="/foto_profile.jpeg"
                    alt="D"
                  />

                  <div className="lg:col-span-7 flex flex-col gap-space-md">
                    <div className="flex flex-col gap-space-2xs">
                      <h1 className="text-primary font-display text-display-mobile md:text-display tracking-tight">
                        Davin Loise S.A.H
                      </h1>
                      <p className="text-secondary font-headline-md text-headline-md tracking-tight">
                        Web Dev, UI/UX, & Multimedia
                      </p>
                    </div>

                    <p className="text-on-surface-variant font-body-lg text-body-lg max-w-2xl leading-relaxed">
                      Davin Loise Steven Alinsky Herlambang adalah pelajar tingkat akhir SMKN 1
                      Jenangan Ponorogo dengan spesialisasi Rekayasa Perangkat Lunak (RPL).
                      Membangun fondasi kuat dalam pengembangan perangkat lunak, pemrograman, serta
                      pemecahan masalah berbasis teknologi. Siap berkontribusi secara profesional
                      di industri kreatif dan teknologi informasi melalui berbagai proyek aplikasi
                      dan sistem.
                    </p>

                    <div className="flex gap-8 mt-6">
                      {/* INFO KELAS */}
                      <div className="flex items-center gap-3 border-l-2 border-primary-container pl-3 py-1">
                        <div className="flex flex-col">
                          <span className="text-[9px] text-on-surface-variant/50 font-label tracking-widest uppercase font-medium">Kelas</span>
                          <span className="text-sm font-bold text-primary-container tracking-tight">XII RPL A</span>
                        </div>
                      </div>

                      {/* INFO PROJECT */}
                      <div className="flex items-center gap-3 border-l-2 border-purple-500 pl-3 py-1">
                        <div className="flex flex-col">
                          <span className="text-[9px] text-on-surface-variant/50 font-label tracking-widest uppercase font-medium">Project</span>
                          <span className="text-sm font-bold text-purple-400 tracking-tight">4+ Proyek</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-space-md pt-space-xs">
                      <a
                        href="#projects"
                        className="inline-flex items-center gap-space-xs px-space-lg py-space-sm rounded-full bg-gradient-to-r from-primary-container to-secondary-container text-black font-headline-sm text-headline-sm shadow-[0_12px_28px_-6px_rgba(0,242,254,0.45),inset_0_1px_1px_rgba(255,255,255,0.6)] hover:brightness-110 active:scale-95 transition-all"
                      >
                        <span>Lihat Project</span>
                        <span className="material-symbols-outlined text-headline-sm">
                          arrow_downward
                        </span>
                      </a>
                      <a
                        href="#contact"
                        className="inline-flex items-center gap-space-xs px-space-lg py-space-sm rounded-full bg-surface-container-high/40 hover:bg-surface-container-high/70 text-black font-headline-sm text-headline-sm backdrop-blur-xl border border-white/10 shadow-[0_8px_20px_rgba(0,0,0,0.3),inset_0_1px_1px_rgba(255,255,255,0.25)] active:scale-95 transition-all"
                      >
                        <span className="material-symbols-outlined text-headline-sm">mail</span>
                        <span>Hubungi Saya</span>
                      </a>
                      <a
                        href="https://web-dinamis-production.up.railway.app"
                        className="inline-flex items-center gap-space-xs px-space-lg py-space-sm rounded-full bg-surface-container-high/40 hover:bg-surface-container-high/70 text-black font-headline-sm text-headline-sm backdrop-blur-xl border border-white/10 shadow-[0_8px_20px_rgba(0,0,0,0.3),inset_0_1px_1px_rgba(255,255,255,0.25)] active:scale-95 transition-all"
                      >
                        <span className="material-symbols-outlined text-headline-sm text-primary-container">
                          language
                        </span>
                        <span>Web Dinamis</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Skills — Infinite Moving Cards */}
            <section id="skills" className="relative w-full scroll-reveal revealed">
              <div className="rounded-xl bg-surface-container-low/60 backdrop-blur-2xl p-space-lg lg:p-space-xl border border-white/10 shadow-[0_20px_48px_-12px_rgba(0,0,0,0.5),inset_0_1px_1px_0_rgba(255,255,255,0.2)] flex flex-col gap-space-lg">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
                  <div>
                    <span className="text-primary-container font-label-sm text-label-sm tracking-widest uppercase">
                      Competencies • Architecture
                    </span>
                    <h2 className="text-primary font-headline-lg text-headline-lg mt-space-2xs tracking-tight">
                      Keahlian & Disiplin Rekayasa
                    </h2>
                  </div>
                  <div className="flex flex-col gap-space-2xs max-w-md">
                    <p className="text-on-surface-variant font-body-sm text-body-sm">
                      Menerjemahkan ide abstrak menjadi sistem digital berkekuatan tinggi,
                      menggabungkan kemewahan visual dengan arsitektur modular yang solid.
                    </p>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      HTML - CSS - PHP - C# - C++
                    </p>
                  </div>
                </div>

                <InfiniteMovingCards items={SKILLS} direction="left" speed="slow" />
              </div>
            </section>

            {/* Projects — Carousel */}
            <section
              id="projects"
              className="relative w-full flex flex-col gap-space-xl scroll-reveal revealed"
            >
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-space-sm">
                <div className="flex flex-col gap-space-2xs">
                  <div className="flex items-center gap-space-xs">
                    <span className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_8px_#d1bcff]" />
                    <span className="text-secondary font-label-md text-label-md uppercase tracking-wider">
                      Curated Portfolio
                    </span>
                  </div>
                  <h2 className="text-primary font-headline-lg text-headline-lg tracking-tight">
                    Project yang Pernah Dikembangkan
                  </h2>
                </div>
                <span className="text-on-surface-variant font-label-md text-label-md">
                  2 Project Unggulan • 2026
                </span>
              </div>

              <Carousel slides={PROJECTS} />
            </section>

            {/* Contact */}
            <section
              id="contact"
              className="relative w-full scroll-reveal revealed"
            >
              <div className="rounded-xl bg-surface-container-low/60 backdrop-blur-2xl border border-white/10 p-space-lg lg:p-space-2xl shadow-[0_24px_56px_-16px_rgba(0,0,0,0.55),inset_0_1px_1px_0_rgba(255,255,255,0.22)] flex flex-col items-center text-center gap-space-md">
                <span className="text-primary-container font-label-sm text-label-sm tracking-widest uppercase">
                  Hubungi Saya
                </span>
                <h2 className="text-primary font-headline-lg text-headline-lg tracking-tight">
                  Bangun solusi web yang fleksibel dan adaptif
                </h2>
                <p className="text-slate-100 font-body-md text-body-md max-w-xl">
                  Terbuka untuk kolaborasi, magang, dan proyek pengembangan web. Kirim pesan
                  melalui email atau media sosial di bawah ini.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-space-md pt-space-xs">

                  <a
                    href="https://github.com/xydenMc"
                    className="inline-flex items-center gap-space-xs px-space-lg py-space-sm rounded-full bg-surface-container-high/40 hover:bg-surface-container-high/70 text-slate-100 font-headline-sm text-headline-sm backdrop-blur-xl border border-white/10 shadow-[0_8px_20px_rgba(0,0,0,0.3),inset_0_1px_1px_rgba(255,255,255,0.25)] active:scale-95 transition-all"
                  >
                    <span className="material-symbols-outlined text-headline-sm">code</span>
                    <span>GitHub</span>
                  </a>
                  <a
                    href="mailto:"
                    className="inline-flex items-center gap-space-xs px-space-lg py-space-sm rounded-full bg-surface-container-high/40 hover:bg-surface-container-high/70 text-slate-100 font-headline-sm text-headline-sm backdrop-blur-xl border border-white/10 shadow-[0_8px_20px_rgba(0,0,0,0.3),inset_0_1px_1px_rgba(255,255,255,0.25)] active:scale-95 transition-all"
                  >
                    <span className="material-symbols-outlined text-headline-sm">mail</span>
                    <span>Email</span>
                  </a>
                </div>
              </div>
            </section>
          </div>
        </main>
      </BackgroundBeamsWithCollision>

      <footer className="w-full mt-space-3xl relative z-10 scroll-reveal revealed">
        <div className="max-w-container-max mx-auto px-gutter-mobile lg:px-gutter-desktop pb-space-xl">
          <div className="rounded-lg bg-surface-container-lowest/60 border border-white/10 backdrop-blur-xl px-space-xl py-space-lg shadow-[0_16px_32px_-8px_rgba(0,0,0,0.45)] flex flex-col md:flex-row items-center justify-between gap-space-md">
            <span className="font-label-md text-label-md text-on-surface-variant">
              © 2026 Davin Loise S.A.H.
            </span>
            <div className="flex items-center gap-space-lg">
              <a
                className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors"
                href="#about"
              >
                About
              </a>
              <a
                className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors"
                href="#projects"
              >
                Projects
              </a>
              <a
                className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors"
                href="#skills"
              >
                Skills
              </a>
              <a
                className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors"
                href="#contact"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
