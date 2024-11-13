import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom"; 
import Modal from "../Modal"; 

describe("Modal", () => {
  test("renders Modal component", () => {
    render(
      <Router>
        <Modal />
      </Router>,
    );

    expect(screen.getByText(/upgrade your team/i)).toBeInTheDocument();
    expect(
      screen.getByText(
        /private retros, mention teammates, admin controls, and more.../i,
      ),
    ).toBeInTheDocument();
    expect(screen.getByText(/create workspace/i)).toBeInTheDocument();
  });

  test("closes the modal when close button is clicked", () => {
    render(
      <Router>
        <Modal />
      </Router>,
    );

    fireEvent.click(screen.getByText("X"));

    expect(screen.queryByText(/upgrade your team/i)).not.toBeInTheDocument();
  });

  test("navigates to create workspace when link is clicked", () => {
    render(
      <Router>
        <Modal />
      </Router>,
    );

    const linkElement = screen.getByText(/create workspace/i);
    expect(linkElement).toBeInTheDocument();

    fireEvent.click(linkElement);
  });
});
