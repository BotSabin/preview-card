/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        softblue : 'hsl(215, 51%, 70%)',
        cyan : 'hsl(178, 100%, 50%)',
        maindark : 'hsl(217, 54%, 11%)',
        carddark : 'hsl(216, 50%, 16%)',
        linedark : 'hsl(215, 32%, 27%)',
      },
      fontFamily : {
        outfit : ['Outfit, sans-serif']
      }
    },
  },
  plugins: [],
}