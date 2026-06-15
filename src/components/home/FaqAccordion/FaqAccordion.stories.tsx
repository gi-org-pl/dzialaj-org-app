import type { Meta, StoryObj } from "@storybook/react";
import {
  faqGroups,
  faqHeading,
} from "@/components/home/FaqAccordion/FaqAccordion.constants";
import FaqAccordion from "./FaqAccordion";

const meta = {
  title: "Home/FaqAccordion",
  component: FaqAccordion,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div className="max-w-[800px] w-full mx-auto">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof FaqAccordion>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    heading: faqHeading,
    groups: faqGroups,
    defaultGroupId: "Kandydaci",
  },
};
