import { useCallback, useState } from 'react';
import SideBar from 'components/SideBar';
import Link from 'next/link';
import * as Style from './styles';
import Hamburger from '../../../static/svg/hamburger.svg';
import SearchIcon from '../../../static/svg/search.svg';
import ThemeSwitch from '../ThemeSwitch';
import { SVGEqualTheme } from '../ColoredSVG';

function Header() {
  const [showSideBar, setShowSideBar] = useState(false);

  const toggleSideBar = useCallback(() => {
    setShowSideBar((prev) => !prev);
  }, []);

  return (
    <>
      <Style.HeaderWrapper>
        <Style.MainBtn href="/">Daeeun.</Style.MainBtn>
        <Style.HeaderLeft>
          <Style.SVGWrapper>
            <Link href="/search">
              <SVGEqualTheme SVG={SearchIcon} />
            </Link>
          </Style.SVGWrapper>
          <ThemeSwitch />
          <Style.SVGWrapper onClick={toggleSideBar}>
            <SVGEqualTheme SVG={Hamburger} />
          </Style.SVGWrapper>
        </Style.HeaderLeft>
      </Style.HeaderWrapper>
      <SideBar isOpen={showSideBar} toggle={toggleSideBar} />
    </>
  );
}

export default Header;
