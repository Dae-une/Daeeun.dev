import '@emotion/react';
import theme from './Theme';

type ThemeType = typeof theme;

declare module '@emtion/react' {
  export interface Theme extends ThemeType {}
}
