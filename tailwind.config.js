/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],  
      },
      colors: {
        primary: '#7C3AED',
        'primary-dark': '#6D28D9',
      }
    },
  },
  plugins: [],
}