import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";
import "./globals.css";

// Hanken Grotesk is self-hosted via next/font (zero CLS, no extra requests).
const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
  display: "swap",
});

// Geist is loaded via Google Fonts CSS because `next/font/google` does not
// expose `Geist` / `Geist_Mono` in Next.js 14.2.15. CSS variables `--font-geist`
// and `--font-geist-mono` are defined in globals.css so tailwind.config.ts
// keeps resolving the same names. Swap these back to next/font/google once
// Next is upgraded past the version that exposes them.

export const metadata: Metadata = {
  title: "Portofolio Davin — Web Dev, UI/UX & Multimedia",
  description:
    "Davin Loise Steven Alinsky Herlambang — pelajar XII RPL A SMKN 1 Jenangan Ponorogo. Portofolio Liquid Glass dengan komponen Aceternity.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`dark scroll-smooth ${hankenGrotesk.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Geist:wght@100..900&family=Geist+Mono:wght@100..900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
          rel="stylesheet"
        />
     </head>
      <body className="bg-background font-body-md text-on-surface relative min-h-screen selection:bg-primary-container selection:text-on-primary-container">
        {children}
     </body>
   </html>
  );
}
