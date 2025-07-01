const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./templates/**/*.html", "./content/**/*.{html,md}"],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#353A84",
          secondary: "#FF6262",
          tertiary: "#FF7373",
          light: "#FFFFFF",
        },
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        display: ["Geist", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("@designbycode/tailwindcss-text-stroke")],
};
