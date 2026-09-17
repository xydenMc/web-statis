import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";

// Next.js processes this stylesheet import at build time; TypeScript may not
// have a declaration for CSS side-effect imports in some editor configurations.
import "./globals.css";

// Plus Jakarta Sans is loaded via next/font/google (zero CLS, no extra requests).
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
});

export const metadata: Metadata = {
  title: "Davin Portfolio — Web Developer & AI-Assisted Development",
  description:
    "Portfolio of Davin Loise Steven Alinsky Herlambang - SMK RPL student showcasing web development, UI/UX design, programming, and AI-assisted development projects.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        {/* Google Fonts: Cormorant Garamond & Plus Jakarta Sans */}
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background font-body text-on-surface relative min-h-screen selection:bg-primary selection:text-white antialiased">
        {children}
      </body>
    </html>
  );
}