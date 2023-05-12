import useThemeSwitch from 'hooks/useThemeSwitch';
import Sun from '../../../static/svg/sun.svg';
import Moon from '../../../static/svg/moon.svg';
import * as Style from './styles';
import { motion } from 'framer-motion';

const ThemeSwitch = () => {
  const { toggleTheme, theme } = useThemeSwitch();

  return (
    <Style.Container onClick={toggleTheme}>
      <Style.Theme themeType={theme}>{theme === 'dark' ? <MoonMotion /> : <SunMotion />}</Style.Theme>
    </Style.Container>
  );
};

export default ThemeSwitch;

const MoonMotion = () => {
  return (
    <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ type: 'just' }}>
      <Moon />
    </motion.div>
  );
};

const SunMotion = () => {
  return (
    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ type: 'just' }}>
      <Sun />
    </motion.div>
  );
};
