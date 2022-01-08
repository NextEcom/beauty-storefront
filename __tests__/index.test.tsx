import { render, screen } from "@testing-library/react";
import Home from "../src/pages/index";

describe("Home", () => {
  it("renders components", () => {
    render(<Home />);

    const heading = screen.getByRole("heading", {
      name: /welcome!/i,
    });

    const button = screen.getByRole("button", {
      name: /hi/i,
    });

    expect(heading).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
});
