import { render, screen, fireEvent } from "@testing-library/react";
import InviteTeamModal from "../InviteEditModal";


describe("InviteTeamModal", () => {
  beforeEach(() => {
    render(<InviteTeamModal />);
  });

  test("renders the modal toggle button", () => {
    const toggleButton = screen.getByRole("button", { hidden: true });
    expect(toggleButton).toBeInTheDocument();
  });

  test("opens the modal when the toggle button is clicked", () => {
    const toggleButton = screen.getByRole("button", { hidden: true });
    fireEvent.click(toggleButton);

    const modal = screen.getByRole("dialog", { hidden: true });
    expect(modal).toBeInTheDocument();
  });

  test("closes the modal when the close button is clicked", () => {
    const toggleButton = screen.getByRole("button", { hidden: true });
    fireEvent.click(toggleButton); 

    const closeButton = screen.getByRole("button", { name: /close modal/i });
    fireEvent.click(closeButton); 

    // Check that the modal is not in the document anymore
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  test("renders the buttons inside the modal", () => {
    const toggleButton = screen.getByRole("button", { hidden: true });
    fireEvent.click(toggleButton); // Open the modal

    const resendButton = screen.getByRole("button", {
      name: /resend invitation/i,
    });
    const cancelButton = screen.getByRole("button", {
      name: /cancel invitation/i,
    });

    expect(resendButton).toBeInTheDocument();
    expect(cancelButton).toBeInTheDocument();
  });
});
