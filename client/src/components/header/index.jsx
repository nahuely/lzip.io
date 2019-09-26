import React from "react";
import { NavLink } from "react-router-dom";
import { getRoute } from "../../helpers/routes";
import routes from "../../config/routes";

import "./styles.scss";

const Header = () => {
  return (
    <div className="menu">
      <div className="menu__logo">
        <p>lzip.io</p>
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
        </ul>
      </div>
    </div>
  );
};

export default Header;
