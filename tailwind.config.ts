import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        walnut: {
          50: "#F8F5F1",
          100: "#EFE8DF",
          200: "#DFD1C0",
          300: "#C7AF94",
          400: "#A88765",
          500: "#8A6746",
          600: "#6F5035",
          700: "#583D27",
          800: "#422C1B",
          900: "#322014",
          950: "#22150D",
        },
        leaf: {
          50: "#F1F6F2",
          100: "#DEECE2",
          200: "#BED9C6",
          300: "#92BDA1",
          400: "#639A77",
          500: "#427D58",
          600: "#2F6243",
          700: "#264F37",
          800: "#20402D",
          900: "#1B3526",
        },
        cream: {
          50: "#FAF8F5",
          100: "#F3EDE4",
          200: "#E8DFD2",
          300: "#D9CCB9",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "-apple-system", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
