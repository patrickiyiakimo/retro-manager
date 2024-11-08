import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom"; 
import RetroDashboard from "../RetroDashboard"; 

describe("RetroDashboard", () => {
  test("renders RetroDashboard component", () => {
    render(
      <Router>
        <RetroDashboard />
      </Router>,
    );

    // Check if the table headers are present
    expect(screen.getByText(/name/i)).toBeInTheDocument();
    expect(screen.getByText(/date/i)).toBeInTheDocument();
    expect(screen.getByText(/participant/i)).toBeInTheDocument();
    expect(screen.getByText(/action/i)).toBeInTheDocument();
  });

  test("opens and closes the modal when the button is clicked", () => {
    render(
      <Router>
        <RetroDashboard />
      </Router>,
    );

    // Click the button to open the modal
    fireEvent.click(screen.getByRole("button", { name: /dots horizontal/i }));

    // Check if the modal is now visible
    expect(
      screen.getByText(/are you sure you want to delete this retro\?/i),
    ).toBeInTheDocument();

    // Click the close button in the modal
    fireEvent.click(screen.getByRole("button", { name: /close modal/i }));

    // Check if the modal is no longer visible
    expect(
      screen.queryByText(/are you sure you want to delete this retro\?/i),
    ).not.toBeInTheDocument();
  });

  test("closes the modal when 'No, cancel' button is clicked", () => {
    render(
      <Router>
        <RetroDashboard />
      </Router>,
    );

    // Open the modal
    fireEvent.click(screen.getByRole("button", { name: /dots horizontal/i }));

    // Check if the modal is now visible
    expect(
      screen.getByText(/are you sure you want to delete this retro\?/i),
    ).toBeInTheDocument();

    // Click the 'No, cancel' button
    fireEvent.click(screen.getByRole("button", { name: /no, cancel/i }));

    // Check if the modal is no longer visible
    expect(
      screen.queryByText(/are you sure you want to delete this retro\?/i),
    ).not.toBeInTheDocument();
  });

  test("closes the modal when 'Yes, I'm sure' button is clicked", () => {
    render(
      <Router>
        <RetroDashboard />
      </Router>,
    );

    // Open the modal
    fireEvent.click(screen.getByRole("button", { name: /dots horizontal/i }));

    // Check if the modal is now visible
    expect(
      screen.getByText(/are you sure you want to delete this retro\?/i),
    ).toBeInTheDocument();

    // Click the 'Yes, I'm sure' button
    fireEvent.click(screen.getByRole("button", { name: /yes, i'm sure/i }));

    // Check if the modal is no longer visible
    expect(
      screen.queryByText(/are you sure you want to delete this retro\?/i),
    ).not.toBeInTheDocument();
  });
});
