import { Avatar } from "@gi/athena";
import { isValidElement } from "react";
import { twMerge } from "tailwind-merge";
import { JOB_CARD_STRINGS } from "./JobCard.constants";
import type { JobCardProps } from "./JobCard.types";

const badgeClass =
  "inline-flex h-8 shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full px-3 text-base font-bold";

export function JobCard({
  title,
  organisation,
  avatarSrc,
  avatarAlt,
  href,
  badges,
  className,
}: JobCardProps) {
  return (
    <a
      href={href}
      aria-label={`${JOB_CARD_STRINGS.LINK_ARIA_LABEL_PREFIX} ${title}`}
      className={twMerge(
        "block w-full min-w-0 max-w-full cursor-pointer rounded-2xl border border-gi-light-gray-dark bg-white p-4 text-left no-underline transition-colors hover:border-gi-blue",
        className,
      )}
    >
      <div className="flex items-center gap-4">
        <Avatar
          src={avatarSrc}
          alt={avatarAlt ?? JOB_CARD_STRINGS.ORGANISATION_LOGO_ALT_FALLBACK}
          fallback="initials"
          name={organisation}
          className="size-12 shrink-0 bg-gi-ash text-gi-primary"
        />

        <div className="min-w-0 flex-1">
          <h3 className="truncate text-xl font-extrabold leading-tight text-gi-primary">
            {title}
          </h3>
          <p className="mt-0.5 truncate text-base font-normal text-gi-dark-gray">
            {organisation}
          </p>
        </div>
      </div>

      <hr className="my-4 border-0 border-t border-gi-navy/10" />

      <div
        aria-label={JOB_CARD_STRINGS.BADGE_LIST_LABEL}
        className="flex min-w-0 flex-wrap gap-1.5"
      >
        {badges.map((badge, index) => {
          const isPrimary = index === 0;
          const badgeVariant = isPrimary
            ? "bg-gi-blue/10 text-gi-blue"
            : "border border-gi-light-gray-dark bg-transparent text-gi-navy";

          return (
            <span
              key={badge.id}
              className={`${badgeClass} ${badgeVariant}`}
            >
              {isValidElement(badge.icon) && (
                <span
                  aria-hidden="true"
                  className="inline-flex size-4 items-center justify-center [&_svg]:size-full"
                >
                  {badge.icon}
                </span>
              )}
              {badge.label}
            </span>
          );
        })}
      </div>
    </a>
  );
}