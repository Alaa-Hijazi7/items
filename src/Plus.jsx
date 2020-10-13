import React, { Component } from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMinusCircle,
  faPlusCircle,
  faShoppingCart,
  faSyncAlt,
} from "@fortawesome/free-solid-svg-icons";

function Plusbtn(props) {
  const { btnNum, plusbtn } = props;
  return (
    <button
      name="btn-1"
      className={`plus-btn${btnNum}`}
      onClick={(e) => plusbtn(e)}
    >
      <FontAwesomeIcon icon={faPlusCircle} />
    </button>
  );
}
export default Plusbtn;
