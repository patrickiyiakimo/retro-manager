import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import InviteTeamModal from "../InviteTeamModal"; 
import { inviteteam } from "../../../api/InviteTeam"; 

// Mock the API call
jest.mock("../../../api/InviteTeam", () => ({
  inviteteam: jest.fn(),
}));

describe("InviteTeamModal", () => {
  const addInviteMock = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders the modal and submits the form", async () => {
    render(<InviteTeamModal addInvite={addInviteMock} />);

    // Open the modal
    fireEvent.click(screen.getByText("+ Invite Team Members"));

    // Fill in the form
    fireEvent.change(screen.getByPlaceholderText("name@company.com"), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(screen.getByPlaceholderText("Enter Team ID"), {
      target: { value: "team-uuid-123" },
    });

    // Mock the API response before submitting
    (inviteteam as jest.Mock).mockResolvedValueOnce({ success: true });

    // Submit the form
    fireEvent.click(screen.getByText("Send Invite"));

    // Wait for success message
    await waitFor(() => {
      expect(screen.getByText("Invite sent successfully!")).toBeInTheDocument();
    });

    // Check if addInvite was called
    expect(addInviteMock).toHaveBeenCalledWith({
      email: "test@example.com",
      position: "Invited",
    });
  });

  test("shows error message on invalid input", async () => {
    render(<InviteTeamModal addInvite={addInviteMock} />);

    // Open the modal
    fireEvent.click(screen.getByText("+ Invite Team Members"));

    // Submit the form without filling it
    fireEvent.click(screen.getByText("Send Invite"));

    // Check for error message
    await waitFor(() => {
      expect(screen.getByText("Both fields are required.")).toBeInTheDocument();
    });
  });
});
