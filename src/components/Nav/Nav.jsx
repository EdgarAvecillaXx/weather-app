import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

import Logo from "../../img/logoHenry.png";
import {
  logo,
  nav,
  navMenu,
  menuTab,
  title,
  about,
  aboutSelected,
} from "./nav.module.css";
import GoBack from "../GoBack/GoBack";

function Nav({ onSearch, flag, setRequest }) {
  const path = useLocation().pathname;

  return (
    <>
      <nav className={nav}>
        <div className={navMenu}>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? menuTab : menuTab)}>
            <div>
              <img className={logo} src={Logo} alt="logo" />
              <span className={title}>Henry - Weather App</span>
            </div>
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? aboutSelected : about)}>
            <span> &#9432; </span>
          </NavLink>
        </div>
        {path.startsWith("/ciudad/") || path === "/about" ? (
          <GoBack />
        ) : (
          <SearchBar onSearch={onSearch} flag={flag} setRequest={setRequest} />
        )}
      </nav>
    </>
  );
}

export default Nav;
