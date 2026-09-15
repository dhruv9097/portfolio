import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#FBFBF9",
        ink: "#12141A",
        accent: {
          DEFAULT: "#17339E",
          bright: "#6E8BFF",
        },
      },
      fontFamily: {
        sans: ["var(--font-display)", "sans-serif"],
        display: ["var(--font-display)", "sans-serif"],
        serif: ["var(--font-body)", "serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      maxWidth: {
        measure: "65ch",
      },
    },
  },
  plugins: [
    typography,
  ],
};
export default config;
