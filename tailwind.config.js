/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {},
    colors: {
      red: "#FFDADB",
      green: "#DCFFEA",
      "indigo-green": "#00B171",
      yellow: "#FEFFDA",
      blue: "#D5F8FD",
      gray: "rgba(0,0,0,0.6)",
      white: "#ffffff",
    },
    fontFamily: {
      sans: "Inter",
      monospace: "Source Code Pro",
    },
  },
  plugins: [],
};
