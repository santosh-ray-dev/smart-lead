/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
 ],
  theme: {
    extend: {
      colors: {
        primary: "#757AE9",
        positive:"#6CCB4B",
        negative: "#CB4B4B",
        warning: "#FBC61E",

      },
    },
  },
  plugins: [],
}

