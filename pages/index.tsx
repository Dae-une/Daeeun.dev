import PostGrid from 'components/PostGrid';
import Tags from 'components/Tags';
import Profile from 'components/Common/Profile';
import { GetStaticProps } from 'next';
import { allPosts, Post } from 'contentlayer/generated';
import { FC } from 'react';
import getAllTags, { Tags as TagsType } from 'utils/getAllTags';
import { NextSeo } from 'next-seo';
import { METADATA } from 'constants/constants';
import generateRSS from 'utils/generateRssFeed';
import SearchInput from 'components/Common/SearchInput';
import useSearchValue from 'hooks/useSearchValue';

export interface PostType {
  posts: Post[];
  tags: TagsType;
}

const Home: FC<PostType> = ({ posts, tags }) => {
  const { searchValue, onChangeSearch } = useSearchValue();

  const searchedPost = posts.filter((post) => {
    const keyword = `${post.title} ${post.summary} ${post.tags.join(' ')}`;
    return keyword.toLowerCase().includes(searchValue.toLowerCase());
  });

  return (
    <>
      <NextSeo title="home" canonical={METADATA.url} description={METADATA.description} />
      <Profile />
      <SearchInput onChangeSearch={onChangeSearch} />
      <Tags tags={tags} />
      <PostGrid posts={searchValue ? searchedPost : posts} />
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
