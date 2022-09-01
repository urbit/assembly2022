/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {},
    colors: {
      silver: "rgba(0,0,0,0.03)",
      lavender: "#BEAAD2",
      melon: "#FAAA8C",
      green: "#AFCD50",
      "indigo-green": "#00B171",
      yellow: "#FEFFDA",
      blue: "#D5F8FD",
      gray: "rgba(0,0,0,0.6)",
      white: "#ffffff",
      black: "#000000",
      purple: "#231B2B",
      grey: "#878778"
    },
    fontFamily: {
      sans: "Inter",
      monospace: "Source Code Pro",
    },
  },
  plugins: [],
};
