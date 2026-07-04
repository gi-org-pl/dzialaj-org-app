import type { BenefitsCardProps } from "./BenefitsCard/BenefitsCard.types";
import type { TestimonialCarouselProps } from "./TestimonialCarousel/TestimonialCarousel.types";

export type SocialProofSectionProps = {
  headingHighlight: string;
  headingRest: string;
  subheadingHighlight: string;
  subheadingRest: string;
  subtitle: string;
  arrowIllustrationAlt: string;
  benefitsCardProps: BenefitsCardProps;
  testimonalCarouselProps: TestimonialCarouselProps;
};
