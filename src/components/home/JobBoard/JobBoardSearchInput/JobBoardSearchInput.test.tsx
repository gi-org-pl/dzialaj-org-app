import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { JOB_BOARD_SEARCH_PLACEHOLDER } from "../JobBoard.constants";
import { JobBoardSearchInput } from "./JobBoardSearchInput";

describe("<JobBoardSearchInput />", () => {
  it("powinien wywołać onSearchChange z wpisaną wartością", () => {
    const onSearchChange = vi.fn();

    render(<JobBoardSearchInput onSearchChange={onSearchChange} />);

    fireEvent.change(
      screen.getByPlaceholderText(JOB_BOARD_SEARCH_PLACEHOLDER),
      {
        target: { value: "developer" },
      },
    );

    expect(onSearchChange).toHaveBeenCalledWith("developer");
  });

  it("powinien mieć responsywne klasy szerokości (pełna szerokość / stała szerokość od punktu przełamania sm)", () => {
    const { container } = render(
      <JobBoardSearchInput onSearchChange={() => {}} />,
    );

    expect(container.firstElementChild).toHaveClass("w-full", "sm:w-[301px]");
  });
});
