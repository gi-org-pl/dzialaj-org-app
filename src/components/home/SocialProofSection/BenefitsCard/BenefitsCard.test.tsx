import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import BenefitsCard from "./BenefitsCard";
import {
  BENEFITS_CARD_WOLONTARY_PILL
} from "@/components/home/SocialProofSection/BenefitsCard/BenefitsCard.constants.ts";

const props = {
  ...BENEFITS_CARD_WOLONTARY_PILL
};

describe("BenefitsCard", () => {
  it("renders heading with colored prefix and suffix", () => {
    render(<BenefitsCard {...props} />);

    const heading = screen.getByRole("heading", { level: 3 });
    expect(heading).toHaveTextContent(props.headingPrefix);
    expect(heading).toHaveTextContent(props.headingSuffix);
  });

  it("renders all benefits as badges and highlights the last one", () => {
    render(<BenefitsCard {...props} />);

    const badges = screen.getAllByTestId(/^benefit-/);
    const highlighted = screen.getByTestId("benefit-b4");

    expect(badges).toHaveLength(props.benefits.length);

    expect(highlighted).toBeVisible();
    expect(highlighted.querySelector('span')).toHaveClass('text-gi-blue');
  });

  it("renders a source label and link with href", () => {
    render(<BenefitsCard {...props} />);

    expect(screen.getByText(props.sourceLabel)).toBeInTheDocument();
    const link = screen.getByRole("link", { name: props.sourceLinkLabel });
    expect(link).toHaveAttribute("href", props.sourceLinkHref);
  });

  it("includes a decorative element marked aria-hidden", () => {
    const { container } = render(<BenefitsCard {...props} />);
    const decor = container.querySelector('[aria-hidden="true"]');
    expect(decor).toBeTruthy();
  });
});
