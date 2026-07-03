import type { Meta, StoryObj } from "@storybook/react";
import { CategoryFilters } from "./CategoryFilters";
import { CATEGORY_FILTERS_DATA } from "./CategoryFilters.constants";

const CategoryFiltersStory = (props: typeof CATEGORY_FILTERS_DATA) => {
  return <CategoryFilters {...props} />;
};

const meta: Meta<typeof CategoryFiltersStory> = {
  title: "Home/CategoryFilters",
  component: CategoryFiltersStory,
  parameters: {
    layout: "fullscreen",
  },
  args: CATEGORY_FILTERS_DATA,
};

export default meta;

type Story = StoryObj<typeof CategoryFiltersStory>;

export const Default: Story = {};

export const Selected: Story = {
  args: {
    ...CATEGORY_FILTERS_DATA,
    selectedId: "creative",
  },
};
