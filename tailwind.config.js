/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'smm': '740px',
      // => @media (min-width: 640px) { ... }
    },
  },
  plugins: [],
}