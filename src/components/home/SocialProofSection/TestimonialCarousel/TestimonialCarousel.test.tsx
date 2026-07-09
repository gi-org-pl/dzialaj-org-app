import {
  act,
  render,
  screen,
  waitFor,
  within,
} from "@testing-library/react";
import { afterAll, beforeAll, describe, expect, it, vi } from "vitest";

import {
  TESTIMONIAL_CAROUSEL_DEFAULT_PROPS,
  TESTIMONIAL_CAROUSEL_DOTS_TEST_ID,
  TESTIMONIAL_CAROUSEL_REGION_LABEL,
  TESTIMONIAL_CAROUSEL_SINGLE_PROPS,
} from "./TestimonialCarousel.constants";
import { TestimonialCarousel } from "./TestimonialCarousel";

class MockIntersectionObserver implements IntersectionObserver {
  readonly root: Element | Document | null = null;
  readonly rootMargin = "";
  readonly thresholds: readonly number[] = [];

  constructor(private readonly callback: IntersectionObserverCallback) {}

  observe = vi.fn();
  unobserve = vi.fn();
  disconnect = vi.fn();
  takeRecords = vi.fn(() => []);

  trigger(entries: Partial<IntersectionObserverEntry>[]) {
    this.callback(
      entries.map(
        (entry) =>
          ({
            isIntersecting: false,
            intersectionRatio: 0,
            ...entry,
          }) as IntersectionObserverEntry,
      ),
      this,
    );
  }
}

const intersectionObserverStub = vi.fn(function IntersectionObserverStub(
  this: MockIntersectionObserver,
  callback: IntersectionObserverCallback,
) {
  return new MockIntersectionObserver(callback);
});

beforeAll(() => {
  vi.stubGlobal("IntersectionObserver", intersectionObserverStub);
});

afterAll(() => {
  vi.unstubAllGlobals();
});

const getCarouselRegion = () =>
  screen.getByRole("region", { name: TESTIMONIAL_CAROUSEL_REGION_LABEL });

const getDots = () => {
  const dotsContainer = screen.getByTestId(TESTIMONIAL_CAROUSEL_DOTS_TEST_ID);

  return Array.from(dotsContainer.children) as HTMLElement[];
};

const getIntersectionObserverInstance = () => {
  const lastCall = intersectionObserverStub.mock.results.at(-1);

  return lastCall?.value as MockIntersectionObserver;
};

describe("<TestimonialCarousel />", () => {
  it("should not show pagination or auto-play for a single testimonial", () => {
    vi.useFakeTimers();

    render(<TestimonialCarousel {...TESTIMONIAL_CAROUSEL_SINGLE_PROPS} />);

    expect(
      screen.queryByTestId(TESTIMONIAL_CAROUSEL_DOTS_TEST_ID),
    ).toBeNull();
    expect(vi.getTimerCount()).toBe(0);

    vi.useRealTimers();
  });

  it("should render decorative, non-interactive dot indicators", () => {
    render(<TestimonialCarousel {...TESTIMONIAL_CAROUSEL_DEFAULT_PROPS} />);

    const dotsContainer = screen.getByTestId(TESTIMONIAL_CAROUSEL_DOTS_TEST_ID);

    expect(getDots()).toHaveLength(
      TESTIMONIAL_CAROUSEL_DEFAULT_PROPS.testimonials.length,
    );
    expect(dotsContainer.getAttribute("aria-hidden")).toBe("true");
    expect(within(dotsContainer).queryByRole("button")).toBeNull();
    expect(getDots()[0].classList.contains("bg-gi-navy")).toBe(true);
  });

  it("should auto-advance slides on the configured interval", () => {
    vi.useFakeTimers();

    const scrollTo = vi.fn();

    render(
      <TestimonialCarousel
        {...TESTIMONIAL_CAROUSEL_DEFAULT_PROPS}
        autoPlayIntervalMs={3000}
      />,
    );

    const track = getCarouselRegion().querySelector(".snap-x.snap-mandatory");

    if (track === null) {
      throw new Error("Carousel track was not found");
    }

    Object.defineProperty(track, "scrollTo", {
      configurable: true,
      value: scrollTo,
    });

    const secondSlide = getCarouselRegion()
      .querySelectorAll("[data-testimonial-slide]")
      .item(1) as HTMLElement;

    Object.defineProperty(secondSlide, "offsetLeft", {
      configurable: true,
      value: 416,
    });

    act(() => {
      vi.advanceTimersByTime(3000);
    });

    expect(scrollTo).toHaveBeenCalledWith({
      left: 416,
      behavior: "smooth",
    });

    vi.useRealTimers();
  });

  it("should sync the active dot with the visible slide", async () => {
    render(<TestimonialCarousel {...TESTIMONIAL_CAROUSEL_DEFAULT_PROPS} />);

    const secondSlide = getCarouselRegion()
      .querySelectorAll("[data-testimonial-slide]")
      .item(1);

    act(() => {
      getIntersectionObserverInstance().trigger([
        {
          isIntersecting: true,
          target: secondSlide,
          intersectionRatio: 1,
        },
      ]);
    });

    await waitFor(() => {
      expect(getDots()[1].classList.contains("bg-gi-navy")).toBe(true);
    });
  });

  it("should loop forward via the clone slide and reset only when it is fully visible", () => {
    vi.useFakeTimers();

    const scrollTo = vi.fn();

    render(
      <TestimonialCarousel
        {...TESTIMONIAL_CAROUSEL_DEFAULT_PROPS}
        autoPlayIntervalMs={1000}
      />,
    );

    const carouselRegion = getCarouselRegion();
    const track = carouselRegion.querySelector(
      ".snap-x.snap-mandatory",
    ) as HTMLDivElement;

    Object.defineProperty(track, "scrollTo", {
      configurable: true,
      value: scrollTo,
    });

    carouselRegion
      .querySelectorAll("[data-testimonial-slide]")
      .forEach((slide, index) => {
        Object.defineProperty(slide, "offsetLeft", {
          configurable: true,
          value: index * 416,
        });
      });

    act(() => {
      vi.advanceTimersByTime(1000);
    });
    act(() => {
      vi.advanceTimersByTime(1000);
    });
    act(() => {
      vi.advanceTimersByTime(1000);
    });

    expect(scrollTo).toHaveBeenLastCalledWith({
      left: 1248,
      behavior: "smooth",
    });

    const cloneSlide = carouselRegion
      .querySelectorAll("[data-testimonial-slide]")
      .item(TESTIMONIAL_CAROUSEL_DEFAULT_PROPS.testimonials.length);
    const observer = getIntersectionObserverInstance();

    track.scrollLeft = 500;

    act(() => {
      observer.trigger([
        {
          isIntersecting: true,
          target: cloneSlide,
          intersectionRatio: 0.6,
        },
      ]);
    });

    expect(track.scrollLeft).toBe(500);

    act(() => {
      observer.trigger([
        {
          isIntersecting: true,
          target: cloneSlide,
          intersectionRatio: 1,
        },
      ]);
    });

    expect(track.scrollLeft).toBe(0);
    expect(getDots()[0].classList.contains("bg-gi-navy")).toBe(true);

    vi.useRealTimers();
  });
});
