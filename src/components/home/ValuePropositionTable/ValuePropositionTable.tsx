import logoDzialaj from "@/assets/vectors/logo-dzialaj.svg";
import {
  VALUE_PROPOSITION_COLUMN_HEADER,
  VALUE_PROPOSITION_HEADING_COMMA,
  VALUE_PROPOSITION_LOGO_ALT,
} from "./ValuePropositionTable.constants";
import type { ValuePropositionTableProps } from "./ValuePropositionTable.types";

export const ValuePropositionTable = ({
  heading,
  rows,
  illustrationSrc,
  illustrationAlt,
}: ValuePropositionTableProps) => {
  const [lineOne = "", lineTwo = ""] = heading.split("\n");

  return (
    <section className="flex flex-col gap-6">
      <h2 className="text-[32px] font-extrabold leading-[1.2]">
        <span className="block">
          <span className="text-gi-blue">{lineOne}</span>
          <span className="text-gi-primary">
            {VALUE_PROPOSITION_HEADING_COMMA}
          </span>
        </span>
        <span className="block text-gi-primary">{lineTwo}</span>
      </h2>

      <div className="relative rounded-3xl border border-gi-dark-ash">
        <table className="w-max border-separate border-spacing-6">
          <thead>
            <tr>
              <th
                scope="col"
                aria-hidden="true"
                className="w-[138px] p-0 font-normal"
              />
              <th scope="col" className="p-0 text-left font-normal">
                <img
                  src={logoDzialaj}
                  alt={VALUE_PROPOSITION_LOGO_ALT}
                  className="h-6 w-auto"
                />
              </th>
              <th
                scope="col"
                className="p-0 text-left text-xl font-extrabold leading-[1.2] text-gi-primary/50"
              >
                {VALUE_PROPOSITION_COLUMN_HEADER}
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id}>
                <th
                  scope="row"
                  className="w-[138px] p-0 text-right text-base font-extrabold leading-[1.2] text-gi-blue"
                >
                  {row.attribute}
                </th>
                <td className="p-0 text-base font-bold leading-[1.2] text-gi-primary">
                  {row.działajValue}
                </td>
                <td className="p-0 text-base leading-[1.2] text-gi-primary/50">
                  {row.jobBoardValue}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {illustrationSrc.length > 0 && (
          <img
            src={illustrationSrc}
            alt={illustrationAlt}
            className="pointer-events-none absolute top-6 right-10 w-[236px] -scale-x-100"
          />
        )}
      </div>
    </section>
  );
};
