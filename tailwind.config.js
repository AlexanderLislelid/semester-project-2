export default {
  content: ["./*.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', "Georgia", "serif"],
        sans: ["Roboto", "system-ui", "sans-serif"],
      },
      borderRadius: { md: "6px", full: "9999px" },
    },
  },
  plugins: [],
};
