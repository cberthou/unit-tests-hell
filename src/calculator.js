import React, { Component } from "react";
import Keyboard from "./keyboard";
import Screen from "./screen";

export default class Calculator extends Component {
  state = {
    displayValue: 0
  };

  handleInput = value => {
    this.setState(({ displayValue }) => ({
      displayValue: displayValue + value
    }));
  };

  handleClear = () => {
    this.setState(() => ({ displayValue: 0 }));
  };

  render() {
    const { displayValue } = this.state;

    return (
      <div>
        <Screen display={displayValue} />
        <Keyboard
          handleInput={this.handleInput}
          handleClear={() => this.handleClear()}
        />
      </div>
    );
  }
}
