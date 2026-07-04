import type { Meta, StoryObj } from "@storybook/react";
import { SOCIAL_PROF_SECTION_DEFAULT_PROPS } from "./SocialProofSectioon.constants";
import { SocialProofSection } from "./SocialProofSection";

const meta = {
  title: "Home/SocialProofSection",
  component: SocialProofSection,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    ...SOCIAL_PROF_SECTION_DEFAULT_PROPS,
  },
} satisfies Meta<typeof SocialProofSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
