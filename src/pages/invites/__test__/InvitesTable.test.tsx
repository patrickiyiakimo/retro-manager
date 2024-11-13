import React from "react";
import { render, screen } from "@testing-library/react";
import InvitesTable from "../InvitesTable";

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

    expect(screen.getByText("test1@example.com")).toBeInTheDocument();
    expect(screen.getByText("Developer")).toBeInTheDocument();
    expect(screen.getByText("test2@example.com")).toBeInTheDocument();
    expect(screen.getByText("Designer")).toBeInTheDocument();

    const modals = screen.getAllByTestId("invite-edit-modal");
    expect(modals.length).toBe(invites.length);
  });

  test("renders empty state when no invites are provided", () => {
    render(<InvitesTable invites={[]} />);

    expect(screen.getByText("No invites found.")).toBeInTheDocument();
  });
});
