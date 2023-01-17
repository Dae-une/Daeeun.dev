import Header from 'components/Common/Header';
import Footer from 'components/Footer';
import PostGrid from 'components/PostGrid';
import Tags from 'components/Tags';
import Title from 'components/Title';
import { GetStaticProps } from 'next';
import { allPosts, Post } from 'contentlayer/generated';
import { FC } from 'react';

export interface PostType {
  posts: Post[];
}

const Home: FC<PostType> = ({ posts }) => {
  return (
    <>
      <Header />
      <Title />
      <Tags />
      <PostGrid posts={posts} />
      <Footer />
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const POST_COUNT = 10;
  const posts = allPosts.sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)));

  return {
    props: {
      posts: posts.slice(0, POST_COUNT),
    },
  };
};
