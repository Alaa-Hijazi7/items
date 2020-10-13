import React, { Component } from "react";
import "./App.css";
function Spans(props) {
  return (
    <span
      className={`counter${props.num} ${props.count1 ? "shawrma" : ""}`}
      id="counter1"
    >
      <strong>{`${props.count1 > 0 ? props.count1 : "Zero"}`}</strong>
    </span>
  );
}
export default Spans;
