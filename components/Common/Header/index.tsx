import About from './About';
import Logo from './Logo';
import * as Style from './styles';

const Header = () => {
  return (
    <Style.HeaderWrapper>
      <Style.LogoWrpper>
        <Logo />
      </Style.LogoWrpper>
      <Style.AboutWrpper>
        <About />
        <div>Darkmode</div>
      </Style.AboutWrpper>
    </Style.HeaderWrapper>
  );
};

export default Header;
