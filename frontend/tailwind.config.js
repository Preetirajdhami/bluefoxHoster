/** @type {import('tailwindcss').Config} */
module.exports = {
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
        backgroundImage: {
          'custom-gradient': 'linear-gradient(258.38deg, #532be9 24.08%, #1b076e 91.93%)',
        },
      },
    },
  },
  plugins: [],
};
