import PostGrid from 'components/PostGrid';
import SearchInput from 'components/SearchInput';
import { allPosts, Post } from 'contentlayer/generated';
import useSearchValue from 'hooks/useSearchValue';
import { GetStaticProps } from 'next/types';
import React, { FC } from 'react';

interface SearchPageProps {
  posts: Post[];
}

const SearchPage: FC<SearchPageProps> = ({ posts }) => {
  const { searchValue, onChangeSearch } = useSearchValue();

  const searchedPost = posts.filter((post) => {
    const keyword = `${post.title} ${post.summary} ${post.tags.join(' ')}`;
    return keyword.toLowerCase().includes(searchValue.toLowerCase());
  });

  return (
    <>
      <SearchInput onChangeSearch={onChangeSearch} />
      <PostGrid posts={searchedPost} />
    </>
  );
};

export default SearchPage;

export const getStaticProps: GetStaticProps = async () => {
  const posts = allPosts.sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)));

  return {
    props: {
      posts,
    },
  };
};
