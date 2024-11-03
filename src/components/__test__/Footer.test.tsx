import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Footer from "../Footer";

describe("Footer component", () => {
 
  it("renders logo and text", () => {
    const { getByText, getByAltText } = render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>,
    );
    expect(getByText("RM")).toBeInTheDocument();
    expect(getByAltText("logoipsum-Logo")).toBeInTheDocument();
  });

  it("renders resources links", () => {
    const { getByText } = render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>,
    );
    expect(getByText("Resources")).toBeInTheDocument();
    expect(getByText("Retro Manager")).toBeInTheDocument();
    expect(getByText("X (Twitter)")).toBeInTheDocument();
  });

  it("renders follow us links", () => {
    const { getByText } = render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>,
    );
    expect(getByText("Follow us")).toBeInTheDocument();
    expect(getByText("Github")).toBeInTheDocument();
    expect(getByText("Discord")).toBeInTheDocument();
  });

  it("renders legal links", () => {
    const { getByText } = render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>,
    );
    expect(getByText("Legal")).toBeInTheDocument();
    expect(getByText("Privacy Policy")).toBeInTheDocument();
    expect(getByText("Terms & Conditions")).toBeInTheDocument();
  });

  it("renders copyright text", () => {
    const { getByText } = render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>,
    );
    expect(getByText("2024")).toBeInTheDocument();
    expect(getByText("Retro Manager")).toBeInTheDocument();
    expect(getByText("All Rights Reserved.")).toBeInTheDocument();
  });

  it("renders social media links", () => {
    const { getAllByRole } = render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>,
    );
    const links = getAllByRole("link");
    expect(links.length).toBe(13);
  });
});
