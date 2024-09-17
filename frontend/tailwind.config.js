/** @type {import('tailwindcss').Config} */
import { palettes } from "@tailus/themer-plugins"

export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors : palettes.trust
    },
  },
  plugins: [],
}

