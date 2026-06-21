import { Avatar, Badge } from "@gi/athena";
import { twMerge } from "tailwind-merge";
import { JOB_CARD_STRINGS } from "./JobCard.constants";
import type { JobCardBadge, JobCardProps } from "./JobCard.types";

function getBadgeVariant(
  label: string,
  currentVariant: JobCardBadge["variant"],
): "primary" | "secondary" | undefined {
  const normalizedLabel = label.toLowerCase();

  if (normalizedLabel === "warszawa") return "primary";
  if (currentVariant === "primary") return "primary";
  if (normalizedLabel === "zdalnie" || currentVariant === "default")
    return "secondary";

  return undefined;
}

export function JobCard({
  title,
  organisation,
  avatarSrc,
  avatarAlt,
  badges,
  className,
}: JobCardProps) {
  return (
    <section
      className={twMerge(
        "w-full rounded-lg border border-gi-dark-ash bg-white p-5 shadow-[0_8px_24px_rgba(0,30,36,0.08)] transition-colors hover:border-gi-gray",
        className,
      )}
    >
      <div className="mb-5 flex items-center gap-4">
        <Avatar
          src={avatarSrc}
          alt={avatarAlt ?? JOB_CARD_STRINGS.ORGANISATION_LOGO_ALT_FALLBACK}
          fallback="initials"
          name={organisation}
          size="large"
          className="shrink-0 bg-gi-ash text-gi-primary ring-1 ring-gi-dark-ash"
        />
        <div className="flex min-w-0 flex-col">
          <h3 className="truncate text-lg font-bold leading-tight text-gi-primary">
            {title}
          </h3>
          <p className="mt-1 truncate text-sm font-medium text-gi-dark-gray">
            {organisation}
          </p>
        </div>
      </div>

      <div
        aria-label={JOB_CARD_STRINGS.BADGE_LIST_LABEL}
        className="flex flex-wrap gap-2"
      >
        {badges.map((badge) => (
          <Badge
            key={badge.id}
            variant={getBadgeVariant(badge.label, badge.variant)}
            className="text-xs"
          >
            <div className="flex items-center gap-1.5">
              {badge.icon}
              <span>{badge.label}</span>
            </div>
          </Badge>
        ))}
      </div>
    </section>
  );
}
