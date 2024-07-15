/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        Inter : ['Inter'],
        title : ['Syne']
      },
      colors : {
        greenL : ['#C0FF00']
      }
    },
  },
  plugins: [],
}

