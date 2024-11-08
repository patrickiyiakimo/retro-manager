// InviteTeamMembers.test.tsx
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import InviteTeamMembers from "../InviteTeamMembers"; // Adjust this path if needed
import { fetchInvites } from "../../../api/FetchInvites";
// import { fetchInvites } from "../../api/FetchInvites"; // Adjust this path if needed

// Define the Invite interface to use in mocks
interface Invite {
  email: string;
  position?: string;
}

// Adjust the path to InvitesTable based on your project structure
jest.mock("../InvitesTable", () => {
  return ({ invites }: { invites: Invite[] }) => (
    <div data-testid="invites-table">
      {invites.map((invite) => (
        <div key={invite.email}>{invite.email}</div>
      ))}
    </div>
  );
});

jest.mock("./InviteTeamModal", () => {
  return ({ addInvite }: { addInvite: (invite: Invite) => void }) => (
    <button onClick={() => addInvite({ email: "test@example.com" })}>
      Add Invite
    </button>
  );
});

jest.mock("../../api/FetchInvites", () => ({
  fetchInvites: jest.fn(),
}));

describe("InviteTeamMembers", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders the InviteTeamMembers component", () => {
    render(<InviteTeamMembers />);

    expect(screen.getByText(/Work fast from anywhere/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Collaborate with teams from anywhere in the world/i),
    ).toBeInTheDocument();
  });

  test("fetches invites on mount", async () => {
    const mockInvites: Invite[] = [
      { email: "test1@example.com" },
      { email: "test2@example.com" },
    ];
    (fetchInvites as jest.Mock).mockResolvedValueOnce(mockInvites);

    render(<InviteTeamMembers />);

    await waitFor(() => {
      expect(fetchInvites).toHaveBeenCalled();
      expect(screen.getByText("test1@example.com")).toBeInTheDocument();
      expect(screen.getByText("test2@example.com")).toBeInTheDocument();
    });
  });

  test("adds a new invite", async () => {
    const mockInvites: Invite[] = [{ email: "test1@example.com" }];
    (fetchInvites as jest.Mock).mockResolvedValueOnce(mockInvites);

    render(<InviteTeamMembers />);

    await waitFor(() => {
      expect(fetchInvites).toHaveBeenCalled();
    });

    const addInviteButton = screen.getByRole("button", { name: /add invite/i });
    fireEvent.click(addInviteButton);

    expect(screen.getByText("test@example.com")).toBeInTheDocument();
  });
});
