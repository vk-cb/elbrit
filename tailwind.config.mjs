/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-first': "url('/images/first.png')",
        'hero-second': "url('/images/second.png')",
        'hero-third': "url('/images/third.png')",
        'hero-fourth': "url('/images/fourth.png')",
        'hero-fifth': "url('/images/fifth.png')",
        'blog-1': "url('/images/blog1.png')",
        'blog-2': "url('/images/blog2.png')",
      },
      colors: {
   
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
