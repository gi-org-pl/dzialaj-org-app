import { Avatar, Badge } from "@gi/athena";

import type { B2bCallToActionProps } from "./B2bCallToAction.types";

const B2bCallToActionSectionHeader = ({
  sectionHeading,
  sectionSubtitle,
}: B2bCallToActionProps) => (
  <div className="hidden flex-col gap-1 md:flex">
    <h2 className="text-[32px] font-extrabold">{sectionHeading}</h2>
    <p className="text-[20px] leading-[1.2] whitespace-pre-line">
      {sectionSubtitle}
    </p>
  </div>
);

const B2bCallToActionCardHeading = ({
  cardHeading,
  cardHeadingHighlight,
  cardSubtitle,
}: B2bCallToActionProps) => (
  <div className="flex flex-col items-center gap-1 leading-[1.5]">
    <p className="text-[32px] font-extrabold">
      {cardHeading} <span className="text-gi-blue">{cardHeadingHighlight}</span>
      ?
    </p>
    <p className="text-xl">{cardSubtitle}</p>
  </div>
);

const B2bCallToActionContactCard = ({
  contactName,
  contactTagline,
  contactTaglineHighlight,
  contactEmail,
  avatarSrc,
  avatarAlt,
  illustrationSrc,
}: B2bCallToActionProps) => (
  <div className="relative flex flex-col gap-4 border border-gi-light-gray-dark overflow-visible rounded-2xl bg-white p-4 sm:p-6">
    <div className="flex items-center gap-3">
      <Avatar
        size="large"
        fallback="initials"
        name={contactName}
        src={avatarSrc || undefined}
        alt={avatarAlt}
      />
      <div className="leading-[1.5] pl-2">
        <p className="font-extrabold">{contactName}</p>
        <p>
          <span className="text-gi-blue">{contactTaglineHighlight}</span>{" "}
          {contactTagline}
        </p>
      </div>
    </div>

    <Badge
      type="info"
      variant="secondary"
      size="big"
      LeftIcon={<span />}
      className="self-start text-base [&>span:first-child]:hidden p-4 font-bold md:font-extrabold"
    >
      {contactEmail}
    </Badge>

    <img
      src={illustrationSrc}
      alt=""
      aria-hidden="true"
      className="pointer-events-none absolute -bottom-4 w-38 sm:w-44 right-0 sm:right-3"
    />
  </div>
);

export const B2bCallToAction = (props: B2bCallToActionProps) => (
  <section className="w-full bg-white">
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 py-8 text-gi-navy">
      <B2bCallToActionSectionHeader {...props} />

      <div className="flex flex-col gap-6 rounded-4xl border border-gi-ash bg-linear-to-b from-white to-gi-blue/10 px-4 py-6 lg:grid lg:grid-cols-2 lg:items-center lg:gap-8 min-h-[230px]">
        <B2bCallToActionCardHeading {...props} />
        <B2bCallToActionContactCard {...props} />
      </div>
    </div>
  </section>
);
