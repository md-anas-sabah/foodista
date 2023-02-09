/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mart: "#211d59",
        button: "#FE0458",
      },
      fontFamily: {
        // // Roboto: ['"Roboto Condensed"', ...defaultTheme.fontFamily.sans],
        // Roboto: ["Roboto Condensed", "sans-serif"],
        // Bebas: ["Bebas Neue", "sans"],
      },
    },
  },
  plugins: [],
};
