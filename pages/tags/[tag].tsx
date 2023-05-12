import PostGrid from 'components/PostGrid';
import Tags from 'components/Tags';
import Profile from 'components/Common/Profile';
import { METADATA } from 'constants/constants';
import { allPosts, Post } from 'contentlayer/generated';
import { NextSeo } from 'next-seo';
import { GetStaticPaths, GetStaticProps } from 'next/types';
import React, { FC } from 'react';
import getAllTags, { Tags as TagsType } from 'utils/getAllTags';
import SearchInput from 'components/Common/SearchInput';
import useSearchValue from 'hooks/useSearchValue';

interface TagPageProp {
  posts: Post[];
  tags: TagsType;
  tag: string;
}

const TagPage: FC<TagPageProp> = ({ tags, tag, posts }) => {
  const { searchValue, onChangeSearch } = useSearchValue();

  const searchedPost = posts.filter((post) => {
    const keyword = `${post.title} ${post.summary} ${post.tags.join(' ')}`;
    return keyword.toLowerCase().includes(searchValue.toLowerCase());
  });

  return (
    <>
      <NextSeo title={tag} description={`${tag}에 관한 게시글 입니다.`} canonical={`${METADATA.url}/tag/${tag}`} />
      <Profile />
      <SearchInput onChangeSearch={onChangeSearch} />
      <Tags tags={tags} />
      <PostGrid posts={searchValue ? searchedPost : posts} />
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
  const tags = getAllTags(allPosts);
  const tag = String(params?.tag).toLowerCase();
  const posts = allPosts.filter((post) => post.tags.includes(tag));

  return {
    props: {
      posts,
      tags,
      tag,
    },
  };
};
