import type { Meta, StoryObj } from "@storybook/react-vite";

import { HeroSection } from "./HeroSection";
import { HERO_SECTION_DEFAULT_PROPS } from "./HeroSection.constants";

const meta = {
  title: "Home/HeroSection",
  component: HeroSection,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof HeroSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: HERO_SECTION_DEFAULT_PROPS,
};

export const CustomContent: Story = {
  args: {
    ...HERO_SECTION_DEFAULT_PROPS,
    badgeLabel: "Wolontariat ma sens",
    headlineLine1: "Znajdź misję.",
    headlineLine2: "Zacznij działać.",
    bodyText: "Poznaj organizacje, które potrzebują Twojego wsparcia.",
  },
};
