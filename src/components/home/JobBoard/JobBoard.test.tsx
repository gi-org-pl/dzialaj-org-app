import { act, fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { JobBoard } from "./JobBoard";
import {
  JOB_BOARD_EMPTY_STATE_MESSAGE,
  JOB_BOARD_JOB_LIST_TEST_ID,
  JOB_BOARD_LOAD_MORE_LABEL,
  JOB_BOARD_LOCATION_PLACEHOLDER,
  JOB_BOARD_LOCATION_SELECT_TEST_ID,
  JOB_BOARD_RESULTS_LABEL_SUFFIX,
  JOB_BOARD_SEARCH_PLACEHOLDER,
} from "./JobBoard.constants";
import type { Job, JobBoardProps, SelectOption } from "./JobBoard.types";

if (typeof window.PointerEvent === "undefined") {
  // @ts-expect-error
  window.PointerEvent = class PointerEvent extends MouseEvent {};
}

let resizeCallback: ResizeObserverCallback | undefined;

global.ResizeObserver = class {
  constructor(callback: ResizeObserverCallback) {
    resizeCallback = callback;
  }
  observe() {}
  unobserve() {}
  disconnect() {}
};

const triggerResize = (width: number) => {
  resizeCallback?.(
    [{ contentRect: { width } } as ResizeObserverEntry],
    {} as ResizeObserver,
  );
};

const locationOptions: SelectOption[] = [
  { value: "location-1", label: "Warszawa" },
  { value: "location-2", label: "Wrocław" },
];

const jobs: Job[] = [
  {
    id: "1",
    title: "Job 1",
    organisation: "Organisation 1",
    avatarAlt: "Organisation 1",
    badges: [{ id: "1-1", label: "Badge 1" }],
  },
  {
    id: "2",
    title: "Job 2",
    organisation: "Organisation 2",
    avatarAlt: "Organisation 2",
    badges: [{ id: "2-1", label: "Badge 2" }],
  },
];

const defaultProps: JobBoardProps = {
  jobs,
  totalCount: jobs.length,
  locationOptions,
  onLocationChange: () => {},
  onSearchChange: () => {},
  onLoadMore: () => {},
  hasMore: true,
};

describe("<JobBoard />", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe("gdy renderowany z domyślnymi propsami", () => {
    it("powinien wyświetlić łączną liczbę wyników i etykietę", () => {
      render(<JobBoard {...defaultProps} />);

      expect(
        screen.getByText(String(defaultProps.totalCount)),
      ).toBeInTheDocument();
      expect(
        screen.getByText(JOB_BOARD_RESULTS_LABEL_SUFFIX),
      ).toBeInTheDocument();
    });

    it("powinien wyrenderować element listy dla każdej oferty", () => {
      render(<JobBoard {...defaultProps} />);

      const list = screen.getByTestId(JOB_BOARD_JOB_LIST_TEST_ID);

      expect(list.children).toHaveLength(jobs.length);
      for (const job of jobs) {
        expect(screen.getByText(job.title)).toBeInTheDocument();
        expect(screen.getByText(job.organisation)).toBeInTheDocument();
      }
    });

    it("powinien wyświetlić placeholder filtra lokalizacji", () => {
      render(<JobBoard {...defaultProps} />);

      expect(
        screen.getByText(JOB_BOARD_LOCATION_PLACEHOLDER),
      ).toBeInTheDocument();
    });

    it("powinien wyświetlić placeholder pola wyszukiwania", () => {
      render(<JobBoard {...defaultProps} />);

      expect(
        screen.getByPlaceholderText(JOB_BOARD_SEARCH_PLACEHOLDER),
      ).toBeInTheDocument();
    });

    it("powinien wyświetlić przycisk „Więcej możliwości”, gdy hasMore ma wartość true", () => {
      render(<JobBoard {...defaultProps} hasMore />);

      expect(
        screen.getByRole("button", { name: JOB_BOARD_LOAD_MORE_LABEL }),
      ).toBeInTheDocument();
    });
  });

  describe("gdy hasMore ma wartość false", () => {
    it("powinien ukryć przycisk „Więcej możliwości”", () => {
      render(<JobBoard {...defaultProps} hasMore={false} />);

      expect(
        screen.queryByRole("button", { name: JOB_BOARD_LOAD_MORE_LABEL }),
      ).not.toBeInTheDocument();
    });
  });

  describe("gdy lista ofert jest pusta", () => {
    it("powinien wyświetlić komunikat o braku ofert zamiast elementów listy", () => {
      render(<JobBoard {...defaultProps} jobs={[]} />);

      const list = screen.getByTestId(JOB_BOARD_JOB_LIST_TEST_ID);

      expect(list.children).toHaveLength(1);
      expect(
        screen.getByText(JOB_BOARD_EMPTY_STATE_MESSAGE),
      ).toBeInTheDocument();
    });
  });

  describe("gdy przycisk „Więcej możliwości” zostanie kliknięty", () => {
    it("powinien wywołać onLoadMore", () => {
      const onLoadMore = vi.fn();

      render(<JobBoard {...defaultProps} onLoadMore={onLoadMore} />);

      fireEvent.click(
        screen.getByRole("button", { name: JOB_BOARD_LOAD_MORE_LABEL }),
      );

      expect(onLoadMore).toHaveBeenCalledTimes(1);
    });
  });

  describe("podczas wpisywania w pole wyszukiwania", () => {
    it("powinien wywołać onSearchChange z wpisaną wartością", () => {
      const onSearchChange = vi.fn();

      render(<JobBoard {...defaultProps} onSearchChange={onSearchChange} />);

      fireEvent.change(
        screen.getByPlaceholderText(JOB_BOARD_SEARCH_PLACEHOLDER),
        { target: { value: "developer" } },
      );

      expect(onSearchChange).toHaveBeenCalledWith("developer");
    });
  });

  describe("podczas wybierania lokalizacji z listy rozwijanej", () => {
    it("powinien wywołać onLocationChange z wybraną wartością i wyświetlić jej etykietę", async () => {
      const onLocationChange = vi.fn();

      render(
        <JobBoard {...defaultProps} onLocationChange={onLocationChange} />,
      );

      const trigger = screen.getByTestId(JOB_BOARD_LOCATION_SELECT_TEST_ID);
      await act(async () => {
        fireEvent.pointerDown(trigger, { button: 0 });
        fireEvent.pointerUp(trigger);
        fireEvent.click(trigger);
      });

      const [firstOption] = locationOptions;
      fireEvent.click(
        await screen.findByRole("menuitem", { name: firstOption.label }),
      );

      expect(onLocationChange).toHaveBeenCalledWith(firstOption.value);
      expect(trigger).toHaveTextContent(firstOption.label);
    });
  });

  describe("gdy kontener paska narzędzi jest węższy niż punkt przełamania", () => {
    it("powinien rozciągnąć kontener pola wyszukiwania na pełną szerokość", () => {
      render(<JobBoard {...defaultProps} />);

      act(() => {
        triggerResize(320);
      });

      const searchInputEl = screen.getByPlaceholderText(
        JOB_BOARD_SEARCH_PLACEHOLDER,
      );
      const searchWrapper = searchInputEl.closest("[style]");

      expect(searchWrapper).toHaveStyle({ width: "100%" });
    });
  });
});
