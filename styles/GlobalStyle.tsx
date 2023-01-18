import { Global, css } from '@emotion/react';
import emotionReset from 'emotion-reset';

const style = css`
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
  li {
    list-style: none;
  }
  pre {
    border: 1px solid white;
    border-radius: 8px;
    padding: 20px;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    line-height: 1.5;

    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;

    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
  }
  pre[class*='language-']::-moz-selection,
  pre[class*='language-'] ::-moz-selection,
  code[class*='language-']::-moz-selection,
  code[class*='language-'] ::-moz-selection {
    color: #fbf1c7;
    background: #7c6f64;
  }
  pre[class*='language-']::selection,
  pre[class*='language-'] ::selection,
  code[class*='language-']::selection,
  code[class*='language-'] ::selection {
    color: #fbf1c7; /* fg0 */
    background: #7c6f64; /* bg4 */
  }
  /* Code blocks */
  pre[class*='language-'] {
    padding: 1em;
    margin: 8px 0;
    overflow: auto;
    font-size: 14px;
  }

  :not(pre) > code[class*='language-'],
  pre[class*='language-'] {
    border-radius: 7px;
  }

  /* Inline code */
  :not(pre) > code[class*='language-'] {
    padding: 0.1em;
    border-radius: 0.3em;
    font-size: 14px;
  }

  .token {
    font-size: 14px;
  }

  .token.comment,
  .token.prolog,
  .token.cdata {
    color: #808b97;
  }

  .token.delimiter,
  .token.boolean,
  .token.keyword,
  .token.selector,
  .token.important,
  .token.atrule {
    color: #ff7b79;
  }

  .token.tag,
  .token.tag .punctuation,
  .token.doctype,
  .token.builtin {
    color: #15a5cf;
  }

  .token.entity,
  .token.number,
  .token.symbol {
    color: #59c0ff;
  }

  .token.string,
  .token.char {
    color: #ffa657;
  }

  .token.attr-value,
  .token.attr-value .punctuation {
    color: #a89984;
  }

  .token.url {
    color: #c0edf6;
    text-decoration: underline;
  }

  .token.bold {
    font-weight: bold;
  }

  .token.italic {
    font-style: italic;
  }

  .token.inserted {
    background: #a89984;
  }

  .token.deleted {
    background: #bb8395;
  }

  .code-line {
    padding-top: 2px;
    padding-bottom: 2px;
    font-size: 14px;
  }

  .rehype-code-title {
    border: 1px solid skyblue;
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
    padding: 5px 16px;
    font-weight: 700;
    margin-top: 8px;
    font-size: 14px;
  }

  .rehype-code-title + pre {
    margin-top: 0;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    border-top: 0;
  }

  pre {
    overflow-x: auto;
  }

  .code-highlight {
    float: left; /* 1 */
    min-width: 100%; /* 2 */
  }

  .code-line {
    display: block;
    padding-left: 16px;
    padding-right: 16px;
    margin-left: -16px;
    margin-right: -16px;
    font-size: 14px;
  }

  .code-line.inserted {
    background-color: rgba(16, 185, 129, 0.2); /* Set inserted line (+) color */
  }

  .code-line.deleted {
    background-color: rgba(239, 68, 68, 0.2); /* Set deleted line (-) color */
  }

  .highlight-line {
    margin-left: -16px;
    margin-right: -16px;
    background-color: rgba(55, 65, 81, 0.3); /* Set highlight bg color */
    border-left-width: 4px;
    font-size: 14px;
  }

  .line-number::before {
    display: inline-block;
    width: 1rem;
    text-align: right;
    margin-right: 16px;
    margin-left: -8px;
    color: rgb(156, 163, 175); /* Line number color */
    content: attr(line);
  }
`;

const GlobalStyle = () => {
  return <Global styles={style} />;
};

export default GlobalStyle;
