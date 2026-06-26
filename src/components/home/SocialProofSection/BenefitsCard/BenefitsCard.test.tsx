import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import BenefitsCard from "./BenefitsCard";

vi.mock("@gi/athena", () => ({
  Badge: ({ children, ...rest }: any) => (
    <span data-testid="badge" {...rest}>
      {children}
    </span>
  ),
}));

const props = {
  headingPrefix: "Wolontariat",
  headingSuffix: "to tabletka, dzięki której:",
  benefits: [
    { id: "b1", label: "Zmniejszysz ryzyko depresji" },
    { id: "b2", label: "Poprawisz swoje zdrowie" },
    { id: "b3", label: "Będziesz żyć dłużej" },
    { id: "b4", label: "I po prostu lepiej się czuć", highlighted: true },
  ] as const,
  sourceLabel: "Serio.",
  sourceLinkLabel: "Tu badania",
  sourceLinkHref: "https://example.com/badania",
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

    const badges = screen.getAllByTestId("badge");
    expect(badges).toHaveLength(props.benefits.length);

    const highlighted = screen.getByTestId("benefit-b4");
    // Highlighted badge uses type="info" variant="ghost" in the component
    expect(highlighted).toHaveAttribute("type", "info");
    expect(highlighted).toHaveAttribute("variant", "ghost");
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
