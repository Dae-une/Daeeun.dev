import styled from '@emotion/styled';
import { themeAnimation } from 'constants/animation';
import Link from 'next/link';

export const HeaderWrapper = styled.div`
  height: 5rem;
  width: 100%;
  padding: 0 1rem;
  display: flex;
  position: sticky;
  top: 0;
  align-items: center;
  justify-content: space-between;
  background-color: var(--bg-main);
  ${themeAnimation}
  z-index: 10;
`;

export const SVGWrapper = styled.div`
  cursor: pointer;
`;

export const HeaderLeft = styled.div`
  display: flex;
  gap: 1rem;
`;

export const MainBtn = styled(Link)`
  color: inherit;
  font-weight: 900;
  font-size: 20px;
  font-style: italic;
  &:hover {
    text-decoration: underline;
  }
`;
