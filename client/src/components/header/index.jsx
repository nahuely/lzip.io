import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { getRoute } from "../../helpers/routes";
import routes from "../../config/routes";
import AppContext from "../../context/appContext";

import "./styles.scss";

const Header = () => {
  const state = useContext(AppContext);
  const { links } = state;

  return (
    <div className="menu">
      <div className="menu__logo">
        <NavLink
          to={getRoute(["home"], routes)}
          className="menu__link menu__link--no-underline"
          exact
        >
          <p>lzip.io</p>
        </NavLink>
      </div>
      <div className="menu__links">
        <ul className="menu__list">
          <li className="menu__item">
            <NavLink
              to={getRoute(["shortener", "create"], routes)}
              activeClassName="menu__link--selected"
              className="menu__link"
              exact
            >
              Create
            </NavLink>
          </li>
          <li className="menu__item">
            <NavLink
              to={getRoute(["shortener", "trackForm"], routes)}
              activeClassName="menu__link--selected"
              className="menu__link"
              exact
            >
              Tracking
            </NavLink>
          </li>
          <li className="menu__item">
            <NavLink
              to={getRoute(["shortener", "inspecForm"], routes)}
              activeClassName="menu__link--selected"
              className="menu__link"
              exact
            >
              Inspect
            </NavLink>
          </li>
          {Boolean(links.length) && (
            <li className="menu__item">
              <NavLink
                to={getRoute(["myShorteners"], routes)}
                activeClassName="menu__link--selected"
                className="menu__link"
                exact
              >
                My Shorteners({links.length})
              </NavLink>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
