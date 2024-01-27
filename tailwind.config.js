/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      backgroundImage:{
        'wifi': "url('./src/images/wifi2.jpeg')"
      },
      fontFamily:{
        montserrat:['Montserrat', 'sans-serif']
      }
    },
    daisyui: {
      themes: ['light', 'dark']
     },
  },
  plugins: [
    require('@shrutibalasa/tailwind-grid-auto-fit'),
    require("daisyui")
    
  ],}
