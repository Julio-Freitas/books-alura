import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";
import { Home } from "..";
describe("<Home>", () => {
  it("Shoul be Home Correctly", () => {
    const { container } = render(<Home />);
    expect(container.firstChild).toMatchSnapshot();
    expect(screen.getByText(/Já sabe por onde começar/)).toBeInTheDocument()
  });
});
