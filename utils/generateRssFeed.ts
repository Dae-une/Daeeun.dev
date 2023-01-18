import { allPosts } from 'contentlayer/generated';
import { writeFileSync } from 'fs';

import RSS from 'rss';

export default async function generateRSS() {
  const siteURL = 'https://daeeun-dev.vercel.app/';
  const posts = allPosts.sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)));

  const feed = new RSS({
    title: 'KIM DAE EUN',
    description: '성장을 위한 집필공간',
    site_url: siteURL,
    feed_url: `${siteURL}/feed.xml`,
    language: 'ko_KR',
    pubDate: new Date(),
    copyright: `All rights reserved ${new Date().getFullYear()}, KIM DAE EUN`,
  });

  posts.map((post) => {
    feed.item({
      title: post.title,
      url: `${siteURL}/blogs/${post.slug}`,
      date: post.date,
      description: post.summary,
    });
  });

  writeFileSync('./public/feed.xml', feed.xml({ indent: true }));
}
