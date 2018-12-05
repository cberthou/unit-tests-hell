import React, { Component } from "react";

const containerStyle = {
  display: "flex"
};

export const keyboardValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

export default class Keyboard extends Component {
  render() {
    const { handleInput, handleClear } = this.props;

    return (
      <div style={containerStyle}>
        {keyboardValues.map(key => (
          <button key={key} className={"value-button"} onClick={() => handleInput(key)}>
            {key}
          </button>
        ))}

        <button onClick={handleClear}>Clear</button>
      </div>
    );
  }
}
