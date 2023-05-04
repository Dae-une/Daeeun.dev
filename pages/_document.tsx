import { Html, Main, NextScript, Head } from 'next/document';

import React from 'react';

const Document = () => {
  return (
    <Html lang="ko">
      <Head>
        <meta name="google-site-verification" content="_DIJbNs95zXVHSkccYSiENn9IRgIp9PhOWs-cOWTkGI" />
        <meta name="theme-color" content="#202125" />

        <link rel="alternate" type="application/rss+xml" href="/rss.xml" title="RSS" />
        <link rel="alternate" type="application/atom+xml" href="/rss-atom.xml" title="RSS Atom" />
        <link rel="alternate" type="application/json" href="/feed.json" title="JSON Feed" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
