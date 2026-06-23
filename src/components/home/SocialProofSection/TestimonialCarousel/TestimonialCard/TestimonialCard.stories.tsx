import type { Meta, StoryObj } from "@storybook/react-vite";

import { TESTIMONIAL_CAROUSEL_DEFAULT_TESTIMONIAL_1 } from "../TestimonialCarousel.constants";
import { TestimonialCard } from "./TestimonialCard";

const meta = {
  title: "Home/SocialProofSection/TestimonialCard",
  component: TestimonialCard,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="mx-auto w-[400px] max-w-xl p-4 @lg:p-8">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof TestimonialCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    testimonial: TESTIMONIAL_CAROUSEL_DEFAULT_TESTIMONIAL_1,
  },
};
