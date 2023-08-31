const { nextui } = require('@nextui-org/react')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js, ts, jsx, tsx, mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      boxShadow: {
        white: '0 8px 12px 1px rgba(255, 255, 255, 0.1), 0 4px 8px 1px rgba(255, 255, 255, 0.08)',
      },
    },
  },
  darkMode: 'class',
  plugins: [require('daisyui'), nextui],
  daisyui: {
    themes: ['light']
  },
}

