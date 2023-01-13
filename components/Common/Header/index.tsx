import About from './About';
import Logo from './Logo';
import * as Style from './styles';
import Velog from './Velog';

const Header = () => {
  return (
    <Style.HeaderWrapper>
      <Style.LogoWrpper>
        <Logo />
      </Style.LogoWrpper>
      <Style.AboutWrpper>
        <Velog />
        <About />
        <div>Darkmode</div>
      </Style.AboutWrpper>
    </Style.HeaderWrapper>
  );
};

export default Header;
