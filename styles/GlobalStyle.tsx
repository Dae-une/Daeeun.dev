import { Global, css } from '@emotion/react';

const style = css`
  * {
    box-sizing: border-box;
  }
  html {
    scroll-behavior: smooth;
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
    color: white;
  }
  blockquote {
    color: #eff4f9;
    background-color: #537aaa;
    column-gap: 10px;
    border-left: 4px solid;
    padding: 4px 10px;
    border-radius: 8px;
  }
  code {
    background-color: #45658c;
    color: #eff4f9;
    font-weight: 700;
    border-radius: 6px;
    padding: 2px 5px;
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
  pre > code {
    background: transparent;
  }

  /* code container */

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

  /* code block css */
  .hljs-keyword,
  .hljs-tag {
    color: #9bdafa;
  }

  .hljs-attr {
    color: #9f7cbd;
  }

  .hljs-title + .function_,
  .function_ {
    color: #84a1ed;
  }

  .hljs-tag > .hljs-name,
  .class_,
  .hljs-params {
    color: #e0787b;
  }

  .hljs-string {
    color: #cae797;
  }

  .hljs-comment {
    color: #aaa;
  }

  .post-underline {
    position: relative;
  }

  .post-underline::after {
    content: '';
    display: block;
    width: 0;
    height: 9px;
    position: absolute;
    left: 0;
    bottom: 0;
    background: #f87315;
    z-index: -1;
  }

  .post-title:hover .post-underline::after {
    width: 100%;
    transition: width 0.3s;
  }
  .toc-h1 {
  }
  .toc-h2 {
    margin-left: 15px;
    padding-left: 6px;
    border-left: 1px solid gray;
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
  }

  .toc-h3 {
    margin-left: 30px;
    padding-left: 6px;
    border-left: 1px solid gray;
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
  }
`;

const GlobalStyle = () => {
  return <Global styles={style} />;
};

export default GlobalStyle;
