import React from "react";
import Icon from "./butter.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [showDropDownNav, setShowDropDownNav] = useState(false);

  function handleMenuIconClick() {
    setShowDropDownNav((prev) => !prev);
  }
  return (
    <div className="nav">
      <div className="menu-icon" onClick={() => handleMenuIconClick()}>
        {!showDropDownNav ? <FaBars /> : <FaTimes />}
      </div>
      <Link className="link" to="/">
        <img className="nav-icon" src={Icon} alt="" />
      </Link>

      <ul className={!showDropDownNav ? "menu" : "menu active"}>
        <Link className="link" to="/">
          <li>Home</li>
        </Link>
        <Link className="link" to="/components">
          <li>Components</li>
        </Link>
      </ul>
    </div>
  );
}

export default Navbar;
