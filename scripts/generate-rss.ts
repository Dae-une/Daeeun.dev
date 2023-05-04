/* eslint-disable import/no-relative-packages */
import { Feed } from 'feed';
import { writeFileSync } from 'fs';
import PostJson from '../.contentlayer/generated/Post/_index.json';
import { METADATA } from '../constants/constants';
import { contentToDescription } from '../utils/contentToDescription';

const master = {
  name: METADATA.author.name,
  link: METADATA.url,
  email: METADATA.author.contacts.email,
};

const feed = new Feed({
  title: METADATA.title,
  description: METADATA.description,
  id: METADATA.url,
  link: METADATA.url,
  language: 'ko',
  copyright: `All rights reserved since ${METADATA.since}, ${master.name}`,
  generator: 'generate-rss',
  feedLinks: {
    JSON: `${METADATA.url}/json`,
    atom: `${METADATA.url}/atom`,
  },
  author: master,
});

PostJson.forEach((post) => {
  feed.addItem({
    title: post.title,
    id: post.slug,
    link: `${METADATA.url}${post.slug}`,
    description: post.summary,
    content: contentToDescription(post.body.raw),
    author: [master],
    contributor: [master],
    date: new Date(post.date),
    category: post.tags.map((tag) => ({ name: tag })),
  });
});

feed.addCategory('Technologies');

// Output: RSS 2.0
writeFileSync('public/rss.xml', feed.rss2(), 'utf-8');
// Output: Atom 1.0
writeFileSync('public/rss-atom.xml', feed.atom1(), 'utf-8');
// Output: JSON Feed 1.0
writeFileSync('public/feed.json', feed.json1(), 'utf-8');
