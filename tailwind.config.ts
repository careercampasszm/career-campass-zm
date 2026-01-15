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
          primary: "#0F2A44",     // Career Compass Navy
          secondary: "#1F4ED8",   // Professional Blue
          accent: "#0D9488",      // Guidance Teal
          background: "#F8FAFC",  // Soft background
          text: "#1F2937",        // Corporate text
        },
      },
    },
  },
  plugins: [],
};

export default config;
