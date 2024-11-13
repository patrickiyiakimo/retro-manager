import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom"; 
import { publicRetro } from "../PublicRetro.";
import Sprint from "../PublicRetro";


describe("Sprint", () => {
  test("renders Sprint component and displays public retros", () => {
    render(
      <Router>
        <Sprint publicRetro={publicRetro} />
      </Router>,
    );

    expect(screen.getByText(/our mission/i)).toBeInTheDocument();

    publicRetro.forEach((retro) => {
      expect(screen.getByText(retro.title)).toBeInTheDocument();
      expect(screen.getByText(retro.body)).toBeInTheDocument();
    });
  });

  test("displays loading state until images are loaded", () => {
    render(
      <Router>
        <Sprint publicRetro={publicRetro} />
      </Router>,
    );

    publicRetro.forEach((_, index) => {
      expect(screen.getByRole("status")).toBeInTheDocument();
      expect(screen.getByRole("status")).toHaveClass("animate-pulse");
    });

    publicRetro.forEach((_, index) => {
      const img = screen.getAllByRole("img")[index];
      fireEvent.load(img);
    });

    publicRetro.forEach((_, index) => {
      expect(screen.queryByRole("status")).not.toBeInTheDocument();
    });
  });

  test("navigates to /retrosection when the button is clicked", () => {
    const { container } = render(
      <Router>
        <Sprint publicRetro={publicRetro} />
      </Router>,
    );

    const button = screen.getByRole("button", { name: /start free retro/i });
    fireEvent.click(button);

    expect(button).toBeInTheDocument();
  });
});
