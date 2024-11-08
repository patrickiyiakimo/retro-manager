// IconWrapper.test.tsx
import React from "react";
import { render, screen } from "@testing-library/react";
import IconWrapper from "../IconWrapper";
// import IconWrapper from "./IconWrapper";

// Mock Icon component for testing
const MockIcon = () => <svg data-testid="mock-icon" />;

describe("IconWrapper", () => {
  test("renders the passed Icon component", () => {
    render(<IconWrapper Icon={MockIcon} testId="icon-wrapper" />);

    // Check if the mock icon is rendered
    const iconElement = screen.getByTestId("mock-icon");
    expect(iconElement).toBeInTheDocument();
  });

  test("applies the correct data-testid", () => {
    render(<IconWrapper Icon={MockIcon} testId="icon-wrapper" />);

    // Check if the wrapper has the correct data-testid
    const wrapperElement = screen.getByTestId("icon-wrapper");
    expect(wrapperElement).toBeInTheDocument();
  });

  test("applies the correct className", () => {
    render(
      <IconWrapper
        Icon={MockIcon}
        testId="icon-wrapper"
        className="test-class"
      />,
    );

    // Check if the wrapper has the correct className
    const wrapperElement = screen.getByTestId("icon-wrapper");
    expect(wrapperElement).toHaveClass("test-class");
  });
});
