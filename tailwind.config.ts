import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Dark-theme scale: same 9 tones as a conventional light-mode scale,
        // reversed so text-ink-900 (headings) resolves near-white, text-ink-600
        // (body copy) resolves light-gray, and border-ink-200 (dividers) resolves
        // a low-contrast dark gray — all tuned for a black/blue canvas.
        ink: {
          DEFAULT: "#F6F7F8",
          50: "#0E1116",
          100: "#181B20",
          200: "#262A31",
          300: "#3C424B",
          400: "#8791A0",
          500: "#A6AEB8",
          600: "#C2C8D0",
          700: "#DADEE3",
          800: "#ECEEF0",
          900: "#F6F7F8",
        },
        paper: "#000000",
        blue: {
          DEFAULT: "#037EF3",
          50: "#E6F2FE",
          100: "#CCE4FD",
          400: "#2E97F5",
          500: "#037EF3",
          600: "#0264C2",
          700: "#024D96",
          800: "#013A73",
        },
        green: {
          DEFAULT: "#1BBA6F",
          50: "#E8FBF2",
          100: "#C9F5E1",
          400: "#3FCB86",
          500: "#1BBA6F",
          600: "#159259",
        },
        gold: {
          DEFAULT: "#D4AF37",
          50: "#FBF6E7",
          100: "#F3E7B8",
          400: "#E0C158",
          500: "#D4AF37",
          600: "#AB8A2C",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      maxWidth: {
        content: "72rem",
        prose: "42rem",
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease-out forwards",
        marquee: "marquee 28s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
