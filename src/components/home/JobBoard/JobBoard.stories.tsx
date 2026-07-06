import type { Meta, StoryObj } from "@storybook/react-vite";

import { JOB_CARD_DEFAULT_PROPS } from "./JobCard/JobCard.constants";
import { JobBoard } from "./JobBoard";
import type { Job } from "./JobBoard.types";

const sampleJobs: Job[] = [
  { id: "job-1", ...JOB_CARD_DEFAULT_PROPS, badges: [] },
  { id: "job-2", ...JOB_CARD_DEFAULT_PROPS, badges: [] },
  { id: "job-3", ...JOB_CARD_DEFAULT_PROPS, badges: [] },
];

const meta = {
  title: "Home/JobBoard",
  component: JobBoard,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {
    jobs: sampleJobs,
    totalCount: sampleJobs.length,
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

export const Empty: Story = {
  args: {
    jobs: [],
    totalCount: 0,
  },
};
