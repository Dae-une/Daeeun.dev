import { NextSeo } from 'next-seo';
import styled from '@emotion/styled';
import React from 'react';
import Link from 'next/link';

const Layout = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 42px;
`;

const Nav = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const NotFound = () => {
  return (
    <>
      <NextSeo title="404" />
      <Layout>
        <Title>404</Title>
        <p>미안해요, 찾을 수 없는 페이지에요 🥲</p>

        <Nav href={'/'}>Back to Blog</Nav>
      </Layout>
    </>
  );
};

export default NotFound;
