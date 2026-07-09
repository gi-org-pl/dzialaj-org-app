import { useCallback, useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

import {
  TESTIMONIAL_CAROUSEL_AUTO_PLAY_INTERVAL_MS,
  TESTIMONIAL_CAROUSEL_DOTS_TEST_ID,
  TESTIMONIAL_CAROUSEL_REGION_LABEL,
} from "./TestimonialCarousel.constants";
import type { TestimonialCarouselProps } from "./TestimonialCarousel.types";
import { TestimonialCard } from "./TestimonialCard/TestimonialCard";

type TestimonialCarouselDotsProps = {
  totalSlides: number;
  activeIndex: number;
};

const TestimonialCarouselDots = ({
  totalSlides,
  activeIndex,
}: TestimonialCarouselDotsProps) => (
  <div
    className="flex items-center justify-center gap-2"
    aria-hidden="true"
    data-testid={TESTIMONIAL_CAROUSEL_DOTS_TEST_ID}
  >
    {Array.from({ length: totalSlides }, (_, index) => (
      <span
        key={`testimonial-dot-${index}`}
        className={twMerge(
          "size-2 rounded-full transition-colors",
          index === activeIndex ? "bg-gi-navy" : "bg-gi-light-gray-dark",
        )}
      />
    ))}
  </div>
);

export const TestimonialCarousel = ({
  testimonials,
  autoPlayIntervalMs = TESTIMONIAL_CAROUSEL_AUTO_PLAY_INTERVAL_MS,
}: TestimonialCarouselProps) => {
  const hasPagination = testimonials.length > 1;
  const slides = hasPagination ? [...testimonials, testimonials[0]] : testimonials;

  const [position, setPosition] = useState(0);
  const [withTransition, setWithTransition] = useState(true);

  const goToNext = useCallback(() => {
    setWithTransition(true);
    setPosition((current) => current + 1);
  }, []);

  useEffect(() => {
    if (!hasPagination || autoPlayIntervalMs <= 0) {
      return;
    }

    const intervalId = window.setInterval(goToNext, autoPlayIntervalMs);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [autoPlayIntervalMs, goToNext, hasPagination]);

  const handleTransitionEnd = () => {
    if (position === testimonials.length) {
      setWithTransition(false);
      setPosition(0);
    }
  };

  return (
    <section
      aria-roledescription="carousel"
      aria-label={TESTIMONIAL_CAROUSEL_REGION_LABEL}
      className="w-full overflow-hidden"
    >
      <div
        className={twMerge(
          "flex",
          withTransition && "transition-transform duration-500 ease-out",
        )}
        style={{ transform: `translateX(-${position * 100}%)` }}
        onTransitionEnd={handleTransitionEnd}
      >
        {slides.map((testimonial, index) => {
          const isClone = index === testimonials.length;

          return (
            <div
              key={isClone ? `${testimonial.id}-clone` : testimonial.id}
              aria-hidden={isClone ? true : undefined}
              className="w-full shrink-0"
            >
              <TestimonialCard testimonial={testimonial} className="h-full" />
            </div>
          );
        })}
      </div>

      {hasPagination ? (
        <div className="pt-4">
          <TestimonialCarouselDots
            totalSlides={testimonials.length}
            activeIndex={position % testimonials.length}
          />
        </div>
      ) : null}
    </section>
  );
};
