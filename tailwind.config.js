/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: {
    content: [
      "./assets/**/*.js",
      "./templates/**/*.html.twig",
    ]
  },
  theme: {
    extend: {},
  },
  plugins: [],
}
