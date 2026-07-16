import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#eef2f7",
          100: "#d9e1ec",
          200: "#b9c7da",
          300: "#8fa3c0",
          400: "#5e7299",
          500: "#3d5179",
          600: "#2b3e63",
          700: "#1f2e4d",
          800: "#16243f",
          900: "#101b30",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["var(--font-display)"],
      },
    },
  },
  plugins: [],
};
export default config;
