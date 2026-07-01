import type { Meta, StoryObj } from "@storybook/react-vite";

import { JobBoard } from "./JobBoard";

const meta = {
  title: "Home/JobBoard",
  component: JobBoard,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {
    jobs: [],
    totalCount: 0,
    locationOptions: [
      { value: "location-1", label: "Warszawa" },
      { value: "location-2", label: "Wrocław" },
    ],
    onLocationChange: () => {},
    onSearchChange: () => {},
    onLoadMore: () => {},
    hasMore: false,
  },
} satisfies Meta<typeof JobBoard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    hasMore: true,
  },
};

export const AllLoaded: Story = {
  args: {
    hasMore: false,
  },
};

export const Empty: Story = {};

export const Mobile: Story = {
  args: {
    hasMore: true,
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "375px" }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
};
