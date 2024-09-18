/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        dark: {
          hard: "#000000",
          soft: "#253f4b"
        }
      },
      fontFamily: {
        opensans: ["'Open Sans'", "sans-serif"],
        roboto: ["'Roboto'", "sans-serif"]
      }
    },
  },
  plugins: [],
}

