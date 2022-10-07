import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { tabSelected, tab, about } from "./footer.module.css";

function Footer() {
  const path = useLocation().pathname;

  return (
    <>
      {path === "/about" ? null : (
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? tabSelected : tab)}>
          <span className={about}>About</span>
        </NavLink>
      )}
    </>
  );
}

export default Footer;
