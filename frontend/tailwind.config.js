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
        
          colors: {
            customBlue: '#e2f4fe',
            buttomBlue: "#1555db",
            hoverBlue: '#0e3b96'
          },
        },
      },
    
  },
  plugins: [],
};
