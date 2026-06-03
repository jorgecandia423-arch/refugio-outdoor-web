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
        background: "#FAFAFA", // Clean off-white
        surface: "#FFFFFF", // Pure white
        "surface-container": "#F4F4F5", // Light gray

        "surface-variant": "#e5e2e1",
        primary: "#2d2d21", // Dark Olive Charcoal
        "primary-container": "#3C3D32", // Dark Olive Lighter
        secondary: "#685d4b", // Earth Brown
        "secondary-container": "#eddec7",
        "brand-accent": "#868c1f", // Bright Olive Chartreuse
        "kraft-beige": "#e3dcbf", // Kraft Beige
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
