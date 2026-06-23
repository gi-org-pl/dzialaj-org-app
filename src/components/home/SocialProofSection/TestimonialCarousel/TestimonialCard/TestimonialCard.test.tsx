import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import {
  TESTIMONIAL_CAROUSEL_AUTHOR_NAME,
  TESTIMONIAL_CAROUSEL_AUTHOR_ORGANISATION,
  TESTIMONIAL_CAROUSEL_AVATAR_ALT,
  TESTIMONIAL_CAROUSEL_DEFAULT_TESTIMONIAL_1,
} from "../TestimonialCarousel.constants";
import { TestimonialCard } from "./TestimonialCard";

describe("<TestimonialCard />", () => {
  it("should render the testimonial quote, author and avatar", () => {
    render(
      <TestimonialCard testimonial={TESTIMONIAL_CAROUSEL_DEFAULT_TESTIMONIAL_1} />,
    );

    screen.getByText("Dzięki wolontariatowi", { exact: false });
    screen.getByText(TESTIMONIAL_CAROUSEL_AUTHOR_NAME);
    screen.getByText(TESTIMONIAL_CAROUSEL_AUTHOR_ORGANISATION);
    screen.getByRole("img", { name: TESTIMONIAL_CAROUSEL_AVATAR_ALT });
  });

  it("should underline tagged quote fragments", () => {
    render(
      <TestimonialCard testimonial={TESTIMONIAL_CAROUSEL_DEFAULT_TESTIMONIAL_1} />,
    );

    expect(
      screen.getByText("Dzięki wolontariatowi").classList.contains("underline"),
    ).toBe(true);
    expect(
      screen.getByText(/poznałem wielu przyjaciół/i).classList.contains(
        "underline",
      ),
    ).toBe(false);
  });

  it("should render plain quote text when no underline tags are present", () => {
    render(
      <TestimonialCard
        testimonial={{
          ...TESTIMONIAL_CAROUSEL_DEFAULT_TESTIMONIAL_1,
          quote: "Cytat bez podkreślenia.",
        }}
      />,
    );

    const quoteText = screen.getByText("Cytat bez podkreślenia.");

    expect(quoteText.tagName).toBe("SPAN");
    expect(quoteText.classList.contains("underline")).toBe(false);
  });
});
