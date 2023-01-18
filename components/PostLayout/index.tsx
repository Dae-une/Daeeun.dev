import React, { FC } from 'react';

import { css } from '@emotion/react';

interface LayoutProps {
  children: React.ReactNode;
}

const PostLayout: FC<LayoutProps> = ({ children }) => {
  return (
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
  );
};

export default PostLayout;
