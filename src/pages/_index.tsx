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
import { HeroSection } from "@/components/home/HeroSection/HeroSection";
import { HERO_SECTION_DEFAULT_PROPS } from "@/components/home/HeroSection/HeroSection.constants";
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
        <ValuePropositionTable
          heading={VALUE_PROPOSITION_HEADING}
          rows={VALUE_PROPOSITION_DEFAULT_ROWS}
          illustrationSrc={mascotLightbulbPose}
          illustrationAlt="Mascot holding a lightbulb"
        />
      </div>
      <div className="mx-auto w-full max-w-[800px] pt-8 pb-8">
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
