/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        'bg-white': '#E7F3FF',
        'bg-blue': '#1154A3',
        'txt-blue': '#1154A3',
        'txt-black': '#3B3C3F',
        'disable-gray': '#B6B7B9',
        'border-gray': '#D9DADD',
        'btn-orange': '#DA753C',
        'bg-gray': '#F2F3F6',
      },
    },
  },
  plugins: [],
}
