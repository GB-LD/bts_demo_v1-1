/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: {
    content: [
      "./assets/**/*.js",
      "./templates/**/*.html.twig",
      "./src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js",
    ]
  },
  theme: {
    extend: {
      colors: {
        'orange': {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
        'brand': {
          50: '#e5f0e5',
          100: '#cce1cc',
          200: '#99c398',
          300: '#7fb47e',
          400: '#66a464',
          500: '#548d53',
          600: '#457444',
          700: '#355a35',
          800: '#264026',
          900: '#2e382e',
        },
        'yellow-onatera': {
          50: '#fdf5de',
          100: '#fbedc7',
          200: '#f8e4ab',
          300: '#f6db8f',
          400: '#f4d274',
          500: '#edc557',
          600: '#eaa527',
          700: '#e09a1a',
          800: '#c7850d',
          900: '#af7102',
        },
        'brown-onatera': {
          50: '#faf7f5',
          100: '#f0e8e1',
          200: '#e0d1c4',
          300: '#ccb39d',
          400: '#b08e6f',
          500: '#9f7851',
          600: '#90663d',
          700: '#72450f',
          800: '#573408',
          900: '#482903',
        },
        'purple-onatera': {
          100: '#eae4ed',
          200: '#dcd2e1',
          500: '#765b81',
          600: '#624a6c',
          700: '#584162',
        },
        'pink-onatera': {
          50: '#fcf5f1',
          100: '#faebe4',
          200: '#f4d7c9',
          300: '#eec3ae',
          400: '#e8af93',
          500: '#e5a485',
          600: '#d68c68',
          700: '#c7754b',
          800: '#ad5930',
        },
        'midnight': "#292248",
        'bts-yellow': "#f0f051",
      },
    },
  },
  plugins: [
    require('tw-elements/dist/plugin'),
    require("tailgrids/plugin")
  ],
}
