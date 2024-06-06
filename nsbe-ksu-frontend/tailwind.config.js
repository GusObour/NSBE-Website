/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: '#512888',
        lightGray: '#D1D1D1',
        gray: '#A7A7A7',
        black: '#000000',
        white: '#FFFFFF',
        'off-white': '#C3B1E1'
      },
    },
  },
  plugins: [],
}
