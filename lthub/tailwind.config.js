/** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

module.exports = {
  mode: 'jit',
  darkMode: false, // 'media' or 'class'
  purge: {
    content: [
      './src/app/**/*.{js,ts,jsx,tsx}',
      './src/app/pages/**/*.{js,ts,jsx,tsx}',
      './src/app/components/**/*.{js,ts,jsx,tsx}'
    ],
    options: {
      // https://purgecss.com/safelisting.html#patterns
      safelist: {
        standard: [/^bg-/, /^text-/],
      },
    },
  },
  content: [],
  theme: {
    extend: {
      colors: {
        'wineRed': "#4E143E",
      },
    },
  },
  plugins: [],
}
