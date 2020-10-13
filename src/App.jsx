import React, { Component } from "react";
import "./App.css";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMinusCircle,
  faPlusCircle,
  faShoppingCart,
  faSyncAlt,
} from "@fortawesome/free-solid-svg-icons";
import Header from "./Header";
import Spans from "./Span";
import Plus from "./Plus";
import Minus from "./Minus";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count1: 0,
      count2: 0,
      count3: 0,
      count4: 0,
    };
  }

  plusbtn1 = () => {
    this.setState((prevState) => {
      const newState1 = { count1: prevState.count1 + 1 };
      if (prevState.count1 === 0) {
        newState1.count = prevState.count + 1;
      }
      return newState1;
    });
  };

  plusbtn2 = () => {
    this.setState((prevState) => {
      const newState2 = { count2: prevState.count2 + 1 };
      if (prevState.count2 === 0) {
        newState2.count = prevState.count + 1;
      }
      return newState2;
    });
  };

  plusbtn3 = () => {
    this.setState((prevState) => {
      const newState3 = { count3: prevState.count3 + 1 };
      if (prevState.count3 === 0) {
        newState3.count = prevState.count + 1;
      }
      return newState3;
    });
  };
  plusbtn4 = () => {
    this.setState((prevState) => {
      const newState4 = { count4: prevState.count4 + 1 };
      if (prevState.count4 === 0) {
        newState4.count = prevState.count + 1;
      }
      return newState4;
    });
  };

  minusbtn1 = () => {
    this.setState((prevState) => {
      const removeState = { count1: prevState.count1 - 1 };
      if (prevState.count1 === 1) {
        removeState.count = prevState.count - 1;
      }
      return removeState;
    });
  };

  minusbtn2 = () => {
    this.setState((prevState) => {
      const removeState = { count2: prevState.count2 - 1 };
      if (prevState.count2 === 1) {
        removeState.count = prevState.count - 1;
      }
      return removeState;
    });
  };
  minusbtn3 = () => {
    this.setState((prevState) => {
      const removeState = { count3: prevState.count3 - 1 };
      if (prevState.count3 === 1) {
        removeState.count = prevState.count - 1;
      }
      return removeState;
    });
  };
  minusbtn4 = () => {
    this.setState((prevState) => {
      const removeState = { count4: prevState.count4 - 1 };
      if (prevState.count4 === 1) {
        removeState.count = prevState.count - 1;
      }
      return removeState;
    });
  };

  resetbtn() {
    this.setState({
      count: 0,
      count1: 0,
      count2: 0,
      count3: 0,
      count4: 0,
    });
    this.setState({ disable1: true });
  }
  render() {
    return (
      <div className="*">
        <Header count={this.state.count} />

        <section>
          <button className="reset-btn" onClick={(e) => this.resetbtn(e)}>
            <FontAwesomeIcon className="reset-icon" icon={faSyncAlt} />
          </button>
          <div className="list">
            <div className="counter1234">
              <Spans count1={this.state.count1} num="1" />
              <Spans count1={this.state.count2} num="2" />
              <Spans count1={this.state.count3} num="3" />
              <Spans count1={this.state.count4} num="4" />
            </div>
            <div className="plus-btns">
              <Plus plusbtn={this.plusbtn1} btnNum="1" />
              <Plus plusbtn={this.plusbtn2} btnNum="2" />
              <Plus plusbtn={this.plusbtn3} btnNum="3" />
              <Plus plusbtn={this.plusbtn4} btnNum="4" />
            </div>

            <div className="minus-btns">
              <Minus
                count1={this.state.count1}
                minusbtn={this.minusbtn1}
                Num="1"
              />
              <Minus
                count1={this.state.count2}
                minusbtn={this.minusbtn2}
                Num="2"
              />
              <Minus
                count1={this.state.count3}
                minusbtn={this.minusbtn3}
                Num="3"
              />
              <Minus
                count1={this.state.count4}
                minusbtn={this.minusbtn4}
                Num="4"
              />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
