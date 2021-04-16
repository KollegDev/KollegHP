module.exports = {
  mode: 'jit',
  purge: [],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
  presets: [
    require("./spearlux.js")
  ],
  theme: {
    backdropFilter: {
      'none': 'none',
      'blur': 'blur(20px)',
    },
  },
  plugins: [
    require('tailwindcss-filters'),
  ],
};
