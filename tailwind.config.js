/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      'neutral-100': '#F3F3F3',
      'neutral-300': '#E3DEDE',
      'neutral-500': '#666666',
      'green-100': '#D9F2D9',
      'red-100': '#FEE8E8',
      'red-300': '#F61A1A',
      'green-500': '#003817',
      'gray-dark': '#273444',
      dark: '#030303',
      white: '#8492a6',
    },
    fontFamily: {
      montserrat: ['Montserrat', 'sans-serif'],
    },
  },
  plugins: [],
};
