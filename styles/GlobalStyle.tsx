import { Global, css } from '@emotion/react';
import emotionReset from 'emotion-reset';

const style = css`
  ${emotionReset}
  * {
    box-sizing: border-box;
  }
  body {
    background-color: #202125;
    color: white;
    position: relative;
    max-width: 52rem;
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
  a {
    text-decoration: none;
  }
`;

const GlobalStyle = () => {
  return <Global styles={style} />;
};

export default GlobalStyle;
