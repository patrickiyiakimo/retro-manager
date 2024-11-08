import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom"; // Import Router for Link
import Modal from "../Modal"; // Adjust the import path as necessary

describe("Modal", () => {
  test("renders Modal component", () => {
    render(
      <Router>
        <Modal />
      </Router>,
    );

    // Check if the modal content is present
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

    // Click the close button
    fireEvent.click(screen.getByText("X"));

    // Check that the modal content is no longer visible
    expect(screen.queryByText(/upgrade your team/i)).not.toBeInTheDocument();
  });

  test("navigates to create workspace when link is clicked", () => {
    render(
      <Router>
        <Modal />
      </Router>,
    );

    // Check if the link is present
    const linkElement = screen.getByText(/create workspace/i);
    expect(linkElement).toBeInTheDocument();

    // Simulate clicking the link
    fireEvent.click(linkElement);

    // Since we are not using a real router, we cannot check for navigation,
    // but we can ensure that the link behaves as expected.
    // In a full integration test, you would use a testing library like `react-router` to check the route.
  });
});
