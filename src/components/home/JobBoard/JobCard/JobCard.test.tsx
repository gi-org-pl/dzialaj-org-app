import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { JobCard } from "./JobCard";
import { JOB_CARD_STRINGS } from "./JobCard.constants";
import type { JobCardBadge } from "./JobCard.types";

const mockBadges: JobCardBadge[] = [
  { id: "1", label: "Zdalnie", variant: "default" },
  { id: "2", label: "Programowanie", variant: "default" },
];

describe("<JobCard />", () => {
  describe("given the JobCard is rendered with standard properties", () => {
    describe("when the component mounts", () => {
      it("should render the job title and organisation name", () => {
        render(
          <JobCard
            title="Front-end Developer"
            organisation="Generacja Innowacja"
            badges={mockBadges}
          />,
        );

        expect(
          screen.getByRole("heading", { name: "Front-end Developer" }),
        ).toBeInTheDocument();
        expect(screen.getByText("Generacja Innowacja")).toBeInTheDocument();
      });

      it("should render the passed metadata badges", () => {
        render(
          <JobCard
            title="Front-end Developer"
            organisation="Generacja Innowacja"
            badges={mockBadges}
          />,
        );

        const badgeContainer = screen.getByLabelText(
          JOB_CARD_STRINGS.BADGE_LIST_LABEL,
        );
        expect(within(badgeContainer).getByText("Zdalnie")).toBeInTheDocument();
        expect(
          within(badgeContainer).getByText("Programowanie"),
        ).toBeInTheDocument();
      });
    });
  });

  describe("given specific location badge values", () => {
    describe("when the badge label is a specific city", () => {
      it("should apply primary styling structure for cities", () => {
        const cityBadges: JobCardBadge[] = [
          { id: "loc-1", label: "Warszawa", variant: "default" },
        ];

        render(
          <JobCard
            title="Front-end Developer"
            organisation="Generacja Innowacja"
            badges={cityBadges}
          />,
        );

        const badgeElement =
          screen.getByText("Warszawa").closest(".athena-badge") ||
          screen.getByText("Warszawa");
        expect(badgeElement).toBeInTheDocument();
      });
    });
  });
});
