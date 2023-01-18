import Link from 'next/link';
import styled from '@emotion/styled';

export const PostCard = styled.li`
  height: 11rem;
  width: 100%;
  border: 1px solid ${(props) => props.theme.colors.gray[1]};
  border-radius: 6px;
  padding: 2rem 1rem;
  margin-bottom: 1.2rem;
`;

export const PostTime = styled.div`
  opacity: 0.4;
  font-size: 0.9rem;
  margin-bottom: 0.35rem;
`;

export const PostTitle = styled(Link)`
  display: flex;
  text-decoration: none;
  color: inherit;
  font-size: 1.6rem;
  margin-bottom: 0.5rem;
`;

export const PostTags = styled.div`
  display: flex;
  gap: 1rem;
  font-size: 0.9rem;
`;

export const PostDesc = styled.span`
  display: flex;
  margin: 1rem 0;
`;

export const TagItem = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.colors.yellow[1]};
  transition: all 0.3s linear;
  &:hover {
    color: ${(props) => props.theme.colors.purple[1]};
  }
`;
