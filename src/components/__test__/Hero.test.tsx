import { render, screen, fireEvent } from "@testing-library/react";
import Hero from "../Hero";
import { BrowserRouter } from "react-router-dom";


const renderHero = () => {
  return render(
    <BrowserRouter>
      <Hero />
    </BrowserRouter>,
  );
}

describe("Hero Component", () => {
  it("renders the background image", () => {

  });

})
