import { Avatar } from "@gi/athena";
import { twMerge } from "tailwind-merge";

import type { Testimonial } from "../TestimonialCarousel.types";
import { parseQuote } from "./parseQuote";

type TestimonialCardProps = {
  testimonial: Testimonial;
  className?: string;
};

const TestimonialCardQuote = ({ quote }: Pick<Testimonial, "quote">) => (
  <blockquote className="m-0 flex-1">
    <p className="text-base font-bold text-gi-navy @lg:text-xl">
      {parseQuote(quote).map((segment, index) => (
        <span
          key={`quote-segment-${index}`}
          className={twMerge(segment.underlined && "underline")}
        >
          {segment.text}
        </span>
      ))}
    </p>
  </blockquote>
);

const TestimonialCardAuthor = ({
  authorName,
  authorOrganisation,
  avatarSrc,
  avatarAlt,
}: Pick<
  Testimonial,
  "authorName" | "authorOrganisation" | "avatarSrc" | "avatarAlt"
>) => (
  <footer className="mt-auto flex items-center gap-2">
    <Avatar src={avatarSrc} alt={avatarAlt} size="medium" />
    <p className="text-base">
      <span className="font-extrabold text-gi-navy">{authorName}</span>
      <span className="font-normal text-gi-navy">
        {" "}
        {authorOrganisation}
      </span>
    </p>
  </footer>
);

export const TestimonialCard = ({
  testimonial,
  className,
}: TestimonialCardProps) => (
  <article
    className={twMerge(
      "flex h-full w-full flex-col gap-4 rounded-4xl border border-gi-light-gray bg-white p-4 leading-[1.2] @lg:p-8",
      className,
    )}
  >
    <TestimonialCardQuote quote={testimonial.quote} />
    <TestimonialCardAuthor
      authorName={testimonial.authorName}
      authorOrganisation={testimonial.authorOrganisation}
      avatarSrc={testimonial.avatarSrc}
      avatarAlt={testimonial.avatarAlt}
    />
  </article>
);
