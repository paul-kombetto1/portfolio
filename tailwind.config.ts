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
        ink: {
          DEFAULT: "#0E1116",
          50: "#F4F5F6",
          100: "#E4E6E9",
          200: "#C6CAD1",
          300: "#9BA2AD",
          400: "#6B7280",
          500: "#4A5058",
          600: "#363B42",
          700: "#252930",
          800: "#181B20",
          900: "#0E1116",
        },
        paper: "#FFFFFF",
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
