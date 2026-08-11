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
        primary: {
          50: '#f0f4f8',
          100: '#d9e2ec',
          200: '#bcccdc',
          300: '#9fb3c8',
          400: '#829ab1',
          500: '#627d98',
          600: '#486581',
          700: '#334e68',
          800: '#243b53',
          900: '#102a43',
          950: '#0a1929',
        },
        accent: {
          50: '#fdf8f0',
          100: '#f9eddb',
          200: '#f3dbb7',
          300: '#ecc88e',
          400: '#e4b05f',
          500: '#d4953a',
          600: '#b87a2e',
          700: '#996028',
          800: '#7d4d26',
          900: '#674022',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
