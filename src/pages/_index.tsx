import mascotLightbulbPose from "@/assets/images/mascot-lightbulb-pose.png";
import { useState } from "react";
import { B2bCallToAction } from "@/components/home/B2bCallToAction/B2bCallToAction";
import { B2B_CALL_TO_ACTION_DEFAULT_PROPS } from "@/components/home/B2bCallToAction/B2bCallToAction.constants";
import { CategoryFilters } from "@/components/home/CategoryFilters/CategoryFilters";
import { CATEGORY_FILTERS_DATA } from "@/components/home/CategoryFilters/CategoryFilters.constants";
import FaqAccordion from "@/components/home/FaqAccordion/FaqAccordion";
import {
  FAQ_GROUPS,
  FAQ_HEADING,
} from "@/components/home/FaqAccordion/FaqAccordion.constants";
import type { FaqGroup } from "@/components/home/FaqAccordion/FaqAccordion.types";
import CalendarIcon from "@/assets/icons/calendar-icon.svg";
import ClockIcon from "@/assets/icons/clock-icon.svg";
import GlobeIcon from "@/assets/icons/globe-icon.svg";
import LightbulbIcon from "@/assets/icons/lightbulb-icon.svg";
import LocationIcon from "@/assets/icons/location-icon.svg";
import { HeroSection } from "@/components/home/HeroSection/HeroSection";
import { HERO_SECTION_DEFAULT_PROPS } from "@/components/home/HeroSection/HeroSection.constants";
import { JobBoard } from "@/components/home/JobBoard/JobBoard";
import { SocialProofSection } from "@/components/home/SocialProofSection/SocialProofSection";
import { SOCIAL_PROF_SECTION_DEFAULT_PROPS } from "@/components/home/SocialProofSection/SocialProofSectioon.constants";
import { JOB_CARD_DEFAULT_PROPS } from "@/components/home/JobBoard/JobCard/JobCard.constants";
import type { JobBadge } from "@/components/home/JobBoard/JobCard/JobCard.types";
import type { Job } from "@/components/home/JobBoard/JobBoard.types";
import { ValuePropositionTable } from "@/components/home/ValuePropositionTable/ValuePropositionTable";
import {
  VALUE_PROPOSITION_DEFAULT_ROWS,
  VALUE_PROPOSITION_HEADING,
} from "@/components/home/ValuePropositionTable/ValuePropositionTable.constants";
import { Footer } from "@/components/shared/Footer/Footer";
import Header from "@/components/shared/Header/Header";
import { PATHS } from "@/constants/common";

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    CATEGORY_FILTERS_DATA.selectedId ?? null,
  );
  const faqGroups = FAQ_GROUPS.map((group) => ({
    ...group,
    items: group.items.map((item) => ({ ...item })),
  })) as FaqGroup[];

  const storyIcons = {
    remoteLocation: <GlobeIcon aria-hidden="true" />,
    cityLocation: <LocationIcon aria-hidden="true" />,
    skill: <LightbulbIcon aria-hidden="true" />,
    time: <ClockIcon aria-hidden="true" />,
    duration: <CalendarIcon aria-hidden="true" />,
  } as const;

  const getBadgeIcon = (badge: Omit<JobBadge, "icon">) => {
    if (badge.id.startsWith("location")) {
      return badge.label === "Zdalnie"
        ? storyIcons.remoteLocation
        : storyIcons.cityLocation;
    }

    if (badge.id.startsWith("time")) return storyIcons.time;
    if (badge.id.startsWith("duration")) return storyIcons.duration;

    return storyIcons.skill;
  };

  const withIcons = (badges: Omit<JobBadge, "icon">[]): JobBadge[] =>
    badges.map((badge) => ({
      ...badge,
      icon: getBadgeIcon(badge),
    }));

  const sampleBadges = withIcons([
    { id: "location", label: "Zdalnie", variant: "default" },
    { id: "skill", label: "Programowanie", variant: "default" },
    { id: "time", label: "5 h/tyd.", variant: "default" },
    { id: "duration", label: "Bezterminowa", variant: "default" },
  ]);

  const defaultJobs: Job[] = [
    { id: "job-1", ...JOB_CARD_DEFAULT_PROPS, badges: sampleBadges },
    { id: "job-2", ...JOB_CARD_DEFAULT_PROPS, badges: sampleBadges },
    { id: "job-3", ...JOB_CARD_DEFAULT_PROPS, badges: sampleBadges },
  ];

  return (
    <main className="flex min-h-screen flex-col">
      <div className="mx-auto w-full max-w-[800px]">
        <Header />
      </div>
      <div className="mx-auto w-full max-w-[800px]">
        <HeroSection {...HERO_SECTION_DEFAULT_PROPS} />
      </div>
      <div className="mx-auto w-full max-w-[800px] py-8">
        <CategoryFilters
          title={CATEGORY_FILTERS_DATA.title}
          categories={CATEGORY_FILTERS_DATA.categories}
          selectedId={selectedCategory}
          onChange={(id) => setSelectedCategory(id)}
        />
      </div>
      <div className="mx-auto w-full max-w-[800px] pb-8">
        <JobBoard
          jobs={defaultJobs}
          totalCount={defaultJobs.length}
          locationOptions={[
            { value: "location-1", label: "Warszawa" },
            { value: "location-2", label: "Wrocław" },
          ]}
          onLocationChange={() => undefined}
          onSearchChange={() => undefined}
          onLoadMore={() => undefined}
          hasMore
        />
      </div>
      <div className="mx-auto w-full max-w-[800px] pb-8">
        <ValuePropositionTable
          heading={VALUE_PROPOSITION_HEADING}
          rows={VALUE_PROPOSITION_DEFAULT_ROWS}
          illustrationSrc={mascotLightbulbPose}
          illustrationAlt="Mascot holding a lightbulb"
        />
      </div>
      <div className="mx-auto w-full max-w-[800px] py-8">
        <SocialProofSection {...SOCIAL_PROF_SECTION_DEFAULT_PROPS} />
      </div>
      <div className="mx-auto w-full max-w-[800px] pb-8">
        <FaqAccordion
          heading={FAQ_HEADING}
          groups={faqGroups}
          defaultGroupId={faqGroups[0]?.id ?? ""}
        />
      </div>
      <div className="mx-auto w-full max-w-[800px] pb-8">
        <B2bCallToAction {...B2B_CALL_TO_ACTION_DEFAULT_PROPS} />
      </div>
      <div className="mx-auto w-full max-w-[1200px]">
        <Footer
          links={[
            { label: "Strona główna", href: PATHS.HOME },
            { label: "Panel organizacji", href: PATHS.ORGANIZATION_PANEL },
          ]}
        />
      </div>
    </main>
  );
};

export default Index;
