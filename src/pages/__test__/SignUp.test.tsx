import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import SignUp from "../SignUp";
import { signup } from "../../api/SignupUser";
// import { signup } from "../../api/SignupUser "; // Ensure this path is correct

// Corrected mock statement
jest.mock("../../api/SignupUser"); // Remove any extra spaces

describe("SignUp Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
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
    (signup as jest.Mock).mockResolvedValueOnce({ success: true });

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
    (signup as jest.Mock).mockImplementation(() => new Promise(() => {}));

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

    expect(screen.getByRole("status")).toBeInTheDocument();
  });

  test("handles signup error", async () => {
    (signup as jest.Mock).mockRejectedValueOnce(new Error("Signup failed"));

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
      expect(screen.getByText(/Signup failed/i)).toBeInTheDocument(); // Ensure error message is displayed
    });
  });
});
