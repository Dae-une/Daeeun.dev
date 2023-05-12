import styled from '@emotion/styled';
import { mq } from 'styles/Theme';

export const TocWrapper = styled.nav`
  position: absolute;
  display: none;
  right: -3rem;
  ${mq[3]} {
    display: block;
  }
`;

export const Toc = styled.div`
  position: fixed;
`;

export const Heading = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

export const TocContent = styled.ul`
  padding: 0;
  margin: 0;
`;

interface TocLinkProps {
  isActived: boolean;
}

export const TocLink = styled.li<TocLinkProps>`
  list-style: none;

  a {
    color: ${(props) => (props.isActived ? props.theme.colors.purple[1] : 'gray')};
    scale: ${(props) => (props.isActived ? 1.2 : 1)};
    text-decoration: none;
  }
`;
