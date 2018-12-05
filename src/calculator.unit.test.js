import React from 'react';
import { shallow } from "enzyme";

import Calculator from './calculator';
import Keyboard from './keyboard';
import Screen from './screen';

function typeValue(calculator, value) {
    calculator.find(Keyboard)
        .prop('handleValue')
        .call(null, value);

    return calculator;
}

describe('calculator', () => {
   describe('unit', () => {
       describe('when keyboard send a value', () => {
           it('should send the added value to the screen', () => {
               const calculator = shallow(<Calculator/>);

               typeValue(calculator, 8);

               const displayValue = calculator.find(Screen)
                   .prop('display');

               expect(displayValue).toBe(8);
           });
       })

       describe('when keyboard send multiple values', () => {
           it('should send the added values to the screen', () => {
               const calculator = shallow(<Calculator/>);

               typeValue(calculator, 8);
               typeValue(calculator, 5);

               const displayValue = calculator.find(Screen)
                   .prop('display');

               expect(displayValue).toBe(13);
           });
       })
   });
});
