import { type RenderResult, render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import NavbarNotificationBell from "./NavbarNotificationBell";

describe("NavbarNotificationBell client component", () => {
  it("renders a button with a bell icon and the correct sr-only text", () => {
    render(<NavbarNotificationBell />);
    const buttonElement: HTMLElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent("View notifications");
  });

  it("matches the snapshot", () => {
    const { asFragment }: RenderResult = render(<NavbarNotificationBell />);
    expect(asFragment()).toMatchSnapshot();
  });
});
