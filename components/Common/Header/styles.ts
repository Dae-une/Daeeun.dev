import styled from '@emotion/styled';
import { themeAnimation } from 'constants/animation';
import Link from 'next/link';

export const HeaderWrapper = styled.header`
  height: 5rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  font-size: 2rem;
  /* font-style: italic; */
  text-decoration: none;
`;
