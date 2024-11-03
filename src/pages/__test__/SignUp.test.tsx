import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { Formik } from "formik";
import SignUp from "../SignUp"; // Adjust the import path as necessary
import { signup } from "../../api/SignupUser";
// import { signup } from "../api/SignupUser"; // Adjust the import path as necessary

jest.mock("../../api/SignupUser "); // Mock the signup API

describe("SignUp Component", () => {
  beforeEach(() => {
    jest.clearAllMocks(); // Clear previous mocks before each test
  });

  test("renders the sign up form", () => {
    render(<SignUp />);

    expect(screen.getByText(/Sign up to our platform/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Your name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Your email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Remember me/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Create an Account/i }),
    ).toBeInTheDocument();
  });

  test("shows validation errors when submitting empty form", async () => {
    render(<SignUp />);

    fireEvent.click(screen.getByRole("button", { name: /Create an Account/i }));

    await waitFor(() => {
      expect(screen.getByText(/name is a required field/i)).toBeInTheDocument();
      expect(
        screen.getByText(/email is a required field/i),
      ).toBeInTheDocument();
      expect(
        screen.getByText(/password is a required field/i),
      ).toBeInTheDocument();
    });
  });

  test("submits the form and calls signup API", async () => {
    (signup as jest.Mock).mockResolvedValueOnce({ success: true }); // Mock a successful signup response

    render(<SignUp />);

    fireEvent.change(screen.getByLabelText(/Your name/i), {
      target: { value: "John Doe" },
    });
    fireEvent.change(screen.getByLabelText(/Your email/i), {
      target: { value: "john@example.com" },
    });
    fireEvent.change(screen.getByLabelText(/Password/i), {
      target: { value: "password123" },
    });

    fireEvent.click(screen.getByRole("button", { name: /Create an Account/i }));

    await waitFor(() => {
      expect(signup).toHaveBeenCalledWith({
        username: "John Doe",
        email: "john@example.com",
        password: "password123",
      });
    });
  });

  test("shows a loading state when signing up", async () => {
    (signup as jest.Mock).mockImplementation(() => new Promise(() => {})); // Mock an ongoing request

    render(<SignUp />);

    fireEvent.change(screen.getByLabelText(/Your name/i), {
      target: { value: "John Doe" },
    });
    fireEvent.change(screen.getByLabelText(/Your email/i), {
      target: { value: "john@example.com" },
    });
    fireEvent.change(screen.getByLabelText(/Password/i), {
      target: { value: "password123" },
    });

    fireEvent.click(screen.getByRole("button", { name: /Create an Account/i }));

    expect(screen.getByRole("status")).toBeInTheDocument(); // Check for loading spinner
  });

  test("handles signup error", async () => {
    (signup as jest.Mock).mockRejectedValueOnce(new Error("Signup failed")); // Mock an error response

    render(<SignUp />);

    fireEvent.change(screen.getByLabelText(/Your name/i), {
      target: { value: "John Doe" },
    });
    fireEvent.change(screen.getByLabelText(/Your email/i), {
      target: { value: "john@example.com" },
    });
    fireEvent.change(screen.getByLabelText(/Password/i), {
      target: { value: "password123" },
    });

    fireEvent.click(screen.getByRole("button", { name: /Create an Account/i }));

    await waitFor(() => {
      expect(screen.queryByRole("status")).not.toBeInTheDocument(); // Check that loading spinner is gone
      expect(screen.getByText(/Signup failed/i)).toBeInTheDocument(); // Check for error message
    });
  });
});
