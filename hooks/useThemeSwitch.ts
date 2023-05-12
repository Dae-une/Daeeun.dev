import { useCallback, useEffect, useMemo, useState } from 'react';

export type ThemeType = 'light' | 'dark';

const useThemeSwitch = () => {
  const [theme, setTheme] = useState<ThemeType>('light');
  const isDarkMode = useMemo(() => theme === 'dark', [theme]);

  const initTheme = useCallback(() => {
    const preferDarkMode = window.matchMedia('(perfers-color-theme: dark)').matches;

    const initialTheme = (localStorage.getItem('theme') as ThemeType) || (preferDarkMode ? 'dark' : 'light');
    setTheme(initialTheme);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    initTheme();
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.dataset.theme = theme;
  }, [theme]);

  return { theme, isDarkMode, setTheme, toggleTheme };
};

export default useThemeSwitch;
