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
          500: "#040926"
        },
        catppuccin: {
          500: "#8839ef"
        }
      },
    },
  },
} satisfies Config;