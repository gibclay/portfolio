import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer mt-16 flex flex-col">
      <div className="divider divider-vertical"></div>
      <div className="flex flex-row space-x-4 centered">
        <ul className="menu menu-vertical">
          <li className="text-lg font-semibold menu-title">Socials</li>
          <li className="btn-nav">
            <Link to="">LinkedIn</Link>
          </li>
          <li className="btn-nav">
            <Link to="https://github.com/gibclay">GitHub</Link>
          </li>
        </ul>
        <ul className="menu menu-vertical">
          <li className="text-lg font-semibold menu-title">Socials</li>
          <li className="btn-nav">LinkedIn</li>
          <li className="btn-nav">GitHub</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
