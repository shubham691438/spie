/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 10s linear infinite', // Slow rotation animation
      },
    },
  },
  plugins: [],
  theme: {
    extend: {
      colors: {
        primary: "#00e0ff",
        secondary: "#121212",
      },
    },
  },

  plugins: [],
}