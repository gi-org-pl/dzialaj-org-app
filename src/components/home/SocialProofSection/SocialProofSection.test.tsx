import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import type { BenefitsCardProps } from "./BenefitsCard/BenefitsCard.types";
import { SocialProofSection } from "./SocialProofSection";
import { SOCIAL_PROF_SECTION_DEFAULT_PROPS } from "./SocialProofSectioon.constants";
import type { TestimonialCarouselProps } from "./TestimonialCarousel/TestimonialCarousel.types";

vi.mock("./BenefitsCard/BenefitsCard", () => ({
  default: (props: BenefitsCardProps) => (
    <div data-testid="benefits-card-mock">{JSON.stringify(props)}</div>
  ),
}));

vi.mock("./TestimonialCarousel/TestimonialCarousel", () => ({
  TestimonialCarousel: (props: TestimonialCarouselProps) => (
    <div data-testid="testimonial-carousel-mock">{JSON.stringify(props)}</div>
  ),
}));

const props = { ...SOCIAL_PROF_SECTION_DEFAULT_PROPS };

describe("SocialProofSection", () => {
  it("renders the heading with highlighted portion", () => {
    render(<SocialProofSection {...props} />);

    const heading = screen.getByRole("heading", { level: 2 });
    expect(heading).toHaveTextContent(props.headingRest);
    expect(heading).toHaveTextContent(props.headingHighlight);

    const highlight = screen.getByText(props.headingHighlight, {
      selector: "span",
    });
    expect(highlight).toHaveClass("text-gi-blue");
  });

  it("renders the subtitle", () => {
    render(<SocialProofSection {...props} />);

    const normalizedSubtitle = props.subtitle.replace(/\s+/g, " ").trim();
    expect(
      screen.getByText(
        (_, element) =>
          element?.textContent?.replace(/\s+/g, " ").trim() ===
          normalizedSubtitle,
      ),
    ).toBeInTheDocument();
  });

  it("renders the subheading with highlighted portion", () => {
    render(<SocialProofSection {...props} />);

    const subheading = screen.getByRole("heading", { level: 3 });
    expect(subheading).toHaveTextContent(props.subheadingRest);
    expect(subheading).toHaveTextContent(props.subheadingHighlight);

    const highlight = screen.getByText(props.subheadingHighlight, {
      selector: "span",
    });
    expect(highlight).toHaveClass("text-gi-blue");
  });

  it("renders the arrow illustrations with alt text when provided", () => {
    render(<SocialProofSection {...props} />);

    const arrowImages = screen.getAllByRole("img", {
      name: props.arrowIllustrationAlt,
    });

    expect(arrowImages).toHaveLength(2);
    for (const image of arrowImages) {
      expect(image).not.toHaveAttribute("aria-hidden", "true");
    }
  });

  it("marks the arrow illustrations as decorative when alt text is empty", () => {
    render(<SocialProofSection {...props} arrowIllustrationAlt="" />);

    const arrowImages = screen.getAllByAltText("", { selector: "img" });

    expect(arrowImages).toHaveLength(2);
    for (const image of arrowImages) {
      expect(image).toHaveAttribute("aria-hidden", "true");
    }
  });

  it("forwards benefitsCardProps to BenefitsCard", () => {
    render(<SocialProofSection {...props} />);

    const mock = screen.getByTestId("benefits-card-mock");
    expect(mock).toHaveTextContent(
      JSON.stringify(props.benefitsCardProps).replace(/&/g, "&amp;"),
    );
  });

  it("forwards testimonalCarouselProps to TestimonialCarousel", () => {
    render(<SocialProofSection {...props} />);

    const mock = screen.getByTestId("testimonial-carousel-mock");
    expect(mock).toHaveTextContent(
      JSON.stringify(props.testimonalCarouselProps).replace(/&/g, "&amp;"),
    );
  });
});
