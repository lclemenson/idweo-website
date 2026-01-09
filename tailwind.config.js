/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1B263B',      // Deep Navy
        secondary: '#415A77',    // Slate Blue
        accent: '#00D47E',       // Mint Green
        'dark-brown': '#2C2416', // Dark Chocolate/Charcoal Brown
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
