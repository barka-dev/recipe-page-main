/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'rcp-white': 'hsl(0, 0%, 100%)',
        'rcp-stone': {
          100: 'hsl(30, 54%, 90%)',
          150: 'hsl(30, 18%, 87%)',
          600: 'hsl(30, 10%, 34%)',
          900: 'hsl(24, 5%, 18%)',
        },
        'rcp-brown':{
          800: 'hsl(14, 45%, 36%)',
        },
        'rcp-rose': {
          800: 'hsl(332, 51%, 32%)',
          50: 'hsl(330, 100%, 98%)',
        }
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        youngSerif: ['YoungSerif', 'serif'],
      },
    },
  },
  plugins: [],
}

