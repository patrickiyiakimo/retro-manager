import { render, screen } from "@testing-library/react";
import Footer from "../Footer";
import { BrowserRouter } from "react-router-dom";

const renderFooter = () => {
  return render(
    <BrowserRouter>
    <Footer />
    </BrowserRouter>
  )
}

describe("Footer Component", () => {
  it("renders the footer and sub-link", () => {
 renderFooter()

    const altText = screen.getByAltText("logoipsum-Logo");
    expect(altText).toBeInTheDocument()
  });
  
  it("it renders the navigation links", () => {
    renderFooter()

    const retroLink = screen.getByText(/comments/i)
    const xLink = screen.getByText(/#/i)
    const gitHubLink = screen.getByText(/#/i)
    const discordLink = screen.getByText(/#/i)
    const privacyLink = screen.getByText(/#/i)
    const termsLink = screen.getByText(/#/i)
    const retroManagerLink = screen.getByText(/#/i)
    const facebookLink = screen.getByText(/#/i)
    const discordCommunityLink = screen.getByText(/#/i)
    const twitterPageLink = screen.getByText(/#/i)
    const githubAccountLink = screen.getByText(/#/i)
    const dribbleLink = screen.getByText(/#/i)

    expect(retroLink).toBeInTheDocument()
    expect(xLink).toBeInTheDocument()
    expect(gitHubLink).toBeInTheDocument()
    expect(discordLink).toBeInTheDocument()
    expect(privacyLink).toBeInTheDocument()
    expect(termsLink).toBeInTheDocument();
    expect(retroManagerLink).toBeInTheDocument();
    expect(facebookLink).toBeInTheDocument();
    expect(discordCommunityLink).toBeInTheDocument();
    expect(twitterPageLink).toBeInTheDocument();
    expect(githubAccountLink).toBeInTheDocument();
    expect(dribbleLink).toBeInTheDocument();
  })
})

