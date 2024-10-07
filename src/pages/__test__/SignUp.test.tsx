import { render, screen } from "@testing-library/react";
// import App from "./App";
import SignUp from "../SignUp"

test("renders learn react link", () => {
  render(<SignUp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
