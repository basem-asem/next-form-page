/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'RedColor': 'hsl(0, 100%, 74%)',
        'GreenColor': 'hsl(154, 59%, 51%)',
        'blueColor': 'hsl(248, 32%, 49%)',
        'darkBlueColor': 'hsl(249, 10%, 26%)',
        'GrayishBlueColor': 'hsl(246, 25%, 77%)',
      },
      backgroundColor: {
        'RedColor': 'hsl(0, 100%, 74%)',
        'GreenColor': 'hsl(154, 59%, 51%)',
        'blueColor': 'hsl(248, 32%, 49%)',
        'darkBlueColor': 'hsl(249, 10%, 26%)',
        'GrayishBlueColor': 'hsl(246, 25%, 77%)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
