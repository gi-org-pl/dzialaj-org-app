import type { Meta, StoryObj } from "@storybook/react-vite";
import CalendarIcon from "@/assets/icons/calendar-icon.svg";
import ClockIcon from "@/assets/icons/clock-icon.svg";
import GlobeIcon from "@/assets/icons/globe-icon.svg";
import LightbulbIcon from "@/assets/icons/lightbulb-icon.svg";
import LocationIcon from "@/assets/icons/location-icon.svg";

import { JOB_CARD_DEFAULT_PROPS } from "./JobCard/JobCard.constants";
import type { JobBadge } from "./JobCard/JobCard.types";
import { JobBoard } from "./JobBoard";
import type { Job } from "./JobBoard.types";

const storyIcons = {
  remoteLocation: <GlobeIcon aria-hidden="true" />,
  cityLocation: <LocationIcon aria-hidden="true" />,
  skill: <LightbulbIcon aria-hidden="true" />,
  time: <ClockIcon aria-hidden="true" />,
  duration: <CalendarIcon aria-hidden="true" />,
} as const;

const getBadgeIcon = (badge: Omit<JobBadge, "icon">) => {
  if (badge.id.startsWith("location")) {
    return badge.label === "Zdalnie"
      ? storyIcons.remoteLocation
      : storyIcons.cityLocation;
  }

  if (badge.id.startsWith("time")) return storyIcons.time;
  if (badge.id.startsWith("duration")) return storyIcons.duration;

  return storyIcons.skill;
};

const withIcons = (badges: Omit<JobBadge, "icon">[]): JobBadge[] =>
  badges.map((badge) => ({
    ...badge,
    icon: getBadgeIcon(badge),
  }));

const sampleBadges = withIcons([
  { id: "location", label: "Zdalnie", variant: "default" },
  { id: "skill", label: "Programowanie", variant: "default" },
  { id: "time", label: "5 h/tyd.", variant: "default" },
  { id: "duration", label: "Bezterminowa", variant: "default" },
]);

const sampleJobs: Job[] = [
  { id: "job-1", ...JOB_CARD_DEFAULT_PROPS, badges: sampleBadges },
  { id: "job-2", ...JOB_CARD_DEFAULT_PROPS, badges: sampleBadges },
  { id: "job-3", ...JOB_CARD_DEFAULT_PROPS, badges: sampleBadges },
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
