import METADATA from './constants/constants';
import { DefaultSeoProps } from 'next-seo';

const DEFAULT_SEO: DefaultSeoProps = {
  titleTemplate: `%s | ${METADATA.headerTitle}`,
  defaultTitle: METADATA.meta.title,
  description: METADATA.meta.description,
  canonical: METADATA.meta.url,
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
    url: METADATA.meta.url,
    siteName: METADATA.meta.title,
  },
};

export default DEFAULT_SEO;
