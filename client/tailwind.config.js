/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  content: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Lato', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      colors: {
        primary: '#2a9d8f',
        secondary: '#264653',
        accent: '#e9c46a',
        neutral: '#f4a261',
        base: '#e76f51',
      },
    },
  },
  plugins: [],
};
