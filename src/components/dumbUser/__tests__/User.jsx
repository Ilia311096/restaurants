import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { User } from "../User";

describe("test UserComponent", () => {
  it("should render correct", () => {
    render(<User userName={"Artem"} />);

    expect(screen.getByText("Artem")).toBeInTheDocument();
  });
  it("should invoke callback", () => {
    const callback = jest.fn();
    render(<User userName={"Artem"} onClick={callback} />);

    const button = screen.getByText("ClickMe");

    fireEvent(
      button,
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );

    expect(callback).toHaveBeenCalledTimes(1);
  });
});
