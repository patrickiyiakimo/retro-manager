import { render, screen } from "@testing-library/react";
import Hero from "../Hero";
// import App from "./App";

test("renders learn react link", () => {
  render(<Hero />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
