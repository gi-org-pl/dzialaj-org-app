import type { Meta, StoryObj } from "@storybook/react-vite";
import CalendarIcon from "@/assets/icons/calendar-icon.svg";
import ClockIcon from "@/assets/icons/clock-icon.svg";
import GlobeIcon from "@/assets/icons/globe-icon.svg";
import LightbulbIcon from "@/assets/icons/lightbulb-icon.svg";
import LocationIcon from "@/assets/icons/location-icon.svg";

import {
  JOB_CARD_DEFAULT_ORGANISATION,
  JOB_CARD_DEFAULT_PROPS,
  JOB_CARD_DEFAULT_TITLE,
} from "./JobCard.constants";
import { JobCard } from "./JobCard";
import type { JobBadge } from "./JobCard.types";

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

const meta = {
  title: "Components/Home/JobBoard/JobCard",
  component: JobCard,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Karta oferty wolontariatu.",
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="w-full max-w-[475px]">
        <Story />
      </div>
    ),
  ],
  tags: ["autodocs"],
} satisfies Meta<typeof JobCard>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    ...JOB_CARD_DEFAULT_PROPS,
    badges: withIcons([
      { id: "location", label: "Zdalnie", variant: "default" },
      { id: "skill", label: "Programowanie", variant: "default" },
      { id: "time", label: "5 h/tyd.", variant: "default" },
      { id: "duration", label: "Bezterminowa", variant: "default" },
    ]),
  },
};

export const CityBased: Story = {
  args: {
    title: "Project Manager",
    organisation: "Fundacja Działaj",
    avatarSrc: "",
    badges: withIcons([
      { id: "location", label: "Warszawa", variant: "primary" },
      { id: "skill", label: "Koordynacja", variant: "default" },
      { id: "time", label: "8 h/tyd.", variant: "default" },
      { id: "duration", label: "3 mies.", variant: "default" },
    ]),
  },
};
