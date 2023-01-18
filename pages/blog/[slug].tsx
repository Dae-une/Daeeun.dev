import { allPosts, Post } from 'contentlayer/generated';
import { GetStaticPaths, GetStaticProps } from 'next';
import React, { FC } from 'react';
import { useMDXComponent } from 'next-contentlayer/hooks';
import * as Style from './styles';
import PostLayout from 'components/PostLayout';
import TableOfContents from 'components/TableOfContents';

interface BlogPostProps {
  post: Post;
}

const BlogPost: FC<BlogPostProps> = ({ post }) => {
  const MDXComponent = useMDXComponent(post.body.code);

  return (
    <PostLayout>
      <Style.TitleWrapper>
        <Style.Title>{post.title}</Style.Title>
        <Style.TitleDate>{post.date}</Style.TitleDate>
      </Style.TitleWrapper>
      <TableOfContents />
      <MDXComponent />
    </PostLayout>
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
