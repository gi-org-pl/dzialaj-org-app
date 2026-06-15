import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";
import FaqAccordion from "@/components/home/FaqAccordion/FaqAccordion";
import {
  faqGroups,
  faqHeading,
} from "@/components/home/FaqAccordion/FaqAccordion.constants";

vi.mock("@gi/athena", () => {
  return {
    Select: ({ value, placeholder, children }: any) => (
      <div aria-label="select">
        <span data-testid="select-value">{value ?? placeholder}</span>
        <div data-testid="select-content">{children}</div>
      </div>
    ),
    ActionList: ({
      items,
    }: {
      items: Array<{ label: React.ReactNode; onClick?: () => void }>;
    }) => (
      <div role="menu">
        {items.map((it, idx) => (
          <button
            key={idx}
            type="button"
            role="menuitem"
            onClick={() => it.onClick?.()}
          >
            {it.label}
          </button>
        ))}
      </div>
    ),
  };
});

describe("FaqAccordion", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders the heading and default group's items", () => {
    render(
      <FaqAccordion
        heading={faqHeading}
        groups={faqGroups}
        defaultGroupId="Kandydaci"
      />,
    );

    expect(
      screen.getByRole("heading", { level: 2, name: faqHeading }),
    ).toBeInTheDocument();

    expect(screen.getByTestId("select-value")).toHaveTextContent("Kandydaci");

    expect(
      screen.getByRole("heading", {
        level: 3,
        name: "Muszę mieć doświadczenie?",
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { level: 3, name: "Co dostanę na koniec?" }),
    ).toBeInTheDocument();

    expect(
      screen.queryByRole("heading", { level: 3, name: "Ile to kosztuje?" }),
    ).not.toBeInTheDocument();
  });

  it("lists group options and switches group when an option is clicked", async () => {
    const user = userEvent.setup();

    render(
      <FaqAccordion
        heading={faqHeading}
        groups={faqGroups as any}
        defaultGroupId="Kandydaci"
      />,
    );

    const menu = screen.getByRole("menu");
    expect(
      within(menu).getByRole("menuitem", { name: "Kandydaci" }),
    ).toBeInTheDocument();
    expect(
      within(menu).getByRole("menuitem", { name: "Organizacje" }),
    ).toBeInTheDocument();

    await user.click(
      within(menu).getByRole("menuitem", { name: "Organizacje" }),
    );

    expect(screen.getByTestId("select-value")).toHaveTextContent("Organizacje");

    expect(
      screen.getByRole("heading", { level: 3, name: "Ile to kosztuje?" }),
    ).toBeInTheDocument();

    expect(
      screen.queryByRole("heading", {
        level: 3,
        name: "Muszę mieć doświadczenie?",
      }),
    ).not.toBeInTheDocument();
  });
});
