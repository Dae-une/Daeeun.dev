import { useCallback, useState } from 'react';
import SideBar from 'components/SideBar';
import Link from 'next/link';
import * as Style from './styles';
import Hamburger from '../../../public/svg/hamburger.svg';
import SearchIcon from '../../../public/svg/search.svg';

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
              <SearchIcon />
            </Link>
          </Style.SVGWrapper>
          <Style.SVGWrapper onClick={toggleSideBar}>
            <Hamburger />
          </Style.SVGWrapper>
        </Style.HeaderLeft>
      </Style.HeaderWrapper>
      <SideBar isOpen={showSideBar} toggle={toggleSideBar} />
    </>
  );
}

export default Header;
