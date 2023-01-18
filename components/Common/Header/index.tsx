import * as Style from './styles';
import Hamburger from '../../../public/svg/hamburger.svg';
import SearchIcon from '../../../public/svg/search.svg';
import { useCallback, useState } from 'react';
import SideBar from 'components/SideBar';
import Link from 'next/link';

const Header = () => {
  const [showSideBar, setShowSideBar] = useState(false);

  const toggleSideBar = useCallback(() => {
    setShowSideBar((prev) => !prev);
  }, []);

  return (
    <>
      <Style.HeaderWrapper>
        <Style.SVGWrpper onClick={toggleSideBar}>
          <Hamburger />
        </Style.SVGWrpper>
        <Style.HeaderLeft>
          <Style.SVGWrpper>
            <Link href={'/search'}>
              <SearchIcon />
            </Link>
          </Style.SVGWrpper>
        </Style.HeaderLeft>
      </Style.HeaderWrapper>
      <SideBar isOpen={showSideBar} toggle={toggleSideBar} />
    </>
  );
};

export default Header;
