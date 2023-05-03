import PostGrid from 'components/PostGrid';
import Tags from 'components/Tags';
import Title from 'components/Title';
import { GetStaticProps } from 'next';
import { allPosts, Post } from 'contentlayer/generated';
import { FC } from 'react';
import getAllTags, { Tags as TagsType } from 'utils/getAllTags';
import { NextSeo } from 'next-seo';
import { METADATA } from 'constants/constants';
import generateRSS from 'utils/generateRssFeed';

export interface PostType {
  posts: Post[];
  tags: TagsType;
}

const Home: FC<PostType> = ({ posts, tags }) => {
  return (
    <>
      <NextSeo title="home" canonical={METADATA.meta.url} description={METADATA.meta.description} />
      <Title />
      <Tags tags={tags} currentTagPostCount={posts.length} />
      <PostGrid posts={posts} />
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const posts = allPosts.sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)));
  const tags = getAllTags(allPosts);
  await generateRSS();

  return {
    props: {
      posts,
      tags,
    },
  };
};
