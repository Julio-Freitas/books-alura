import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Box } from "..";

describe("Box", () => {
  it("Should be show title", () => {
    const {container}=render(<Box title="Title" />);
    expect(screen.getByRole('heading', {name:/title/i})).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot()
  });
});
