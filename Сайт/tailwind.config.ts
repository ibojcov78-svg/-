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
        forest: {
          50:  "#f0f9f4",
          100: "#dcf0e5",
          200: "#bbe0cc",
          300: "#8ec8aa",
          400: "#5ca882",
          500: "#3a8b62",
          600: "#2a6f4d",
          700: "#1B4332",
          800: "#163728",
          900: "#122d21",
        },
        beige: {
          50:  "#fdfaf5",
          100: "#f8f2e6",
          200: "#f0e4cc",
          300: "#e5d0a8",
          400: "#d6b880",
          500: "#c9a96e",
          600: "#b8925a",
          700: "#9a784a",
          800: "#7d623e",
          900: "#665135",
        },
        navy: {
          50:  "#edf1f8",
          100: "#d6dff0",
          200: "#b0c0e2",
          300: "#8099ce",
          400: "#5572b5",
          500: "#3555a0",
          600: "#2a4287",
          700: "#1A2744",
          800: "#152038",
          900: "#111a2e",
        },
      },
      fontFamily: {
        cinzel: ["Cinzel", "serif"],
        josefin: ["Josefin Sans", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
