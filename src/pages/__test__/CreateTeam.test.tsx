import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import CreateTeam from "../CreateTeam"; 
import { generate_id } from "../../api/GenerateTeamId"; 

jest.mock("../../api/GenerateTeamId", () => ({
  generate_id: jest.fn(),
}));

describe("CreateTeam", () => {
  const mockGenerateId = generate_id as jest.Mock;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders CreateTeam component", () => {
    render(<CreateTeam />);

    expect(screen.getByLabelText(/generate team id/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /create/i })).toBeInTheDocument();
  });

  test("displays loading state when generating Team ID", async () => {
    mockGenerateId.mockImplementation(() => new Promise(() => {})); // Simulate a pending promise

    render(<CreateTeam />);

    fireEvent.click(screen.getByRole("button", { name: /create/i }));

    expect(screen.getByRole("button", { name: /generating.../i })).toBeInTheDocument();
  });

  test("generates and displays Team ID", async () => {
    mockGenerateId.mockResolvedValueOnce("generated-uuid-123");

    render(<CreateTeam />);

    fireEvent.click(screen.getByRole("button", { name: /create/i }));

    await waitFor(() => {
      expect(screen.getByText(/team id: generated-uuid-123/i)).toBeInTheDocument();
    });
  });

  test("copies Team ID to clipboard", async () => {
    mockGenerateId.mockResolvedValueOnce("generated-uuid-123");

    render(<CreateTeam />);

    fireEvent.click(screen.getByRole("button", { name: /create/i }));

    await waitFor(() => {
      expect(screen.getByText(/team id: generated-uuid-123/i)).toBeInTheDocument();
    });

    jest.spyOn(navigator.clipboard, "writeText").mockImplementation(() => Promise.resolve());

    fireEvent.click(screen.getByRole("button", { name: /copy/i }));

    expect(navigator.clipboard.writeText).toHaveBeenCalledWith("generated-uuid-123");
  });

  test("displays error message when Team ID generation fails", async () => {
    mockGenerateId.mockRejectedValueOnce(new Error("Failed to generate Team ID"));

    render(<CreateTeam />);

    fireEvent.click(screen.getByRole("button", { name: /create/i }));

    await (() => {
      expect(screen.getByText(/failed to generate team id/i)).toBeInTheDocument();
    });
  });
});