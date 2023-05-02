import { allPosts, Post } from 'contentlayer/generated';
import { GetStaticPaths, GetStaticProps } from 'next';
import React, { FC } from 'react';
import { useMDXComponent } from 'next-contentlayer/hooks';
import PostLayout from 'components/PostLayout';
import TableOfContents from 'components/TableOfContents';
import { NextSeo } from 'next-seo';
import { METADATA } from 'constants/constants';
import styled from '@emotion/styled';
import GiscusContainer from 'components/GiscusContainer';

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[1]};
`;

const TitleDate = styled.span`
  font-size: 0.9rem;
  font-weight: 200;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
`;

interface BlogPostProps {
  post: Post;
}

const BlogPost: FC<BlogPostProps> = ({ post }) => {
  const MDXComponent = useMDXComponent(post.body.code);

  return (
    <>
      <NextSeo
        title={post.title}
        description={post.summary}
        canonical={`${METADATA.meta.url}/blog/${post.slug}`}
        openGraph={{
          type: 'article',
          url: `${METADATA.meta.url}/blog/${post.slug}`,
          article: {
            publishedTime: new Date(post.date).toISOString(),
            tags: [...post.tags, 'frontend', '프론트엔드', 'develop', '개발'],
          },
        }}
      />
      <PostLayout>
        <TitleWrapper>
          <Title>{post.title}</Title>
          <TitleDate>{post.date}</TitleDate>
        </TitleWrapper>
        <TableOfContents />
        <MDXComponent />
      </PostLayout>
      <GiscusContainer />
    </>
  );
};

export default BlogPost;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: allPosts.map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = allPosts.find((post) => post.slug === params?.slug);

  return {
    props: {
      post,
    },
  };
};
