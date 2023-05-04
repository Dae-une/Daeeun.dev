import { Html, Main, NextScript } from 'next/document';
import Head from 'next/head';
import React from 'react';

const Document = () => {
  return (
    <Html lang="ko">
      <Head>
        <meta name="google-site-verification" content="_DIJbNs95zXVHSkccYSiENn9IRgIp9PhOWs-cOWTkGI" />
        <meta name="theme-color" content="#202125" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
