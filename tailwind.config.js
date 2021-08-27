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
      "off-white": "#EBE9E5",
      "light-grey": "#A9ADB0",
      "dark-grey": "#9CA0A2",
      unread: "#FF8300",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
