import { useNavigate } from "react-router-dom";
import { DarkIcon, LightIcon } from "./Icons/themeIcons";
import { useContext } from "react";
import { ThemeContext } from "../contexts/themeContext";

const Header = () => {
  const navigate = useNavigate();
  const { theme, setTheme } = useContext(ThemeContext);

  const swapTheme = () => {
    setTheme(theme == "dracula" ? "pastel" : "dracula");
  };

  return (
    <div className="navbar bg-neutral mb-16 shadow-md">
      <div className="navbar-start">
        <button
          className="btn btn-primary text-xl"
          onClick={() => navigate("")}
        >
          Monty Oshinov
        </button>
      </div>
      <div className="navbar-center">
        <ul className="menu menu-horizontal space-x-8">
          <li>GitHub</li>
          <li>Projects</li>
        </ul>
      </div>
      <div className="navbar-end">
        <label className="swap swap-rotate">
          <input
            type="checkbox"
            checked={theme == "dracula"}
            onClick={swapTheme}
          />
          <DarkIcon />
          <LightIcon />
        </label>
      </div>
    </div>
  );
};

export default Header;
