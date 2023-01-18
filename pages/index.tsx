import Footer from 'components/Footer';
import PostGrid from 'components/PostGrid';
import Tags from 'components/Tags';
import Title from 'components/Title';
import { GetStaticProps } from 'next';
import { allPosts, Post } from 'contentlayer/generated';
import { FC } from 'react';
import getAllTags, { Tags as TagsType } from 'utils/getAllTags';

export interface PostType {
  posts: Post[];
  tags: TagsType;
}

const Home: FC<PostType> = ({ posts, tags }) => {
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

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const POST_COUNT = 10;
  const posts = allPosts.sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)));
  const tags = getAllTags(allPosts);

  return {
    props: {
      posts: posts.slice(0, POST_COUNT),
      tags,
    },
  };
};
