import React from "react";
import classes from "./Navbar.module.css";
import { Outlet, Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <nav className={classes.container}>
        <Link to="/">
          <img className={classes.img} src="/logog.png" alt="" />
        </Link>
        <ul className={`${classes.container} ${classes.navlink}`}>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/vans">
            <li>Vans</li>
          </Link>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

export default Navbar;
