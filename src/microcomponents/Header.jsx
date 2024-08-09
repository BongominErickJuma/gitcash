import React from "react";
import { Link, useLocation } from "react-router-dom";
import Dropdown from "./Dropdown";
import navlist from "./navlists";
import NavItems from "./NavItems";

const Header = () => {
  const location = useLocation();

  // Determine button text and link based on the current route
  const isOnLoginPage = location.pathname === "/login";
 
  const buttonText = isOnLoginPage ? "Sign up" : "Login";
  const buttonLink = isOnLoginPage ? "/signup" : "/login";
  return (
    <header
      id="header"
      className="header d-flex align-items-center fixed-top bg-black"
    >
      <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
        <Link to="/" className="logo d-flex align-items-center me-auto me-lg-0">
          <h1 className="sitename">Gitcash</h1>
          <span>.</span>
        </Link>

        <nav id="navmenu" className="navmenu">
          <ul>
            {navlist.map((nav, ind) => (
              <li className="dropdown" key={ind}>
                <NavItems href={nav.href} name={nav.title} />
                <Dropdown dropitems={nav.dropitems} />
              </li>
            ))}
            <li>
              <a href="#contact">Pricing</a>
            </li>
          </ul>
          <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>
        <Link className="btn-getstarted" to={buttonLink}>
          {buttonText}
        </Link>
      </div>
    </header>
  );
};

export default Header;
