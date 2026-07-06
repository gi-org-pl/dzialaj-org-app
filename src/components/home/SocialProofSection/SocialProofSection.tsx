import Arrow from "@/assets/images/Arrow.png";
import BenefitsCard from "./BenefitsCard/BenefitsCard";
import type { SocialProofSectionProps } from "./SocialProofSection.types";
import { TestimonialCarousel } from "./TestimonialCarousel/TestimonialCarousel";

const SocialProofSectionHeader = ({
  headingHighlight,
  headingRest,
  subtitle,
}: SocialProofSectionProps) => (
  <div className="text-gi-navy leading-[1.2] mb-8 md:mb-6">
    <h2 className="text-[32px] font-extrabold">
      {headingRest} <span className="text-gi-blue">{headingHighlight}</span>!
    </h2>
    <p className="text-xl whitespace-pre-line mt-2">{subtitle}</p>
  </div>
);

const SocialProofSectionSubheader = ({
  subheadingHighlight,
  subheadingRest,
  arrowIllustrationAlt,
}: SocialProofSectionProps) => (
  <div className="flex md:flex-col text-gi-navy leading-normal font-extrabold text-xl mb-4 mt-8 md:mt-0">
    <img
      src={Arrow}
      alt={arrowIllustrationAlt}
      aria-hidden={arrowIllustrationAlt === ""}
      className="md:hidden block max-w-[50px] max-h-[60px] rotate-90 -scale-y-100"
    />
    <h3 className="ml-4 md:ml-0">
      {subheadingRest} <br />{" "}
      <span className="text-gi-blue">{subheadingHighlight}</span>
    </h3>
  </div>
);

export const SocialProofSection = (props: SocialProofSectionProps) => (
  <section className="w-full mx-auto max-w-7xl px-4 py-8">
    <SocialProofSectionHeader {...props} />
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="md:mr-[20px]">
        <BenefitsCard {...props.benefitsCardProps} />
      </div>
      <div>
        <img
          src={Arrow}
          alt={props.arrowIllustrationAlt}
          aria-hidden={props.arrowIllustrationAlt === ""}
          className="hidden md:block w-[92px] mt-24 mb-4"
        />
        <div className="md:ml-8">
          <SocialProofSectionSubheader {...props} />
          <TestimonialCarousel {...props.testimonalCarouselProps} />
        </div>
      </div>
    </div>
  </section>
);
