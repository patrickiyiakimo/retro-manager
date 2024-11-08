import { render, screen, waitFor, fireEvent } from "@testing-library/react"; 
import { fetchInvites } from "../../../api/FetchInvites";
import InviteManager from "../InviteManager";

jest.mock("./InvitesTable", () => () => <div data-testid="invites-table" />);
jest.mock(
  "./InviteTeamModal",
  () =>
    ({ addInvite }: { addInvite: (invite: { email: string }) => void }) => (
      <button onClick={() => addInvite({ email: "test@example.com" })}>
        Add Invite
      </button>
    ),
);

jest.mock("../../api/FetchInvites", () => ({
  fetchInvites: jest.fn(),
}));

describe("InviteManager", () => {
  beforeEach(() => {
    // Reset the mock implementation before each test
    (fetchInvites as jest.Mock).mockReset();
  });

  test("renders InviteTeamModal and InvitesTable", () => {
    render(<InviteManager />);

    expect(
      screen.getByRole("button", { name: /add invite/i }),
    ).toBeInTheDocument();
    expect(screen.getByTestId("invites-table")).toBeInTheDocument();
  });

  test("fetches invites on mount", async () => {
    const mockInvites = [
      { email: "test1@example.com" },
      { email: "test2@example.com" },
    ];
    (fetchInvites as jest.Mock).mockResolvedValueOnce(mockInvites);

    render(<InviteManager />);

    // Wait for the invites to be fetched and rendered
    await waitFor(() => {
      expect(fetchInvites).toHaveBeenCalled();
      expect(screen.getByText("test1@example.com")).toBeInTheDocument();
      expect(screen.getByText("test2@example.com")).toBeInTheDocument();
    });
  });

  test("adds a new invite", async () => {
    const mockInvites = [{ email: "test1@example.com" }];
    (fetchInvites as jest.Mock).mockResolvedValueOnce(mockInvites);

    render(<InviteManager />);

    // Wait for the invites to be fetched
    await waitFor(() => {
      expect(fetchInvites).toHaveBeenCalled();
    });

    const addInviteButton = screen.getByRole("button", { name: /add invite/i });
    fireEvent.click(addInviteButton);

    // Checking if the new invite is added
    expect(screen.getByText("test@example.com")).toBeInTheDocument();
  });
});
