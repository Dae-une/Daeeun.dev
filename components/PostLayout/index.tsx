import React, { FC } from 'react';
import { MDXProvider } from '@mdx-js/react';
import { css } from '@emotion/react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';

interface LayoutProps {
  children: React.ReactNode;
}

const customComponents = {
  h1: (props: Object) => (
    <h1
      css={css`
        font-size: 36px;
        margin-top: 40px;
      `}
      {...props}
    />
  ),
  h2: (props: Object) => (
    <h1
      css={css`
        font-size: 32px;
        margin-top: 36px;
      `}
      {...props}
    />
  ),
  h3: (props: Object) => (
    <h1
      css={css`
        font-size: 24px;
        margin-top: 32px;
      `}
      {...props}
    />
  ),
  h4: (props: Object) => (
    <h1
      css={css`
        font-size: 10px;
        margin-top: 28px;
      `}
      {...props}
    />
  ),
  p: (props: Object) => (
    <p
      css={css`
        margin-top: 16px;
      `}
    />
  ),
  li: (props: Object) => (
    <li
      css={css`
        p {
          display: inline;
        }
      `}
      {...props}
    />
  ),
  ol: (props: Object) => (
    <ol
      css={css`
        margin-top: 16px;
        list-style-position: inside;
      `}
      {...props}
    />
  ),
  ul: (props: Object) => (
    <ul
      css={css`
        font-size: 16px;
        margin-top: 16px;
        list-style-position: inside;
        * > ul {
          margin: 0;
          margin-left: 20px;
        }
      `}
      {...props}
    />
  ),
  a: (props: Object) => (
    <a
      css={css`
        &:hover {
          text-decoration: underline;
        }
        color: #1a365d;
      `}
      {...props}
    />
  ),
  blockquote: ({ ...props }) => {
    const { children } = props;

    return (
      <blockquote
        css={css`
          color: #1e1e1e;
          background-color: #1a365d;
          column-gap: 10px;
          border-left: 4px solid;
          padding: 10px;
          border-radius: 6px;
          margin-top: 20px;
        `}
        {...props}
      >
        <div
          css={css`
            display: flex;
            justify-content: center;
            align-items: center;
          `}
        >
          <svg width="18" height="18" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path
              d="m15.538 18.999-.29 1.259a2.25 2.25 0 0 1-2.02 1.735l-.173.007h-2.111a2.25 2.25 0 0 1-2.147-1.577l-.046-.167-.29-1.257h7.077ZM12 2.001a7.25 7.25 0 0 1 7.25 7.25c0 2.136-.936 4.093-2.765 5.84a.25.25 0 0 0-.071.125l-.528 2.283H8.114l-.526-2.283a.25.25 0 0 0-.071-.124C5.687 13.344 4.75 11.387 4.75 9.25A7.25 7.25 0 0 1 12 2.001Z"
              fill="currentColor"
            />
          </svg>
        </div>
        <div
          css={css`
            display: flex;
            flex-direction: column;
          `}
        >
          {children}
        </div>
      </blockquote>
    );
  },
  code: ({ ...props }) => {
    const { className, children } = props;
    const match = /language-(\w+)/.exec(className || '');

    if (!match) {
      return (
        <code
          css={css`
            color: #3e6585;
            background-color: #1e1e1e;
            border-radius: 4px;
            border-width: 1px 1px 3px;
            padding: 2px;
          `}
        >
          {children}
        </code>
      );
    }
    return (
      <SyntaxHighlighter
        style={vscDarkPlus}
        customStyle={{ margin: '20px 0px' }}
        showLineNumbers
        PreTag="div"
        language={match[1]}
        wrapLines
        lineProps={(lineNumber) => {
          const style = { display: 'block', backgroundColor: 'transparent' };
          return { style };
        }}
        {...props}
      >
        {String(children).replace(/\n$/, '')}
      </SyntaxHighlighter>
    );
  },
};

const PostLayout: FC<LayoutProps> = ({ children }) => {
  return (
    <MDXProvider components={customComponents}>
      <main
        css={css`
          display: flex;
          flex-direction: column;
          position: relative;
          width: 100%;
          margin: 50px auto;
          padding: 20px;
          word-break: keep-all;
          overflow-wrap: break-word;
          line-height: 1.7;
          letter-spacing: -0.04px;
        `}
      >
        {children}
      </main>
    </MDXProvider>
  );
};

export default PostLayout;
