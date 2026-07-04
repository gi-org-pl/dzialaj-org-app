import type { BenefitsCardProps } from "./BenefitsCard/BenefitsCard.types";
import type { TestimonialCarouselProps } from "./TestimonialCarousel/TestimonialCarousel.types";

export type SocialProofSectionProps = {
  headingHighlight: string;
  headingRest: string;
  subtitle: string;
  benefitsCardProps: BenefitsCardProps;
  testimonalCarouselProps: TestimonialCarouselProps;
};
