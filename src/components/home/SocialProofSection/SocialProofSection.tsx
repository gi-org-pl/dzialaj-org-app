import BenefitsCard from "./BenefitsCard/BenefitsCard";
import type { SocialProofSectionProps } from "./SocialProofSection.types";
import { TestimonialCarousel } from "./TestimonialCarousel/TestimonialCarousel";

const SocialProofSectionHeader = (
    { headingHighlight, headingRest, subtitle }
        : SocialProofSectionProps) => (
    <div className="text-gi-navy leading-[1.2]">
        <h2 className="text-[32px] font-extrabold">{headingRest} <span className="text-gi-blue">{headingHighlight}</span>!</h2>
        <p className="text-[20px] whitespace-pre-line">{subtitle}</p>
    </div>
)

export const SocialProofSection = (props: SocialProofSectionProps) => (
    <section className="w-full">
        <SocialProofSectionHeader {...props} />
        <div className="grid grid-cols-1 lg:grid-cols-2">
            <BenefitsCard {...props.benefitsCardProps} />
            <TestimonialCarousel {...props.testimonalCarouselProps} />
        </div>
    </section>
)