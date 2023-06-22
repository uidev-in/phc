/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        11: "3rem",
      },
      colors: {
        "primary-gray": "#343433",
        "primary-purple": "#573abd",
        "secondary-gray": "#CDCDCD",
        "secondary-dark-gray": "#454545",
        "primary-light-gray": "#F4F4F4",
        "primary-orange": "#FF9222",
      },
      screens: {
        xs: "576px",
        mlg: "992px",
      },
      width: {
        81: "340px",
        82: "334px",
      },
    },
  },
  plugins: [],
};
