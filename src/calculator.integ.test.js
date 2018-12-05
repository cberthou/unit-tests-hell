import React from 'react';

import { render, fireEvent, cleanup, waitForElement } from 'react-testing-library';

import Calculator from './calculator';

describe('calculator', () => {
   describe('integration', () => {
      afterEach(cleanup);
      describe('on first key press', () => {
         it('should display the key pressed value', () => {
            const { getByText } = render(<Calculator/>);

            fireEvent.click(getByText('1'));

            expect(getByText('Result : 1')).toBeVisible();
         });
      });

      describe('on multiple key press', () => {
         it('should display the sum of the key pressed', () => {
            const { getByText } = render(<Calculator/>);

            fireEvent.click(getByText('3'));
            fireEvent.click(getByText('5'));

            expect(getByText('Result : 8')).toBeVisible();
         });
      });
   });
});
