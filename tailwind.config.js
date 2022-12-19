/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        ChakraPetch: ["Chakra Petch", ...defaultTheme.fontFamily.sans]
      },
      animation: {
        "highlightText" : "highlightText 3s ease-in-out 10",
        "blurHide" : "blurHide 2s",
        "blurShow" : "blurShow 3s",
        "blurShowLate" : "blurShow 7s"
      },
      keyframes: (theme) => ({
        highlightText: {
          '0%' : {borderBottomColor: theme("colors.emerald.300")},
          '33%' : {borderBottomColor: theme("colors.indigo.300")},
          '66%' : {borderBottomColor: theme("colors.fuchsia.300")},
          '100%' : {borderBottomColor: theme("colors.emerald.300")}
        },
        blurHide: {
          '0%' : {visibility: 'visible', opacity:'1', filter:'blur(0)'},
          '50%' : {opacity:'1', filter:'blur(0)'},
          '100%' : {opacity:'0', filter:'blur(10px)'},
        },
        blurShow: {
          '0%' : {opacity:'0', filter:'blur(10px)', transform:'translateY(25vh)'},
          '50%' : {opacity:'0', filter:'blur(10px)'},
          '100%' : {opacity:'1', filter:'blur(0)'},
        }
      })

    },
  },
  plugins: [],
}