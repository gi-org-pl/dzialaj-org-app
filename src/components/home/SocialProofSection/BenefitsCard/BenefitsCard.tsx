import { Badge } from "@gi/athena";
import clsx from "clsx";
import type { FC } from "react";
import pills from "@/assets/images/pills.png";
import type { BenefitsCardProps } from "./BenefitsCard.types";

const BenefitsCard: FC<BenefitsCardProps> = ({
  headingPrefix,
  headingSuffix,
  benefits,
  sourceLabel,
  sourceLinkLabel,
  sourceLinkHref,
}) => {
  return (
    <section
      className="rounded-4xl border border-solid border-gi-light-gray"
      aria-labelledby="benefits-card-heading"
    >
      <h3
        id="benefits-card-heading"
        className="flex p-4 text-xl font-extrabold rounded-t-4xl bg-gi-blue/10 border-solid border-gi-light-gray overflow-hidden"
      >
        <div className="max-w-70">
          <span className="text-gi-blue leading-relaxed">{headingPrefix}</span>{" "}
          <span>{headingSuffix}</span>
        </div>
        <div className="w-20">
          <img
            src={pills}
            alt="decorative ilustration"
            aria-hidden="true"
            className="w10 h-10 scale-300 translate-x-9 translate-y-3 opacity-10"
          />
        </div>
      </h3>

      <ul className="flex flex-col gap-3 px-4 pt-4">
        {benefits.map((b) => {
          const highlightedClasses = b.highlighted ? "text-gi-blue" : "";

          return (
            <li key={b.id}>
              <Badge
                dataTestId={`benefit-${b.id}`}
                className={clsx(highlightedClasses, "font-extrabold")}
                type="default"
                variant="outlined"
                size="big"
              >
                {b.label}
              </Badge>
            </li>
          );
        })}
      </ul>

      <p className="text-md text-gi-gray font-extrabold rounded-b-4xl px-4 pb-4 pt-3">
        {sourceLabel}{" "}
        <a href={sourceLinkHref} className="underline">
          {sourceLinkLabel}
        </a>
      </p>
    </section>
  );
};

export default BenefitsCard;
