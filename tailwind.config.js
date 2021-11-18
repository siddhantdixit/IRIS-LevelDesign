module.exports = {
  purge: [
    './public/gamedesign/**/*.html',
    './public/gamedesign/**/*.vue',
    './public/gamedesign/**/*.jsx',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
