import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "ui-sans-serif", "system-ui"],
        serif: ["Merriweather", "serif"],
        custom: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        // Custom light theme
        customlight: {
          primary: "#a78bfa", // Example color
          secondary: "#22d3ee",
          accent: "#fbbf24",
          neutral: "#3d4451",
          "base-100": "#ffffff", // Background color
          "base-200": "#f5f5f4", // Lighter background
          "base-300": "#f3f4f6", // Even lighter
          "info": "#3abff8",
          "success": "#36d399",
          "warning": "#fbbd23",
          "error": "#f87272",
        },
      },
      {
        // Custom dark theme
        customdark: {
          primary: "#7e22ce",
          secondary: "#2dd4bf",
          accent: "#fcd34d",
          neutral: "#1f2937",
          "base-100": "#1e293b", // Dark background
          "base-200": "#111827", // Even darker
          "base-300": "#0f172a",
          "info": "#0ea5e9",
          "success": "#10b981",
          "warning": "#facc15",
          "error": "#ef4444",
        },
      },
      
    ],
  },
};
export default config;
