import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

import Logo from "../../img/logoHenry.png";
import { nav, navMenu, menuTab } from "./nav.module.css";
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
              <img src={Logo} alt="logo" />
              <span>Henry - Weather App</span>
            </div>
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
