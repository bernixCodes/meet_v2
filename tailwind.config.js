/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "c-green": "#4D96A9",
        "c-green-light": "#8FE3F9",
        "c-purple": "#855FB1",
        "c-purple-light": "#D9B8FF",
        dark: "#28283D",
        light: "#FAFAFA",
        "light-gray": "#87879D",
      },
      screens: {
        sm: "280px",
        md: "768px",
        lg: "1024px",
      },
    },
  },
  plugins: [],
};
