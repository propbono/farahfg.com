const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
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
        secondary: "#0D4157",
        "secondary-light": "#607680",
        navy: "#1077A3",
        black: "#212121",
        brown: "#3D2B25",
        white: "#fef9f8",
        "off-white": "#f5f5f5",
      },
    },
  },
  plugins: [],
};
