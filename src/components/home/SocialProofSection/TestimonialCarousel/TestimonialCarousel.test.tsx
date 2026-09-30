import {
  act,
  render,
  screen,
  within,
} from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import {
  TESTIMONIAL_CAROUSEL_DEFAULT_PROPS,
  TESTIMONIAL_CAROUSEL_DOTS_TEST_ID,
  TESTIMONIAL_CAROUSEL_REGION_LABEL,
  TESTIMONIAL_CAROUSEL_SINGLE_PROPS,
} from "./TestimonialCarousel.constants";
import { TestimonialCarousel } from "./TestimonialCarousel";

beforeEach(() => {
  vi.useFakeTimers();
});

afterEach(() => {
  vi.useRealTimers();
});

const getCarouselRegion = () =>
  screen.getByRole("region", { name: TESTIMONIAL_CAROUSEL_REGION_LABEL });

const getDots = () => {
  const dotsContainer = screen.getByTestId(TESTIMONIAL_CAROUSEL_DOTS_TEST_ID);

  return Array.from(dotsContainer.children) as HTMLElement[];
};

const getCarouselContainer = () => {
  const region = getCarouselRegion();
  return region.querySelector(".flex") as HTMLDivElement;
};

const finishSlideTransition = (container: HTMLDivElement) => {
  act(() => {
    container.dispatchEvent(new Event("transitionend", { bubbles: true }));
  });
};

describe("<TestimonialCarousel />", () => {
  it("should not show pagination or auto-play for a single testimonial", () => {
    render(<TestimonialCarousel {...TESTIMONIAL_CAROUSEL_SINGLE_PROPS} />);

    expect(
      screen.queryByTestId(TESTIMONIAL_CAROUSEL_DOTS_TEST_ID),
    ).toBeNull();
    expect(vi.getTimerCount()).toBe(0);
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
    render(
      <TestimonialCarousel
        {...TESTIMONIAL_CAROUSEL_DEFAULT_PROPS}
        autoPlayIntervalMs={1000}
      />,
    );

    const container = getCarouselContainer();

    expect(container.style.transform).toBe("translateX(-0%)");

    act(() => {
      vi.advanceTimersByTime(1000);
    });

    expect(container.style.transform).toBe("translateX(-100%)");
  });

  it("should sync the active dot with the visible slide", () => {
    render(
      <TestimonialCarousel
        {...TESTIMONIAL_CAROUSEL_DEFAULT_PROPS}
        autoPlayIntervalMs={1000}
      />,
    );

    expect(getDots()[0].classList.contains("bg-gi-navy")).toBe(true);

    act(() => {
      vi.advanceTimersByTime(1000);
    });

    expect(getDots()[1].classList.contains("bg-gi-navy")).toBe(true);
  });

  it("should loop forward via the clone slide and reset only when it is fully visible", () => {
    render(
      <TestimonialCarousel
        {...TESTIMONIAL_CAROUSEL_DEFAULT_PROPS}
        autoPlayIntervalMs={1000}
      />,
    );

    const container = getCarouselContainer();
    const totalTestimonials = TESTIMONIAL_CAROUSEL_DEFAULT_PROPS.testimonials.length;

    act(() => {
      vi.advanceTimersByTime(1000);
    });
    expect(container.style.transform).toBe("translateX(-100%)");
    finishSlideTransition(container);

    act(() => {
      vi.advanceTimersByTime(1000);
    });
    expect(container.style.transform).toBe("translateX(-200%)");
    finishSlideTransition(container);

    act(() => {
      vi.advanceTimersByTime(1000);
    });
    expect(container.style.transform).toBe(
      `translateX(-${totalTestimonials * 100}%)`,
    );

    finishSlideTransition(container);

    expect(container.style.transform).toBe("translateX(-0%)");
    expect(getDots()[0].classList.contains("bg-gi-navy")).toBe(true);
  });
});
