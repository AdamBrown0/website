import { type Config } from "tailwindcss";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          500: "#1abc9c",
        },
        catppuccin: {
          base: "#24273a",
          text: "#cad3f5",
          crust: "#181926",
          mauve: "#c6a0f6",
        },
      },
      fontFamily: {
        iosevka: ['"Iosevka"', 'monospace'],
      },
    },
  },
} satisfies Config;
