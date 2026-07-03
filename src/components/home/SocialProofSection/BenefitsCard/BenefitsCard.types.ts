export type BenefitItem = {
  id: string;
  label: string;
  highlighted?: boolean;
};

export type BenefitsCardProps = {
  headingPrefix: string;
  headingSuffix: string;
  benefits: ReadonlyArray<BenefitItem>;
  sourceLabel: string;
  sourceLinkLabel: string;
  sourceLinkHref: string;
};
