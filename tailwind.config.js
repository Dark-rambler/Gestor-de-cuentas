/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0A3143',
        secondary: '#de6600',
        tertiary: '#BF3401'
      }
    }
  },
  plugins: []
}
