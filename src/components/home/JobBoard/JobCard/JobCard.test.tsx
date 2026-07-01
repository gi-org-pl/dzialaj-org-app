import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { JobCard } from "./JobCard";
import {
  JOB_CARD_DEFAULT_AVATAR_SRC,
  JOB_CARD_DEFAULT_HREF,
  JOB_CARD_DEFAULT_ORGANISATION,
  JOB_CARD_DEFAULT_TITLE,
  JOB_CARD_STRINGS,
} from "./JobCard.constants";
import type { JobBadge } from "./JobCard.types";

const BadgeIcon = () => (
  <span data-testid="badge-icon" aria-hidden="true">
    •
  </span>
);

const remoteBadges: JobBadge[] = [
  {
    id: "location",
    icon: <BadgeIcon />,
    label: "Zdalnie",
    variant: "default",
  },
  {
    id: "skill",
    icon: <BadgeIcon />,
    label: "Programowanie",
    variant: "default",
  },
];

const defaultJobCardProps = {
  title: JOB_CARD_DEFAULT_TITLE,
  organisation: JOB_CARD_DEFAULT_ORGANISATION,
  avatarSrc: JOB_CARD_DEFAULT_AVATAR_SRC,
  href: JOB_CARD_DEFAULT_HREF,
  badges: remoteBadges,
};

const getJobCardLink = () => {
  return screen.getByRole("link", {
    name: `${JOB_CARD_STRINGS.LINK_ARIA_LABEL_PREFIX} ${JOB_CARD_DEFAULT_TITLE}`,
  });
};

describe("<JobCard />", () => {
  describe("given the JobCard is rendered with standard properties", () => {
    describe("when the component mounts", () => {
      it("should render the job title and organisation name", () => {
        render(<JobCard {...defaultJobCardProps} />);

        const cardLink = getJobCardLink();
        const title = within(cardLink).getByRole("heading", {
          name: JOB_CARD_DEFAULT_TITLE,
        });
        const organisation = within(cardLink).getByText(
          JOB_CARD_DEFAULT_ORGANISATION,
        );

        expect(title).toHaveClass("text-xl", "font-extrabold");
        expect(organisation).toHaveClass("mt-0.5", "text-base", "font-normal");
      });

      it("should render the entire card as a single listing link", () => {
        render(<JobCard {...defaultJobCardProps} />);

        const cardLink = getJobCardLink();

        expect(cardLink).toHaveAttribute("href", JOB_CARD_DEFAULT_HREF);
        expect(cardLink).toHaveClass("cursor-pointer");
      });

      it("should render the organisation avatar with initials fallback", () => {
        render(<JobCard {...defaultJobCardProps} />);

        const avatar = screen.getByRole("img", {
          name: `${JOB_CARD_DEFAULT_ORGANISATION} avatar`,
        });

        expect(avatar).toBeInTheDocument();
        expect(avatar).toHaveClass("size-12");
      });

      it("should render the card with a shared outer padding and border", () => {
        render(<JobCard {...defaultJobCardProps} />);

        const cardLink = getJobCardLink();

        expect(cardLink).toHaveClass("p-4");
        expect(cardLink).toHaveClass("rounded-2xl");
        expect(cardLink).toHaveClass("border-gi-light-gray-dark");
        expect(cardLink).toHaveClass("min-w-0", "max-w-full");
      });

      it("should render the section divider with a navy border at ten percent opacity", () => {
        const { container } = render(<JobCard {...defaultJobCardProps} />);

        const divider = container.querySelector(".border-t");

        expect(divider).toBeInTheDocument();
        expect(divider).toHaveClass("border-gi-navy/10");
        expect(divider).toHaveClass("my-4");
      });

      it("should lay out metadata pills with a six pixel gap", () => {
        render(<JobCard {...defaultJobCardProps} />);

        const metadataContainer = screen.getByLabelText(
          JOB_CARD_STRINGS.BADGE_LIST_LABEL,
        );

        expect(metadataContainer).toHaveClass("gap-1.5", "min-w-0", "flex-wrap");
      });

      it("should render the passed metadata pills with icons", () => {
        render(<JobCard {...defaultJobCardProps} />);

        const metadataContainer = screen.getByLabelText(
          JOB_CARD_STRINGS.BADGE_LIST_LABEL,
        );

        expect(within(metadataContainer).getByText("Zdalnie")).toBeInTheDocument();
        expect(
          within(metadataContainer).getByText("Programowanie"),
        ).toBeInTheDocument();
        expect(within(metadataContainer).getAllByTestId("badge-icon")).toHaveLength(
          2,
        );
      });

      it("should apply a custom className to the card container", () => {
        render(
          <JobCard {...defaultJobCardProps} className="custom-job-card" />,
        );

        expect(getJobCardLink()).toHaveClass("custom-job-card");
      });
    });
  });

  describe("given avatar-related props", () => {
    describe("when an avatar image source is provided", () => {
      it("should render the avatar image", () => {
        render(
          <JobCard
            {...defaultJobCardProps}
            avatarSrc="/organisation-logo.png"
            avatarAlt="Logo Fundacji Działaj"
          />,
        );

        const avatarImage = screen.getByRole("img", {
          name: `${JOB_CARD_DEFAULT_ORGANISATION} avatar`,
        });

        expect(avatarImage).toBeInTheDocument();
      });
    });

    describe("when avatar alt text is omitted and organisation name is empty", () => {
      it("should use the fallback alt text for the avatar", () => {
        render(
          <JobCard
            {...defaultJobCardProps}
            organisation=""
            avatarSrc=""
          />,
        );

        expect(
          screen.getByRole("img", {
            name: JOB_CARD_STRINGS.ORGANISATION_LOGO_ALT_FALLBACK,
          }),
        ).toBeInTheDocument();
      });
    });
  });

  describe("given metadata pill positions", () => {
    describe("when rendering the location pill as the first item", () => {
      it("should apply the ghost ngo-secondary style", () => {
        render(<JobCard {...defaultJobCardProps} />);

        const locationPill = screen.getByText("Zdalnie");

        expect(locationPill).toHaveClass("text-gi-blue");
        expect(locationPill).toHaveClass("bg-gi-blue/10");
        expect(locationPill).toHaveClass("text-base", "font-bold");
      });
    });

    describe("when rendering the remaining metadata pills", () => {
      it("should apply the outlined ngo-option style", () => {
        render(<JobCard {...defaultJobCardProps} />);

        const skillPill = screen.getByText("Programowanie");

        expect(skillPill).toHaveClass("border-gi-light-gray-dark");
        expect(skillPill).toHaveClass("text-gi-navy");
        expect(skillPill).toHaveClass("text-base", "font-bold");
      });
    });
  });
});
