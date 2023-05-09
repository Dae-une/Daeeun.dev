import useThemeSwitch from 'hooks/useThemeSwitch';
import Sun from '../../../static/svg/sun.svg';
import Moon from '../../../static/svg/moon.svg';
import React from 'react';

const ThemeSwitch = () => {
  const { toggleTheme, theme } = useThemeSwitch();
  return (
    <button type="button" onClick={toggleTheme}>
      {theme === 'light' ? <Moon /> : <Sun />}
    </button>
  );
};

export default ThemeSwitch;
