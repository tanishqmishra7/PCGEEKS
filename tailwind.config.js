/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        // 'back': "url('/bg3.png')"

      },
      colors:{
        'bgcolor':'#141414',
        'iconcolor':'#3f3f3f'
      }
    },

  },
  plugins: [],
}