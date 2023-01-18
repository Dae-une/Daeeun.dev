import { allPosts, Post } from 'contentlayer/generated';
import { GetStaticPaths, GetStaticProps } from 'next';
import React, { FC } from 'react';
import { useMDXComponent } from 'next-contentlayer/hooks';
import * as Style from './styles';
import PostLayout from 'components/PostLayout';
import TableOfContents from 'components/TableOfContents';
import { NextSeo } from 'next-seo';
import METADATA from 'constants/constants';

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
        <Style.TitleWrapper>
          <Style.Title>{post.title}</Style.Title>
          <Style.TitleDate>{post.date}</Style.TitleDate>
        </Style.TitleWrapper>
        <TableOfContents />
        <MDXComponent />
      </PostLayout>
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
