/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  daisyui: {
    themes: [
      {
        nord: { ...require("daisyui/src/theming/themes")["nord"] },
        dim: {
          ...require("daisyui/src/theming/themes")["dim"],
          secondary: "slate"
        }
      }
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}

