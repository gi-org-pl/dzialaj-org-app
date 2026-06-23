import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { CATEGORY_FILTERS_DATA } from "../CategoryFilters.constants";
import { CategoryCard } from "./CategoryCard";

const category = CATEGORY_FILTERS_DATA.categories[0];

describe("<CategoryCard />", () => {
  it("should display label and subtitle", () => {
    render(
      <CategoryCard
        label={category.label}
        subtitle={category.subtitle}
        icon={category.icon}
        isSelected={false}
        onClick={() => {}}
      />,
    );

    expect(screen.getByText(category.label)).toBeInTheDocument();
    expect(screen.getByText(category.subtitle)).toBeInTheDocument();
  });

  it("should render icon", () => {
    const { container } = render(
      <CategoryCard
        label={category.label}
        subtitle={category.subtitle}
        icon={category.icon}
        isSelected={false}
        onClick={() => {}}
      />,
    );

    const img = container.querySelector("img");
    expect(img).toBeInTheDocument();
  });

  it("should call onClick handler", () => {
    const onClick = vi.fn();

    render(
      <CategoryCard
        label={category.label}
        subtitle={category.subtitle}
        icon={category.icon}
        isSelected={false}
        onClick={onClick}
      />,
    );

    screen.getByText(category.label).click();
    expect(onClick).toHaveBeenCalled();
  });

  it("should apply selected styles", () => {
    const { container } = render(
      <CategoryCard
        label={category.label}
        subtitle={category.subtitle}
        icon={category.icon}
        isSelected={true}
        onClick={() => {}}
      />,
    );

    const root = container.firstChild as HTMLElement;

    expect(root).toHaveClass("border-gi-blue");
    expect(root).toHaveClass("bg-gi-blue/10");
  });
});
