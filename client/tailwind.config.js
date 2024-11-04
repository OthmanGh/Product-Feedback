const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],

  theme: {
    extend: {
      backgroundImage: {
        'mobile-header': "url('/suggestions/mobile/background-header.png')",

        'tablet-header': "url('/suggestions/tablet/background-header.png')",

        'desktop-header': "url('/suggestions/desktop/background-header.png')",
      },

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

        'slate-lavender': '#8C92B3',
        'misty-blue': '#CDD2EE',
        'moonlit-sky': '#CFD7FF',
        peach: '#F49F85',
        'blue-wave': '#62BCFA',
        navy: '#4661E6',
        darkBlue: '#1D1D2E',
        white: '#FFFFFF',
        lightGray: '#F2F4FF',
        darkGray: '#647196',
        coral: '#F49F85',
        sky: '#62BCFA',
        'soft-periwinkle': '#8397F8 ',
        red: {
          DEFAULT: '#D73737',
        },
      },

      fontFamily: {
        sans: ['Jost', ...fontFamily.sans],
      },

      fontSize: {
        'heading-1': ['24px', { lineHeight: '35px', letterSpacing: '0.3px' }],
        'heading-2': ['20px', { lineHeight: '29px', letterSpacing: '0.25px' }],
        'heading-3': ['18px', { lineHeight: '26px', letterSpacing: '0.25px' }],
        'heading-4': ['14px', { lineHeight: '20px', letterSpacing: '0.2px' }],
        'body-1': ['16px', { lineHeight: '23px' }],
        'body-2': ['15px', { lineHeight: '22px' }],
        'body-3': ['13px', { lineHeight: '20px' }],
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
