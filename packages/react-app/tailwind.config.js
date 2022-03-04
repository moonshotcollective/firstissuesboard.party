const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        orange: colors.orange,
        green: {
          "050": "#6dc5a0",
          "dark-green": "#337062",
          teal: "#2CAE92",
          header: "#6AC59F",
          "light-green": "#E2F3EC",
          imgBg: "#9ED5AA",
        },
        purple: {
          overlay: "#240871",
          imgText: "#8C65F7",
          textPurple: "#6F3FF5",
          darkpurple: "#0B0228",
          lightPurple: "#C9B8FF",
        },
        brown: {
          "dark-brown": "#262626",
        },
        gray: {
          "050": "#FFFFFF",
          1000: "#343a39",
        },
        red: {
          bloodred: "#ea1e5047",
          soldout: "#EB1E50",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
