import { BENEFITS_CARD_VOLONTARY_PILL } from "./BenefitsCard/BenefitsCard.constants";
import type { SocialProofSectionProps } from "./SocialProofSection.types";
import { TESTIMONIAL_CAROUSEL_DEFAULT_PROPS } from "./TestimonialCarousel/TestimonialCarousel.constants";

export const SOCIAL_PROOF_SECTION_ARROW_ILLUSTRATION_ALT =
  "Strzałka wskazująca na opinie wolontariuszy";

export const SOCIAL_PROF_SECTION_DEFAULT_PROPS: SocialProofSectionProps = {
  headingRest: "To nie koniec",
  headingHighlight: "dobrych informacji",
  subheadingHighlight: "Posłuchaj wolontariuszy!",
  subheadingRest: "Nie wierzysz?",
  subtitle: "Wolontariat ma udowodniony\npozytywny wpływ na Twój organizm.",
  arrowIllustrationAlt: SOCIAL_PROOF_SECTION_ARROW_ILLUSTRATION_ALT,
  benefitsCardProps: BENEFITS_CARD_VOLONTARY_PILL,
  testimonalCarouselProps: TESTIMONIAL_CAROUSEL_DEFAULT_PROPS,
};
