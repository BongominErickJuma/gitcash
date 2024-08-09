import React from "react";

const NavLinks = (props) => {
  return (
    <a href={props.href}>
      <span>{props.name}</span>
      <i className="bi bi-chevron-down toggle-dropdown"></i>
    </a>
  );
};

export default NavLinks;
