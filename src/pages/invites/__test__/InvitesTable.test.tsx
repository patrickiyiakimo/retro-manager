// InvitesTable.test.tsx
import React from "react";
import { render, screen } from "@testing-library/react";
import InvitesTable from "../InvitesTable";

// Mock the InviteEditModal component
jest.mock("../InviteEditModal", () => () => (
  <div data-testid="invite-edit-modal" />
));

describe("InvitesTable", () => {
  test("renders invites correctly", () => {
    const invites = [
      { email: "test1@example.com", position: "Developer" },
      { email: "test2@example.com", position: "Designer" },
    ];

    render(<InvitesTable invites={invites} />);

    // Check that the invites are rendered
    expect(screen.getByText("test1@example.com")).toBeInTheDocument();
    expect(screen.getByText("Developer")).toBeInTheDocument();
    expect(screen.getByText("test2@example.com")).toBeInTheDocument();
    expect(screen.getByText("Designer")).toBeInTheDocument();

    // Check that the InviteEditModal is rendered for each invite
    const modals = screen.getAllByTestId("invite-edit-modal");
    expect(modals.length).toBe(invites.length);
  });

  test("renders empty state when no invites are provided", () => {
    render(<InvitesTable invites={[]} />);

    // Check that the empty state message is displayed
    expect(screen.getByText("No invites found.")).toBeInTheDocument();
  });
});
