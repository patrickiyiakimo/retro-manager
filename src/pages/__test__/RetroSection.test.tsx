import { render, screen } from "@testing-library/react";
// import App from "./App";
import RetroSection from "../RetroSection";

test("renders learn react link", () => {
  render(<RetroSection />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
