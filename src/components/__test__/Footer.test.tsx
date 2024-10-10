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
  test("renders learn react link", () => {
 
});
})

