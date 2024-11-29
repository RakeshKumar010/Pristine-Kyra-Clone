/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        logoColor:'#f4983b',
        logoBlue:'#045455'
      }
    },
  },
  plugins: [],
}