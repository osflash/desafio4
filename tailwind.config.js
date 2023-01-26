/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        background: '#1a1924',
        text: '#e1e1e6',
        me: '#07847E',
        online: '#00B37E',
        user: '#633BBC',
        input: '#282843'
      },
      screens: {
        mobile: '375px',
        desktop: '1024px'
      },
      fontSize: {
        'text-base': ['16px', '18.75px'],
        'text-xs': ['12px', '14.06px']
      }
    }
  },
  plugins: []
}
