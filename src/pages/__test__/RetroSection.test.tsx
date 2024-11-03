import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import RetroSection from "../RetroSection";


global.fetch = jest.fn();

describe("RetroSection Component", () => {
  beforeEach(() => {
    jest.clearAllMocks(); 
  });

  test("renders the RetroSection component", () => {
    render(<RetroSection />);

    expect(screen.getByText(/What went well?/i)).toBeInTheDocument();
    expect(screen.getByText(/What did not go well?/i)).toBeInTheDocument();
    expect(
      screen.getByText(/What's your focus this week?/i),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/What do we need to improve on?/i),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Post Standup/i }),
    ).toBeInTheDocument();
  });

  test("submits the form with filled data", async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: jest.fn().mockResolvedValueOnce({ message: "Standup submitted" }),
    });

    render(<RetroSection />);

    fireEvent.change(screen.getByLabelText(/What went well?/i), {
      target: { value: "Accomplished tasks" },
    });
    fireEvent.change(screen.getByLabelText(/What did not go well?/i), {
      target: { value: "Some issues" },
    });
    fireEvent.change(screen.getByLabelText(/What's your focus this week?/i), {
      target: { value: "New tasks" },
    });
    fireEvent.change(screen.getByLabelText(/What do we need to improve on?/i), {
      target: { value: "Better communication" },
    });

    fireEvent.click(screen.getByRole("button", { name: /Post Standup/i }));

    await waitFor(() => {
      expect(fetch).toHaveBeenCalledWith("http://localhost:2500/standups", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          accomplished: "Accomplished tasks",
          not_well: "Some issues",
          working_on: "New tasks",
          improvement: "Better communication",
        }),
      });
    });
  });

  test("handles API errors gracefully", async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: false,
      json: jest
        .fn()
        .mockResolvedValueOnce({ message: "Failed to submit standup" }),
    });

    render(<RetroSection />);

    fireEvent.change(screen.getByLabelText(/What went well?/i), {
      target: { value: "Accomplished tasks" },
    });
    fireEvent.change(screen.getByLabelText(/What did not go well?/i), {
      target: { value: "Some issues" },
    });
    fireEvent.change(screen.getByLabelText(/What's your focus this week?/i), {
      target: { value: "New tasks" },
    });
    fireEvent.change(screen.getByLabelText(/What do we need to improve on?/i), {
      target: { value: "Better communication" },
    });

    fireEvent.click(screen.getByRole("button", { name: /Post Standup/i }));

    await waitFor(() => {
      expect(fetch).toHaveBeenCalled();
      expect(console.error).toHaveBeenCalledWith(
        "Error Message",
        expect.any(Error),
      );
    });
  });

  test("clears form after successful submission", async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: jest.fn().mockResolvedValueOnce({ message: "Standup submitted" }),
    });

    render(<RetroSection />);

    fireEvent.change(screen.getByLabelText(/What went well?/i), {
      target: { value: "Accomplished tasks" },
    });
    fireEvent.change(screen.getByLabelText(/ What did not go well?/i), {
      target: { value: "Some issues" },
    });
    fireEvent.change(screen.getByLabelText(/What's your focus this week?/i), {
      target: { value: "New tasks" },
    });
    fireEvent.change(screen.getByLabelText(/What do we need to improve on?/i), {
      target: { value: "Better communication" },
    });

    fireEvent.click(screen.getByRole("button", { name: /Post Standup/i }));

    await waitFor(() => {
      expect(screen.getByLabelText(/What went well?/i)).toHaveValue("");
      expect(screen.getByLabelText(/What did not go well?/i)).toHaveValue("");
      expect(
        screen.getByLabelText(/What's your focus this week?/i),
      ).toHaveValue("");
      expect(
        screen.getByLabelText(/What do we need to improve on?/i),
      ).toHaveValue("");
    });
  });
});
