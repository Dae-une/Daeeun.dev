import About from './About';
import * as Style from './styles';
import Velog from './Velog';
import Hamburger from '../../../public/svg/hamburger.svg';
import { useCallback, useState } from 'react';
import SideBar from 'components/SideBar';

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
        <Style.AboutWrpper>
          <Velog />
          <About />
        </Style.AboutWrpper>
      </Style.HeaderWrapper>
      <SideBar isOpen={showSideBar} toggle={toggleSideBar} />
    </>
  );
};

export default Header;
