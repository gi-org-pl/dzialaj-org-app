import type { Meta, StoryObj } from "@storybook/react-vite";

import { B2bCallToAction } from "./B2bCallToAction";
import { B2B_CALL_TO_ACTION_DEFAULT_PROPS } from "./B2bCallToAction.constants";

const meta = {
  title: "Home/B2bCallToAction",
  component: B2bCallToAction,
  parameters: {
    layout: "fullscreen",
  },
  args: B2B_CALL_TO_ACTION_DEFAULT_PROPS,
  tags: ["autodocs"],
} satisfies Meta<typeof B2bCallToAction>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Mobile: Story = {
  globals: {
    viewport: { value: "mobile2", isRotated: false },
  },
};
