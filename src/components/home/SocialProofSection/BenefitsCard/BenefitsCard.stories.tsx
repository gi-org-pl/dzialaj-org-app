import type { Meta, StoryObj } from "@storybook/react";
import BenefitsCard from "./BenefitsCard";
import {
  BENEFITS_CARD_WOLONTARY_PILL
} from "@/components/home/SocialProofSection/BenefitsCard/BenefitsCard.constants.ts";

const meta = {
  title: "Home/SocialProofSection/BenefitsCard",
  component: BenefitsCard,
  parameters: {
    layout: "centered",
  },
  args: {
    ...BENEFITS_CARD_WOLONTARY_PILL
  },
} satisfies Meta<typeof BenefitsCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
