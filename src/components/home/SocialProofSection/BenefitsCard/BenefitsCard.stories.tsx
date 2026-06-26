import type { Meta, StoryObj } from "@storybook/react";
import BenefitsCard from "./BenefitsCard";

const meta = {
  title: "Home/SocialProofSection/BenefitsCard",
  component: BenefitsCard,
  parameters: {
    layout: "centered",
  },
  args: {
    headingPrefix: "Wolontariat",
    headingSuffix: "to tabletka, dzięki której:",
    benefits: [
      { id: "b1", label: "Zmniejszysz ryzyko depresji" },
      { id: "b2", label: "Poprawisz swoje zdrowie" },
      { id: "b3", label: "Będziesz żyć dłużej" },
      { id: "b4", label: "I po prostu lepiej się czuć", highlighted: true },
    ],
    sourceLabel: "Serio.",
    sourceLinkLabel: "Tu badania",
    sourceLinkHref: "https://example.com/badania",
  },
} satisfies Meta<typeof BenefitsCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
