import styled from '@emotion/styled';
import Link from 'next/link';

export const TagWrapper = styled.div`
  margin: 4rem 0;
`;

export const TagTitle = styled.div`
  display: flex;
  justify-content: center;
  font-size: 2.3rem;
  font-style: italic;
  font-weight: bold;
`;

export const TagCount = styled.div`
  font-size: 1rem;
`;

export const TagList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  column-gap: 1rem;
  row-gap: 1rem;
  margin-top: 3rem;
  padding: 0 20px;
  width: 100%;
`;

export const TagItem = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: flex;
`;
