import { Link, useNavigate } from "react-router-dom";
import { DarkIcon, LightIcon } from "./Icons/themeIcons";
import React, { useContext, useState } from "react";
import { ThemeContext } from "../contexts/themeContext";
import ContactsModal from "./contactsModal";
import { Button, Dropdown, Modal } from "react-daisyui";

const Header = () => {
  const navigate = useNavigate();
  const { theme, setTheme } = useContext(ThemeContext);
  // const [contactsOpen, setContactsOpen] = useState<boolean>(false);

  const swapTheme = () => {
    setTheme(theme == "dracula" ? "pastel" : "dracula");
  };

  // const handleOpenContacts = () => {
  //   setContactsOpen(!contactsOpen);
  // };

  // const openContacts = () => {};

  return (
    <>
      <div className="navbar bg-neutral mb-16 shadow-md">
        <div className="navbar-start">
          <button
            className="btn btn-accent text-xl"
            onClick={() => navigate("")}
          >
            Monty Oshinov
          </button>
        </div>

        <div className="navbar-center">
          <ul className="menu menu-horizontal text-neutral-content space-x-8">
            <Dropdown className="dropdown dropdown-hover" vertical="bottom">
              <div
                onClick={() => navigate("")}
                tabIndex={0}
                role="button"
                className="btn-nav"
              >
                Home
              </div>
              <ul className="dropdown-content menu rounded-box bg-base-200">
                <li>
                  <div className="" onClick={() => navigate("")}>
                    Education
                  </div>
                </li>
                <li>
                  <div className="" onClick={() => navigate("")}>
                    Projects
                  </div>
                </li>
              </ul>
            </Dropdown>
            <div className="divider divider-horizontal" />
            <li>
              <Button
                className="btn-nav"
                onClick={() => {
                  // return document.getElementById("contacts_modal")?.showModal();
                  navigate("/contact");
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

        <div className="navbar-end">
          {/* <label className="theme-swap">
            <input
              type="checkbox"
              checked={theme == "dracula"}
              onChange={swapTheme}
            />
            <DarkIcon />
            <LightIcon />
          </label> */}
        </div>
        {/* <ContactsModal /> */}
      </div>

      {/* <dialog
        open={contactsOpen}
        id="contacts_modal"
        className="modal modal-middle"
      >
        <div className="modal-box">
          <form method="dialog">
            <Button
              size="sm"
              color="ghost"
              shape="circle"
              className="absolute right-5 top-5"
            >
              ✕
            </Button>
          </form>
          <Modal.Header className="font-bold">Contact Me</Modal.Header>
          <div className="divider"></div>
          <Modal.Body>
            <div className="grid grid-cols-5">
              <div className="col-start-1 w-1/4 space-y-2">
                <p>Name:</p>
                <p>Phone:</p>
                <p>Email:</p>
                <p>LinkedIn:</p>
              </div>
              <div className="col-start-3 col-span-3 space-y-2">
                <p>Monty Oshinov</p>
                <p>+1 (289) 501-3036</p>
                <p>momch4il@gmail.com</p>
                <p></p>
              </div>
            </div>
          </Modal.Body>
          <Modal.Actions></Modal.Actions>
        </div>
      </dialog> */}
    </>
  );
};

export default Header;
