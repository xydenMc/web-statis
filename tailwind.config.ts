import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary colors - Griya Pot Bunga palette
        background: "#fcf9f4",
        surface: "#fcf9f4",
        surfaceContainerLow: "#f6f3ee",
        surfaceContainer: "#f0ede9",
        surfaceContainerHigh: "#ebe8e3",
        surfaceDim: "#dcdad5",
        surfaceBright: "#fcf9f4",
        surfaceVariant: "#e5e2dd",
        surfaceContainerLowest: "#ffffff",
        surfaceContainerHighest: "#e5e2dd",

        // Primary - Terracotta Merah
        primary: "#9f3c16",
        onPrimary: "#ffffff",
        primaryContainer: "#bf542c",
        onPrimaryContainer: "#fffbff",
        primaryFixed: "#ffdbcf",
        primaryFixedDim: "#ffb59c",
        onPrimaryFixed: "#390c00",
        onPrimaryFixedVariant: "#822801",
        inversePrimary: "#ffb59c",

        // Secondary - Sage Green
        secondary: "#45664e",
        onSecondary: "#ffffff",
        secondaryContainer: "#c4e9cb",
        onSecondaryContainer: "#496a52",
        secondaryFixed: "#c7ecce",
        secondaryFixedDim: "#abcfb2",
        onSecondaryFixed: "#01210f",
        onSecondaryFixedVariant: "#2e4e37",
        inverseSecondary: "#90c8a0",

        // Tertiary - Brown Kayu
        tertiary: "#825026",
        onTertiary: "#ffffff",
        tertiaryContainer: "#a87b53",
        onTertiaryContainer: "#fffbff",
        tertiaryFixed: "#ffdcc3",
        tertiaryFixedDim: "#ffc9aa",
        onTertiaryFixed: "#2f1500",
        onTertiaryFixedVariant: "#693c13",
        inverseTertiary: "#d4b691",

        // Text colors - Dark Charcoal
        onBackground: "#1c1c19",
        onSurface: "#1c1c19",
        onSurfaceVariant: "#57423b",
        onSurfaceContainer: "#1c1c19",

        // Error (for completeness)
        error: "#ba1a1a",
        errorContainer: "#ffdad6",
        onError: "#ffffff",
        onErrorContainer: "#93000a",

        // Outline and borders
        outline: "#8a726a",
        outlineVariant: "#dec0b7",
        border: "#e5e2dd",
      },
      borderRadius: {
        DEFAULT: "0.5rem",
        sm: "0.375rem",
        md: "0.625rem",
        lg: "1rem",
        xl: "1.25rem",
        "2xl": "1.25rem",
        "3xl": "1.75rem",
        full: "9999px",
      },
      spacing: {
        "space-xxs": "0.25rem",
        "space-xs": "0.5rem",
        "space-sm": "0.75rem",
        "space-md": "1rem",
        "space-lg": "1.5rem",
        "space-xl": "2rem",
        "space-2xl": "3rem",
        "space-3xl": "4.5rem",
        "space-4xl": "6rem",
        "space-5xl": "8rem",
        "gutter-mobile": "1.25rem",
        "gutter-desktop": "3rem",
        "container-max": "1360px",
      },
      fontFamily: {
        // Heading - Cormorant Garamond (serif, italic for highlight, bold for main title)
        "editorial-heading": ["'Cormorant Garamond'", "Georgia", "serif"],
        "editorial-heading-italic": ["'Cormorant Garamond'", "Georgia", "serif"],
        "editorial-heading-bold": ["'Cormorant Garamond'", "Georgia", "serif"],
        // Body Text & Navigation - Plus Jakarta Sans
        "body": ["'Plus Jakarta Sans'", "system-ui", "sans-serif"],
        "body-font": ["'Plus Jakarta Sans'", "system-ui", "sans-serif"],
        // Tailwind fallback
        headline: ["'Plus Jakarta Sans'", "system-ui", "sans-serif"],
        display: ["'Plus Jakarta Sans'", "system-ui", "sans-serif"],
        bodyMd: ["'Plus Jakarta Sans'", "system-ui", "sans-serif"],
        labelSm: ["'Plus Jakarta Sans'", "system-ui", "sans-serif"],
        labelMd: ["'Plus Jakarta Sans'", "system-ui", "sans-serif"],
        labelLg: ["'Plus Jakarta Sans'", "system-ui", "sans-serif"],
      },
      fontSize: {
        // Display sizes for editorial style
        "display-xs": ["48px", { lineHeight: "56px", letterSpacing: "-0.03em", fontWeight: "700" }],
        "display-sm": ["36px", { lineHeight: "44px", letterSpacing: "-0.02em", fontWeight: "700" }],
        "display-md": ["28px", { lineHeight: "36px", letterSpacing: "-0.015em", fontWeight: "700" }],

        // Headline sizes
        "headline-xs": ["22px", { lineHeight: "30px", letterSpacing: "-0.01em", fontWeight: "600" }],
        "headline-sm": ["18px", { lineHeight: "24px", letterSpacing: "-0.005em", fontWeight: "600" }],
        "headline-md": ["16px", { lineHeight: "22px", letterSpacing: "0em", fontWeight: "600" }],
        "headline-lg": ["14px", { lineHeight: "20px", letterSpacing: "0.02em", fontWeight: "600" }],

        // Body sizes
        "body-xs": ["12px", { lineHeight: "18px", letterSpacing: "0.04em", fontWeight: "400" }],
        "body-sm": ["14px", { lineHeight: "22px", letterSpacing: "0.01em", fontWeight: "400" }],
        "body-md": ["16px", { lineHeight: "26px", letterSpacing: "0em", fontWeight: "400" }],
        "body-lg": ["18px", { lineHeight: "28px", letterSpacing: "-0.005em", fontWeight: "400" }],

        // Label sizes
        "label-xs": ["10px", { lineHeight: "14px", letterSpacing: "0.08em", fontWeight: "600" }],
        "label-sm": ["11px", { lineHeight: "16px", letterSpacing: "0.04em", fontWeight: "500" }],
        "label-md": ["12px", { lineHeight: "16px", letterSpacing: "0.04em", fontWeight: "500" }],

        // Button sizes
        "button-sm": ["12px", { lineHeight: "16px", letterSpacing: "0.05em", fontWeight: "600" }],
        "button-md": ["14px", { lineHeight: "20px", letterSpacing: "0.03em", fontWeight: "600" }],
        "button-lg": ["16px", { lineHeight: "24px", letterSpacing: "0.02em", fontWeight: "600" }],
      },
      boxShadow: {
        "glass": "0 8px 32px -16px rgba(159, 60, 22, 0.06), inset 0 1px 1px 0 rgba(255, 255, 255, 0.18)",
        "glass-card": "0 4px 24px -8px rgba(159, 60, 22, 0.04), inset 0 1px 1px 0 rgba(255, 255, 255, 0.15)",
        "glass-hover": "0 12px 40px -20px rgba(159, 60, 22, 0.08), inset 0 1px 1px 0 rgba(255, 255, 255, 0.2)",
        "soft": "0 4px 16px -8px rgba(28, 28, 25, 0.08)",
        "soft-md": "0 6px 24px -12px rgba(28, 28, 25, 0.1)",
        "soft-lg": "0 12px 48px -24px rgba(28, 28, 25, 0.12)",
        "button-primary": "0 8px 20px -8px rgba(159, 60, 22, 0.55)",
        "button-primary-hover": "0 12px 32px -12px rgba(159, 60, 22, 0.6)",
        "button-secondary": "0 4px 16px -6px rgba(70, 102, 78, 0.4)",
      },
      backdropBlur: {
        xs: "2px",
        sm: "8px",
        md: "12px",
        lg: "16px",
        xl: "20px",
        "2xl": "28px",
        "28px": "28px",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "float-up": "float-up 4s ease-in-out infinite",
        "shimmer": "shimmer 3s linear infinite",
        "pulse": "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "float-up": {
          "0%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-15px)" },
          "100%": { transform: "translateY(0px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;