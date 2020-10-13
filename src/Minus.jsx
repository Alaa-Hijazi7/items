import React, { Component } from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMinusCircle,
  faPlusCircle,
  faShoppingCart,
  faSyncAlt,
} from "@fortawesome/free-solid-svg-icons";

function Miunsbtn(props) {
  const { Num, minusbtn } = props;
  return (
    <button
      name="minus-1"
      className={`minus-btn${Num} ${props.count1 === 0 ? "display23" : ""}`}
      id="minus1"
      onClick={(e) => minusbtn(e)}
      disabled={props.count1 === 0}
    >
      <FontAwesomeIcon icon={faMinusCircle} />
    </button>
  );
}
export default Miunsbtn;
