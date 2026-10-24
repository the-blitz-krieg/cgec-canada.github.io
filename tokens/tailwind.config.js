// Canada Global Export Council: Tailwind theme extension
module.exports = {
  theme: {
    extend: {
      colors: {
        cgec: {
          red: '#C5162E', 'red-hover': '#A51226',
          ink: '#16202E', body: '#3A4350', slate: '#5B6370',
          paper: '#FBFAF8', stone: '#E4E2DE', rule: '#C9C6C0',
          mist: '#C9CED8', dusk: '#4A5466', blush: '#F06A7A',
        },
      },
      fontFamily: { sans: ['"Libre Franklin"', 'Arial', 'sans-serif'] },
      letterSpacing: { label: '0.16em', markets: '0.14em' },
      borderRadius: { DEFAULT: '2px' },
    },
  },
};
