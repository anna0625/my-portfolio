import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";

export const Navbar = ({ title }) => {
  const [openHamburger, setOpenHamburger] = useState(false);
  const [themeChange, setThemeChange] = useState(true);

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
    <nav className="navbar fixed z-50 mb-12 text-neutral-content shadow-lg">
      {/* Container */}
      <div className="container mx-auto">
        {/* Logo */}
        <div className="mx-2 flex-none px-2">
          <Link
            to="/"
            className={
              pathMatchRoute("/")
                ? "aling-middle btn align-middle text-lg font-bold text-primary"
                : "aling-middle btn btn-ghost align-middle text-lg font-bold"
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
        <div className="mx-2 hidden flex-1 px-2 md:block">
          <div className="flex justify-end">
            <Link
              to="/react-projects"
              className={
                pathMatchRoute("/react-projects")
                  ? "stn-sm btn btn-primary rounded-btn mr-1"
                  : "stn-sm btn btn-ghost rounded-btn mr-1"
              }
            >
              React Projects
            </Link>
            <Link
              to="/mini-projects"
              className={
                pathMatchRoute("/mini-projects")
                  ? "stn-sm btn btn-primary rounded-btn mr-1"
                  : "stn-sm btn btn-ghost rounded-btn mr-1"
              }
            >
              Mini Projects
            </Link>
            <Link
              to="/javascript-games"
              className={
                pathMatchRoute("/javascript-games")
                  ? "stn-sm btn btn-primary rounded-btn mr-1"
                  : "stn-sm btn btn-ghost rounded-btn mr-1"
              }
            >
              JS Games
            </Link>
            <Link
              to="/nodejs-apis"
              className={
                pathMatchRoute("/nodejs-apis")
                  ? "stn-sm btn btn-primary rounded-btn mr-1"
                  : "stn-sm btn btn-ghost rounded-btn mr-1"
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
          <div className="dropdown-end dropdown">
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
                className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow"
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
                    to="/javascript-games"
                    className={
                      pathMatchRoute("/python-games") ? "text-primary" : null
                    }
                  >
                    JS Games
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
