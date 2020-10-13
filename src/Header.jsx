import React, { Component } from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMinusCircle,
  faPlusCircle,
  faShoppingCart,
  faSyncAlt,
} from "@fortawesome/free-solid-svg-icons";

function Header(props) {
  return (
    <header>
      <nav className="nav-bar">
        <FontAwesomeIcon className="icon" icon={faShoppingCart} />
        <span className="counter" id="counter">
          <strong id="sdf123">{props.count}</strong>
        </span>
        <div className="nav-text">Items</div>
      </nav>
    </header>
  );
}
export default Header;
