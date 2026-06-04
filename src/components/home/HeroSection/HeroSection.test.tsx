import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { HeroSection } from "./HeroSection";
import {
  HERO_SECTION_DEFAULT_BADGE_LABEL,
  HERO_SECTION_DEFAULT_BODY_TEXT,
  HERO_SECTION_DEFAULT_HEADLINE_LINE_1,
  HERO_SECTION_DEFAULT_HEADLINE_LINE_2,
  HERO_SECTION_DEFAULT_PROPS,
  HERO_SECTION_HEADLINE_ID,
} from "./HeroSection.constants";

const customHeroProps = {
  badgeLabel: "Custom badge",
  headlineLine1: "Custom line one.",
  headlineLine2: "Custom line two.",
  bodyText: "Custom supporting copy.",
  illustrationSrc: "/custom-mascot.png",
  illustrationAlt: "Running mascot",
};

const getHeroSectionLandmark = () => {
  const headline = screen.getByRole("heading", { level: 1 });
  const heroSection = headline.closest("section");

  if (heroSection === null) {
    throw new Error("Hero section landmark was not found");
  }

  return { headline, heroSection };
};

describe("<HeroSection />", () => {
  describe("when rendered with default home page content", () => {
    it("should expose the hero landmark with an accessible headline reference", () => {
      render(<HeroSection {...HERO_SECTION_DEFAULT_PROPS} />);

      const { headline, heroSection } = getHeroSectionLandmark();

      expect(heroSection).toHaveAttribute(
        "aria-labelledby",
        HERO_SECTION_HEADLINE_ID,
      );
      expect(headline).toHaveAttribute("id", HERO_SECTION_HEADLINE_ID);
    });

    it("should display the badge label", () => {
      render(<HeroSection {...HERO_SECTION_DEFAULT_PROPS} />);

      expect(
        screen.getByText(HERO_SECTION_DEFAULT_BADGE_LABEL),
      ).toBeInTheDocument();
    });

    it("should display both headline lines", () => {
      render(<HeroSection {...HERO_SECTION_DEFAULT_PROPS} />);

      expect(
        screen.getByText(HERO_SECTION_DEFAULT_HEADLINE_LINE_1),
      ).toBeInTheDocument();
      expect(
        screen.getByText(HERO_SECTION_DEFAULT_HEADLINE_LINE_2),
      ).toBeInTheDocument();
    });

    it("should display the supporting body text", () => {
      render(<HeroSection {...HERO_SECTION_DEFAULT_PROPS} />);

      expect(screen.getByText(HERO_SECTION_DEFAULT_BODY_TEXT)).toBeInTheDocument();
    });

    it("should render the mascot illustration from default props", () => {
      render(<HeroSection {...HERO_SECTION_DEFAULT_PROPS} />);

      const { heroSection } = getHeroSectionLandmark();
      const mascotImage = within(heroSection).getByRole("presentation", {
        hidden: true,
      });

      expect(mascotImage).toHaveAttribute(
        "src",
        HERO_SECTION_DEFAULT_PROPS.illustrationSrc,
      );
    });

    it("should treat the default illustration as decorative", () => {
      render(<HeroSection {...HERO_SECTION_DEFAULT_PROPS} />);

      const { heroSection } = getHeroSectionLandmark();
      const mascotImage = within(heroSection).getByRole("presentation", {
        hidden: true,
      });

      expect(mascotImage).toHaveAttribute("alt", "");
      expect(mascotImage).toHaveAttribute("aria-hidden", "true");
    });
  });

  describe("when rendered with custom props", () => {
    it("should display all custom text content", () => {
      render(<HeroSection {...customHeroProps} />);

      expect(screen.getByText(customHeroProps.badgeLabel)).toBeInTheDocument();
      expect(
        screen.getByText(customHeroProps.headlineLine1),
      ).toBeInTheDocument();
      expect(
        screen.getByText(customHeroProps.headlineLine2),
      ).toBeInTheDocument();
      expect(screen.getByText(customHeroProps.bodyText)).toBeInTheDocument();
    });

    it("should render the illustration with provided source and alt text", () => {
      render(<HeroSection {...customHeroProps} />);

      const mascotImage = screen.getByRole("img", {
        name: customHeroProps.illustrationAlt,
      });

      expect(mascotImage).toHaveAttribute("src", customHeroProps.illustrationSrc);
      expect(mascotImage).not.toHaveAttribute("aria-hidden", "true");
    });
  });
});
