import styled from '@emotion/styled';
import Link from 'next/link';
import { mq } from 'styles/Theme';

export const TocWrapper = styled.nav`
  position: absolute;
  display: none;
  right: 0rem;
  padding: 0 1rem;
  ${mq[3]} {
    display: block;
  }
`;

export const Toc = styled.div`
  position: fixed;
`;

interface TocLinkProps {
  isActived: boolean;
}

export const TocLink = styled(Link)<TocLinkProps>`
  text-decoration: none;
  color: ${(props) => (props.isActived ? 'red' : 'white')};
`;
