import { CategoryCard } from "./CategoryCard/CategoryCard";
import type { CategoryFiltersProps } from "./CategoryFilters.types";

export const CategoryFilters = ({
  title,
  categories,
  selectedId,
  onChange,
}: CategoryFiltersProps) => {
  return (
    <div className="w-full max-w-7xl mx-auto p-6 flex flex-col gap-6  rounded-3xl bg-linear-to-b from-white to-transparent bg-gi-blue/10 border border-gi-ash">
      <div className="font-extrabold text-[24px]">{title}</div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            onClick={() => onChange(category.id)}
            isSelected={category.id === selectedId}
            {...category}
          />
        ))}
      </div>
    </div>
  );
};
