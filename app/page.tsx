"use client";

import React, { useEffect, useState } from "react";
import { BackgroundBeamsWithCollision } from "@/components/background-beams-with-collision";
import { FloatingNav, type NavItem } from "@/components/floating-navbar";
import { InfiniteMovingCards, type InfiniteCard } from "@/components/infinite-moving-cards";
import { Carousel, type CarouselSlide } from "@/components/carousel";
import { Profile3DCard } from "@/components/profile-3d-card";

// 1. HEADER / NAVBAR items
const NAV_ITEMS: NavItem[] = [
  { name: "Home", link: "#home", icon: "home" },
  { name: "About", link: "#about", icon: "person" },
  { name: "Profile", link: "#profile", icon: "badge" },
  { name: "Education", link: "#education", icon: "school" },
  { name: "Experience", link: "#experience", icon: "work" },
  { name: "Skills", link: "#skills", icon: "code" },
  { name: "Projects", link: "#projects", icon: "dashboard" },
  { name: "Certificates", link: "#certificates", icon: "workspace_premium" },
  { name: "Activities", link: "#activities", icon: "event" },
  { name: "Blog", link: "#blog", icon: "article" },
  { name: "Contact", link: "#contact", icon: "mail" },
];

// Skills data
const SKILLS: InfiniteCard[] = [
  {
    icon: "html",
    title: "HTML5 & Semantic Web",
    description: "Bahasa markup standar untuk web - struktur, aksesibilitas, dan SEO.",
    tags: ["Semantic HTML", "Accessibility", "SEO"],
  },
  {
    icon: "style",
    title: "CSS3 & Modern Styling",
    description: "Layouting responsif & estetis - Flexbox, Grid, CSS Variables & Fluid Glass.",
    tags: ["Tailwind CSS", "Bootstrap 5", "Responsive"],
  },
  {
    icon: "php",
    title: "PHP & Web Backend",
    description: "Backend scripting - logika server-side, integrasi REST API, dan sistem MVC.",
    tags: ["CodeIgniter 4", "Laravel", "MVC", "MySQL"],
  },
  {
    icon: "code",
    title: "C# & .NET Framework",
    description: "Pemrograman berorientasi objek (OOP) untuk aplikasi desktop & backend.",
    tags: [".NET Core", "ASP.NET", "OOP"],
  },
  {
    icon: "terminal",
    title: "C++ & System Logic",
    description: "Pemrograman performa tinggi - struktur data & manajemen memori.",
    tags: ["STL", "Data Structures", "OOP"],
  },
  {
    icon: "database",
    title: "Database Management",
    description: "Rancangan basis data relasional, manipulasi SQL, dan query optimization.",
    tags: ["MySQL", "Relational DB", "Queries"],
  },
  {
    icon: "psychology",
    title: "AI-Assisted Development",
    description: "Pengembangan perangkat lunak dibantu AI untuk akselerasi coding.",
    tags: ["Claude Code", "GitHub Copilot", "Prompting"],
  },
  {
    icon: "build",
    title: "Developer Tools",
    description: "Alat bantu kerja standar industri untuk kolaborasi dan version control.",
    tags: ["Git & GitHub", "VS Code", "Postman"],
  },
];

// Projects data
const PROJECTS: CarouselSlide[] = [
  {
    badge: "01 / Restaurant SaaS",
    tags: ["SaaS", "POS", "Restaurant Tech"],
    title: "RESTCOM",
    description:
      "All-in-one restaurant management platform untuk mengelola menu, paket menu, pesanan, kasir, dapur, pembayaran, QR meja, dan laporan bisnis dalam satu sistem terintegrasi.",
    impact:
      "Menghubungkan seluruh alur operasional restoran dari pelanggan hingga back-office melalui satu platform terintegrasi secara efisien.",
    icon: "restaurant",
    iconTone: "primary",
    tech: ["CodeIgniter 4", "PHP", "MySQL", "Bootstrap 5", "JavaScript"],
    image: "/project_2.png",
    role: "Full-Stack Web Developer",
    demoUrl: "https://web-dinamis-production.up.railway.app",
    sourceUrl: "https://github.com/xydenMc",
  },
  {
    badge: "02 / Full-Stack & UI System",
    tags: ["CodeIgniter 4", "Liquid Glass", "Bootstrap 5"],
    title: "AIMpro Care",
    description:
      "Sistem manajemen terintegrasi untuk Quality Control (QC) hardware dan aktivasi garansi digital berbasis fluid glass interface. Dilengkapi pelacakan QR code instan dan alur POS modern.",
    impact:
      "Mengotomatisasi validasi unit dan aktivasi garansi secara real-time, memangkas proses manual serta mengamankan alur after-sales dengan presisi tinggi.",
    icon: "verified_user",
    iconTone: "primary",
    tech: ["CodeIgniter 4", "Bootstrap 5", "Endroid QR", "MySQL", "JavaScript"],
    image: "/project_1.png",
    role: "Full-Stack Developer & UI Designer",
    sourceUrl: "https://github.com/xydenMc",
  },
];

export default function Page() {
  const [currentYear, setCurrentYear] = useState<number>(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());

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
      { threshold: 0.08, rootMargin: "0px 0px -30px 0px" },
    );
    elements.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      {/* 1. HEADER / NAVBAR */}
      <FloatingNav navItems={NAV_ITEMS} />

      {/* Decorative atmospheric background orbs */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[38rem] h-[38rem] rounded-full bg-primary-container/20 blur-[130px]" />
        <div className="absolute top-1/3 -right-40 w-[42rem] h-[42rem] rounded-full bg-secondary-container/25 blur-[150px]" />
        <div className="absolute -bottom-32 left-1/3 w-[36rem] h-[36rem] rounded-full bg-tertiary-container/15 blur-[140px]" />
      </div>

      <BackgroundBeamsWithCollision className="min-h-screen">
        <main className="w-full pt-16 md:pt-20 max-w-container-max mx-auto px-gutter-mobile lg:px-gutter-desktop relative z-10">
          <div className="flex flex-col w-full pb-space-3xl gap-space-2xl relative">

            {/* 2. HERO / BERANDA */}
            <section
              id="home"
              className="relative w-full pt-space-xs md:pt-space-md scroll-reveal revealed"
            >
              <div className="relative overflow-hidden rounded-2xl bg-surface-container-low/60 backdrop-blur-2xl shadow-[0_24px_56px_-16px_rgba(0,0,0,0.6),inset_0_1px_1px_0_rgba(255,255,255,0.18)] border border-white/10 p-space-lg lg:p-space-2xl">
                <div className="absolute -top-32 -right-24 w-96 h-96 rounded-full bg-primary-container/15 blur-[120px] pointer-events-none" />
                <div className="absolute -bottom-24 -left-12 w-80 h-80 rounded-full bg-secondary-container/20 blur-[130px] pointer-events-none" />

                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
                  <Profile3DCard
                    imageSrc="/foto_profile.jpeg"
                    alt="Foto Profil Davin Loise Steven Alinsky Herlambang"
                  />

                  <div className="lg:col-span-7 flex flex-col gap-space-md">
                    <div className="flex flex-col gap-space-2xs">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-container/10 border border-primary-container/30 text-primary-container w-fit mb-1">
                        <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse" />
                        <span className="text-xs font-label-md uppercase tracking-wider">
                          Siswa SMK / Web Developer
                        </span>
                      </div>
                      <h1 className="text-primary font-display text-display-mobile md:text-display tracking-tight">
                        Davin Loise Steven Alinsky Herlambang
                      </h1>
                      <p className="text-secondary font-headline-md text-headline-md tracking-tight">
                        Pelajar XII RPL A — SMKN 1 Jenangan Ponorogo
                      </p>
                    </div>

                    <p className="text-on-surface-variant font-body-lg text-body-lg max-w-2xl leading-relaxed">
                      Membangun perangkat lunak & solusi web modern dengan presisi visual, antarmuka responsif, dan logika backend yang terstruktur. Berfokus pada pengembangan aplikasi web, UI/UX, serta pemrograman berbasis teknologi terkini.
                    </p>

                    {/* Information Strip */}
                    <div className="rounded-xl bg-surface-container-high/40 border border-white/10 p-3 md:p-4 backdrop-blur-md">
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
                        <div className="flex flex-col gap-0.5 sm:pr-3">
                          <span className="text-[10px] text-on-surface-variant/70 font-label tracking-widest uppercase font-medium">Instansi</span>
                          <span className="text-sm font-semibold text-primary tracking-tight">SMKN 1 Jenangan</span>
                        </div>
                        <div className="flex flex-col gap-0.5 pt-2 sm:pt-0 sm:px-3">
                          <span className="text-[10px] text-on-surface-variant/70 font-label tracking-widest uppercase font-medium">Jurusan</span>
                          <span className="text-sm font-semibold text-secondary tracking-tight">Rekayasa Perangkat Lunak</span>
                        </div>
                        <div className="flex flex-col gap-0.5 pt-2 sm:pt-0 sm:pl-3">
                          <span className="text-[10px] text-on-surface-variant/70 font-label tracking-widest uppercase font-medium">Project</span>
                          <span className="text-sm font-semibold text-primary-container tracking-tight">2+ Project</span>
                        </div>
                      </div>
                    </div>

                    {/* 3 Main Action Buttons - Unified Button System */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-space-xs">
                      <a
                        href="#projects"
                        className="inline-flex items-center justify-center gap-2.5 h-[52px] px-6 rounded-xl bg-[#16161f] text-[#f8fafc] font-semibold text-sm md:text-base shadow-[0_8px_20px_-8px_rgba(0,0,0,0.55)] hover:bg-[#1e1e2a] active:scale-[0.98] transition-all focus:outline-none focus:ring-2 focus:ring-white/20"
                      >
                        <span className="material-symbols-outlined text-xl">arrow_downward</span>
                        <span>Lihat Portfolio</span>
                      </a>
                      <a
                        href="#contact"
                        className="inline-flex items-center justify-center gap-2.5 h-[52px] px-6 rounded-xl bg-[#16161f] text-[#f8fafc] font-semibold text-sm md:text-base shadow-[0_8px_20px_-8px_rgba(0,0,0,0.55)] hover:bg-[#1e1e2a] active:scale-[0.98] transition-all focus:outline-none focus:ring-2 focus:ring-white/20"
                      >
                        <span className="material-symbols-outlined text-xl">mail</span>
                        <span>Hubungi Saya</span>
                      </a>
                      <a
                        href="https://web-dinamis-production.up.railway.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2.5 h-[52px] px-6 rounded-xl bg-[#16161f] text-[#f8fafc] font-semibold text-sm md:text-base shadow-[0_8px_20px_-8px_rgba(0,0,0,0.55)] hover:bg-[#1e1e2a] active:scale-[0.98] transition-all focus:outline-none focus:ring-2 focus:ring-white/20"
                      >
                        <span className="material-symbols-outlined text-xl">language</span>
                        <span>Web Dinamis</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 3. TENTANG SAYA */}
            <section
              id="about"
              className="relative w-full scroll-reveal"
            >
              <div className="rounded-2xl bg-surface-container-low/60 backdrop-blur-2xl border border-white/10 p-space-lg lg:p-space-2xl shadow-[0_20px_48px_-12px_rgba(0,0,0,0.5),inset_0_1px_1px_0_rgba(255,255,255,0.18)] flex flex-col gap-space-lg">
                <div className="flex flex-col gap-space-2xs">
                  <span className="text-primary-container font-label-sm text-label-sm tracking-widest uppercase">
                    Personal Profile • Passion & Vision
                  </span>
                  <h2 className="text-primary font-headline-lg text-headline-lg tracking-tight">
                    Tentang Saya
                  </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl">
                  <div className="lg:col-span-7 flex flex-col gap-space-md text-on-surface-variant font-body-lg text-body-lg leading-relaxed">
                    <p>
                      Saya <strong className="text-primary font-semibold">Davin Loise Steven Alinsky Herlambang</strong>, seorang siswa SMK jurusan <strong className="text-primary font-semibold">Rekayasa Perangkat Lunak (RPL)</strong> di <strong className="text-primary font-semibold">SMKN 1 Jenangan Ponorogo</strong>. Memiliki passion mendalam dalam dunia pengembangan perangkat lunak dan pemrograman web.
                    </p>
                    <p>
                      Bidang utama yang saya tekuni meliputi <strong className="text-slate-100 font-medium">Web Development (Full-Stack)</strong>, <strong className="text-slate-100 font-medium">UI/UX Interface Design</strong>, serta eksplorasi teknologi terkini seperti <strong className="text-slate-100 font-medium">AI & AI-Assisted Development</strong>. Saya terbiasa membangun alur aplikasi web yang efisien, mulai dari perancangan basis data hingga antarmuka yang modern dan responsif.
                    </p>
                    <div className="p-space-md rounded-xl bg-surface-container-high/40 border border-white/10 backdrop-blur-md">
                      <h4 className="text-primary font-headline-sm text-headline-sm mb-1 flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary-container">lightbulb</span>
                        Prinsip & Visi Pribadi
                      </h4>
                      <p className="text-on-surface-variant font-body-md text-body-md italic">
                        &quot;Menciptakan produk digital yang tidak hanya fungsional, tetapi juga memiliki arsitektur yang bersih, estetika yang modern, serta memberikan solusi bernilai tinggi bagi pengguna.&quot;
                      </p>
                    </div>
                  </div>

                  <div className="lg:col-span-5 flex flex-col gap-space-sm">
                    <div className="rounded-xl bg-surface-container/60 border border-white/10 p-space-md flex flex-col gap-space-xs">
                      <span className="text-primary font-headline-sm text-headline-sm flex items-center gap-2">
                        <span className="material-symbols-outlined text-secondary">verified</span>
                        Biodata Ringkas
                      </span>
                      <ul className="flex flex-col gap-2 text-body-md text-on-surface-variant pt-2 border-t border-white/10">
                        <li className="flex justify-between items-center py-1">
                          <span className="text-slate-400">Nama Lengkap</span>
                          <span className="text-slate-100 font-medium text-right">Davin Loise S.A.H</span>
                        </li>
                        <li className="flex justify-between items-center py-1 border-t border-white/5">
                          <span className="text-slate-400">Status</span>
                          <span className="text-primary-container font-medium">Siswa SMK (XII RPL A)</span>
                        </li>
                        <li className="flex justify-between items-center py-1 border-t border-white/5">
                          <span className="text-slate-400">Sekolah</span>
                          <span className="text-slate-100 font-medium text-right">SMKN 1 Jenangan Ponorogo</span>
                        </li>
                        <li className="flex justify-between items-center py-1 border-t border-white/5">
                          <span className="text-slate-400">Fokus Utama</span>
                          <span className="text-secondary font-medium">Web Dev & AI Integration</span>
                        </li>
                        <li className="flex justify-between items-center py-1 border-t border-white/5">
                          <span className="text-slate-400">Lokasi</span>
                          <span className="text-slate-100 font-medium">Ponorogo, Jawa Timur</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 4. PROFIL PROFESIONAL */}
            <section
              id="profile"
              className="relative w-full scroll-reveal"
            >
              <div className="rounded-2xl bg-surface-container-low/60 backdrop-blur-2xl border border-white/10 p-space-lg lg:p-space-2xl shadow-[0_20px_48px_-12px_rgba(0,0,0,0.5),inset_0_1px_1px_0_rgba(255,255,255,0.18)] flex flex-col gap-space-lg">
                <div className="flex flex-col gap-space-2xs">
                  <span className="text-primary-container font-label-sm text-label-sm tracking-widest uppercase">
                    Professional Status • Expertise
                  </span>
                  <h2 className="text-primary font-headline-lg text-headline-lg tracking-tight">
                    Profil Profesional
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
                  {/* Card 1 */}
                  <div className="rounded-xl bg-surface-container/60 border border-white/10 p-space-md flex flex-col gap-2 hover:border-primary-container/40 transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-primary-container/10 flex items-center justify-center text-primary-container">
                      <span className="material-symbols-outlined">badge</span>
                    </div>
                    <span className="text-xs font-label-sm text-on-surface-variant uppercase tracking-wider mt-1">Jabatan / Status</span>
                    <h3 className="text-primary font-headline-sm text-headline-sm">Siswa SMK / Web Developer</h3>
                    <p className="text-body-sm text-on-surface-variant mt-1">
                      Mengembangkan aplikasi web modern, sistem POS & SaaS, serta antarmuka digital.
                    </p>
                  </div>

                  {/* Card 2 */}
                  <div className="rounded-xl bg-surface-container/60 border border-white/10 p-space-md flex flex-col gap-2 hover:border-primary-container/40 transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-secondary/15 flex items-center justify-center text-secondary">
                      <span className="material-symbols-outlined">school</span>
                    </div>
                    <span className="text-xs font-label-sm text-on-surface-variant uppercase tracking-wider mt-1">Instansi</span>
                    <h3 className="text-primary font-headline-sm text-headline-sm">SMKN 1 Jenangan</h3>
                    <p className="text-body-sm text-on-surface-variant mt-1">
                      Sekolah Menengah Kejuruan Negeri 1 Jenangan Ponorogo (Kelas XII RPL A).
                    </p>
                  </div>

                  {/* Card 3 */}
                  <div className="rounded-xl bg-surface-container/60 border border-white/10 p-space-md flex flex-col gap-2 hover:border-primary-container/40 transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-tertiary-container/20 flex items-center justify-center text-tertiary-fixed-dim">
                      <span className="material-symbols-outlined">code</span>
                    </div>
                    <span className="text-xs font-label-sm text-on-surface-variant uppercase tracking-wider mt-1">Jurusan</span>
                    <h3 className="text-primary font-headline-sm text-headline-sm">Rekayasa Perangkat Lunak</h3>
                    <p className="text-body-sm text-on-surface-variant mt-1">
                      Spesialisasi rekayasa software, basis data relasional, OOP, dan web engineering.
                    </p>
                  </div>

                  {/* Card 4 */}
                  <div className="rounded-xl bg-surface-container/60 border border-white/10 p-space-md flex flex-col gap-2 hover:border-primary-container/40 transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-primary-container/10 flex items-center justify-center text-primary-container">
                      <span className="material-symbols-outlined">psychology</span>
                    </div>
                    <span className="text-xs font-label-sm text-on-surface-variant uppercase tracking-wider mt-1">Bidang Keahlian</span>
                    <h3 className="text-primary font-headline-sm text-headline-sm">Web, UI/UX, Programming, AI</h3>
                    <p className="text-body-sm text-on-surface-variant mt-1">
                      Full-Stack PHP/Node, UI/UX Liquid Design, C#/C++, dan integrasi AI coding tools.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 5. PENDIDIKAN */}
            <section
              id="education"
              className="relative w-full scroll-reveal"
            >
              <div className="rounded-2xl bg-surface-container-low/60 backdrop-blur-2xl border border-white/10 p-space-lg lg:p-space-2xl shadow-[0_20px_48px_-12px_rgba(0,0,0,0.5),inset_0_1px_1px_0_rgba(255,255,255,0.18)] flex flex-col gap-space-lg">
                <div className="flex flex-col gap-space-2xs">
                  <span className="text-primary-container font-label-sm text-label-sm tracking-widest uppercase">
                    Academic Background • Timeline
                  </span>
                  <h2 className="text-primary font-headline-lg text-headline-lg tracking-tight">
                    Pendidikan
                  </h2>
                </div>

                <div className="relative border-l-2 border-primary-container/30 pl-6 lg:pl-8 flex flex-col gap-space-xl my-2">
                  {/* Item 1 - SMKN 1 Jenangan */}
                  <div className="relative">
        
                    <div className="rounded-xl bg-surface-container/60 border border-white/10 p-space-md lg:p-space-lg flex flex-col gap-2">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="px-3 py-1 rounded-full bg-primary-container/15 text-primary-container font-label-md text-xs font-semibold">
                          2022 - Sekarang (Aktif)
                        </span>
                        <span className="text-xs text-on-surface-variant font-label-sm uppercase">Jawa Timur, Ponorogo</span>
                      </div>
                      <h3 className="text-primary font-headline-md text-headline-md">
                        SMKN 1 Jenangan Ponorogo
                      </h3>
                      <p className="text-secondary font-headline-sm text-headline-sm">
                        Jurusan Rekayasa Perangkat Lunak (RPL) — Kelas XII RPL A
                      </p>
                      <p className="text-on-surface-variant font-body-md text-body-md mt-1 leading-relaxed">
                        Mempelajari fondasi dan praktik rekayasa perangkat lunak mencakup logika pemrogramam (C++, C#), pengembangan aplikasi web (HTML, CSS, PHP, CodeIgniter, Laravel), pengelolaan basis data MySQL, konsep Pemrograman Berorientasi Objek (OOP), serta alur kerja kolaboratif proyek teknologi.
                      </p>
                    </div>
                  </div>

                  {/* Item 2 - Sekolah Menengah Pertama */}
                  <div className="relative">
  
                    <div className="rounded-xl bg-surface-container/60 border border-white/10 p-space-md lg:p-space-lg flex flex-col gap-2">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="px-3 py-1 rounded-full bg-surface-container-high text-on-surface-variant font-label-md text-xs">
                          Pendidikan Menengah Pertama
                        </span>
                        <span className="text-xs text-on-surface-variant font-label-sm uppercase">Jawa Timur, Ponorogo</span>
                      </div>
                      <h3 className="text-primary font-headline-md text-headline-md">
                        SMP TERPADU PONOROGO
                      </h3>
                      <p className="text-on-surface-variant font-body-md text-body-md mt-1">
                        Menyelesaikan pendidikan dasar tingkat pertama dengan ketertarikan tinggi pada ilmu Computer, Desain, dan awal pengenalan teknologi komputer.
                      </p>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="rounded-xl bg-surface-container/60 border border-white/10 p-space-md lg:p-space-lg flex flex-col gap-2">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="px-3 py-1 rounded-full bg-surface-container-high text-on-surface-variant font-label-md text-xs">
                          Sekolah dasar
                        </span>
                        <span className="text-xs text-on-surface-variant font-label-sm uppercase">Jawa Timur, Ponorogo</span>
                      </div>
                      <h3 className="text-primary font-headline-md text-headline-md">
                        MI MIFTAHUSSALAM
                      </h3>
                      <p className="text-on-surface-variant font-body-md text-body-md mt-1">
                        Menyelesaikan pendidikan dasar dengan bekal pengenalan awal teknologi komputer dan motivasi kuat untuk mendalami bidang IT sejak dini.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 6. PENGALAMAN */}
            <section
              id="experience"
              className="relative w-full scroll-reveal"
            >
              <div className="rounded-2xl bg-surface-container-low/60 backdrop-blur-2xl border border-white/10 p-space-lg lg:p-space-2xl shadow-[0_20px_48px_-12px_rgba(0,0,0,0.5),inset_0_1px_1px_0_rgba(255,255,255,0.18)] flex flex-col gap-space-lg">
                <div className="flex flex-col gap-space-2xs">
                  <span className="text-primary-container font-label-sm text-label-sm tracking-widest uppercase">
                    Work & Internship Experience
                  </span>
                  <h2 className="text-primary font-headline-lg text-headline-lg tracking-tight">
                    Pengalaman
                  </h2>
                </div>

                <div className="grid grid-cols-1 gap-space-lg">
                  {/* PKL Card */}
                  <div className="rounded-xl bg-surface-container/60 border border-white/10 p-space-lg flex flex-col gap-space-md hover:border-primary-container/30 transition-colors">
                    <div className="flex flex-wrap items-start justify-between gap-md border-b border-white/10 pb-space-sm">
                      <div className="flex flex-col">
                        <span className="text-xs text-primary-container font-label-sm uppercase tracking-wider">Praktik Kerja Lapangan (PKL) / Magang</span>
                        <h3 className="text-primary font-headline-md text-headline-md mt-1">
                          Web Developer Intern — Amins Project
                        </h3>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-primary-container/15 text-primary-container font-label-md text-xs font-semibold">
                        Amins Project
                      </span>
                    </div>

                    <p className="text-on-surface-variant font-body-lg text-body-lg">
                      Berpartisipasi aktif dalam tim pengembangan perangkat lunak di Amins Project, berkontribusi langsung pada proyek-proyek aplikasi web nyata.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-space-sm pt-2">
                      <div className="flex items-start gap-3 p-3 rounded-lg bg-surface-container-high/40 border border-white/5">
                        <span className="material-symbols-outlined text-primary-container shrink-0 mt-0.5">web</span>
                        <div className="flex flex-col">
                          <strong className="text-slate-100 text-sm font-medium">Pengembangan Website & Fitur</strong>
                          <span className="text-body-sm text-on-surface-variant">Mengembangkan modul antarmuka baru dan perbaikan fitur (feature enhancement) pada aplikasi web.</span>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 p-3 rounded-lg bg-surface-container-high/40 border border-white/5">
                        <span className="material-symbols-outlined text-primary-container shrink-0 mt-0.5">database</span>
                        <div className="flex flex-col">
                          <strong className="text-slate-100 text-sm font-medium">Database & Backend Development</strong>
                          <span className="text-body-sm text-on-surface-variant">Merancang tabel basis data, optimasi SQL query, dan alur logika backend CodeIgniter/PHP.</span>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 p-3 rounded-lg bg-surface-container-high/40 border border-white/5">
                        <span className="material-symbols-outlined text-primary-container shrink-0 mt-0.5">bug_report</span>
                        <div className="flex flex-col">
                          <strong className="text-slate-100 text-sm font-medium">Testing & Debugging</strong>
                          <span className="text-body-sm text-on-surface-variant">Melakukan pengujian fungsionalitas aplikasi, melacak bug, serta memastikan sistem berjalan stabil.</span>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 p-3 rounded-lg bg-surface-container-high/40 border border-white/5">
                        <span className="material-symbols-outlined text-primary-container shrink-0 mt-0.5">psychology</span>
                        <div className="flex flex-col">
                          <strong className="text-slate-100 text-sm font-medium">AI-Assisted Development</strong>
                          <span className="text-body-sm text-on-surface-variant">Memanfaatkan AI coding assistant untuk mempercepat pembuatan kode, refactoring, dan analisis logika.</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Independent & School Project Card */}
                  <div className="rounded-xl bg-surface-container/60 border border-white/10 p-space-lg flex flex-col gap-space-md">
                    <div className="flex flex-wrap items-start justify-between gap-md border-b border-white/10 pb-space-sm">
                      <div className="flex flex-col">
                        <span className="text-xs text-secondary font-label-sm uppercase tracking-wider">Pengembangan Proyek Mandiri & Sekolah</span>
                        <h3 className="text-primary font-headline-md text-headline-md mt-1">
                          Full-Stack Application Development
                        </h3>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-secondary/15 text-secondary font-label-md text-xs font-semibold">
                        SMKN 1 Jenangan
                      </span>
                    </div>

                    <p className="text-on-surface-variant font-body-md text-body-md leading-relaxed">
                      Merancang dan mengimplementasikan aplikasi web kompleks dari nol, seperti RESTCOM (SaaS Restoran & POS) dan AIMpro Care (QC & Garansi Hardware Digital), mencakup arsitektur database, antarmuka responsif, integrasi QR Code, serta deployment.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 7. KEAHLIAN */}
            <section id="skills" className="relative w-full scroll-reveal">
              <div className="rounded-2xl bg-surface-container-low/60 backdrop-blur-2xl p-space-lg lg:p-space-xl border border-white/10 shadow-[0_20px_48px_-12px_rgba(0,0,0,0.5),inset_0_1px_1px_0_rgba(255,255,255,0.18)] flex flex-col gap-space-lg">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
                  <div>
                    <span className="text-primary-container font-label-sm text-label-sm tracking-widest uppercase">
                      Competencies • Engineering Stack
                    </span>
                    <h2 className="text-primary font-headline-lg text-headline-lg mt-space-2xs tracking-tight">
                      Keahlian & Disiplin Rekayasa
                    </h2>
                  </div>
                  <div className="flex flex-col gap-space-2xs max-w-md">
                    <p className="text-on-surface-variant font-body-sm text-body-sm">
                      Dikelompokkan secara rapi berdasarkan domain kompetensi teknis yang ditekuni selama sekolah dan praktik industri.
                    </p>
                  </div>
                </div>

                {/* Marquee Infinite Moving Cards */}
                <InfiniteMovingCards items={SKILLS} direction="left" speed="slow" />

                {/* Categorized Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-md pt-space-xs">
                  <div className="p-space-md rounded-xl bg-surface-container/60 border border-white/10 flex flex-col gap-2">
                    <span className="text-primary-container font-headline-sm text-headline-sm flex items-center gap-2">
                      <span className="material-symbols-outlined">code</span>
                      Programming
                    </span>
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {["PHP", "C#", "C++", "JavaScript", "TypeScript"].map((s) => (
                        <span key={s} className="px-2.5 py-1 rounded-full bg-surface-container-high/60 text-xs text-on-surface-variant border border-white/5">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-space-md rounded-xl bg-surface-container/60 border border-white/10 flex flex-col gap-2">
                    <span className="text-secondary font-headline-sm text-headline-sm flex items-center gap-2">
                      <span className="material-symbols-outlined">web</span>
                      Web Development
                    </span>
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {["HTML5", "CSS3", "Tailwind CSS", "Bootstrap 5", "Responsive Design"].map((s) => (
                        <span key={s} className="px-2.5 py-1 rounded-full bg-surface-container-high/60 text-xs text-on-surface-variant border border-white/5">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-space-md rounded-xl bg-surface-container/60 border border-white/10 flex flex-col gap-2">
                    <span className="text-tertiary-fixed-dim font-headline-sm text-headline-sm flex items-center gap-2">
                      <span className="material-symbols-outlined">database</span>
                      Database
                    </span>
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {["MySQL", "Relational Database", "SQL Queries", "Database Design"].map((s) => (
                        <span key={s} className="px-2.5 py-1 rounded-full bg-surface-container-high/60 text-xs text-on-surface-variant border border-white/5">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-space-md rounded-xl bg-surface-container/60 border border-white/10 flex flex-col gap-2">
                    <span className="text-primary-container font-headline-sm text-headline-sm flex items-center gap-2">
                      <span className="material-symbols-outlined">layers</span>
                      Framework
                    </span>
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {["CodeIgniter 4", "Laravel", "Next.js", "React", ".NET Core"].map((s) => (
                        <span key={s} className="px-2.5 py-1 rounded-full bg-surface-container-high/60 text-xs text-on-surface-variant border border-white/5">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-space-md rounded-xl bg-surface-container/60 border border-white/10 flex flex-col gap-2">
                    <span className="text-secondary font-headline-sm text-headline-sm flex items-center gap-2">
                      <span className="material-symbols-outlined">psychology</span>
                      AI & AI Development
                    </span>
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {["Claude Code", "GitHub Copilot", "Prompt Engineering", "AI Coding Tools"].map((s) => (
                        <span key={s} className="px-2.5 py-1 rounded-full bg-surface-container-high/60 text-xs text-on-surface-variant border border-white/5">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-space-md rounded-xl bg-surface-container/60 border border-white/10 flex flex-col gap-2">
                    <span className="text-tertiary-fixed-dim font-headline-sm text-headline-sm flex items-center gap-2">
                      <span className="material-symbols-outlined">build</span>
                      Tools
                    </span>
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {["Git & GitHub", "VS Code", "Postman", "Figma", "Windows / Linux CLI"].map((s) => (
                        <span key={s} className="px-2.5 py-1 rounded-full bg-surface-container-high/60 text-xs text-on-surface-variant border border-white/5">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 8. KARYA / PORTFOLIO */}
            <section
              id="projects"
              className="relative w-full flex flex-col gap-space-xl scroll-reveal"
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
                  Proyek Utama & Sistem Unggulan
                </span>
              </div>

              <Carousel slides={PROJECTS} />
            </section>

            {/* 9. SERTIFIKAT / PRESTASI (EXACTLY 2 ITEMS) */}
            <section
              id="certificates"
              className="relative w-full scroll-reveal"
            >
              <div className="rounded-2xl bg-surface-container-low/60 backdrop-blur-2xl border border-white/10 p-space-lg lg:p-space-2xl shadow-[0_20px_48px_-12px_rgba(0,0,0,0.5),inset_0_1px_1px_0_rgba(255,255,255,0.18)] flex flex-col gap-space-lg">
                <div className="flex flex-col gap-space-2xs">
                  <span className="text-primary-container font-label-sm text-label-sm tracking-widest uppercase">
                    Certifications & Achievements
                  </span>
                  <h2 className="text-primary font-headline-lg text-headline-lg tracking-tight">
                    Sertifikat & Prestasi
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                  {/* Item 1: Sertifikat PKL / Magang */}
                  <div className="rounded-xl bg-surface-container/60 border border-white/10 p-space-lg flex flex-col justify-between gap-space-md hover:border-primary-container/30 transition-colors">
                    <div className="flex flex-col gap-3">
                      <div className="flex items-center justify-between">
                        <div className="w-10 h-10 rounded-lg bg-primary-container/10 flex items-center justify-center text-primary-container">
                          <span className="material-symbols-outlined">workspace_premium</span>
                        </div>
                        <span className="px-3 py-1 rounded-full bg-primary-container/15 text-primary-container text-xs font-label-md font-semibold">
                          Praktik Kerja Lapangan
                        </span>
                      </div>
                      <div>
                        <h3 className="text-primary font-headline-sm text-headline-sm">
                          Sertifikat PKL / Magang
                        </h3>
                        <span className="text-xs text-on-surface-variant font-label-sm uppercase tracking-wider block mt-0.5">
                          Amins Project
                        </span>
                      </div>
                      <p className="text-body-sm text-on-surface-variant leading-relaxed">
                        Penyelesaian kegiatan Praktik Kerja Lapangan (PKL) dalam pengembangan perangkat lunak dan aplikasi web.
                      </p>
                    </div>
                    <div className="text-xs text-slate-400 border-t border-white/10 pt-3 flex items-center justify-between">
                      <span>Penerbit: Amins Project</span>
                      <span className="text-primary-container font-medium">[ Dokumentasi PKL ]</span>
                    </div>
                  </div>

                  {/* Item 2: Event Google */}
                  <div className="rounded-xl bg-surface-container/60 border border-white/10 p-space-lg flex flex-col justify-between gap-space-md hover:border-primary-container/30 transition-colors">
                    <div className="flex flex-col gap-3">
                      <div className="flex items-center justify-between">
                        <div className="w-10 h-10 rounded-lg bg-secondary/15 flex items-center justify-center text-secondary">
                          <span className="material-symbols-outlined">event</span>
                        </div>
                        <span className="px-3 py-1 rounded-full bg-secondary/15 text-secondary text-xs font-label-md font-semibold">
                          Event / Program
                        </span>
                      </div>
                      <div>
                        <h3 className="text-primary font-headline-sm text-headline-sm">
                          Google Event 
                        </h3>
                        <span className="text-xs text-on-surface-variant font-label-sm uppercase tracking-wider block mt-0.5">
                          #JuaraVibeCoding Certificate of Completion
                        </span>
                      </div>
                      <p className="text-body-sm text-on-surface-variant leading-relaxed">
                        Partisipasi dan keikutsertaan dalam kegiatan workshop secara daring yang diselenggarakan oleh Google developer group.
                      </p>
                    </div>
                    <div className="text-xs text-slate-400 border-t border-white/10 pt-3 flex items-center justify-between">
                      <span>Penerbit: Google</span>
                      <span className="text-secondary font-medium">[ Detail Event ]</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 10. KEGIATAN (EXACTLY 2 ITEMS) */}
            <section
              id="activities"
              className="relative w-full scroll-reveal"
            >
              <div className="rounded-2xl bg-surface-container-low/60 backdrop-blur-2xl border border-white/10 p-space-lg lg:p-space-2xl shadow-[0_20px_48px_-12px_rgba(0,0,0,0.5),inset_0_1px_1px_0_rgba(255,255,255,0.18)] flex flex-col gap-space-lg">
                <div className="flex flex-col gap-space-2xs">
                  <span className="text-primary-container font-label-sm text-label-sm tracking-widest uppercase">
                    Documentations & Field Activities
                  </span>
                  <h2 className="text-primary font-headline-lg text-headline-lg tracking-tight">
                    Kegiatan
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                  {/* Item 1: Kegiatan PKL / Magang */}
                  <div className="p-space-lg rounded-xl bg-surface-container/60 border border-white/10 flex flex-col gap-3 hover:border-primary-container/30 transition-colors">
                    <div className="flex items-center gap-3 border-b border-white/10 pb-3">
                      <div className="w-10 h-10 rounded-lg bg-primary-container/10 flex items-center justify-center text-primary-container shrink-0">
                        <span className="material-symbols-outlined">work</span>
                      </div>
                      <div>
                        <span className="px-2.5 py-0.5 rounded-full bg-primary-container/15 text-primary-container text-[10px] font-label-sm font-semibold">
                          Praktik Kerja Industri
                        </span>
                        <h3 className="text-primary font-headline-sm text-headline-sm mt-0.5">Kegiatan PKL / Magang</h3>
                      </div>
                    </div>
                    <p className="text-body-sm text-on-surface-variant leading-relaxed">
                      Pengalaman langsung dalam lingkungan kerja profesional mencakup pengembangan modul web, perbaikan fitur, pengelolaan basis data, serta kolaborasi tim pengembang di Amins Project.
                    </p>
                  </div>

                  {/* Item 2: Kegiatan Lab RPL */}
                  <div className="p-space-lg rounded-xl bg-surface-container/60 border border-white/10 flex flex-col gap-3 hover:border-primary-container/30 transition-colors">
                    <div className="flex items-center gap-3 border-b border-white/10 pb-3">
                      <div className="w-10 h-10 rounded-lg bg-secondary/15 flex items-center justify-center text-secondary shrink-0">
                        <span className="material-symbols-outlined">computer</span>
                      </div>
                      <div>
                        <span className="px-2.5 py-0.5 rounded-full bg-secondary/15 text-secondary text-[10px] font-label-sm font-semibold">
                          Praktik Sekolah
                        </span>
                        <h3 className="text-primary font-headline-sm text-headline-sm mt-0.5">Kegiatan Lab RPL</h3>
                      </div>
                    </div>
                    <p className="text-body-sm text-on-surface-variant leading-relaxed">
                      Praktik pemrograman rutin di laboratorium komputer sekolah, pengerjaan tugas akhir jurusan RPL, eksperimen framework web, dan persiapan Uji Kompetensi Keahlian (UKK).
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 11. ARTIKEL / BLOG */}
            <section
              id="blog"
              className="relative w-full scroll-reveal"
            >
              <div className="rounded-2xl bg-surface-container-low/60 backdrop-blur-2xl border border-white/10 p-space-lg lg:p-space-2xl shadow-[0_20px_48px_-12px_rgba(0,0,0,0.5),inset_0_1px_1px_0_rgba(255,255,255,0.18)] flex flex-col gap-space-lg">
                <div className="flex flex-col gap-space-2xs">
                  <span className="text-primary-container font-label-sm text-label-sm tracking-widest uppercase">
                    Articles & Insights
                  </span>
                  <h2 className="text-primary font-headline-lg text-headline-lg tracking-tight">
                    Artikel / Blog
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
                  {/* Article Card 1 */}
                  <div className="rounded-xl bg-surface-container/60 border border-white/10 p-space-md flex flex-col justify-between gap-space-md hover:border-primary-container/30 transition-colors">
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center justify-between">
                        <span className="px-2.5 py-0.5 rounded-full bg-primary-container/15 text-primary-container text-[10px] font-label-sm font-semibold">
                          Web Development
                        </span>
                        <span className="text-[10px] text-on-surface-variant font-label-sm">Draft</span>
                      </div>
                      <h3 className="text-primary font-headline-sm text-headline-sm mt-1">
                        Penerapan CodeIgniter 4 dan MySQL pada Sistem SaaS Restoran
                      </h3>
                      <p className="text-body-sm text-on-surface-variant">
                        Ulasan arsitektur database, sistem POS, dan manajemen pesanan QR yang efisien pada proyek RESTCOM.
                      </p>
                    </div>
                    <span className="text-xs text-slate-400 border-t border-white/10 pt-2">
                      Catatan Pembelajaran & Architecture
                    </span>
                  </div>

                  {/* Article Card 2 */}
                  <div className="rounded-xl bg-surface-container/60 border border-white/10 p-space-md flex flex-col justify-between gap-space-md hover:border-primary-container/30 transition-colors">
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center justify-between">
                        <span className="px-2.5 py-0.5 rounded-full bg-secondary/15 text-secondary text-[10px] font-label-sm font-semibold">
                          AI & Coding
                        </span>
                        <span className="text-[10px] text-on-surface-variant font-label-sm">Draft</span>
                      </div>
                      <h3 className="text-primary font-headline-sm text-headline-sm mt-1">
                        Efisiensi Coding Menggunakan AI Assistant bagi Siswa SMK RPL
                      </h3>
                      <p className="text-body-sm text-on-surface-variant">
                        Bagaimana memanfaatkan AI coding assistant secara bijak untuk mempercepat pemecahan bug dan eksplorasi logika.
                      </p>
                    </div>
                    <span className="text-xs text-slate-400 border-t border-white/10 pt-2">
                      Pengalaman & Tips Teknologi
                    </span>
                  </div>

                  {/* Article Card 3 */}
                  <div className="rounded-xl bg-surface-container/60 border border-white/10 p-space-md flex flex-col justify-between gap-space-md hover:border-primary-container/30 transition-colors">
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center justify-between">
                        <span className="px-2.5 py-0.5 rounded-full bg-tertiary-container/20 text-tertiary-fixed-dim text-[10px] font-label-sm font-semibold">
                          Pengalaman PKL
                        </span>
                        <span className="text-[10px] text-on-surface-variant font-label-sm">Draft</span>
                      </div>
                      <h3 className="text-primary font-headline-sm text-headline-sm mt-1">
                        Pengalaman PKL di Amins Project: Dari Teori Sekolah ke Industri
                      </h3>
                      <p className="text-body-sm text-on-surface-variant">
                        Catatan refleksi tantangan nyata saat menangani bug, optimasi query basis data, dan kolaborasi tim.
                      </p>
                    </div>
                    <span className="text-xs text-slate-400 border-t border-white/10 pt-2">
                      Jurnal Industri & Magang
                    </span>
                  </div>
                </div>
              </div>
            </section>

            {/* 12. KONTAK */}
            <section
              id="contact"
              className="relative w-full scroll-reveal"
            >
              <div className="rounded-2xl bg-surface-container-low/60 backdrop-blur-2xl border border-white/10 p-space-lg lg:p-space-2xl shadow-[0_24px_56px_-16px_rgba(0,0,0,0.55),inset_0_1px_1px_0_rgba(255,255,255,0.18)] flex flex-col items-center text-center gap-space-md">
                <span className="text-primary-container font-label-sm text-label-sm tracking-widest uppercase">
                  Get In Touch • Contact Details
                </span>
                <h2 className="text-primary font-headline-lg text-headline-lg tracking-tight">
                  Hubungi Saya
                </h2>
                <p className="text-slate-100 font-body-md text-body-md max-w-xl">
                  Terbuka untuk kesempatan magang, proyek kolaboratif, maupun diskusi seputar pengembangan web dan teknologi.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md w-full pt-space-xs text-left">
                  {/* Email */}
                  <a
                    href="mailto:davinloise.work@gmail.com"
                    className="p-space-md rounded-xl bg-surface-container-high/40 hover:bg-surface-container-high/70 border border-white/10 flex flex-col gap-2 transition-all hover:border-primary-container/40"
                  >
                    <div className="w-9 h-9 rounded-lg bg-primary-container/10 flex items-center justify-center text-primary-container">
                      <span className="material-symbols-outlined">mail</span>
                    </div>
                    <span className="text-[10px] text-on-surface-variant uppercase font-label-sm tracking-wider">Email</span>
                    <strong className="text-primary text-sm font-medium truncate">davinloise.work@gmail.com</strong>
                    <span className="text-xs text-slate-400">Kirim email langsung</span>
                  </a>

                  {/* WhatsApp */}
                  <a
                    href="https://wa.me/6281234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-space-md rounded-xl bg-surface-container-high/40 hover:bg-surface-container-high/70 border border-white/10 flex flex-col gap-2 transition-all hover:border-primary-container/40"
                  >
                    <div className="w-9 h-9 rounded-lg bg-secondary/15 flex items-center justify-center text-secondary">
                      <span className="material-symbols-outlined">chat</span>
                    </div>
                    <span className="text-[10px] text-on-surface-variant uppercase font-label-sm tracking-wider">WhatsApp</span>
                    <strong className="text-primary text-sm font-medium">+62 812-3456-7890</strong>
                    <span className="text-xs text-slate-400">Chat via WhatsApp</span>
                  </a>

                  {/* GitHub */}
                  <a
                    href="https://github.com/xydenMc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-space-md rounded-xl bg-surface-container-high/40 hover:bg-surface-container-high/70 border border-white/10 flex flex-col gap-2 transition-all hover:border-primary-container/40"
                  >
                    <div className="w-9 h-9 rounded-lg bg-tertiary-container/20 flex items-center justify-center text-tertiary-fixed-dim">
                      <span className="material-symbols-outlined">code</span>
                    </div>
                    <span className="text-[10px] text-on-surface-variant uppercase font-label-sm tracking-wider">GitHub</span>
                    <strong className="text-primary text-sm font-medium">github.com/xydenMc</strong>
                    <span className="text-xs text-slate-400">Lihat repositori kode</span>
                  </a>

                  {/* Instansi */}
                  <div className="p-space-md rounded-xl bg-surface-container-high/40 border border-white/10 flex flex-col gap-2">
                    <div className="w-9 h-9 rounded-lg bg-primary-container/10 flex items-center justify-center text-primary-container">
                      <span className="material-symbols-outlined">location_on</span>
                    </div>
                    <span className="text-[10px] text-on-surface-variant uppercase font-label-sm tracking-wider">Alamat</span>
                    <strong className="text-primary text-sm font-medium">Ponorogo</strong>
                    <span className="text-xs text-slate-400">Indonesia, Jawa Timur</span>
                  </div>
                </div>
              </div>
            </section>

          </div>
        </main>
      </BackgroundBeamsWithCollision>

      {/* 13. FOOTER */}
      <footer className="w-full mt-space-3xl relative z-10 scroll-reveal">
        <div className="max-w-container-max mx-auto px-gutter-mobile lg:px-gutter-desktop pb-space-xl">
          <div className="rounded-xl bg-surface-container-lowest/60 border border-white/10 backdrop-blur-xl px-space-xl py-space-lg shadow-[0_16px_32px_-8px_rgba(0,0,0,0.45)] flex flex-col md:flex-row items-center justify-between gap-space-md">
            <div className="flex flex-col items-center md:items-start gap-1">
              <span className="font-headline-sm text-primary text-sm font-semibold">
                Davin Loise Steven Alinsky Herlambang
              </span>
              <span className="font-label-md text-xs text-on-surface-variant">
                © {currentYear} Davin Loise S.A.H. All rights reserved
              </span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-space-md">
              <a className="font-label-md text-xs text-on-surface-variant hover:text-primary transition-colors" href="#home">
                Home
              </a>
              <a className="font-label-md text-xs text-on-surface-variant hover:text-primary transition-colors" href="#about">
                About
              </a>
              <a className="font-label-md text-xs text-on-surface-variant hover:text-primary transition-colors" href="#skills">
                Skills
              </a>
              <a className="font-label-md text-xs text-on-surface-variant hover:text-primary transition-colors" href="#projects">
                Projects
              </a>
              <a className="font-label-md text-xs text-on-surface-variant hover:text-primary transition-colors" href="#contact">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
