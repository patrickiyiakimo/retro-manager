import { render, screen, fireEvent } from "@testing-library/react";
import { faq } from "../Faq";
import FrequentlyAskedQuestions from "../FrequentlyAskedQuestions";


describe("FrequentlyAskedQuestions", () => {
  beforeEach(() => {
    render(<FrequentlyAskedQuestions />);
  });

  test("renders the FAQ title", () => {
    const titleElement = screen.getByText(/Frequently Asked Questions/i);
    expect(titleElement).toBeInTheDocument();
  });

  test("renders all FAQ items", () => {
    faq.forEach((item) => {
      const titleElement = screen.getByText(item.title);
      expect(titleElement).toBeInTheDocument();
    });
  });

  test("displays the content of the first FAQ item when clicked", () => {
    const firstItemTitle = screen.getByText(faq[0].title);
    fireEvent.click(firstItemTitle);

    const contentElement = screen.getByText(faq[0].body);
    expect(contentElement).toBeInTheDocument();
  });

  test("toggles the content of the FAQ item when clicked", () => {
    const firstItemTitle = screen.getByText(faq[0].title);
    fireEvent.click(firstItemTitle);

    // Check that the content is displayed after clicking
    const contentElement = screen.getByText(faq[0].body);
    expect(contentElement).toBeInTheDocument();

    // Click again to close the accordion
    fireEvent.click(firstItemTitle);

    // Check that the content is not displayed after clicking again
    expect(contentElement).not.toBeInTheDocument();
  });

  test("displays the content of the second FAQ item when clicked", () => {
    const secondItemTitle = screen.getByText(faq[1].title);
    fireEvent.click(secondItemTitle);

    const contentElement = screen.getByText(faq[1].body);
    expect(contentElement).toBeInTheDocument();
  });
});
