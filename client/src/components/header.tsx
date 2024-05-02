import { useNavigate } from "react-router-dom";
import { DarkIcon, LightIcon } from "./Icons/themeIcons";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="navbar bg-base-300 mb-16 shadow-lg">
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
          <input type="checkbox" onClick={() => {}} />
          <DarkIcon />
          <LightIcon />
        </label>
      </div>
    </div>
  );
};

export default Header;
