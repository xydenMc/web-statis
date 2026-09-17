"use client";

import React, { useEffect, useState } from "react";
import { BackgroundBeamsWithCollision } from "@/components/background-beams-with-collision";
import { FloatingNav, type NavItem } from "@/components/floating-navbar";
import { InfiniteMovingCards, type InfiniteCard } from "@/components/infinite-moving-cards";
import { Carousel, type CarouselSlide } from "@/components/carousel";

// 1. HEADER / NAVBAR items
const NAV_ITEMS: NavItem[] = [
  { name: "Beranda", link: "#home", icon: "home" },
  { name: "Tentang", link: "#about", icon: "person" },
  { name: "Profile", link: "#profile", icon: "badge" },
  { name: "Pendidikan", link: "#education", icon: "school" },
  { name: "Pengalaman", link: "#experience", icon: "work" },
  { name: "Keahlian", link: "#skills", icon: "code" },
  { name: "Portfolio", link: "#projects", icon: "dashboard" },
  { name: "Sertifikat", link: "#certificates", icon: "workspace_premium" },
  { name: "Kegiatan", link: "#activities", icon: "event" },
  { name: "Blog", link: "#blog", icon: "article" },
  { name: "Kontak", link: "#contact", icon: "mail" },
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
  {
    badge: "03 / Full-Stack & UI System",
    tags: ["CodeIgniter 4", "Liquid Glass", "Tailwind CSS"],
    title: "Griya Pot Bunga",
    description:
      "All-in-one katalog produk untuk menampilkan koleksi pot bunga dan gerabah, mencakup etalase produk, filter kategori, detail material, kustom ukuran & warna, serta informasi pengrajin lokal dalam satu platform terintegrasi..",
    impact:
      "Menyederhanakan proses penelusuran katalog dari pencarian manual menjadi eksplorasi visual yang cepat, membantu pelanggan memilih produk sesuai kebutuhan taman sekaligus memperluas jangkauan pasar pengrajin lokal.",
    icon: "verified_user",
    iconTone: "primary",
    tech: ["CodeIgniter 4", "Bootstrap 5", "Tailwind CSS", "MySQL", "JavaScript"],
    image: "/project_3.png",
    role: "Full-Stack Developer & UI Designer",
    demoUrl: "https://web-dinamis-production.up.railway.app",
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
      {/* 1. FIXED GLASS NAVBAR */}
      <FloatingNav navItems={NAV_ITEMS} />

      {/* Decorative atmospheric background orbs - Griya Pot Bunga color palette */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[38rem] h-[38rem] rounded-full bg-primary/15 blur-[130px] opacity-40" />
        <div className="absolute top-1/3 -right-40 w-[42rem] h-[42rem] rounded-full bg-secondary/20 blur-[150px] opacity-35" />
        <div className="absolute -bottom-32 left-1/3 w-[36rem] h-[36rem] rounded-full bg-tertiary/15 blur-[140px] opacity-30" />
      </div>

      <BackgroundBeamsWithCollision className="min-h-screen">
        <main className="w-full pt-16 md:pt-20 max-w-[1360px] mx-auto px-[1.25rem] lg:px-[3rem] relative z-10">
          <div className="flex flex-col w-full pb-[4.5rem] gap-[2rem] relative">

            {/* 2. HERO SECTION */}
            <section
              id="home"
              className="relative w-full pt-[0.5rem] md:pt-[1rem] scroll-reveal revealed"
            >
              <div className="relative overflow-hidden rounded-[1.75rem] bg-surfaceContainerLow/70 backdrop-blur-2xl shadow-[0_20px_48px_-12px_rgba(28,28,25,0.5),inset_0_1px_1px_0_rgba(255,255,255,0.18)] border border-border p-[1.5rem] lg:p-[2rem]">
                {/* Background Glows (Style Baru) */}
                <div className="absolute -top-32 -right-24 w-[18rem] h-[18rem] rounded-full bg-primary/20 blur-[120px] pointer-events-none" />
                <div className="absolute -bottom-24 -left-12 w-[16rem] h-[16rem] rounded-full bg-secondary/25 blur-[130px] pointer-events-none" />

                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-[2rem] lg:gap-[2rem] items-center">

                  {/* KIRI: Profile 3D Card (Layout Lama - Struktur Card) */}
                  <div className="lg:col-span-5 flex justify-center lg:justify-start">
                    <div className="rounded-3xl bg-[rgba(255,255,255,0.6)] backdrop-blur-28 border border-[rgba(255,255,255,0.8)] shadow-[0_8px_32px_-8px_rgba(28,28,25,0.25)] p-6">
                      {/* Card Wrapper */}
                      <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-2xl overflow-hidden shadow-[0_24px_48px_-10px_rgba(28,28,25,0.7),inset_0_1px_2px_rgba(255,255,255,0.4)] bg-surfaceContainerHigh/50 backdrop-blur-2xl border border-border transition-transform duration-100 ease-out will-change-transform">
                        <img
                          src="/foto_profile.jpeg"
                          alt="Foto Profil Davin Loise Steven Alinsky Herlambang"
                          className="w-full h-full object-cover object-center"
                        />
                        {/* Glare effect overlay */}
                        <div
                          className="absolute inset-0 pointer-events-none opacity-40 mix-blend-overlay transition-opacity duration-300"
                          style={{
                            background:
                              "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.08) 50%, transparent 80%)",
                          }}
                        />
                        {/* Gradient overlay for depth */}
                        <div className="absolute inset-0 bg-gradient-to-b from-white/15 via-transparent to-surfaceContainerLowest/70 pointer-events-none" />
                        {/* Info bar at bottom (Style Baru) */}
                        <div className="absolute bottom-[1.25rem] left-[1.25rem] right-[1.25rem] bg-surfaceContainerLowest/80 backdrop-blur-xl border border-border rounded-xl px-[1rem] py-[0.5rem] flex items-center justify-between shadow-[0_4px_16px_rgba(28,28,25,0.3)]">
                          <span className="flex items-center gap-[0.5rem] text-primary font-label-md text-xs font-semibold">
                            <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_rgba(159,60,22,0.5)] animate-pulse" />
                            Davin Loise S.A.H
                          </span>
                          <span className="text-onSurfaceVariant font-label-sm text-xs tracking-wide uppercase">
                            XII RPL A
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* KANAN: Konten & Statistik (Layout Lama - Struktur) + Style Baru (Warna & Tipografi) */}
                  <div className="lg:col-span-7 flex flex-col gap-[1rem]">

                    {/* Header Badge & Nama (Badge Layout Lama, Style Warna Baru) */}
                    <div className="flex flex-col gap-[0.5rem]">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-container/10 border border-primary-container/30 text-primary-container w-fit mb-1">
                        <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse" />
                        <span className="text-xs font-label-md uppercase tracking-wider">
                          Siswa SMK / Web Developer
                        </span>
                      </div>
                      {/* Nama dengan Font Serif (Style Baru) */}
                      <h1 className="text-[2.5rem] sm:text-[3rem] md:text-[4rem] lg:text-[5rem] xl:text-[6rem] font-editorial-heading-bold text-onSurface leading-tight tracking-tight">
                        Davin Loise S.A.H
                      </h1>
                      {/* Sub-judul dengan Aksen Warna (Style Baru) */}
                      <p className="text-base sm:text-lg text-onSurfaceVariant max-w-[32rem] leading-relaxed">
                        Pelajar XII RPL A — SMKN 1 Jenangan Ponorogo, <span className="text-secondary font-medium">&</span> siap berkontribusi di industri teknologi.
                      </p>
                    </div>

                    {/* Deskripsi (Style Baru) */}
                    <p className="text-base sm:text-lg text-onSurfaceVariant max-w-[32rem] leading-relaxed">
                      Membangun perangkat lunak & solusi web modern dengan presisi visual, antarmuka responsif, dan logika backend yang terstruktur. Berfokus pada pengembangan aplikasi web, UI/UX, serta pemrograman berbasis teknologi terkini.
                    </p>

                    {/* Info Strip (Layout Grid Lama, Style Kartu Baru) */}
                    <div className="rounded-xl bg-surfaceContainerLowest/50 backdrop-blur-xl border border-border p-3 md:p-4 shadow-[0_4px_16px_rgba(28,28,25,0.2)]">
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 divide-y sm:divide-y-0 sm:divide-x divide-border">
                        <div className="flex flex-col gap-0.5 sm:pr-3">
                          <span className="text-[10px] text-onSurfaceVariant/70 font-label tracking-widest uppercase font-medium">Instansi</span>
                          <span className="text-sm font-semibold text-onSurface tracking-tight">SMKN 1 Jenangan</span>
                        </div>
                        <div className="flex flex-col gap-0.5 pt-2 sm:pt-0 sm:px-3">
                          <span className="text-[10px] text-onSurfaceVariant/70 font-label tracking-widest uppercase font-medium">Jurusan</span>
                          <span className="text-sm font-semibold text-secondary tracking-tight">Rekayasa Perangkat Lunak</span>
                        </div>
                        <div className="flex flex-col gap-0.5 pt-2 sm:pt-0 sm:pl-3">
                          <span className="text-[10px] text-onSurfaceVariant/70 font-label tracking-widest uppercase font-medium">Project</span>
                          <span className="text-sm font-semibold text-primary tracking-tight">2+ Project</span>
                        </div>
                      </div>
                    </div>



                    {/* Tombol CTA (Layout Grid 3 Kolom Layout Lama, Style Warna Baru) */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-[0.5rem]">
                      {/* Tombol 1: Lihat Portfolio */}
                      <a
                        href="#projects"
                        className="inline-flex items-center justify-center gap-2.5 h-[52px] px-6 rounded-xl bg-primary text-white font-semibold text-sm md:text-base shadow-[0_8px_20px_-8px_rgba(159,60,22,0.55)] hover:bg-primaryContainer hover:shadow-[0_12px_32px_-12px_rgba(159,60,22,0.6)] hover:-translate-y-0.5 active:scale-[0.98] transition-all focus:outline-none focus:ring-2 focus:ring-primary/50"
                      >
                        <span className="material-symbols-outlined text-xl">arrow_downward</span>
                        <span>Lihat Portfolio</span>
                      </a>

                      {/* Tombol 2: Hubungi Saya */}
                      <a
                        href="#contact"
                        className="inline-flex items-center justify-center gap-2.5 h-[52px] px-6 rounded-xl bg-surfaceContainerLowest/50 backdrop-blur-md border border-border text-onSurface font-semibold text-sm md:text-base shadow-[0_4px_16px_rgba(28,28,25,0.2)] hover:bg-surfaceContainerHigh/50 hover:translate-y-[-2px] transition-all focus:outline-none focus:ring-2 focus:ring-border"
                      >
                        <span className="material-symbols-outlined text-xl">mail</span>
                        <span>Hubungi Saya</span>
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
              <div className="rounded-2xl bg-surfaceContainerLow/70 backdrop-blur-2xl border border-border p-[1.5rem] lg:p-[2rem] shadow-[0_20px_48px_-12px_rgba(28,28,25,0.5),inset_0_1px_1px_0_rgba(255,255,255,0.18)] flex flex-col gap-[1.5rem]">
                <div className="flex flex-col gap-[0.5rem]">
                  <span className="text-primary text-xs uppercase tracking-[0.25em] font-semibold text-onSurfaceVariant">
                    Personal Profile • Passion &amp; Vision
                  </span>
                  <h2 className="text-[2rem] lg:text-[2.5rem] text-onSurface font-medium leading-tight">
                    Tentang Saya
                  </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-[2rem]">
                  <div className="lg:col-span-7 flex flex-col gap-[1rem] text-onSurfaceVariant text-base leading-relaxed">
                    <p>
                      Saya <strong className="text-primary font-semibold">Davin Loise Steven Alinsky Herlambang</strong>, seorang siswa SMK jurusan <strong className="text-primary font-semibold">Rekayasa Perangkat Lunak (RPL)</strong> di <strong className="text-primary font-semibold">SMKN 1 Jenangan Ponorogo</strong>. Memiliki passion mendalam dalam dunia pengembangan perangkat lunak dan pemrograman web.
                    </p>
                    <p>
                      Bidang utama yang saya tekuni meliputi <strong className="text-onSurfaceVariant font-medium">Web Development (Full-Stack)</strong>, <strong className="text-onSurfaceVariant font-medium">UI/UX Interface Design</strong>, serta eksplorasi teknologi terkini seperti <strong className="text-onSurfaceVariant font-medium">AI &amp; AI-Assisted Development</strong>. Saya terbiasa membangun alur aplikasi web yang efisien, mulai dari perancangan basis data hingga antarmuka yang modern dan responsif.
                    </p>
                    <div className="p-[1rem] rounded-xl bg-surfaceContainerHigh/50 border border-border backdrop-blur-md">
                      <h4 className="text-primary text-base mb-1 flex items-center gap-2">
                        <span className="material-symbols-outlined text-secondary">lightbulb</span>
                        Prinsip &amp; Visi Pribadi
                      </h4>
                      <p className="text-base text-onSurfaceVariant font-light italic">
                        &quot;Menciptakan produk digital yang tidak hanya fungsional, tetapi juga memiliki arsitektur yang bersih, estetika yang modern, serta memberikan solusi bernilai tinggi bagi pengguna.&quot;
                      </p>
                    </div>
                  </div>

                  <div className="lg:col-span-5 flex flex-col gap-[0.5rem]">
                    <div className="rounded-xl bg-surfaceContainerLow/60 border border-border p-[1rem] flex flex-col gap-[0.5rem]">
                      <span className="text-primary text-base flex items-center gap-2">
                        <span className="material-symbols-outlined text-secondary">verified</span>
                        Biodata Ringkas
                      </span>
                      <ul className="flex flex-col gap-2 text-sm text-onSurfaceVariant pt-2 border-t border-border">
                        <li className="flex justify-between items-center py-1">
                          <span className="text-onSurfaceVariant/70">Nama Lengkap</span>
                          <span className="text-onSurfaceVariant font-medium text-right">Davin Loise S.A.H</span>
                        </li>
                        <li className="flex justify-between items-center py-1 border-t border-border/5">
                          <span className="text-onSurfaceVariant/70">Status</span>
                          <span className="text-primary font-medium">Siswa SMK (XII RPL A)</span>
                        </li>
                        <li className="flex justify-between items-center py-1 border-t border-border/5">
                          <span className="text-onSurfaceVariant/70">Sekolah</span>
                          <span className="text-onSurfaceVariant font-medium text-right">SMKN 1 Jenangan Ponorogo</span>
                        </li>
                        <li className="flex justify-between items-center py-1 border-t border-border/5">
                          <span className="text-onSurfaceVariant/70">Fokus Utama</span>
                          <span className="text-secondary font-medium">Web Dev &amp; AI Integration</span>
                        </li>
                        <li className="flex justify-between items-center py-1 border-t border-border/5">
                          <span className="text-onSurfaceVariant/70">Lokasi</span>
                          <span className="text-onSurfaceVariant font-medium">Ponorogo, Jawa Timur</span>
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
              <div className="rounded-2xl bg-surfaceContainerLow/70 backdrop-blur-2xl border border-border p-[1.5rem] lg:p-[2rem] shadow-[0_20px_48px_-12px_rgba(28,28,25,0.5),inset_0_1px_1px_0_rgba(255,255,255,0.18)] flex flex-col gap-[1.5rem]">
                <div className="flex flex-col gap-[0.5rem]">
                  <span className="text-primary text-xs uppercase tracking-[0.25em] font-semibold text-onSurfaceVariant">
                    Professional Status • Expertise
                  </span>
                  <h2 className="text-[2rem] lg:text-[2.5rem] text-onSurface font-medium leading-tight">
                    Profil Profesional
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1rem]">
                  <div className="rounded-xl bg-surfaceContainerLow/60 border border-border p-[1rem] flex flex-col gap-[0.5rem] hover:border-primary/30 transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined">badge</span>
                    </div>
                    <span className="text-xs uppercase tracking-wider text-onSurfaceVariant mt-1">Jabatan / Status</span>
                    <h3 className="text-primary text-base font-medium">Siswa SMK / Web Developer</h3>
                    <p className="text-sm text-onSurfaceVariant mt-1">
                      Mengembangkan aplikasi web modern, sistem POS &amp; SaaS, serta antarmuka digital.
                    </p>
                  </div>

                  <div className="rounded-xl bg-surfaceContainerLow/60 border border-border p-[1rem] flex flex-col gap-[0.5rem] hover:border-secondary/30 transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center text-secondary">
                      <span className="material-symbols-outlined">school</span>
                    </div>
                    <span className="text-xs uppercase tracking-wider text-onSurfaceVariant mt-1">Instansi</span>
                    <h3 className="text-primary text-base font-medium">SMKN 1 Jenangan</h3>
                    <p className="text-sm text-onSurfaceVariant mt-1">
                      Sekolah Menengah Kejuruan Negeri 1 Jenangan Ponorogo (Kelas XII RPL A).
                    </p>
                  </div>

                  <div className="rounded-xl bg-surfaceContainerLow/60 border border-border p-[1rem] flex flex-col gap-[0.5rem] hover:border-tertiary/30 transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-tertiary/25 flex items-center justify-center text-tertiary">
                      <span className="material-symbols-outlined">code</span>
                    </div>
                    <span className="text-xs uppercase tracking-wider text-onSurfaceVariant mt-1">Jurusan</span>
                    <h3 className="text-primary text-base font-medium">Rekayasa Perangkat Lunak</h3>
                    <p className="text-sm text-onSurfaceVariant mt-1">
                      Spesialisasi rekayasa software, basis data relasional, OOP, dan web engineering.
                    </p>
                  </div>

                  <div className="rounded-xl bg-surfaceContainerLow/60 border border-border p-[1rem] flex flex-col gap-[0.5rem] hover:border-primary/30 transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined">psychology</span>
                    </div>
                    <span className="text-xs uppercase tracking-wider text-onSurfaceVariant mt-1">Bidang Keahlian</span>
                    <h3 className="text-primary text-base font-medium">Web, UI/UX, Programming, AI</h3>
                    <p className="text-sm text-onSurfaceVariant mt-1">
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
              <div className="rounded-2xl bg-surfaceContainerLow/70 backdrop-blur-2xl border border-border p-[1.5rem] lg:p-[2rem] shadow-[0_20px_48px_-12px_rgba(28,28,25,0.5),inset_0_1px_1px_0_rgba(255,255,255,0.18)] flex flex-col gap-[1.5rem]">
                <div className="flex flex-col gap-[0.5rem]">
                  <span className="text-primary text-xs uppercase tracking-[0.25em] font-semibold text-onSurfaceVariant">
                    Academic Background • Timeline
                  </span>
                  <h2 className="text-[2rem] lg:text-[2.5rem] text-onSurface font-medium leading-tight">
                    Pendidikan
                  </h2>
                </div>

                <div className="relative border-l-2 border-primary/30 pl-6 lg:pl-8 flex flex-col gap-[2rem] my-2">
                  <div className="relative">
                    <div className="rounded-xl bg-surfaceContainerLow/60 border border-border p-[1rem] lg:p-[1.25rem] flex flex-col gap-[0.5rem]">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="px-3 py-1 rounded-full bg-primary/15 text-primary text-xs font-semibold">
                          2022 - Sekarang (Aktif)
                        </span>
                        <span className="text-xs text-onSurfaceVariant uppercase">Jawa Timur, Ponorogo</span>
                      </div>
                      <h3 className="text-primary text-base font-medium">
                        SMKN 1 Jenangan Ponorogo
                      </h3>
                      <p className="text-secondary text-sm">
                        Jurusan Rekayasa Perangkat Lunak (RPL) — Kelas XII RPL A
                      </p>
                      <p className="text-base text-onSurfaceVariant font-light leading-relaxed">
                        Mempelajari fondasi dan praktik rekayasa perangkat lunas mencakup logika pemrograman (C++, C#), pengembangan aplikasi web (HTML, CSS, PHP, CodeIgniter, Laravel), pengelolaan basis data MySQL, konsep Pemrograman Berorientasi Objek (OOP), serta alur kerja kolaboratif proyek teknologi.
                      </p>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="rounded-xl bg-surfaceContainerLow/60 border border-border p-[1rem] lg:p-[1.25rem] flex flex-col gap-[0.5rem]">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="px-3 py-1 rounded-full bg-secondary/15 text-secondary text-xs font-semibold">
                          Pendidikan Menengah Pertama
                        </span>
                        <span className="text-xs text-onSurfaceVariant uppercase">Jawa Timur, Ponorogo</span>
                      </div>
                      <h3 className="text-primary text-base font-medium">
                        SMP TERPADU PONOROGO
                      </h3>
                      <p className="text-base text-onSurfaceVariant font-light">
                        Menyelesaikan pendidikan dasar tingkat pertama dengan ketertarikan tinggi pada ilmu Computer, Desain, dan awal pengenalan teknologi komputer.
                      </p>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="rounded-xl bg-surfaceContainerLow/60 border border-border p-[1rem] lg:p-[1.25rem] flex flex-col gap-[0.5rem]">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="px-3 py-1 rounded-full bg-tertiary/15 text-tertiary text-xs font-semibold">
                          Sekolah Dasar
                        </span>
                        <span className="text-xs text-onSurfaceVariant uppercase">Jawa Timur, Ponorogo</span>
                      </div>
                      <h3 className="text-primary text-base font-medium">
                        MI MIFTAHUSSALAM
                      </h3>
                      <p className="text-base text-onSurfaceVariant font-light">
                        Menyelesaikan pendidikan dasar dengan bekal pengenalan awal teknologi komputer dan motivasi kuat untuk mendalami bidang IT sejak dini.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 6. PENGALAMEN */}
            <section
              id="experience"
              className="relative w-full scroll-reveal"
            >
              <div className="rounded-2xl bg-surfaceContainerLow/70 backdrop-blur-2xl border border-border p-[1.5rem] lg:p-[2rem] shadow-[0_20px_48px_-12px_rgba(28,28,25,0.5),inset_0_1px_1px_0_rgba(255,255,255,0.18)] flex flex-col gap-[1.5rem]">
                <div className="flex flex-col gap-[0.5rem]">
                  <span className="text-primary text-xs uppercase tracking-[0.25em] font-semibold text-onSurfaceVariant">
                    Work &amp; Internship Experience
                  </span>
                  <h2 className="text-[2rem] lg:text-[2.5rem] text-onSurface font-medium leading-tight">
                    Pengalaman
                  </h2>
                </div>

                <div className="grid grid-cols-1 gap-[1.5rem]">
                  <div className="rounded-xl bg-surfaceContainerLow/60 border border-border p-[1.5rem] flex flex-col gap-[1rem] hover:border-primary/30 transition-colors">
                    <div className="flex flex-wrap items-start justify-between gap-4 border-b border-border pb-[1rem]">
                      <div className="flex flex-col">
                        <span className="text-xs text-primary uppercase tracking-wider">Praktik Kerja Lapangan (PKL) / Magang</span>
                        <h3 className="text-primary text-base font-medium mt-0.5">
                          Web Developer Intern — Amins Project
                        </h3>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-primary/15 text-primary text-xs font-semibold">
                        Amins Project
                      </span>
                    </div>

                    <p className="text-base text-onSurfaceVariant leading-relaxed">
                      Berpartisipasi aktif dalam tim pengembangan perangkat lunak di Amins Project, berkontribusi langsung pada proyek-proyek aplikasi web nyata.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-[0.75rem] pt-2">
                      <div className="flex items-start gap-3 p-[0.75rem] rounded-lg bg-surfaceContainerHigh/50 border border-border/30">
                        <span className="material-symbols-outlined text-primary shrink-0 mt-0.5">web</span>
                        <div className="flex flex-col">
                          <strong className="text-primary text-sm font-medium">Pengembangan Website &amp; Fitur</strong>
                          <span className="text-sm text-onSurfaceVariant">Mengembangkan modul antarmuka baru dan perbaikan fitur pada aplikasi web.</span>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 p-[0.75rem] rounded-lg bg-surfaceContainerHigh/50 border border-border/30">
                        <span className="material-symbols-outlined text-primary shrink-0 mt-0.5">database</span>
                        <div className="flex flex-col">
                          <strong className="text-primary text-sm font-medium">Database &amp; Backend Development</strong>
                          <span className="text-sm text-onSurfaceVariant">Merancang tabel basis data, optimasi SQL query, dan alur logika backend CodeIgniter/PHP.</span>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 p-[0.75rem] rounded-lg bg-surfaceContainerHigh/50 border border-border/30">
                        <span className="material-symbols-outlined text-primary shrink-0 mt-0.5">bug_report</span>
                        <div className="flex flex-col">
                          <strong className="text-primary text-sm font-medium">Testing &amp; Debugging</strong>
                          <span className="text-sm text-onSurfaceVariant">Melakukan pengujian fungsionalitas aplikasi, melacak bug, serta memastikan sistem berjalan stabil.</span>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 p-[0.75rem] rounded-lg bg-surfaceContainerHigh/50 border border-border/30">
                        <span className="material-symbols-outlined text-primary shrink-0 mt-0.5">psychology</span>
                        <div className="flex flex-col">
                          <strong className="text-primary text-sm font-medium">AI-Assisted Development</strong>
                          <span className="text-sm text-onSurfaceVariant">Memanfaatkan AI coding assistant untuk mempercepat pembuatan kode, refactoring, dan analisis logika.</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-xl bg-surfaceContainerLow/60 border border-border p-[1.5rem] flex flex-col gap-[1rem]">
                    <div className="flex flex-wrap items-start justify-between gap-4 border-b border-border pb-[1rem]">
                      <div className="flex flex-col">
                        <span className="text-xs text-secondary uppercase tracking-wider">Pengembangan Proyek Mandiri &amp; Sekolah</span>
                        <h3 className="text-primary text-base font-medium mt-0.5">
                          Full-Stack Application Development
                        </h3>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-secondary/15 text-secondary text-xs font-semibold">
                        SMKN 1 Jenangan
                      </span>
                    </div>

                    <p className="text-base text-onSurfaceVariant font-light leading-relaxed">
                      Merancang dan mengimplementasikan aplikasi web kompleks dari nol, seperti RESTCom (SaaS Restoran &amp; POS) dan AIMpro Care (QC &amp; Garansi Hardware Digital), mencakup arsitektur database, antarmuka responsif, integrasi QR Code, serta deployment.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 7. KEAHLIAN */}
            <section id="skills" className="relative w-full scroll-reveal">
              <div className="rounded-2xl bg-surfaceContainerLow/70 backdrop-blur-2xl border border-border p-[1.5rem] lg:p-[2rem] shadow-[0_20px_48px_-12px_rgba(28,28,25,0.5),inset_0_1px_1px_0_rgba(255,255,255,0.18)] flex flex-col gap-[1.5rem]">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-[1rem]">
                  <div>
                    <span className="text-primary text-xs uppercase tracking-[0.25em] font-semibold text-onSurfaceVariant">
                      Competencies • Engineering Stack
                    </span>
                    <h2 className="text-[2rem] lg:text-[2.5rem] text-onSurface font-medium mt-[0.25rem] tracking-tight">
                      Keahlian &amp; Disiplin Rekayasa
                    </h2>
                  </div>
                  <div className="flex flex-col gap-[0.25rem] max-w-md">
                    <p className="text-sm text-onSurfaceVariant font-light">
                      Dikelompokkan secara rapi berdasarkan domain kompetensi teknis yang ditekuni selama sekolah dan praktik industri.
                    </p>
                  </div>
                </div>

                {/* Marquee Infinite Moving Cards */}
                <InfiniteMovingCards items={SKILLS} direction="left" speed="slow" />

                {/* Categorized Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1rem] pt-[0.5rem]">
                  <div className="p-[1rem] rounded-xl bg-surfaceContainerLow/60 border border-border flex flex-col gap-[0.5rem]">
                    <span className="text-primary text-base flex items-center gap-2">
                      <span className="material-symbols-outlined">code</span>
                      Programming
                    </span>
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {["PHP", "C#", "C++", "JavaScript", "TypeScript"].map((s) => (
                        <span key={s} className="px-2.5 py-1 rounded-full bg-surfaceContainerHigh/60 text-xs text-onSurfaceVariant border border-border/30">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-[1rem] rounded-xl bg-surfaceContainerLow/60 border border-border flex flex-col gap-[0.5rem]">
                    <span className="text-secondary text-base flex items-center gap-2">
                      <span className="material-symbols-outlined">web</span>
                      Web Development
                    </span>
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {["HTML5", "CSS3", "Tailwind CSS", "Bootstrap 5", "Responsive Design"].map((s) => (
                        <span key={s} className="px-2.5 py-1 rounded-full bg-surfaceContainerHigh/60 text-xs text-onSurfaceVariant border border-border/30">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-[1rem] rounded-xl bg-surfaceContainerLow/60 border border-border flex flex-col gap-[0.5rem]">
                    <span className="text-tertiary text-base flex items-center gap-2">
                      <span className="material-symbols-outlined">database</span>
                      Database
                    </span>
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {["MySQL", "SQL", "Database Design", "Query Optimization"].map((s) => (
                        <span key={s} className="px-2.5 py-1 rounded-full bg-surfaceContainerHigh/60 text-xs text-onSurfaceVariant border border-border/30">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-[1rem] rounded-xl bg-surfaceContainerLow/60 border border-border flex flex-col gap-[0.5rem]">
                    <span className="text-primary text-base flex items-center gap-2">
                      <span className="material-symbols-outlined">layers</span>
                      Framework
                    </span>
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {["CodeIgniter 4", "Laravel", "Next.js", "React", ".NET Core"].map((s) => (
                        <span key={s} className="px-2.5 py-1 rounded-full bg-surfaceContainerHigh/60 text-xs text-onSurfaceVariant border border-border/30">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-[1rem] rounded-xl bg-surfaceContainerLow/60 border border-border flex flex-col gap-[0.5rem]">
                    <span className="text-secondary text-base flex items-center gap-2">
                      <span className="material-symbols-outlined">psychology</span>
                      AI &amp; Coding
                    </span>
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {["Claude Code", "GitHub Copilot", "Prompt Engineering", "AI Coding Tools"].map((s) => (
                        <span key={s} className="px-2.5 py-1 rounded-full bg-surfaceContainerHigh/60 text-xs text-onSurfaceVariant border border-border/30">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-[1rem] rounded-xl bg-surfaceContainerLow/60 border border-border flex flex-col gap-[0.5rem]">
                    <span className="text-tertiary text-base flex items-center gap-2">
                      <span className="material-symbols-outlined">build</span>
                      Tools
                    </span>
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {["Git &amp; GitHub", "VS Code", "Postman", "Figma", "Windows / Linux CLI"].map((s) => (
                        <span key={s} className="px-2.5 py-1 rounded-full bg-surfaceContainerHigh/60 text-xs text-onSurfaceVariant border border-border/30">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 8. PORTFOLIO */}
            <section
              id="projects"
              className="relative w-full flex flex-col gap-[2rem] scroll-reveal"
            >
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-[0.5rem]">
                <div className="flex flex-col gap-[0.25rem]">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_8px_rgba(122,155,118,0.5)]" />
                    <span className="text-secondary text-xs uppercase tracking-wider">
                      Curated Portfolio
                    </span>
                  </div>
                  <h2 className="text-[2rem] lg:text-[2.5rem] text-onSurface font-medium tracking-tight">
                    Project yang Pernah Dikembangkan
                  </h2>
                </div>
                <span className="text-onSurfaceVariant text-xs">
                  Proyek Utama &amp; Sistem Unggulan
                </span>
              </div>

              <Carousel slides={PROJECTS} />
            </section>

            {/* 9. SERTIFIKAT */}
            <section
              id="certificates"
              className="relative w-full scroll-reveal"
            >
              <div className="rounded-2xl bg-surfaceContainerLow/70 backdrop-blur-2xl border border-border p-[1.5rem] lg:p-[2rem] shadow-[0_20px_48px_-12px_rgba(28,28,25,0.5),inset_0_1px_1px_0_rgba(255,255,255,0.18)] flex flex-col gap-[1.5rem]">
                <div className="flex flex-col gap-[0.5rem]">
                  <span className="text-primary text-xs uppercase tracking-[0.25em] font-semibold text-onSurfaceVariant">
                    Certifications &amp; Achievements
                  </span>
                  <h2 className="text-[2rem] lg:text-[2.5rem] text-onSurface font-medium leading-tight">
                    Sertifikat &amp; Prestasi
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-[1rem]">
                  <div className="rounded-xl bg-surfaceContainerLow/60 border border-border p-[1.5rem] flex flex-col justify-between gap-[1rem] hover:border-primary/30 transition-colors">
                    <div className="flex flex-col gap-3">
                      <div className="flex items-center justify-between">
                        <div className="w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center text-primary">
                          <span className="material-symbols-outlined">workspace_premium</span>
                        </div>
                        <span className="px-3 py-1 rounded-full bg-primary/15 text-primary text-xs font-semibold">
                          Praktik Kerja Lapangan
                        </span>
                      </div>
                      <div>
                        <h3 className="text-primary text-base font-medium">
                          Sertifikat PKL / Magang
                        </h3>
                        <span className="text-xs text-onSurfaceVariant uppercase tracking-wider block mt-0.5">
                          Amins Project
                        </span>
                      </div>
                      <p className="text-base text-onSurfaceVariant leading-relaxed">
                        Penyelesaian kegiatan Praktik Kerja Lapangan (PKL) dalam pengembangan perangkat lunak dan aplikasi web.
                      </p>
                    </div>
                    <div className="text-xs text-onSurfaceVariant/70 border-t border-border pt-3 flex items-center justify-between">
                      <span>Penerbit: Amins Project</span>
                      <span className="text-primary font-medium">[ Dokumentasi PKL ]</span>
                    </div>
                  </div>

                  <div className="rounded-xl bg-surfaceContainerLow/60 border border-border p-[1.5rem] flex flex-col justify-between gap-[1rem] hover:border-secondary/30 transition-colors">
                    <div className="flex flex-col gap-3">
                      <div className="flex items-center justify-between">
                        <div className="w-10 h-10 rounded-lg bg-secondary/15 flex items-center justify-center text-secondary">
                          <span className="material-symbols-outlined">event</span>
                        </div>
                        <span className="px-3 py-1 rounded-full bg-secondary/15 text-secondary text-xs font-semibold">
                          Event / Program
                        </span>
                      </div>
                      <div>
                        <h3 className="text-primary text-base font-medium">
                          Google Event
                        </h3>
                        <span className="text-xs text-onSurfaceVariant uppercase tracking-wider block mt-0.5">
                          #JuaraVibeCoding Certificate of Completion
                        </span>
                      </div>
                      <p className="text-base text-onSurfaceVariant leading-relaxed">
                        Partisipasi dan keikutsertaan dalam kegiatan workshop secara daring yang diselenggarakan oleh Google developer group.
                      </p>
                    </div>
                    <div className="text-xs text-onSurfaceVariant/70 border-t border-border pt-3 flex items-center justify-between">
                      <span>Penerbit: Google</span>
                      <span className="text-secondary font-medium">[ Detail Event ]</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 10. KEGIATAN */}
            <section
              id="activities"
              className="relative w-full scroll-reveal py-[3rem] md:py-[4rem]"
            >
              <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="rounded-2xl bg-surfaceContainerLow/70 backdrop-blur-2xl border border-border p-[1.5rem] lg:p-[2rem] shadow-[0_20px_48px_-12px_rgba(28,28,25,0.5),inset_0_1px_1px_0_rgba(255,255,255,0.18)] flex flex-col gap-[1.5rem]">
                  <div className="flex flex-col gap-[0.5rem]">
                    <span className="text-primary text-xs uppercase tracking-[0.25em] font-semibold text-onSurfaceVariant">
                      Documentations &amp; Field Activities
                    </span>
                    <h2 className="text-[2rem] lg:text-[2.5rem] text-onSurface font-medium leading-tight">
                      Kegiatan
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-[1.5rem] lg:gap-[2rem]">
                    {/* PKL Card */}
                    <div className="rounded-xl bg-surfaceContainerLow/60 border border-border flex flex-col md:flex-row gap-[0.5rem] hover:border-primary/30 transition-colors">
                      <div className="relative w-full md:w-48 h-48 md:h-auto rounded-lg overflow-hidden flex-shrink-0">
                        <img
                          src="/Aktivitas_PKL.jpeg"
                          alt="Kegiatan PKL di Amins Project"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      </div>
                      <div className="p-4 flex flex-col gap-2 flex-1">
                        <span className="px-2.5 py-0.5 rounded-full bg-primary/15 text-primary text-[10px] font-semibold">
                          Praktik Kerja Industri
                        </span>
                        <h3 className="text-primary text-sm font-medium mb-0.5">Kegiatan PKL / Magang</h3>
                        <p className="text-xs text-onSurfaceVariant leading-relaxed">
                          Pengalaman langsung di Amins Project mencakup pengembangan modul web dan pengelolaan basis data.
                        </p>
                      </div>
                    </div>

                    {/* Lab Card */}
                    <div className="rounded-xl bg-surfaceContainerLow/60 border border-border flex flex-col md:flex-row gap-[0.5rem] hover:border-secondary/30 transition-colors">
                      <div className="relative w-full md:w-48 h-48 md:h-auto rounded-lg overflow-hidden flex-shrink-0">
                        <img
                          src="/Aktivitas_Lab.jpeg"
                          alt="Kegiatan Lab RPL di SMKN 1 Jenangan"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      </div>
                      <div className="p-4 flex flex-col gap-2 flex-1">
                        <span className="px-2.5 py-0.5 rounded-full bg-secondary/15 text-secondary text-[10px] font-semibold">
                          Praktik Sekolah
                        </span>
                        <h3 className="text-primary text-sm font-medium mb-0.5">Kegiatan Lab RPL</h3>
                        <p className="text-xs text-onSurfaceVariant leading-relaxed">
                          Praktik pemrograman di laboratorium komputer sekolah dan persiapan UKK.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 11. BLOG */}
            <section
              id="blog"
              className="relative w-full scroll-reveal"
            >
              <div className="rounded-2xl bg-surfaceContainerLow/70 backdrop-blur-2xl border border-border p-[1.5rem] lg:p-[2rem] shadow-[0_20px_48px_-12px_rgba(28,28,25,0.5),inset_0_1px_1px_0_rgba(255,255,255,0.18)] flex flex-col gap-[1.5rem]">
                <div className="flex flex-col gap-[0.5rem]">
                  <span className="text-primary text-xs uppercase tracking-[0.25em] font-semibold text-onSurfaceVariant">
                    Articles &amp; Insights
                  </span>
                  <h2 className="text-[2rem] lg:text-[2.5rem] text-onSurface font-medium leading-tight">
                    Artikel / Blog
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-[1rem]">
                  <div className="rounded-xl bg-surfaceContainerLow/60 border border-border p-[1rem] flex flex-col justify-between gap-[0.75rem] hover:border-primary/30 transition-colors">
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center justify-between">
                        <span className="px-2.5 py-0.5 rounded-full bg-primary/15 text-primary text-[10px] font-semibold">
                          Web Development
                        </span>
                        <span className="text-[10px] text-onSurfaceVariant uppercase">Draft</span>
                      </div>
                      <h3 className="text-primary text-base font-medium mt-1">
                        Penerapan CodeIgniter 4 dan MySQL pada Sistem SaaS Restoran
                      </h3>
                      <p className="text-base text-onSurfaceVariant">
                        Ulasan arsitektur database, sistem POS, dan manajemen pesanan QR yang efisien pada proyek RESTCom.
                      </p>
                    </div>
                    <span className="text-xs text-onSurfaceVariant/70 border-t border-border pt-2">
                      Catatan Pembelajaran &amp; Architecture
                    </span>
                  </div>

                  <div className="rounded-xl bg-surfaceContainerLow/60 border border-border p-[1rem] flex flex-col justify-between gap-[0.75rem] hover:border-secondary/30 transition-colors">
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center justify-between">
                        <span className="px-2.5 py-0.5 rounded-full bg-secondary/15 text-secondary text-[10px] font-semibold">
                          AI &amp; Coding
                        </span>
                        <span className="text-[10px] text-onSurfaceVariant uppercase">Draft</span>
                      </div>
                      <h3 className="text-primary text-base font-medium mt-1">
                        Efisiensi Coding Menggunakan AI Assistant bagi Siswa SMK RPL
                      </h3>
                      <p className="text-base text-onSurfaceVariant">
                        Bagaimana memanfaatkan AI coding assistant secara bijak untuk mempercepat pemecahan bug dan eksplorasi logika.
                      </p>
                    </div>
                    <span className="text-xs text-onSurfaceVariant/70 border-t border-border pt-2">
                      Pengalaman &amp; Tips Teknologi
                    </span>
                  </div>

                  <div className="rounded-xl bg-surfaceContainerLow/60 border border-border p-[1rem] flex flex-col justify-between gap-[0.75rem] hover:border-tertiary/30 transition-colors">
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center justify-between">
                        <span className="px-2.5 py-0.5 rounded-full bg-tertiary/20 text-tertiary text-[10px] font-semibold">
                          Pengalaman PKL
                        </span>
                        <span className="text-[10px] text-onSurfaceVariant uppercase">Draft</span>
                      </div>
                      <h3 className="text-primary text-base font-medium mt-1">
                        Pengalaman PKL di Amins Project: Dari Teori Sekolah ke Industri
                      </h3>
                      <p className="text-base text-onSurfaceVariant">
                        Catatan refleksi tantangan nyata saat menangani bug, optimasi query basis data, dan kolaborasi tim.
                      </p>
                    </div>
                    <span className="text-xs text-onSurfaceVariant/70 border-t border-border pt-2">
                      Jurnal Industri &amp; Magang
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
              <div className="rounded-2xl bg-surfaceContainerLow/70 backdrop-blur-2xl border border-border p-[1.5rem] lg:p-[2rem] shadow-[0_24px_56px_-16px_rgba(28,28,25,0.55),inset_0_1px_1px_0_rgba(255,255,255,0.18)] flex flex-col items-center text-center gap-[1rem]">
                <span className="text-primary text-xs uppercase tracking-[0.25em]">
                  Get In Touch • Contact Details
                </span>
                <h2 className="text-[2rem] lg:text-[2.5rem] text-onSurface font-medium tracking-tight">
                  Hubungi Saya
                </h2>
                <p className="text-base text-onSurfaceVariant max-w-[28rem] leading-relaxed">
                  Terbuka untuk kesempatan magang, proyek kolaboratif, maupun diskusi seputar pengembangan web dan teknologi.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1rem] w-full pt-[0.5rem] text-left">
                  <a
                    href="mailto:davinloise.work@gmail.com"
                    className="p-[1rem] rounded-xl bg-surfaceContainerHigh/50 hover:bg-surfaceContainerHigh/70 border border-border flex flex-col gap-2 transition-all hover:border-primary/40"
                  >
                    <div className="w-9 h-9 rounded-lg bg-primary/15 flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined">mail</span>
                    </div>
                    <span className="text-[10px] text-onSurfaceVariant uppercase font-medium tracking-wider">Email</span>
                    <strong className="text-primary text-sm font-medium truncate">davinloise.work@gmail.com</strong>
                    <span className="text-xs text-onSurfaceVariant/70">Kirim email langsung</span>
                  </a>

                  <a
                    href="https://wa.me/6281234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-[1rem] rounded-xl bg-surfaceContainerHigh/50 hover:bg-surfaceContainerHigh/70 border border-border flex flex-col gap-2 transition-all hover:border-primary/40"
                  >
                    <div className="w-9 h-9 rounded-lg bg-secondary/15 flex items-center justify-center text-secondary">
                      <span className="material-symbols-outlined">chat</span>
                    </div>
                    <span className="text-[10px] text-onSurfaceVariant uppercase font-medium tracking-wider">WhatsApp</span>
                    <strong className="text-primary text-sm font-medium">+62 812-3456-7890</strong>
                    <span className="text-xs text-onSurfaceVariant/70">Chat via WhatsApp</span>
                  </a>

                  <a
                    href="https://github.com/xydenMc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-[1rem] rounded-xl bg-surfaceContainerHigh/50 hover:bg-surfaceContainerHigh/70 border border-border flex flex-col gap-2 transition-all hover:border-primary/40"
                  >
                    <div className="w-9 h-9 rounded-lg bg-tertiary/20 flex items-center justify-center text-tertiary">
                      <span className="material-symbols-outlined">code</span>
                    </div>
                    <span className="text-[10px] text-onSurfaceVariant uppercase font-medium tracking-wider">GitHub</span>
                    <strong className="text-primary text-sm font-medium truncate">github.com/xydenMc</strong>
                    <span className="text-xs text-onSurfaceVariant/70">Lihat repositori kode</span>
                  </a>

                  <div className="p-[1rem] rounded-xl bg-surfaceContainerHigh/50 border border-border flex flex-col gap-2">
                    <div className="w-9 h-9 rounded-lg bg-primary/15 flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined">location_on</span>
                    </div>
                    <span className="text-[10px] text-onSurfaceVariant uppercase font-medium tracking-wider">Alamat</span>
                    <strong className="text-primary text-sm font-medium truncate">Ponorogo</strong>
                    <span className="text-xs text-onSurfaceVariant/70">Indonesia, Jawa Timur</span>
                  </div>
                </div>
              </div>
            </section>

          </div>
        </main>
      </BackgroundBeamsWithCollision>

      {/* FOOTER */}
      <footer className="w-full mt-[4.5rem] relative z-10 scroll-reveal">
        <div className="w-full max-w-[1360px] mx-auto px-[1.25rem] lg:px-[3rem] pb-[2.5rem]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-[1rem] p-[1.5rem] rounded-xl bg-surfaceContainerLowest/70 border border-border backdrop-blur-xl shadow-[0_16px_32px_-8px_rgba(28,28,25,0.45)]">
            <div className="flex flex-col items-center md:items-start gap-1">
              <span className="text-primary text-sm font-semibold">
                Davin Loise Steven Alinsky Herlambang
              </span>
              <span className="text-xs text-onSurfaceVariant">
                © {currentYear} Davin Loise S.A.H. All rights reserved
              </span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-[1.5rem] mt-2 md:mt-0">
              <a className="text-xs text-onSurfaceVariant hover:text-primary transition-colors" href="#home">
                Beranda
              </a>
              <a className="text-xs text-onSurfaceVariant hover:text-primary transition-colors" href="#about">
                Tentang
              </a>
              <a className="text-xs text-onSurfaceVariant hover:text-primary transition-colors" href="#skills">
                Keahlian
              </a>
              <a className="text-xs text-onSurfaceVariant hover:text-primary transition-colors" href="#projects">
                Portfolio
              </a>
              <a className="text-xs text-onSurfaceVariant hover:text-primary transition-colors" href="#contact">
                Kontak
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}