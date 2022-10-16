/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
   "./node_modules/flowbite-react/**/*.js",
   "./pages/**/*.{js,ts,jsx,tsx}",
   "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      Athiti : ["Athiti","sans-serif"],
      Commissioner : ["Commissioner", "sans-serif"],
      Dosis : ["Dosis", "sans-serif"],
      Kanit : ["Kanit", "sans-serif"],
      League_Spartan : ["League Spartan", "sans-serif"],
      
    },
  },
  plugins: [
   require("flowbite/plugin"),
   require('ps-scrollbar-tailwind'),
  ],
}
