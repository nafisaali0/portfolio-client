/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    // daisyui: {
    //   themes: ["light", "dark", "cupcake"],
    // },
    extend: {
      colors: {
        dark: "#0c0f11", // Custom dark mode background color
      },
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
      },
    },
  },
  plugins: [daisyui],
};
