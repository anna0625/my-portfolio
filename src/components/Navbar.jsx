import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";

export const Navbar = ({ title }) => {
  const [openHamburger, setOpenHamburger] = useState(false);
  const [themeChange, setThemeChange] = useState(false);

  const location = useLocation();

  const pathMatchRoute = (route) => {
    if (route === location.pathname) {
      return true;
    }
  };

  useEffect(() => {
    if (themeChange) {
      const html = document.getElementById("html");
      html.setAttribute("data-theme", "pastel");
    } else {
      const html = document.getElementById("html");
      html.setAttribute("data-theme", "night");
    }
  }, [themeChange]);

  return (
    <nav className="navbar mb-12 shadow-lg text-neutral-content fixed z-50">
      {/* Container */}
      <div className="container mx-auto">
        {/* Logo */}
        <div className="flex-none px-2 mx-2">
          <Link
            to="/"
            className={
              pathMatchRoute("/")
                ? "text-lg font-bold aling-middle align-middle text-primary btn"
                : "text-lg font-bold aling-middle align-middle btn btn-ghost"
            }
          >
            {title}
          </Link>
        </div>
        {/* Theme Toggle */}
        <input
          type="checkbox"
          className="toggle toggle-primary"
          onClick={() => setThemeChange((prevState) => !prevState)}
        />
        {/* Links to pages (Middle Size)*/}
        <div className="flex-1 px-2 mx-2 hidden md:block">
          <div className="flex justify-end">
            <Link
              to="/react-projects"
              className={
                pathMatchRoute("/react-projects")
                  ? "btn btn-primary stn-sm rounded-btn mr-1"
                  : "btn btn-ghost stn-sm rounded-btn mr-1"
              }
            >
              React Projects
            </Link>
            <Link
              to="/mini-projects"
              className={
                pathMatchRoute("/mini-projects")
                  ? "btn btn-primary stn-sm rounded-btn mr-1"
                  : "btn btn-ghost stn-sm rounded-btn mr-1"
              }
            >
              Mini Projects
            </Link>
            <Link
              to="/python-games"
              className={
                pathMatchRoute("/python-games")
                  ? "btn btn-primary stn-sm rounded-btn mr-1"
                  : "btn btn-ghost stn-sm rounded-btn mr-1"
              }
            >
              Python Games
            </Link>
            <Link
              to="/nodejs-apis"
              className={
                pathMatchRoute("/nodejs-apis")
                  ? "btn btn-primary stn-sm rounded-btn mr-1"
                  : "btn btn-ghost stn-sm rounded-btn mr-1"
              }
            >
              Nodejs APIs
            </Link>
          </div>
        </div>
        {/* Hamberger links to pages (Small Size) */}
        <div className="flex-1 md:hidden"></div>
        <div className="flex-none md:hidden">
          {/* Dropdown  */}
          <div className="dropdown dropdown-end">
            <label
              tabIndex={0}
              className="btn btn-ghost btn-circle"
              onClick={() => setOpenHamburger((prevState) => !prevState)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            {openHamburger && (
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link
                    to="/react-projects"
                    className={
                      pathMatchRoute("/react-projects") ? "text-primary" : null
                    }
                  >
                    React Projects
                  </Link>
                </li>
                <li>
                  <Link
                    to="/mini-projects"
                    className={
                      pathMatchRoute("/mini-projects") ? "text-primary" : null
                    }
                  >
                    Mini Projects
                  </Link>
                </li>
                <li>
                  <Link
                    to="/python-games"
                    className={
                      pathMatchRoute("/python-games") ? "text-primary" : null
                    }
                  >
                    Python Games
                  </Link>
                </li>
                <li>
                  <Link
                    to="/nodejs-apis"
                    className={
                      pathMatchRoute("/nodejs-apis") ? "text-primary" : null
                    }
                  >
                    Nodejs APIs
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

Navbar.defaultProps = {
  title: "Anna Cheng",
};

Navbar.propTypes = {
  title: PropTypes.string,
};
