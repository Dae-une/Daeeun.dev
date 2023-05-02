import PostGrid from 'components/PostGrid';
import Tags from 'components/Tags';
import Title from 'components/Title';
import { GetStaticProps } from 'next';
import { allPosts, Post } from 'contentlayer/generated';
import { FC } from 'react';
import getAllTags, { Tags as TagsType } from 'utils/getAllTags';
import { NextSeo } from 'next-seo';
import { METADATA, POST_COUNT } from 'constants/constants';
import generateRSS from 'utils/generateRssFeed';
import Paigination from 'components/Common/Paigination';
import { useRouter } from 'next/router';

export interface PostType {
  posts: Post[];
  tags: TagsType;
  totalPage: number;
}

const Home: FC<PostType> = ({ posts, tags, totalPage }) => {
  const router = useRouter();
  const { page } = router.query;
  const currentPage = page ? Number(page) : 1;

  return (
    <>
      <NextSeo title="home" canonical={METADATA.meta.url} description={METADATA.meta.description} />
      <Title />
      <Tags tags={tags} currentTagPostCount={allPosts.length} />
      <PostGrid posts={posts} />
      {/* {totalPage > 1 && <Paigination totalPage={totalPage} currentPage={currentPage} />} */}
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const posts = allPosts.sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)));
  const totalPage = Math.ceil(allPosts.length / POST_COUNT);
  const tags = getAllTags(allPosts);
  await generateRSS();

  return {
    props: {
      posts: posts.slice(0, POST_COUNT),
      totalPage,
      tags,
    },
  };
};
