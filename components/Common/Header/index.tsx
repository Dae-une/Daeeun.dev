import * as Style from './styles';
import ThemeSwitch from '../ThemeSwitch';

function Header() {
  return (
    <Style.HeaderWrapper>
      <Style.MainBtn href="/">Daeeun.</Style.MainBtn>
      <Style.HeaderLeft>
        <ThemeSwitch />
      </Style.HeaderLeft>
    </Style.HeaderWrapper>
  );
}

export default Header;
