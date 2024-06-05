/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements-react/dist/js/**/*.js",
  ],
  theme: {
    screens: {
      sm: '375px',
      md: '895px',
      lg: '1024px',
      xl: '1280px',
    },
      extend: {
        colors: {
            'blue': '#ob1354',
            'newblue': '1657baa',
            'purple': 'a155b9',
            'pink': 'f765a3',
            'heading-color': '#b4957c'
          },
          opacity: {
            '54': '.54'
          }
      },
  },
  darkMode: "class",
  plugins: [require("tw-elements-react/dist/plugin.cjs")
  ]
  }

