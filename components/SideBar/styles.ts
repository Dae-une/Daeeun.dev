import { SideBarProps } from './SideBar';
import Link from 'next/link';
import styled from '@emotion/styled';

export const SideBarBack = styled.div<Pick<SideBarProps, 'isOpen'>>`
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  z-index: 40;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.colors.gray[1]};
  opacity: 0.5;
`;

export const SideBarWrap = styled.div<Pick<SideBarProps, 'isOpen'>>`
  opacity: 1;
  z-index: 50;
  position: fixed;
  padding: 12px;
  border-radius: 0 15px 15px 0;
  background-color: white;
  height: 100%;
  width: 20rem;
  left: ${(props) => (props.isOpen ? '0' : '-20rem')};
  top: 0;
  transition: 0.5s ease;
`;

export const SideBarLinks = styled.div`
  display: flex;
  justify-content: center;
  margin: 1.5rem;
  gap: 1.5rem;
`;

export const SideBarList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 1.5rem;
`;

export const SdieBarItem = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.colors.gray[2]};
`;
