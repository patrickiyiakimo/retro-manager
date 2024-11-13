import { render, screen } from "@testing-library/react";
import IconWrapper from "../IconWrapper";

const MockIcon = () => <svg data-testid="mock-icon" />;

describe("IconWrapper", () => {
  test("renders the passed Icon component", () => {
    render(<IconWrapper Icon={MockIcon} testId="icon-wrapper" />);

   
    const iconElement = screen.getByTestId("mock-icon");
    expect(iconElement).toBeInTheDocument();
  });

  test("applies the correct data-testid", () => {
    render(<IconWrapper Icon={MockIcon} testId="icon-wrapper" />);

   
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
