import { render, screen } from "@testing-library/react";
// import App from "./App";
import LogIn from "../LogIn";

test("renders learn react link", () => {
  render(<LogIn />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});