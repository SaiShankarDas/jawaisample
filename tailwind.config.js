/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Lato', ...defaultTheme.fontFamily.sans],
        serif: ['Playfair Display', ...defaultTheme.fontFamily.serif],
      },
      colors: {
        jawai: {
          sand: '#C2B280', // Sandstone/Gold
          rock: '#5D5C61', // Granite Grey
          green: '#2E4A3E', // Deep Forest Green
          brown: '#8D6E63', // Earthy Brown
          blue: '#5D8AA8', // Water/Dam Blue
          light: '#F5F5F0', // Off-white background
        }
      },
      backgroundImage: {
        // Updated to match the Hero component image
        'hero-pattern': "linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1615887023516-9b6c5062a5a3?q=80&w=2600&auto=format&fit=crop')",
      }
    },
  },
  plugins: [],
};
