/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors:{
        'burntorange': '#CC5500'
      },
      fontFamily:{
        'spacemono': ['Space Mono', 'sans-serif'],
        'inter': ['Inter', 'san-serif']
      },
      keyframes:{
        wiggle:{
          '0%, 100%': {transform: 'rotate(-3deg)'},
          '50%': {transform: 'rotate(3deg)'},
        }
      },
      animation:{
        'wiggle': 'wiggle 0.5s ease-out 1',
      }
    },
  },
  plugins: [],
}

