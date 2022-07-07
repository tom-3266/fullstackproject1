import React from "react";
import { NavLink } from "react-router-dom";

import "./NavLinks.css";

const NavLinks = () => {
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/" exact>
          All Users
        </NavLink>
      </li>
      <li>
        <NavLink to="/u1/places" exact>
          My Places
        </NavLink>
      </li>
      <li>
        <NavLink to="/places/new" exact>
          Add Places
        </NavLink>
      </li>
      <li>
        <NavLink to="/auth" exact>
          Authenticate
        </NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
