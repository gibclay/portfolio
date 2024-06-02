import { DarkIcon, LightIcon } from './Icons/themeIcons';
import { useContext } from 'react';
import { ThemeContext } from '../contexts/themeContext';
import themeConfig from '@src/config/theme';

const ThemeSwapper = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const swapTheme = () => {
    setTheme(
      theme == themeConfig.default_dark
        ? themeConfig.default_light
        : themeConfig.default_dark,
    );
  };

  return (
    <label className="theme-swap">
      <input
        type="checkbox"
        checked={theme == themeConfig.default_dark}
        onChange={swapTheme}
      />
      <DarkIcon />
      <LightIcon />
    </label>
  );
};

export default ThemeSwapper;
