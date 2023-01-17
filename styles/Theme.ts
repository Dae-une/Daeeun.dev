import { css } from '@emotion/react';

const colors = {
  gray: {
    1: '#34373d',
    2: '#202125',
  },
  yellow: {
    1: '#e0d716',
  },
  white: {
    1: '#FFFFFF',
  },
  purple: {
    1: '#8482F2',
  },
};

const animation = {
  hoverButton: css`
    &:hover {
      transform: scale(1.1);
      transition: 0.3s;
    }
  `,
};

const breakPoints = {
  // base: ~ 320px,
  sm: '320px', // 320px ~ 768px
  md: '768px', // 768px ~ 960px
  lg: '960px', // 960px ~ 1200px
  xl: '1200px', // 1200px ~ 1536px
  '2xl': '1536px', // 1536px ~
};

const theme = { colors, animation, breakPoints };

export default theme;
