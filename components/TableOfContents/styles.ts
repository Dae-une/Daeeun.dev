import styled from '@emotion/styled';
import { mq } from 'styles/Theme';

export const TocWrapper = styled.nav`
  position: absolute;
  display: none;
  right: -1rem;
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

export const TocLink = styled.a<TocLinkProps>`
  text-decoration: none;
  color: ${(props) => (props.isActived ? props.theme.colors.purple[1] : 'white')};
`;
