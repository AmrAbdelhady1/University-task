/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rotextrabold: ['Rotextra'],
        rotitalic: ['Rotitalic'],
        rotbold: ['Rotbold'],
        rotlight: ['Rotlight'],
        rotlightit: ['Rotlightit'],
        rot: ['Rot']
      },
    },
  },
  plugins: [],
}
