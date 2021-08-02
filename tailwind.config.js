module.exports = {
  purge: {
    content: ['./src/**/*.html'],
    content: ['./src/**/*.liquid'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
        borderWidth: {
            '1': '1px'
        },
    }
  },
  variants: {
    borderRadius: ['hover', 'focus'],
  },
  plugins: [],
}