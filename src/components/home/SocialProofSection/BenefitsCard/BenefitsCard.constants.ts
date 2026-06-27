import type { BenefitsCardProps } from "@/components/home/SocialProofSection/BenefitsCard/BenefitsCard.types.ts";

export const BENEFITS_CARD_VOLONTARY_PILL: BenefitsCardProps = {
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
};
