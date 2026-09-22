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
        paper: "#FAF9F6",
        ember: {
          DEFAULT: "#C4622D",
          50: "#FBF0E9",
          100: "#F5DBC8",
          400: "#D98653",
          500: "#C4622D",
          600: "#A24E22",
        },
        signal: {
          DEFAULT: "#2E6F5E",
          50: "#EAF3F0",
          400: "#4C9884",
          500: "#2E6F5E",
          600: "#22574A",
        },
        connect: {
          DEFAULT: "#2B5FA5",
          50: "#EAF1FA",
          400: "#5488C7",
          500: "#2B5FA5",
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
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
