import { METADATA } from 'constants/constants';
import { allPosts } from 'contentlayer/generated';
import { GetServerSideProps } from 'next';
import { getServerSideSitemap, ISitemapField } from 'next-sitemap';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const sitemapFileds: ISitemapField[] = allPosts.map((post) => {
    return {
      loc: `${METADATA.url}/blog/${post.title}`,
      lastmod: new Date().toISOString(),
      changefreq: 'daily',
      priority: 1,
    };
  });

  return getServerSideSitemap(context, sitemapFileds);
};

export default function Site() {}
