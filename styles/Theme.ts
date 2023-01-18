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

const breakPoints = [
  // base: ~ 320px,
  '320px', // 320px ~ 768px
  '768px', // 768px ~ 960px
  '960px', // 960px ~ 1200px
  '1200px', // 1200px ~ 1536px
  '1536px', // 1536px ~
];

export const mq = breakPoints.map((bp) => `@media (min-width: ${bp})`);

const theme = { colors, animation, mq };

export default theme;
