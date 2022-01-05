import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <header
    className="navBar"
      style={{
        borderBottom: "2px solid black",
        paddingBottom: "10px",
        marginBottom: "12px"
      }}
    >
      <NavLink className="navLinks" to="/">
        Home
      </NavLink>
      <NavLink className="navLinks" to="/explore">
        Explore
      </NavLink>
      <NavLink className="navLinks" to="/myLists">
        My Lists
      </NavLink>
      <em id="logo" >VG Tracker</em>
    </header>
  );
}

export default NavBar;