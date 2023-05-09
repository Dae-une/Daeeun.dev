import React, { FC } from 'react';
import * as Style from './styles';
import { SVGConverseTheme } from 'components/Common/ColoredSVG';
import { Icons, Links } from 'constants/SideBar';

export interface SideBarProps {
  isOpen: boolean;
  toggle: () => void;
}

const SideBar: FC<SideBarProps> = ({ isOpen, toggle }) => {
  return (
    <>
      <Style.SideBarBack isOpen={isOpen} onClick={toggle}></Style.SideBarBack>
      <Style.SideBarWrap isOpen={isOpen}>
        <Style.SideBarLinks>
          {Icons.map((link) => (
            <Style.SdieBarItem key={link.title} href={link.href} target="_blank" rel="noopener">
              <SVGConverseTheme SVG={link.svg} />
            </Style.SdieBarItem>
          ))}
        </Style.SideBarLinks>
        <Style.SideBarList>
          {Links.map((link) => (
            <Style.SdieBarItem key={link.title} href={link.href} target={link.noopener ? '_blank' : '_parent'} rel="noopener">
              {link.title}
            </Style.SdieBarItem>
          ))}
        </Style.SideBarList>
      </Style.SideBarWrap>
    </>
  );
};

export default SideBar;
