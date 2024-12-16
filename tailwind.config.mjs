/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        textPrimary : "var(--textPrimary)",
        featureBackground : "var(--featureBackground)",
        footerCard : "var(--footerCard)",
        heroBackground : "var(--heroBackground)",
        lightText : "var(--lightText)",
      },
    },
  },
  plugins: [],
};
