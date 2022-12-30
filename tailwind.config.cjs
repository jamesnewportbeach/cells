/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  plugins: [require('daisyui')],
  content: ['./src/**/*.{html,js,ts}'],
  daisyui: {
      styled: true,
      themes: true,
      base: true,
      utils: true,
      logs: true,
      rtl: false,
      darkTheme: 'light',
      themes: [
          {
              mytheme: {
                  primary: '#0e7490',
                  secondary: '#e5e7eb',
                  accent: '#1FB2A6',
                  neutral: '#191D24',
                  'base-100': '#2A303C',
                  info: '#3ABFF8',
                  success: '#36D399',
                  warning: '#FBBD23',
                  error: '#F87272'
              }
          }
      ]
  }
};
