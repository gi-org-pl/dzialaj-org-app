import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ValuePropositionTable } from "./ValuePropositionTable";
import {
  VALUE_PROPOSITION_COLUMN_HEADER,
  VALUE_PROPOSITION_DEFAULT_ROWS,
  VALUE_PROPOSITION_HEADING,
  VALUE_PROPOSITION_LOGO_ALT,
} from "./ValuePropositionTable.constants";

const ILLUSTRATION_SRC = "/mascot-lightbulb.png";

const defaultProps = {
  heading: VALUE_PROPOSITION_HEADING,
  rows: VALUE_PROPOSITION_DEFAULT_ROWS,
  illustrationSrc: ILLUSTRATION_SRC,
  illustrationAlt: "",
};

describe("<ValuePropositionTable />", () => {
  describe("given default props", () => {
    describe("when the component renders", () => {
      it("displays the section heading as an h2 with two lines", () => {
        render(<ValuePropositionTable {...defaultProps} />);

        const heading = screen.getByRole("heading", { level: 2 });

        expect(heading).toHaveTextContent("Tu znajdziesz możliwości,");
        expect(heading).toHaveTextContent("których nie ma na job boardach.");
      });

      it("renders the primary heading text in primary colour", () => {
        render(<ValuePropositionTable {...defaultProps} />);

        expect(screen.getByText("Tu znajdziesz możliwości")).toHaveClass(
          "text-gi-primary",
        );
      });

      it("renders the trailing comma on the first line in dark blue", () => {
        render(<ValuePropositionTable {...defaultProps} />);

        expect(screen.getByText(",")).toHaveClass("text-gi-blue");
      });

      it("renders the secondary heading line in dark blue", () => {
        render(<ValuePropositionTable {...defaultProps} />);

        expect(screen.getByText("których nie ma na job boardach.")).toHaveClass(
          "text-gi-blue",
        );
      });

      it("renders the comparison as a semantic table", () => {
        render(<ValuePropositionTable {...defaultProps} />);

        expect(screen.getByRole("table")).toBeInTheDocument();
        expect(screen.getAllByRole("columnheader")).toHaveLength(3);
        expect(screen.getAllByRole("rowheader")).toHaveLength(
          VALUE_PROPOSITION_DEFAULT_ROWS.length,
        );
      });

      it("displays the 'Job Boardy' column header", () => {
        render(<ValuePropositionTable {...defaultProps} />);

        expect(
          screen.getByText(VALUE_PROPOSITION_COLUMN_HEADER),
        ).toBeInTheDocument();
      });

      it("displays the działaj logo image", () => {
        render(<ValuePropositionTable {...defaultProps} />);

        expect(
          screen.getByAltText(VALUE_PROPOSITION_LOGO_ALT),
        ).toBeInTheDocument();
      });
    });

    describe("when comparison rows are provided", () => {
      it("renders every attribute label", () => {
        render(<ValuePropositionTable {...defaultProps} />);

        for (const row of VALUE_PROPOSITION_DEFAULT_ROWS) {
          expect(screen.getByText(row.attribute)).toBeInTheDocument();
        }
      });

      it("renders every działaj value", () => {
        render(<ValuePropositionTable {...defaultProps} />);

        for (const row of VALUE_PROPOSITION_DEFAULT_ROWS) {
          expect(screen.getByText(row.działajValue)).toBeInTheDocument();
        }
      });

      it("renders every job board value", () => {
        render(<ValuePropositionTable {...defaultProps} />);

        for (const row of VALUE_PROPOSITION_DEFAULT_ROWS) {
          expect(screen.getByText(row.jobBoardValue)).toBeInTheDocument();
        }
      });
    });
  });

  describe("given a non-empty illustrationSrc", () => {
    describe("when the component renders", () => {
      it("renders both the logo and the mascot illustration", () => {
        const { container } = render(
          <ValuePropositionTable
            {...defaultProps}
            illustrationSrc={ILLUSTRATION_SRC}
          />,
        );

        expect(container.querySelectorAll("img")).toHaveLength(2);
      });

      it("sets the provided alt text on the mascot illustration", () => {
        const alt = "Mascot holding a lightbulb";
        render(
          <ValuePropositionTable {...defaultProps} illustrationAlt={alt} />,
        );

        expect(screen.getByAltText(alt)).toBeInTheDocument();
      });
    });
  });

  describe("given an empty illustrationSrc", () => {
    describe("when the component renders", () => {
      it("omits the mascot illustration and only renders the logo", () => {
        const { container } = render(
          <ValuePropositionTable {...defaultProps} illustrationSrc="" />,
        );

        expect(container.querySelectorAll("img")).toHaveLength(1);
      });
    });
  });

  describe("given a custom heading", () => {
    describe("when the component renders", () => {
      it("displays the custom heading text on separate lines", () => {
        const customHeading = "Custom primary line\ncustom secondary line.";
        render(
          <ValuePropositionTable {...defaultProps} heading={customHeading} />,
        );

        const heading = screen.getByRole("heading", { level: 2 });

        expect(heading).toHaveTextContent("Custom primary line");
        expect(heading).toHaveTextContent("custom secondary line.");
        expect(screen.queryByText(",")).not.toBeInTheDocument();
      });
    });
  });

  describe("given an empty rows array", () => {
    describe("when the component renders", () => {
      it("renders the header row but no data rows", () => {
        render(<ValuePropositionTable {...defaultProps} rows={[]} />);

        expect(
          screen.getByText(VALUE_PROPOSITION_COLUMN_HEADER),
        ).toBeInTheDocument();
        expect(
          screen.getByAltText(VALUE_PROPOSITION_LOGO_ALT),
        ).toBeInTheDocument();
      });
    });
  });
});
