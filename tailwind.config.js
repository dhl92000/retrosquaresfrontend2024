/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors:{
        'burntorange': '#CC5500'
      },
      fontFamily:{
        'spacemono': ['Space Mono', 'sans-serif']
      }
    },
  },
  plugins: [],
}

