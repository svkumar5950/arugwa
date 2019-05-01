import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const NavBar = props => {
  // State for toggling Menu Button

  let [show, setShow] = useState(true);

  let handleClick = () => {
    setShow(!show);
  };

  return (
    <div className="app-navbar">
      <div
        className={show ? "app-nav-menu" : "app-nav-menu close"}
        onClick={handleClick}
      >
        <div />
      </div>
      <nav className={show ? "navbar" : ""}>
        <ul>
          <li onClick={handleClick}>
            <NavLink to="/tablets">Tablets</NavLink>
          </li>
          <li onClick={handleClick}>
            <NavLink to="/mobiles">Mobiles</NavLink>
          </li>
          <li onClick={handleClick}>
            <NavLink to="/laptops">Laptops</NavLink>
          </li>
          <li onClick={handleClick}>
            <NavLink to="/">Home</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
