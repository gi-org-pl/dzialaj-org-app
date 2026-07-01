import type { JobCardProps } from "./JobCard.types";

export const JOB_CARD_STRINGS = {
  ORGANISATION_LOGO_ALT_FALLBACK: "Logo organizacji",
  BADGE_LIST_LABEL: "Metadane oferty wolontariatu",
  LINK_ARIA_LABEL_PREFIX: "Przejdź do oferty:",
} as const;

export const JOB_CARD_DEFAULT_TITLE = "Front-end Developer";
export const JOB_CARD_DEFAULT_ORGANISATION = "Generacja Innowacja";
export const JOB_CARD_DEFAULT_AVATAR_SRC = "";
export const JOB_CARD_DEFAULT_HREF = "#";

export const JOB_CARD_DEFAULT_PROPS: Pick<
  JobCardProps,
  "title" | "organisation" | "avatarSrc" | "href"
> = {
  title: JOB_CARD_DEFAULT_TITLE,
  organisation: JOB_CARD_DEFAULT_ORGANISATION,
  avatarSrc: JOB_CARD_DEFAULT_AVATAR_SRC,
  href: JOB_CARD_DEFAULT_HREF,
};
