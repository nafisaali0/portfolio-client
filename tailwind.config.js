/** @type {import('tailwindcss').Config} */

import daisyui from "daisyui";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  // fontFamily: {
  //   playfair: ["Playfair Display", "serif"],
  // },
  // colors: {
  //   teal: "#2b6777",
  // },
  theme: {
    extend: {},
  },
  plugins: [daisyui],
};
