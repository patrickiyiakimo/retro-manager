import React from "react";
import { render, screen } from "@testing-library/react";
import Sprint from "../Sprint"; 
import { sprintDetails } from "../SprintDetails"; // Adjust the import path as necessary

describe("Sprint Component", () => {
  test("renders the title and description", () => {
    render(<Sprint sprintDetails={sprintDetails} />);

    const titleElement = screen.getByText(/What is Sprint Evaluation/i);
    const descriptionElement = screen.getByText(
      /The sprint review meeting allows the scrum team to assess its performance/i,
    );

    expect(titleElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
  });

  test("renders the correct number of sprint details", () => {
    render(<Sprint sprintDetails={sprintDetails} />);

    const detailElements = screen.getAllByRole("heading", { level: 2 });
    expect(detailElements.length).toBe(sprintDetails.length);
  });

  test("renders each sprint detail correctly", () => {
    render(<Sprint sprintDetails={sprintDetails} />);

    sprintDetails.forEach(({ title, body }) => {
      const titleElement = screen.getByText(title);
      const bodyElement = screen.getByText(body);

      expect(titleElement).toBeInTheDocument();
      expect(bodyElement).toBeInTheDocument();
    });
  });

//   test("renders the icons for each sprint detail", () => {
//     render(<Sprint sprintDetails={sprintDetails} />);

//     sprintDetails.forEach(({ Icon }) => {
//       const iconElement = screen.getByTestId(Icon.displayName);
//       expect(iconElement).toBeInTheDocument();
//     });
//   });
});
