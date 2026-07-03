import type { Meta, StoryObj } from "@storybook/react-vite";

import { TestimonialCarousel } from "./TestimonialCarousel";
import {
  TESTIMONIAL_CAROUSEL_DEFAULT_PROPS,
  TESTIMONIAL_CAROUSEL_SINGLE_PROPS,
} from "./TestimonialCarousel.constants";

const meta = {
  title: "Home/SocialProofSection/TestimonialCarousel",
  component: TestimonialCarousel,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="mx-auto w-[400px] max-w-xl p-4 @lg:p-8">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof TestimonialCarousel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: TESTIMONIAL_CAROUSEL_DEFAULT_PROPS,
};

export const SingleTestimonial: Story = {
  args: TESTIMONIAL_CAROUSEL_SINGLE_PROPS,
};
