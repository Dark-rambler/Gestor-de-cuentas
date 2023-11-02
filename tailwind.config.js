/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#070705",
        secondary: "#03FA6E",
        tertiary: "#BF3401",
      },
    },
  },
  plugins: [],
}

