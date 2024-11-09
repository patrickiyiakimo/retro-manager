import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import InviteManager from "../InviteManager";
import { fetchInvites } from "../../../api/FetchInvites";

// Mock the InvitesTable and InviteTeamModal components with correct paths
jest.mock("../InvitesTable", () => () => <div data-testid="invites-table" />);
jest.mock(
  "../InviteTeamModal",
  () =>
    ({ addInvite }: { addInvite: (invite: { email: string }) => void }) => (
      <button onClick={() => addInvite({ email: "test@example.com" })}>
        Add Invite
      </button>
    ),
);

// Mock the fetchInvites function
jest.mock("../../../api/FetchInvites", () => ({
  fetchInvites: jest.fn(),
}));

describe("InviteManager", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("fetches invites on mount", async () => {
    (fetchInvites as jest.Mock).mockResolvedValueOnce([
      { email: "user1@example.com" },
    ]);

    render(<InviteManager />);

    await waitFor(() => {
      expect(screen.getByTestId("invites-table")).toBeInTheDocument();
    });
  });

  test("adds an invite when the button is clicked", async () => {
    (fetchInvites as jest.Mock).mockResolvedValueOnce([
      { email: "user1@example.com" },
    ]);

    render(<InviteManager />);

    // Wait for the initial fetch
    await waitFor(() => {
      expect(screen.getByTestId("invites-table")).toBeInTheDocument();
    });

    // Click the button to add an invite
    screen.getByText("Add Invite").click();

    // Check that the invite was added
    await waitFor(() => {
      expect(screen.getByText("user1@example.com")).toBeInTheDocument();
      expect(screen.getByText("test@example.com")).toBeInTheDocument();
    });
  });
});
