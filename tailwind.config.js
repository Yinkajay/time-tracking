/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'Lightred': '#ff8c66',
        'Softblue': '#56c2e6',
        'Lighterred': '#ff5c7c',
        'Limegreen': '#4acf81',
        'Violet': '#7536d3',
        'Softorange': '#f1c65b'
      }
    },
  },
  plugins: [],
}

