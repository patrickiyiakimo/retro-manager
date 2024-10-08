import { render, screen, fireEvent } from "@testing-library/react";
import Navbar from "../Navbar";
import { BrowserRouter } from "react-router-dom";

const renderNavbar = () => {
  return render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>,
  );
};

describe("Navbar Component", () => {
  it("it renders the navigation links", () => {
    renderNavbar();

    const homeLink = screen.getByText(/home/i);
    const aboutLink = screen.getByText(/about/i);
    const servicesLink = screen.getByText(/services/i);
    const contactLink = screen.getByText(/contact/i);

    expect(homeLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
    expect(servicesLink).toBeInTheDocument();
    expect(contactLink).toBeInTheDocument();
  });

  it("shows and hides the mobile menu when toggle is clicked", () => {
    renderNavbar();

    //the menu should be hidden at first
    const menu = screen.getByRole("navigation");
    expect(menu).toHaveClass("hidden");

    //click the hamburger button to open the button
    const toggleButton = screen.getByRole("button", {
      name: /open main menu/i,
    });
    fireEvent.click(toggleButton);

    //after clicking the menu should be visible
    expect(menu).not.toHaveClass("hidden");

    //click again to close the menu
    fireEvent.click(toggleButton);
    expect(menu).toHaveClass("hidden");
  });

  it("renders the dark theme mode", () => {
    renderNavbar();

    //checking if the darktoggle component is rendered
    const darkThemeToggle = screen.getByRole("button", {
      name: /toggle dark mode/i,
    });
    expect(darkThemeToggle).toBeInTheDocument();
  });
});
