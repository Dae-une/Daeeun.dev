import { Global, css } from '@emotion/react';
import { reset } from 'styled-reset';

const style = css`
  ${reset}
  * {
    box-sizing: border-box;
  }
  body {
    background-color: #343a40;
    position: relative;
    max-width: 37.5rem;
    margin: 0 auto;
    min-height: 42.5rem;
    padding: 0;
  }
  button {
    border: none;
    background: none;
    padding: 0;
    cursor: pointer;
  }
`;
const GlobalStyle = () => {
  return <Global styles={style} />;
};

export default GlobalStyle;
