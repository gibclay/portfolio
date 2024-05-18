import { DarkIcon, LightIcon } from "./Icons/themeIcons";
import { useContext } from "react";
import { ThemeContext } from "../contexts/themeContext";

const ThemeSwapper = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const swapTheme = () => {
    setTheme(theme == "dracula" ? "nord" : "dracula");
  };

  return (
    <label className="theme-swap">
      <input
        type="checkbox"
        checked={theme == "dracula"}
        onChange={swapTheme}
      />
      <DarkIcon />
      <LightIcon />
    </label>
  );
};

export default ThemeSwapper;
