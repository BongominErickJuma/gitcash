import React from "react";

const Dropdown = (props) => {
  return (
    <ul className="list-group list-group-flush">
      {props.dropitems.map((drop, ind) => (
        <li className="list-group-item" key={ind}>
          <a href={drop.href}>{drop.title}</a>
        </li>
      ))}
    </ul>
  );
};

export default Dropdown;
