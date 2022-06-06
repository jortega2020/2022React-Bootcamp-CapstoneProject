import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { NavBar } from "../../styles/grid";


export const NavBarMenu = () => {
  return (
    <NavBar>
      <nav className="navbar">
        <div className="logo">
          <img
            src="/logo-icon3.png"
            alt="logo"
          />
          <div>
            Capstone Project
          </div>
        </div>
        <div className="item search right">
          <div className="search-group">
            <input type="text" />
          </div>
        </div>
        <a href="/" className="item">
        <FontAwesomeIcon icon={faCartShopping} />
        </a>
      </nav>
    </NavBar>
  );
};
