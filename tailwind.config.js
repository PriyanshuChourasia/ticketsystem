/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'themePrimary':"#223240",
        "themeSecondary":"#3E8C60",
        "themeTertiary":"#63BF7A",
        "themeLight":"#93D94E",
        "themeGray":"#F2F2F2"
      }
    },
  },
  plugins: [],
}