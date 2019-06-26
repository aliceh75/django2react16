import React from "react";
import {create} from "react-test-renderer";
import AppContent from "../components/AppContent";

describe("AppContent Component", () => {
  test("It should show the counter value", () => {
    const component = create(<AppContent counter={12} onIncCounter={() => null} />);
    const root = component.root;

    expect(root.findByType('p').children.join('')).toBe('Hello World: 12');
  });

  test("It should call onIncCounter when button is clicked", () => {
    const onIncCounter = jest.fn();
    const component = create(<AppContent counter={12} onIncCounter={onIncCounter} />);
    const root = component.root;

    // Simulate a click
    root.findByType('button').props.onClick();

    expect(onIncCounter).toHaveBeenCalledTimes(1);
  });
});
