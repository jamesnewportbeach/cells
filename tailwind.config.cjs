/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  plugins: [require('daisyui')],
  content: ['./src/**/*.{html,js,svelte,ts}'],
  daisyui: {
      styled: true,
      themes: true,
      base: true,
      utils: true,
      logs: true,
      rtl: false,
      darkTheme: 'dark'
  }
};
