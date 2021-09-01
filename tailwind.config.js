module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      dark: "#1a2733",
      mid: "#212C38",
      light: "#27323E",
      // bright: "#3A8DFF",
      bright: "rgb(80,162,255)",
      "off-white": "#9DFFEB",
      "light-grey": "#A9ADB0",
      "dark-grey": "#9CA0A2",
      unread: "#FF8300",
      email: "rgba(80, 162, 255, 0.05)",
      new: "rgba(236, 233, 230, 0.1)",
    },
    screens: {
      xs: "200px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    flex: {
      img: "0 0 50px",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
