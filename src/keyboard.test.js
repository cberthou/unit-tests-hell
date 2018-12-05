import React from 'react';
import { shallow } from "enzyme";
import Keyboard, { keyboardValues } from "./keyboard";

describe("keyboard", () => {
  describe("on button value click", () => {
    it("should call handleInput with the right value", () => {
      const handleInput = jest.fn();
      const keyboard = shallow(<Keyboard handleInput={handleInput} />);

      keyboard.find(".value-button").forEach((button, index) => {
        button.simulate("click");
        expect(handleInput).toHaveBeenCalledWith(keyboardValues[index]);
      });

      expect(handleInput).toHaveBeenCalledWith(1);
    });
  });

    describe("on clear button click", () => {
        it("should call handleClear", () => {
            const handleClear = jest.fn();
            const keyboard = shallow(<Keyboard handleClear={handleClear} />);

            keyboard.find(".clear-button").simulate("click");

            expect(handleClear).toHaveBeenCalled();
        });
    });
});
