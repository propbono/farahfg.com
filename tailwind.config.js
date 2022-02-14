const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          default: "2rem",
          xs: "1rem",
          sm: "2rem",
          lg: "0rem",
        },
      },
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "#A32035",
        navy: "#005c82",
        black: "#2f4858",
      },
    },
  },
  plugins: [],
};
