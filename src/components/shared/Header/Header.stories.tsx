import type { Meta, StoryObj } from "@storybook/react";
import { MemoryRouter } from "react-router";
import Header from "./Header";
import { HEADER_NAV_ITEMS } from "./Header.constants";
import type { HeaderProps } from "./Header.types";

const HeaderStory = (props: HeaderProps) => (
  <MemoryRouter>
    <Header {...props} />
  </MemoryRouter>
);

const meta: Meta<typeof HeaderStory> = {
  title: "Shared/Header",
  component: HeaderStory,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    navLinks: HEADER_NAV_ITEMS,
  },
};

export default meta;
type Story = StoryObj<typeof HeaderStory>;

export const Default: Story = {};

export const EmptyNavigation: Story = {
  args: {
    navLinks: [],
  },
};
