import { render, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Navbar from "../Navbar";

describe("Navbar component", () => {

  it("renders logo and text", () => {
    const { getByText, getByAltText } = render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
    );
    expect(getByText("RM")).toBeInTheDocument();
    expect(getByAltText("retro manager Logo")).toBeInTheDocument();
  });

  it("renders log in button", () => {
    const { getByText } = render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
    );
    expect(getByText("Log In")).toBeInTheDocument();
  });

  it("renders hamburger menu button", () => {
    const { getByRole } = render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
    );
    expect(getByRole("button", { name: "Open main menu" })).toBeInTheDocument();
  });

  it("toggles menu on hamburger click", () => {
    const { getByRole, queryByText } = render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
    );
    const hamburgerButton = getByRole("button", { name: "Open main menu" });
    fireEvent.click(hamburgerButton);
    expect(queryByText("Home")).toBeInTheDocument();
    fireEvent.click(hamburgerButton);
    expect(queryByText("Home")).not.toBeInTheDocument();
  });

  it("renders menu items", () => {
    const { getByText, getByTestId } = render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
    );
    const hamburgerButton = getByTestId("hamburger-button");
    fireEvent.click(hamburgerButton);
    expect(getByText("Home")).toBeInTheDocument();
    expect(getByText("About")).toBeInTheDocument();
    expect(getByText("Services")).toBeInTheDocument();
    expect(getByText("Contact")).toBeInTheDocument();
  });
  it("renders dark theme toggle", () => {
    const { getByRole } = render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
    );
    const hamburgerButton = getByRole("button", { name: "Open main menu" });
    fireEvent.click(hamburgerButton);
    expect(
      getByRole("button", { name: "Toggle dark theme" }),
    ).toBeInTheDocument();
  });
});
