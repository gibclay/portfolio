import { Divider } from "react-daisyui";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer mt-16 flex flex-col">
      <Divider vertical></Divider>
      <div className="flex flex-row space-x-4 centered">
        <ul className="menu-vertical">
          <li className="text-lg font-semibold menu-title">Socials</li>
          <li className="btn-nav">
            <Link to="">LinkedIn</Link>
          </li>
          <li className="btn-nav">
            <Link to="https://github.com/gibclay">GitHub</Link>
          </li>
        </ul>
        <Divider horizontal></Divider>
        <ul className="menu-vertical">
          <li className="text-lg font-semibold menu-title">Navigate</li>
          <li className="btn-nav">Home</li>
          <li className="btn-nav">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
