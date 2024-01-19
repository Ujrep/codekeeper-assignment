/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        cyan: '0px 0px 180px 180px bg-cyan',
        heliotrope: '0px 0px 180px 180px bg-heliotrope',
        'light-cyan': '0px 0px 180px 180px bg-light-cyan',
        'blue-ribbon': '0px 0px 180px 180px bg-blue-ribbon',
      },
      fontSize: {
        xxs: ['10px', '12px'],
        xs: ['12px', '16px'],
        sm: ['14px', '18px'],
        base: ['16px', '20px'],
        lg: ['18px', '24px'],
        xl: ['24px', '30px'],
        '2xl': ['36px', '42px'],
        '3xl': ['80px', '110px'],
      },
    },
    colors: {
      transparent: 'transparent',
      'main-blue': '#2AEAFA',
      lime: '#CFF010',
      'cyber-pink': '#EA2EF8',
      green: '#5BF243',
      red: '#F05166',
      yellow: '#DDB524',
      'navy-blue': '#181D38',
      'dark-blue': '#212429',
      'electric-blue': '#131945',
      white: '#FFF',
      black: '#000',
      gray: '#777777',
      'light-gray': '#AAAAAA',
      'dark-gray': '#1E1F26',
    },
    fontFamily: {
      mulish: ['Mulish'],
    },
  },
  plugins: [],
}
