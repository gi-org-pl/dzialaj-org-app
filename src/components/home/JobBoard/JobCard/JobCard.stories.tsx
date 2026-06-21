import type { Meta, StoryObj } from "@storybook/react";
import { JobCard } from "./JobCard";

const meta: Meta<typeof JobCard> = {
  title: "Components/Home/JobBoard/JobCard",
  component: JobCard,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div className="w-full max-w-[400px] md:max-w-[800px] p-4 bg-gray-50">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof JobCard>;

export const DefaultRemote: Story = {
  args: {
    title: "Front-end Developer",
    organisation: "Generacja Innowacja",
    badges: [
      { id: "1", label: "Zdalnie", variant: "default" },
      { id: "2", label: "Programowanie", variant: "default" },
      { id: "3", label: "5 h/tyd.", variant: "default" },
      { id: "4", label: "Bezterminowa", variant: "default" },
    ],
  },
};

export const CityBased: Story = {
  args: {
    title: "Project Manager",
    organisation: "Fundacja Działaj",
    badges: [
      { id: "1", label: "Warszawa", variant: "default" },
      { id: "2", label: "Koordynacja", variant: "default" },
      { id: "3", label: "8 h/tyd.", variant: "default" },
      { id: "4", label: "3 mies.", variant: "default" },
    ],
  },
};
