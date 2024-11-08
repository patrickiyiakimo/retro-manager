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

    // Check if the form elements are present
    expect(screen.getByLabelText(/generate team id/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /create/i })).toBeInTheDocument();
  });

  test("displays loading state when generating Team ID", async () => {
    mockGenerateId.mockImplementation(() => new Promise(() => {})); // Simulate a pending promise

    render(<CreateTeam />);

    // Click the create button
    fireEvent.click(screen.getByRole("button", { name: /create/i }));

    // Check if the loading text is displayed
    expect(screen.getByRole("button", { name: /generating.../i })).toBeInTheDocument();
  });

  test("generates and displays Team ID", async () => {
    mockGenerateId.mockResolvedValueOnce("generated-uuid-123");

    render(<CreateTeam />);

    // Click the create button
    fireEvent.click(screen.getByRole("button", { name: /create/i }));

    // Wait for the Team ID to be displayed
    await waitFor(() => {
      expect(screen.getByText(/team id: generated-uuid-123/i)).toBeInTheDocument();
    });
  });

  test("copies Team ID to clipboard", async () => {
    mockGenerateId.mockResolvedValueOnce("generated-uuid-123");

    render(<CreateTeam />);

    // Click the create button
    fireEvent.click(screen.getByRole("button", { name: /create/i }));

    // Wait for the Team ID to be displayed
    await waitFor(() => {
      expect(screen.getByText(/team id: generated-uuid-123/i)).toBeInTheDocument();
    });

    // Mock the clipboard API
    jest.spyOn(navigator.clipboard, "writeText").mockImplementation(() => Promise.resolve());

    // Click the copy button
    fireEvent.click(screen.getByRole("button", { name: /copy/i }));

    // Check if the clipboard API was called with the correct Team ID
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith("generated-uuid-123");
  });

  test("displays error message when Team ID generation fails", async () => {
    mockGenerateId.mockRejectedValueOnce(new Error("Failed to generate Team ID"));

    render(<CreateTeam />);

    // Click the create button
    fireEvent.click(screen.getByRole("button", { name: /create/i }));

    // Wait for the error message to be displayed
    await (() => {
      expect(screen.getByText(/failed to generate team id/i)).toBeInTheDocument();
    });
  });
});