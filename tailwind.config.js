module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      dark: "#1a2733",
      mid: "#212C38",
      light: "#27323E",
      bright: "#3A8DFF",
      "light-grey": "#EBE9E5",
      "dark-grey": "#9CA0A2",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
