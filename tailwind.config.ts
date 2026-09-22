import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#050816",
          alt: "#070B1F",
          surface: "#0B1226",
          elevated: "#0F172A",
          footer: "#020617",
          inverse: "#020617",
        },
        text: {
          primary: "#F8FAFC",
          secondary: "#B8C4D9",
          muted: "#718096",
        },
        accent: {
          DEFAULT: "#22D3EE",
          hover: "#4DDFF5",
          blue: "#3B82F6",
          secondary: "#8B5CF6",
        },
        success: "#22C55E",
        error: "#EF4444",
        edge: "#1E3A5F",
      },
      fontFamily: {
        sans: [
          "var(--font-inter)",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        display: [
          "var(--font-inter)",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.96)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-16px) rotate(6deg)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(12px) rotate(-4deg)" },
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
        "bg-drift": {
          "0%, 100%": { transform: "scale(1) translate(0, 0)" },
          "50%": { transform: "scale(1.04) translate(-1%, -1%)" },
        },
        "orbit-fade": {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "0.9" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.6s ease-out both",
        "fade-in-up": "fade-in-up 0.7s ease-out both",
        "scale-in": "scale-in 0.5s ease-out both",
        float: "float 7s ease-in-out infinite",
        "float-slow": "float-slow 10s ease-in-out infinite",
        "spin-slow": "spin-slow 40s linear infinite",
        "pulse-glow": "pulse-glow 4s ease-in-out infinite",
        "bg-drift": "bg-drift 20s ease-in-out infinite",
        "orbit-fade": "orbit-fade 5s ease-in-out infinite",
      },
      boxShadow: {
        card: "0 1px 2px 0 rgb(0 0 0 / 0.2), 0 1px 3px 0 rgb(0 0 0 / 0.3)",
        "card-hover":
          "0 8px 10px -4px rgb(0 0 0 / 0.3), 0 16px 24px -8px rgb(0 0 0 / 0.35)",
        glow: "0 0 40px 4px rgb(34 211 238 / 0.25), 0 0 80px 12px rgb(59 130 246 / 0.15)",
      },
    },
  },
  plugins: [],
};

export default config;
