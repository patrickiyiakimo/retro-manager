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

    fireEvent.click(screen.getByRole("button", { name: /dots horizontal/i }));

    expect(
      screen.getByText(/are you sure you want to delete this retro\?/i),
    ).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: /close modal/i }));

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

    fireEvent.click(screen.getByRole("button", { name: /dots horizontal/i }));

    expect(
      screen.getByText(/are you sure you want to delete this retro\?/i),
    ).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: /no, cancel/i }));

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

    expect(
      screen.getByText(/are you sure you want to delete this retro\?/i),
    ).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: /yes, i'm sure/i }));

    expect(
      screen.queryByText(/are you sure you want to delete this retro\?/i),
    ).not.toBeInTheDocument();
  });
});
