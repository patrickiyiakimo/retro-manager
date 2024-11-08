import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import RetroStandup from "../RetroStandup"; 

// Mocking the fetch function
global.fetch = jest.fn();

describe("RetroStandup", () => {
  const mockStandups = [
    {
      standup_id: 1,
      accomplished: "Completed the project",
      not_well: "Missed the deadline",
      working_on: "New features",
      improvement: "Better time management",
      created_at: "2023-10-01T12:00:00Z",
    },
    {
      standup_id: 2,
      accomplished: "Finished the documentation",
      not_well: "Had technical issues",
      working_on: "Bug fixes",
      improvement: "More testing",
      created_at: "2023-10-02T12:00:00Z",
    },
  ];

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders RetroStandup component and fetches standups", async () => {
    // Mocking fetch to return mock data
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: jest.fn().mockResolvedValueOnce(mockStandups),
    });

    render(<RetroStandup />);

    // Check if the standups are displayed
    expect(await screen.findByText(/standup for/i)).toBeInTheDocument();
    expect(screen.getByText(/completed the project/i)).toBeInTheDocument();
    expect(screen.getByText(/missed the deadline/i)).toBeInTheDocument();
    expect(screen.getByText(/finished the documentation/i)).toBeInTheDocument();
  });

  test("deletes a standup item", async () => {
    // Mocking fetch to return mock data for GET
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: jest.fn().mockResolvedValueOnce(mockStandups),
    });

    // Mocking fetch for DELETE request
    (fetch as jest.Mock).mockResolvedValueOnce({ ok: true });

    render(<RetroStandup />);

    // Wait for the standups to be displayed
    await screen.findByText(/standup for/i);

    // Check that the first standup is present
    const deleteButton = screen.getByText(/delete/i);
    expect(deleteButton).toBeInTheDocument();

    // Click the delete button
    fireEvent.click(deleteButton);

    // Wait for the standup to be removed
    await waitFor(() => {
      expect(
        screen.queryByText(/completed the project/i),
      ).not.toBeInTheDocument();
    });
  });

  test("handles fetch error gracefully", async () => {
    // Mocking fetch to return an error for GET
    (fetch as jest.Mock).mockRejectedValueOnce(new Error("Fetch failed"));

    render(<RetroStandup />);

  });
});
