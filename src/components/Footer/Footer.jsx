import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { tabSelected, tab } from "./footer.module.css";

function Footer() {
  const path = useLocation().pathname;

  return (
    <>
      {path === "/about" ? null : (
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? tabSelected : tab)}>
          <span>About</span>
        </NavLink>
      )}
    </>
  );
}

export default Footer;
