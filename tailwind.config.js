/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Source Serif 4"', "Georgia", "sans-serif"],
      },
      screens: {
        laptop: "1025px",
        laptop_sm: "950px",
        tablet: "768px",
        tablet_sm: "650px",
        mobile: "425px",
      },
    },
  },
  plugins: [],
};
