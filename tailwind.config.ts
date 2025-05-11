import { type Config } from "tailwindcss";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx}",
    "./styles/**/*.{scss,css}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          500: "#1abc9c",
        },
        catppuccin: {
          base: "#1e1e2e",
          text: "#cdd6f4",
          crust: "#11111b",
          mauve: "#cba6f7",
          red: "#f38ba8"
        },
      },
      fontFamily: {
        iosevka: ['"Iosevka"', 'monospace'],
      },
    },
  },
} satisfies Config;
