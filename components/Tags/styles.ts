import styled from '@emotion/styled';
import Link from 'next/link';

export const TagWrapper = styled.div`
  margin: 4rem 0;
`;

export const TagTitle = styled.div`
  display: flex;
  justify-content: center;
  font-size: 3.3rem;
  font-style: italic;
  font-weight: bold;
`;

export const TagCount = styled.div`
  font-size: 1rem;
`;

export const TagList = styled.div`
  display: flex;
  width: 100%;
  padding: 0 6rem;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;
  margin-top: 2rem;
`;

export const TagItem = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: flex;
  & > span {
    font-size: 1.4rem;
  }
`;
