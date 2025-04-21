/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./**/*.{js,ts,jsx,tsx,mdx}", 
    ],
    theme: {
      extend: {
        textShadow: {
          sm: '1px 1px 2px rgba(0, 0, 0, 0.25)',
          DEFAULT: '2px 2px 4px rgba(0, 0, 0, 0.3)',
          lg: '3px 3px 6px rgba(0, 0, 0, 0.4)',
          blueGlow: '0 0 5px #3b82f6',
        },
      },
    },
    plugins: [
      require('tailwindcss-textshadow')
    ],
  }
  