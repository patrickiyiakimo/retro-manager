import { render, screen } from "@testing-library/react";
import Hero from "../Hero";
import { BrowserRouter } from "react-router-dom";

const renderHero = () => {
  return render(
    <BrowserRouter>
      <Hero />
    </BrowserRouter>,
  );
};

describe("Hero Component", () => {
  it("renders the background image", () => {
    renderHero();

    const sectionElement = screen.getByRole("region");
    expect(sectionElement).toHaveStyle({
      backgroundImage:
        "url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')",
    });
  });
  it("renders the heading text correctly", () => {
    renderHero();

    const headingElement = screen.getByRole("heading", {
      name: /Enhance Team Collaboration with Effective Agile Retrospectives/i,
    });
    expect(headingElement).toBeInTheDocument();
  });

  it("renders paragraph text correctly", () => {
    renderHero();

    const paragraphElement = screen.getByText(
      /drive continuous improvement and elevate your workflow. absolutely free!/i,
    );
    expect(paragraphElement).toBeInTheDocument();
  });

  it("renders the start retro link", () => {
    renderHero();

    const startRetroLink = screen.getByRole("link", { name: /start retro/i });
    expect(startRetroLink).toBeInTheDocument();
    expect(startRetroLink).toHaveAttribute("href", "/retrosection");
  });

  it("renders the create team link", () => {
    renderHero();

    const createTeamLink = screen.getByRole("link", { name: /create team/i });
    expect(createTeamLink).toBeInTheDocument();
    expect(createTeamLink).toHaveAttribute("href", "/createteam");
  });
});
