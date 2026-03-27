/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        beige: {
          DEFAULT: '#f5ecd7',
          dark: '#e8d5ba',
          deeper: '#d4b896',
          light: '#faf6ee',
        },
        brown: {
          DEFAULT: '#5c3a1e',
          mid: '#8b5e3c',
          light: '#c49a6c',
        },
        orange: {
          DEFAULT: '#E67E22',
          light: '#e8854a',
          pale: '#fde8d8',
        },
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
