import { type RenderResult, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import ThemeToggle from "./ThemeToggle";

describe("ThemeToggle component", () => {
  it("renders the toggle theme label and checkbox", () => {
    render(<ThemeToggle />);

    // Select the label by its text.
    const labelElement = screen.getByText("Toggle Theme");
    expect(labelElement).toBeVisible();

    // Select the checkbox by its role.
    const checkboxElement = screen.getByRole("checkbox", {
      name: "Toggle theme"
    });
    expect(checkboxElement).toBeVisible();

    // Skipping the assertion for the checkbox value
    // because it is not a controlled component.
  });

  it("matches the snapshot", () => {
    const { asFragment }: RenderResult = render(<ThemeToggle />);
    expect(asFragment()).toMatchSnapshot();
  });
});
