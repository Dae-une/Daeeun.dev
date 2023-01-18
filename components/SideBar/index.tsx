import React, { FC } from 'react';
import * as Style from './styles';
import GithubSVG from '../../public/svg/github.svg';
import EmailSVG from '../../public/svg/email.svg';
import RSSSVG from '../../public/svg/rss.svg';
import Link from 'next/link';

export interface SideBarProps {
  isOpen: boolean;
  toggle: () => void;
}

const Icons = [
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

const Links = [
  {
    title: '홈',
    href: '/',
    noopener: false,
  },
  {
    title: 'Velog',
    href: 'https://velog.io/@dae_eun2',
    noopener: true,
  },
  {
    title: 'About',
    href: 'https://portfolio-dae-une.vercel.app',
    noopener: true,
  },
];

const SideBar: FC<SideBarProps> = ({ isOpen, toggle }) => {
  return (
    <>
      <Style.SideBarBack isOpen={isOpen} onClick={toggle}></Style.SideBarBack>
      <Style.SideBarWrap isOpen={isOpen}>
        <Style.SideBarLinks>
          {Icons.map((link) => (
            <Style.SdieBarItem key={link.title} href={link.href} target="_blank" rel="noopener">
              {link.svg}
            </Style.SdieBarItem>
          ))}
        </Style.SideBarLinks>
        <Style.SideBarList>
          {Links.map((link) => (
            <Style.SdieBarItem href={link.href} target={link.noopener ? '_blank' : '_parent'} rel="noopener">
              {link.title}
            </Style.SdieBarItem>
          ))}
        </Style.SideBarList>
      </Style.SideBarWrap>
    </>
  );
};

export default SideBar;
