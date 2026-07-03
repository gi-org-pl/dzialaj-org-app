import mascotRunningIllustration from "@/assets/images/mascot-running.png";

import type { HeroSectionProps } from "./HeroSection.types";

export const HERO_SECTION_HEADLINE_ID = "hero-section-headline";

export const HERO_SECTION_DEFAULT_BADGE_LABEL = "Rozwijaj się z sensem";
export const HERO_SECTION_DEFAULT_HEADLINE_LINE_1 = "Można narzekać.";
export const HERO_SECTION_DEFAULT_HEADLINE_LINE_2 = "Można Działać.";
export const HERO_SECTION_DEFAULT_BODY_TEXT =
  "Setki organizacji szuka osób takich jak Ty. Uwolnij swój potencjał, buduj i zmieniaj społeczeństwo.";
export const HERO_SECTION_DECORATIVE_ILLUSTRATION_ALT = "";

export const HERO_SECTION_DEFAULT_PROPS: HeroSectionProps = {
  badgeLabel: HERO_SECTION_DEFAULT_BADGE_LABEL,
  headlineLine1: HERO_SECTION_DEFAULT_HEADLINE_LINE_1,
  headlineLine2: HERO_SECTION_DEFAULT_HEADLINE_LINE_2,
  bodyText: HERO_SECTION_DEFAULT_BODY_TEXT,
  illustrationSrc: mascotRunningIllustration,
  illustrationAlt: HERO_SECTION_DECORATIVE_ILLUSTRATION_ALT,
};
