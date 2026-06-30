import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { CategoryFilters } from "./CategoryFilters";
import { CATEGORY_FILTERS_DATA } from "./CategoryFilters.constants";

describe("<CategoryFilters />", () => {
  it("should render title", () => {
    render(<CategoryFilters {...CATEGORY_FILTERS_DATA} />);

    expect(screen.getByText(/jakich/i)).toBeInTheDocument();
    expect(screen.getByText(/szukasz/i)).toBeInTheDocument();
  });

  it("should render all categories", () => {
    render(<CategoryFilters {...CATEGORY_FILTERS_DATA} />);

    for (const c of CATEGORY_FILTERS_DATA.categories) {
      expect(screen.getByText(c.label)).toBeInTheDocument();
      expect(screen.getByText(c.subtitle)).toBeInTheDocument();
    }
  });

  it("should call onChange with correct id", () => {
    const onChange = vi.fn();

    render(<CategoryFilters {...CATEGORY_FILTERS_DATA} onChange={onChange} />);

    screen.getByText(CATEGORY_FILTERS_DATA.categories[0].label).click();

    expect(onChange).toHaveBeenCalledWith(
      CATEGORY_FILTERS_DATA.categories[0].id,
    );
  });
});
