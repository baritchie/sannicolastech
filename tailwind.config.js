module.exports = {
  purge: {
    content: ['./src/**/*.html'],
    content: ['./src/**/*.liquid'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {

    }
  },
  variants: {
    borderRadius: ['hover', 'focus'],
  },
  plugins: [],
}