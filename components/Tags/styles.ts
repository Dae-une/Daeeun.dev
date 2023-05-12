import styled from '@emotion/styled';
import Link from 'next/link';

export const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 1.5rem 0;
  width: 100%;
`;

interface TagLinkProps {
  isSelected: boolean;
}

export const TagLink = styled(Link)<TagLinkProps>`
  text-decoration: none;
  padding: 0.5rem 1rem;
  border: 0px;
  border-radius: 0.25rem;
  color: var(--colors-tagColor);
  font-size: 0.875rem;
  display: flex;
  color: #3b1de2;
  background-color: ${({ isSelected }) => (isSelected ? '#bcb2f5' : '#edeafc')};
`;
