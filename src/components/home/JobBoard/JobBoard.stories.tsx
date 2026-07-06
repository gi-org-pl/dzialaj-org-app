import type { Meta, StoryObj } from "@storybook/react-vite";

import { JobBoard } from "./JobBoard";
import type { Job } from "./JobBoard.types";

const sampleJobs: Job[] = [
  {
    id: "job-1",
    title: "Front-end Developer",
    organisation: "Generacja Innowacja",
    avatarSrc: "",
    badges: [
      { id: "location-1", label: "Zdalnie" },
      { id: "skill-1", label: "Programowanie" },
    ],
  },
  {
    id: "job-2",
    title: "Project Manager",
    organisation: "Fundacja Działaj",
    avatarSrc: "",
    badges: [
      { id: "location-2", label: "Warszawa" },
      { id: "skill-2", label: "Koordynacja" },
    ],
  },
  {
    id: "job-3",
    title: "Social Media Ninja",
    organisation: "Fundacja Szczęśliwi",
    avatarSrc: "",
    badges: [
      { id: "location-3", label: "Zdalnie" },
      { id: "skill-3", label: "Kreatywność" },
    ],
  },
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
