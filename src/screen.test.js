import React from "react";
import { shallow } from "enzyme";
import Screen from "./screen";

describe("screen", () => {
  describe("when display on props", () => {
    it("should display properly", () => {
      const displayValue = '10';
      const screen = shallow(<Screen display={displayValue} />);

      expect(screen.text()).toBe(`Result : ${displayValue}`);
    });
  });
});
