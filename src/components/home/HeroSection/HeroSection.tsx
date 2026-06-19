import { Badge } from "@gi/athena";
import { twMerge } from "tailwind-merge";

import { HERO_SECTION_HEADLINE_ID } from "./HeroSection.constants";
import type { HeroSectionProps } from "./HeroSection.types";

const HeroSectionBadge = ({ badgeLabel }: HeroSectionProps) => (
  <Badge
    type="info"
    variant="secondary"
    size="big"
    className="text-base font-bold leading-[1.2] [&>span:first-child]:hidden"
  >
    {badgeLabel}
  </Badge>
);

const HeroSectionHeadline = ({
  headlineLine1,
  headlineLine2,
}: HeroSectionProps) => (
  <h1
    id={HERO_SECTION_HEADLINE_ID}
    className="text-[32px] font-extrabold leading-[1.2] @lg:text-5xl"
  >
    <span className="block text-gi-primary">{headlineLine1}</span>
    <span className="block text-gi-blue">{headlineLine2}</span>
  </h1>
);

const HeroSectionBody = ({ bodyText }: HeroSectionProps) => (
  <p className="w-full max-w-sm text-base font-normal leading-[1.2] text-gi-dark-gray @lg:text-xl">
    {bodyText}
  </p>
);

const HeroSectionIllustration = ({
  illustrationSrc,
  illustrationAlt,
}: HeroSectionProps) => (
  <div
    className={twMerge(
      "pointer-events-none absolute z-0 w-full",
      "top-8 left-1/2 -translate-x-1/2",
      "lg:top-12 lg:right-0 lg:left-auto lg:translate-x-0",
    )}
  >
    <img
      src={illustrationSrc}
      alt={illustrationAlt}
      aria-hidden={illustrationAlt === ""}
      className="h-auto w-full object-contain"
    />
  </div>
);

const HeroSectionContent = (props: HeroSectionProps) => (
  <div className="relative z-10 flex w-full flex-col items-start gap-4 @lg:max-w-xl">
    <HeroSectionBadge {...props} />
    <HeroSectionHeadline {...props} />
    <HeroSectionBody {...props} />
  </div>
);

export const HeroSection = (props: HeroSectionProps) => (
  <section
    aria-labelledby={HERO_SECTION_HEADLINE_ID}
    className="w-full bg-white"
  >
    <div
      className={twMerge(
        "@container relative mx-auto w-full max-w-7xl px-4 py-8",
        "min-h-[200px] @lg:min-h-[252px] @lg:py-12",
      )}
    >
      <HeroSectionIllustration {...props} />
      <HeroSectionContent {...props} />
    </div>
  </section>
);
