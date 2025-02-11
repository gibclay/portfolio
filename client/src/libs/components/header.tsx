import { Link, useNavigate } from 'react-router-dom';
import { Button, Dropdown } from 'react-daisyui';

const Header = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="navbar bg-neutral mb-16 shadow-md">
        <div className="navbar-start">
          <button
            className="btn btn-accent text-xl"
            onClick={() => navigate('')}
          >
            Monty Oshinov
          </button>
        </div>

        <div className="navbar-center">
          <ul className="menu menu-horizontal text-neutral-content space-x-8">
            <Dropdown hover>
              <div
                onClick={() => navigate('/#')}
                tabIndex={0}
                role="button"
                className="btn-nav"
              >
                Home
              </div>
              <ul className="dropdown-content menu rounded-box bg-base-200 text-base-content">
                <Dropdown.Item>
                  <div onClick={() => navigate('/#education')}>Education</div>
                </Dropdown.Item>
                <Dropdown.Item>
                  <div onClick={() => navigate('/#experience')}>Experience</div>
                </Dropdown.Item>
                <Dropdown.Item>
                  <div onClick={() => navigate('/#projects')}>Projects</div>
                </Dropdown.Item>
              </ul>
            </Dropdown>
            <div className="divider divider-horizontal" />
            <li>
              <Button
                className="btn-nav"
                onClick={() => {
                  // return document.getElementById("contacts_modal")?.showModal();
                  navigate('/contact');
                }}
              >
                Contact
              </Button>
            </li>
            <div className="divider divider-horizontal" />
            <li>
              <Link className="font-bold" to="https://github.com/gibclay">
                GitHub
              </Link>
            </li>
          </ul>
        </div>

        <div className="navbar-end"></div>
      </div>
    </>
  );
};

export default Header;
