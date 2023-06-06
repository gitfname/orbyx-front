/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.jsx",
    "./pages/**/*.jsx",
    "./components/**/*.jsx"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui")
  ],
}

