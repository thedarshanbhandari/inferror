/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      keyframes:{
        'trans-right':{
          '0% , 100%':{ transform: 'translateX(10px)'},
          '50%':{transform: 'tranlateX(0)'}
        }
      },
      animation:{
        'trans-right':'trans-right 1.5s ease-in-out infinite'
      }
    },
  },
  plugins: [],
}


