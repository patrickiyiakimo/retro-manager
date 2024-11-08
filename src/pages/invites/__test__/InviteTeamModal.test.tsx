import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import InviteTeamModal from "../InviteTeamModal"; // Adjust the import path as necessary
import { inviteteam } from "../../../api/InviteTeam";
// import { inviteteam } from "../../api/InviteTeam"; // Adjust the import path as necessary

// Mock the API call
jest.mock("../../api/InviteTeam", () => ({
  inviteteam: jest.fn(),
}));

describe("InviteTeamModal", () => {
  const mockAddInvite = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders InviteTeamModal and opens the modal", () => {
    render(<InviteTeamModal addInvite={mockAddInvite} />);

    // Check if the button to open the modal is present
    const openModalButton = screen.getByRole("button", {
      name: /\+ invite team members/i,
    });
    expect(openModalButton).toBeInTheDocument();

    // Click to open the modal
    fireEvent.click(openModalButton);

    // Check if modal content is visible
    expect(screen.getByText(/invite team members/i)).toBeInTheDocument();
  });

  test("closes the modal when close button is clicked", () => {
    render(<InviteTeamModal addInvite={mockAddInvite} />);

    // Open the modal
    fireEvent.click(
      screen.getByRole("button", { name: /\+ invite team members/i }),
    );

    // Close the modal
    fireEvent.click(screen.getByRole("button", { name: /close modal/i }));

    // Check if modal content is not visible
    expect(screen.queryByText(/invite team members/i)).not.toBeInTheDocument();
  });

  test("submits the form and calls addInvite on successful invite", async () => {
    (inviteteam as jest.Mock).mockResolvedValueOnce({ success: true });

    render(<InviteTeamModal addInvite={mockAddInvite} />);

    // Open the modal
    fireEvent.click(
      screen.getByRole("button", { name: /\+ invite team members/i }),
    );

    // Fill the form
    fireEvent.change(screen.getByPlaceholderText(/name@company.com/i), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(screen.getByPlaceholderText(/enter team id/i), {
      target: { value: "12345" },
    });

    // Submit the form
    fireEvent.click(screen.getByRole("button", { name: /send invite/i }));

    // Wait for the success message
    await waitFor(() => {
      expect(screen.getByText(/invite sent successfully/i)).toBeInTheDocument();
    });

    // Check if addInvite was called with the correct argument
    expect(mockAddInvite).toHaveBeenCalledWith({
      email: "test@example.com",
      position: "Invited",
    });
  });

  test("shows error message when fields are empty", async () => {
    render(<InviteTeamModal addInvite={mockAddInvite} />);

    // Open the modal
    fireEvent.click(
      screen.getByRole("button", { name: /\+ invite team members/i }),
    );

    // Submit the form without filling fields
    fireEvent.click(screen.getByRole("button", { name: /send invite/i }));

    // Check for error message
    expect(
      await screen.findByText(/both fields are required/i),
    ).toBeInTheDocument();
  });

  test("shows error message on invite failure", async () => {
    (inviteteam as jest.Mock).mockRejectedValueOnce(new Error("Invite failed"));

    render(<InviteTeamModal addInvite={mockAddInvite} />);

    // Open the modal
    fireEvent.click(
      screen.getByRole("button", { name: /\+ invite team members/i }),
    );

    // Fill the form
    fireEvent.change(screen.getByPlaceholderText(/name@company.com/i), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(screen.getByPlaceholderText(/enter team id/i), {
      target: { value: "12345" },
    });

    // Submit the form
    fireEvent.click(screen.getByRole("button", { name: /send invite/i }));

    // Check for error message
    expect(
      await screen.findByText(/error sending invite/i),
    ).toBeInTheDocument();
  });
});
