/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        colorpal: {
          bg: '#1A1B26',
          text: '#A9B1D6',
          accent: '#E0AF68',
          error: '#F7768E',
        },
      },
    },
  },
  plugins: [],
}

