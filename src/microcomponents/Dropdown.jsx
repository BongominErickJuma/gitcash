import React from "react";

const Dropdown = (props) => {
  return (
    <ul>
      {props.dropitems.map((drop, ind) => (
        <li key={ind}>
          <a href={drop.href}>{drop.title}</a>
        </li>
      ))}
    </ul>
  );
};

export default Dropdown;
