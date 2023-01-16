import React, { FC } from 'react';
import * as Style from './styles';
import GithubSVG from '../../public/svg/github.svg';
import EmailSVG from '../../public/svg/email.svg';
import RSSSVG from '../../public/svg/rss.svg';

export interface SideBarProps {
  isOpen: boolean;
  toggle: () => void;
}

const Links = [
  {
    title: 'github',
    href: 'https://github.com/Dae-une',
    svg: <GithubSVG />,
  },
  {
    title: 'email',
    href: 'mailto:chablisbin94@gmail.com',
    svg: <EmailSVG />,
  },
  {
    title: 'rss',
    href: '/',
    svg: <RSSSVG />,
  },
];

const SideBar: FC<SideBarProps> = ({ isOpen, toggle }) => {
  return (
    <>
      <Style.SideBarBack isOpen={isOpen} onClick={toggle}></Style.SideBarBack>
      <Style.SideBarWrap isOpen={isOpen}>
        <Style.SideBarLinks>
          {Links.map((link) => (
            <Style.SdieBarItem key={link.title} href={link.href} target="_blank" rel="noopener">
              {link.svg}
            </Style.SdieBarItem>
          ))}
        </Style.SideBarLinks>
        <Style.SideBarList>
          <Style.SdieBarItem href={'/'}>홈</Style.SdieBarItem>
          <Style.SdieBarItem href={'/'}>카테고리</Style.SdieBarItem>
          <Style.SdieBarItem href={'/'}>태그</Style.SdieBarItem>
          <Style.SdieBarItem href={'/'}>About</Style.SdieBarItem>
        </Style.SideBarList>
      </Style.SideBarWrap>
    </>
  );
};

export default SideBar;
