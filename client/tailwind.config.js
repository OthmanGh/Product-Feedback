const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],

  theme: {
    extend: {
      colors: {
        purple: {
          DEFAULT: '#AD1FEA',
          light: '#F2F4FF',
        },

        blue: {
          DEFAULT: '#4661E6',
          light: '#F7F8FD',
          dark: '#3A4374',
        },

        navy: '#4661E6',
        darkBlue: '#1D1D2E',
        white: '#FFFFFF',
        lightGray: '#F2F4FF',
        darkGray: '#647196',
        coral: '#F49F85',
        sky: '#62BCFA',

        red: {
          DEFAULT: '#D73737',
        },
      },

      fontFamily: {
        sans: ['Jost', ...fontFamily.sans],
      },

      fontSize: {
        h1: ['24px', { lineHeight: '35px', letterSpacing: '0.3px' }],
        h2: ['20px', { lineHeight: '29px', letterSpacing: '0.25px' }],
        h3: ['18px', { lineHeight: '26px', letterSpacing: '0.25px' }],
        h4: ['14px', { lineHeight: '20px', letterSpacing: '0.2px' }],
        body1: ['16px', { lineHeight: '23px' }],
        body2: ['15px', { lineHeight: '22px' }],
        body3: ['14px', { lineHeight: '20px' }],
      },

      spacing: {
        'btn-padding': '12px 24px',
        'field-padding': '10px 15px',
      },

      boxShadow: {
        buttonHover: '0 4px 10px rgba(70, 97, 230, 0.3)',
      },

      borderRadius: {
        DEFAULT: '5px',
      },
    },
  },
  plugins: [],
};
