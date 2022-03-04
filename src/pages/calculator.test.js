import React from "react";
import { render } from "@testing-library/react";
import Calculator from "./calculator.js"
import Modal from "./Modal.js"


test("renders Calculate button", () => {
    const {queryByTitle} = render(<Calculator />);
    const button = queryByTitle("calculate");
    expect(button).toBeTruthy();
})


test("Changes displayed inputs", () => {
    const {queryByTitle} = render(<Calculator />);
    const display = queryByTitle("input-display");
    expect(display).toBeTruthy();
})


test('Modal shows up in calculator page', () => {
    const handleClose = jest.fn()
    const {getByText} = render(
      <Modal onClose={handleClose}>
        <div>close</div>
      </Modal>,
    )
    expect(getByText('Calculate')).toBeTruthy()
  })
