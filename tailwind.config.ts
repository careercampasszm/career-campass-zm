import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#0F2A44",
          secondary: "#1F4ED8",
          accent: "#0D9488",
          background: "#F8FAFC",
          text: "#1F2937",
        },
      },
    },
  },
  plugins: [],
};

export default config;