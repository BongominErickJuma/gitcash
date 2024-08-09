import React from "react";
import Dropdown from "./Dropdown";
import NavLinks from "./NavLinks";
import navlist from "./Navlist";

const Header = () => {
  return (
    <header
      id="header"
      className="header d-flex align-items-center fixed-top bg-black"
    >
      <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
        <a
          href="index.html"
          className="logo d-flex align-items-center me-auto me-lg-0"
        >
          <h1 className="sitename">Gitcash</h1>
          <span>.</span>
        </a>

        <nav id="navmenu" className="navmenu">
          <ul>
            {navlist.map((nav, ind) => (
              <li className="dropdown" key={ind}>
                <NavLinks href={nav.href} name={nav.title} />
                <Dropdown dropitems={nav.dropitems} />
              </li>
            ))}
            <li>
              <a href="#contact">Pricing</a>
            </li>
          </ul>
          <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>
        <a className="btn-getstarted" href="/login">
          Get Started
        </a>
      </div>
    </header>
  );
};

export default Header;
