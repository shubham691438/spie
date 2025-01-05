import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite/**/*.js",
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // For src directory
  ],
  plugins: [
    require('flowbite/plugin')({
      charts: true,
  }),
    addVariablesForColors,
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 10s linear infinite', // Slow rotation animation
        glitcher: 'glitcher 0.4s infinite', // Glitch animation
        'spin-reverse': 'spin-reverse 8s linear infinite',
        'spin-faster': 'spin 6s linear infinite',
      },
      colors: {
        primary: "#00e0ff",
        secondary: "#121212",
      },
      keyframes: {
        glitcher: {
          '0%': { textShadow: '.04em 0 0 #7b00ff, -.04em -.06em 0 #0037ff, .05em .01em 0 #ff7700' },
          '15%': { textShadow: '.04em 0 0 #7b00ff, -.04em -.06em 0 #0037ff .025em .04em 0 #ff7700', transform: 'translate(3px, 2px)' },
          '16%': { textShadow: '-.04em -.025em 0 #7b00ff, .050em .035em 0 #0037ff -.05em -.05em 0 #ff7700', transform: 'translate(4px, 3px)' },
          '49%': { textShadow: '-.04em -.025em 0 #7b00ff, .050em .035em 0 #0037ff -.05em -.05em 0 #ff7700', transform: 'translate(3px, 2px)' },
          '50%': { textShadow: '.04em .035em 0 #7b00ff, .06em 0 0 #0037ff 0 -.04em 0 #ff7700', transform: 'translate(2px, 1px)' },
          '99%': { textShadow: '.04em .035em 0 #7b00ff, .06em 0 0 #0037ff, 0 -.04em 0 #ff7700', transform: 'translate(1px, 0px)' },
          '100%': { textShadow: '-.04em 0 0 #7b00ff, -.06em -.04em 0 #0037ff -.04em -.025em 0 #ff7700' },
        },
        'spin-reverse': {
          from: { transform: 'rotate(360deg)' },
          to: { transform: 'rotate(0deg)' },
        },
      },
    },
  },
};

// This plugin adds each Tailwind color as a global CSS variable, e.g., var(--gray-200).
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
