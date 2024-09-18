/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFFFFF",
        dark: {
          hard: "#000000",
          soft: "#253f4b"
        }
      },
      fontFamily: {
        opensans: [],
        roboto: []
      }
    },
  },
  plugins: [],
}

