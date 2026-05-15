import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F5EFE6", // kraft-beige
        surface: "#fcf9f8",
        "surface-container": "#f0eded",
        "surface-variant": "#e5e2e1",
        primary: "#173124", // primary dark green
        "primary-container": "#2d4739", // Forest Green
        secondary: "#685d4b", // Earth Brown
        "secondary-container": "#eddec7",
        "burnt-orange": "#D1603D", // Burnt Orange
        "kraft-beige": "#F5EFE6", // Kraft Beige
        "soft-white": "#FDFDFD",
        "on-surface": "#1b1c1c",
        "on-surface-variant": "#424844",
        "on-primary": "#ffffff",
        "on-primary-container": "#98b5a3",
        "outline-variant": "#c2c8c2",
      },
      fontFamily: {
        poppins: ["var(--font-poppins)"],
        montserrat: ["var(--font-montserrat)"],
      },
      borderRadius: {
        DEFAULT: "0.125rem",
        lg: "0.25rem",
        xl: "0.5rem",
        full: "0.75rem",
      },
      spacing: {
        "margin-desktop": "64px",
        "gutter": "24px",
        "container-max": "1280px",
        "margin-mobile": "20px",
        base: "8px",
      },
    },
  },
  plugins: [],
};
export default config;
