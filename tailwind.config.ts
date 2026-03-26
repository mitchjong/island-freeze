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
        brand: {
          teal: "#0891b2",
          cyan: "#06b6d4",
          coral: "#f97316",
          pink: "#ec4899",
          purple: "#8b5cf6",
          dark: "#0c1a2e",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(135deg, #0c1a2e 0%, #0e4f6e 40%, #0891b2 100%)",
        "card-gradient":
          "linear-gradient(135deg, rgba(8,145,178,0.15) 0%, rgba(139,92,246,0.15) 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
