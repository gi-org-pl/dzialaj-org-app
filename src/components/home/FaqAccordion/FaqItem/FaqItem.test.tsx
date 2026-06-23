import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import FaqItem from "@/components/home/FaqAccordion/FaqItem/FaqItem";

const baseProps = {
  id: "q1",
  question: "Czy to jest pytanie?",
  answerPrefix: "Tak.",
  answerBody: "To jest przykładowa odpowiedź.",
};

describe("FaqItem", () => {
  it("renders question as h3 heading and shows answer with prefix", () => {
    render(<FaqItem {...baseProps} />);

    expect(
      screen.getByRole("heading", { level: 3, name: baseProps.question }),
    ).toBeInTheDocument();

    expect(
      screen.getByText(baseProps.answerPrefix as string),
    ).toBeInTheDocument();
    expect(screen.getByText(baseProps.answerBody)).toBeInTheDocument();
  });

  it("renders empty prefix span when answerPrefix is null and still shows body", () => {
    const props = {
      ...baseProps,
      id: "q2",
      answerPrefix: null as string | null,
    };
    const { container } = render(<FaqItem {...props} />);

    expect(screen.getByText(baseProps.answerBody)).toBeInTheDocument();

    const prefixSpan = container.querySelector("p > span");
    expect(prefixSpan).not.toBeNull();
    expect(prefixSpan?.textContent).toBe("");
  });
});
