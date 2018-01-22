const UNIT = 10;
const PRIMARY = '#9C27B0';
const BLACK = '#000000';
const WHITE = '#ffffff';

export default {
  // -- Colors
  WHITE,
  BLACK,
  PRIMARY,
  TRANSPARENT: 'transparent',

  BORDER_COLOR: '#cdd4d9',
  BOX_SHADOW: '4px 4px rgba(6, 41, 66, 0.1)',

  // -- Fonts
  FONT: {
    SIZE: {
      SMALL: UNIT * 1.2,
      NORMAL: UNIT * 1.6,
      LARGE: UNIT * 2,
      EXTRA_LARGE: UNIT * 2.4,
    },
    WEIGHT: {
      LIGHT: '200',
      BOLD: '700',
    },
  },

  // -- Sizes
  UNIT,
  OFFSET: UNIT * 1.6,
};
