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
        bodyBG: "#18181B",
        navBG: "#1a1c1f4d",
        grayLightProfileText: "#64748B",
        grayDarkProfileText: "#9F9F9F",
        textSmalllight: "#0D1117",
        orangeDeep: "#f43f5e",
        orangeSoft: "#FB923C",
        grayDarkAlltext: "#D9D9D9",
        gradienthover:
          "hover:bg-gradient-to-r hover:from-orangeDeep hover:via-grayLightProfileText hover:to-orangeSoft hover:text-transparent hover:bg-clip-text",
        gradientBG:
          "bg-gradient-to-r from-orangeDeep via-grayLightProfileText to-orangeSoft text-transparent bg-clip-text",
      },
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
      },
    },
  },
  plugins: [daisyui],
};
