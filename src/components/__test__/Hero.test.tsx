import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Hero from "../Hero";

describe("Hero component", () => {
 
  it("renders background image", () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <Hero />
      </MemoryRouter>,
    );
    const background = getByTestId("hero-background");
    expect(background).toHaveStyle(
      "background-image: url(https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg)",
    );
  });

  it("renders heading", () => {
    const { getByText } = render(
      <MemoryRouter>
        <Hero />
      </MemoryRouter>,
    );
    expect(
      getByText(
        "Enhance Team Collaboration with Effective Agile Retrospectives",
      ),
    ).toBeInTheDocument();
  });

  it("renders paragraph", () => {
    const { getByText } = render(
      <MemoryRouter>
        <Hero />
      </MemoryRouter>,
    );
    expect(
      getByText(
        "Drive continuous improvement and elevate your workflow. Absolutely free!",
      ),
    ).toBeInTheDocument();
  });

  it("renders start retro button", () => {
    const { getByText } = render(
      <MemoryRouter>
        <Hero />
      </MemoryRouter>,
    );
    expect(getByText("Start Retro")).toBeInTheDocument();
  });

  it("renders create team button", () => {
    const { getByText } = render(
      <MemoryRouter>
        <Hero />
      </MemoryRouter>,
    );
    expect(getByText("Create Team")).toBeInTheDocument();
  });

  it("renders svg icon in start retro button", () => {
    const { getByRole } = render(
      <MemoryRouter>
        <Hero />
      </MemoryRouter>,
    );
    const startRetroButton = getByRole("link", { name: "Start Retro" });
    const svgIcon = startRetroButton.querySelector("svg");
    expect(svgIcon).toBeInTheDocument();
  });
});
