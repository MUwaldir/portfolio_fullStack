/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Rutas de archivos de React
    './public/index.html',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  variants: {
    extend: {
      display: ['responsive', 'group-hover', 'group-focus', 'focus-within'],
    },
  },
}

