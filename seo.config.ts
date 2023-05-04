import { DefaultSeoProps } from 'next-seo';
import { METADATA } from './constants/constants';

const DEFAULT_SEO: DefaultSeoProps = {
  titleTemplate: `%s | ${METADATA.title}`,
  defaultTitle: METADATA.title,
  description: METADATA.description,
  canonical: METADATA.url,
  additionalMetaTags: [
    {
      name: 'theme-color',
      content: '#202125',
    },
  ],
  additionalLinkTags: [
    {
      rel: 'manifest',
      href: '/manifest.json',
    },
  ],
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: METADATA.url,
    siteName: METADATA.title,
  },
};

export default DEFAULT_SEO;
