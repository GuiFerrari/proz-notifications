/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        green: {
          400: '#4CAF50'
        },
        purple: {
          300: '#7A5CA8',
          800: '#593493'
        },
        gray: {
          100: '#D5D5D5'
        }
      }
    },
  },
  plugins: [],
}
