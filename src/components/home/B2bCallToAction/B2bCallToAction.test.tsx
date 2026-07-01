import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { B2bCallToAction } from "./B2bCallToAction";
import { B2B_CALL_TO_ACTION_DEFAULT_PROPS } from "./B2bCallToAction.constants";

describe("<B2bCallToAction />", () => {
  it("should render the section heading and subtitle as desktop-only content", () => {
    render(<B2bCallToAction {...B2B_CALL_TO_ACTION_DEFAULT_PROPS} />);

    const heading = screen.getByRole("heading", {
      name: B2B_CALL_TO_ACTION_DEFAULT_PROPS.sectionHeading,
    });

    expect(heading).toBeInTheDocument();
    expect(
      screen.getByText(B2B_CALL_TO_ACTION_DEFAULT_PROPS.sectionSubtitle),
    ).toBeInTheDocument();
    expect(heading.parentElement).toHaveClass("hidden", "md:flex");
  });

  it("should render the card heading, highlight and subtitle", () => {
    render(<B2bCallToAction {...B2B_CALL_TO_ACTION_DEFAULT_PROPS} />);

    expect(
      screen.getByText(B2B_CALL_TO_ACTION_DEFAULT_PROPS.cardHeadingHighlight, {
        exact: false,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(B2B_CALL_TO_ACTION_DEFAULT_PROPS.cardSubtitle),
    ).toBeInTheDocument();
  });

  it("should render the contact name, tagline and email", () => {
    render(<B2bCallToAction {...B2B_CALL_TO_ACTION_DEFAULT_PROPS} />);

    expect(
      screen.getByText(B2B_CALL_TO_ACTION_DEFAULT_PROPS.contactName),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        B2B_CALL_TO_ACTION_DEFAULT_PROPS.contactTaglineHighlight,
        { exact: false },
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByText(B2B_CALL_TO_ACTION_DEFAULT_PROPS.contactTagline, {
        exact: false,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(B2B_CALL_TO_ACTION_DEFAULT_PROPS.contactEmail),
    ).toBeInTheDocument();
  });

  it("should render the email as a non-clickable pill, not a link or button", () => {
    render(<B2bCallToAction {...B2B_CALL_TO_ACTION_DEFAULT_PROPS} />);

    expect(screen.queryByRole("link")).not.toBeInTheDocument();
    expect(screen.queryByRole("button")).not.toBeInTheDocument();
  });

  it("should render the mascot illustration as decorative", () => {
    render(<B2bCallToAction {...B2B_CALL_TO_ACTION_DEFAULT_PROPS} />);

    const mascotImage = screen.getByRole("presentation", { hidden: true });

    expect(mascotImage).toHaveAttribute(
      "src",
      B2B_CALL_TO_ACTION_DEFAULT_PROPS.illustrationSrc,
    );
    expect(mascotImage).toHaveAttribute("alt", "");
    expect(mascotImage).toHaveAttribute("aria-hidden", "true");
  });

  it("should fall back to initials when no avatar image is provided", () => {
    render(<B2bCallToAction {...B2B_CALL_TO_ACTION_DEFAULT_PROPS} />);

    expect(
      screen.getByRole("img", {
        name: `${B2B_CALL_TO_ACTION_DEFAULT_PROPS.contactName} avatar`,
      }),
    ).toBeInTheDocument();
    expect(screen.queryByRole("img", { name: "" })).not.toBeInTheDocument();
  });
});
