import Footer from 'components/Footer';
import PostGrid from 'components/PostGrid';
import Tags from 'components/Tags';
import Title from 'components/Title';
import { allPosts, Post } from 'contentlayer/generated';
import { GetStaticPaths, GetStaticProps } from 'next/types';
import React, { FC } from 'react';
import getAllTags, { Tags as TagsType } from 'utils/getAllTags';

interface TagPageProp {
  posts: Post[];
  tags: TagsType;
  tag: TagsType;
}

const TagPage: FC<TagPageProp> = ({ tags, tag, posts }) => {
  const currentTagPostCount = posts.length;
  return (
    <>
      <Title />
      <Tags tags={tags} currentTagPostCount={currentTagPostCount} />
      <PostGrid posts={posts} />
      <Footer />
    </>
  );
};

export default TagPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const tags = getAllTags(allPosts);

  return {
    paths: Object.keys(tags).map((tag) => ({ params: { tag } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const POST_COUNT = 10;
  const tags = getAllTags(allPosts);
  const tag = String(params?.tag).toLowerCase();
  const posts = allPosts.filter((post) => post.tags.includes(tag));
  console.log(tag, posts);

  return {
    props: {
      posts: posts.slice(0, POST_COUNT),
      tags,
      tag,
    },
  };
};
