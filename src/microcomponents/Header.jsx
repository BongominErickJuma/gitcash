import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Dropdown from "./Dropdown";
import NavItems from "./NavItems";
import navlist from "./navlists";
import Logo from "../assets/logo-black.png";
const Header = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isOnHomePage = location.pathname === "/";
  const isOnLoginPage = location.pathname === "/login";
  const headerClassName = `header d-flex align-items-center fixed-top ${
    isOnHomePage ? "" : "bg-dark"
  }`;

  const buttonText = isOnLoginPage ? "Sign up" : "Login";
  const buttonLink = isOnLoginPage ? "/signup" : "/login";

  return (
    <header
      id="header"
      className={headerClassName}
      style={{
        backgroundColor: isScrolled ? "black" : "transparent",
        transition: "background-color 0.3s ease",
      }}
    >
      <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
        <Link to="/" className="logo d-flex align-items-center me-auto me-lg-0">
          <img src={Logo} />
          <h1 className="fs-1">GitCash</h1>
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
          <i className="mobile-nav-toggle d-xl-none bi bi-list text-white"></i>
        </nav>

        <Link className="btn-getstarted" to={buttonLink}>
          {buttonText}
        </Link>
      </div>
    </header>
  );
};

export default Header;
