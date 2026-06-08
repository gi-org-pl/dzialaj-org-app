import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

import {
  TESTIMONIAL_CAROUSEL_AUTO_PLAY_INTERVAL_MS,
  TESTIMONIAL_CAROUSEL_DOTS_TEST_ID,
  TESTIMONIAL_CAROUSEL_PAGINATION_WRAPPER_CLASS_NAME,
  TESTIMONIAL_CAROUSEL_REGION_LABEL,
} from "./TestimonialCarousel.constants";
import type {
  Testimonial,
  TestimonialCarouselProps,
} from "./TestimonialCarousel.types";
import { TestimonialCard } from "./TestimonialCard/TestimonialCard";

const CLONE_SLIDE_VISIBLE_THRESHOLD = 0.99;

type CarouselSlide = {
  testimonial: Testimonial;
  slideIndex: number;
  isClone: boolean;
};

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
    {Array.from({ length: totalSlides }, (_, index) => {
      const isActive = index === activeIndex;

      return (
        <span
          key={`testimonial-dot-${index}`}
          className={twMerge(
            "size-[8px] rounded-full transition-colors",
            isActive ? "bg-gi-navy" : "bg-gi-light-gray-dark",
          )}
        />
      );
    })}
  </div>
);

const disableScrollSnap = (container: HTMLDivElement) => {
  container.style.scrollSnapType = "none";
};

const enableScrollSnap = (container: HTMLDivElement) => {
  container.style.removeProperty("scroll-snap-type");
};

const resetToFirstSlide = (
  container: HTMLDivElement,
  setActiveIndex: (index: number) => void,
  isResettingRef: { current: boolean },
) => {
  isResettingRef.current = true;
  disableScrollSnap(container);
  container.scrollLeft = 0;
  setActiveIndex(0);

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      enableScrollSnap(container);
      isResettingRef.current = false;
    });
  });
};

const scrollContainerTo = (
  container: HTMLDivElement,
  left: number,
  behavior: ScrollBehavior,
) => {
  if (typeof container.scrollTo === "function") {
    container.scrollTo({ left, behavior });
    return;
  }

  container.scrollLeft = left;
};

const scrollToSlide = (
  container: HTMLDivElement,
  slide: HTMLElement,
  behavior: ScrollBehavior,
) => {
  const targetLeft = slide.offsetLeft;

  if (targetLeft === 0) {
    disableScrollSnap(container);
    scrollContainerTo(container, 0, behavior);

    if (behavior === "smooth") {
      container.addEventListener(
        "scrollend",
        () => {
          enableScrollSnap(container);
        },
        { once: true },
      );
      return;
    }

    enableScrollSnap(container);
    return;
  }

  scrollContainerTo(container, targetLeft, behavior);
};

const buildCarouselSlides = (testimonials: Testimonial[]): CarouselSlide[] => {
  if (testimonials.length === 0) {
    return [];
  }

  const slides = testimonials.map((testimonial, index) => ({
    testimonial,
    slideIndex: index,
    isClone: false,
  }));

  if (testimonials.length === 1) {
    return slides;
  }

  return [
    ...slides,
    {
      testimonial: testimonials[0],
      slideIndex: testimonials.length,
      isClone: true,
    },
  ];
};

export const TestimonialCarousel = ({
  testimonials,
  autoPlayIntervalMs = TESTIMONIAL_CAROUSEL_AUTO_PLAY_INTERVAL_MS,
}: TestimonialCarouselProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isResettingRef = useRef(false);
  const activeIndexRef = useRef(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const hasPagination = testimonials.length > 1;
  const carouselSlides = useMemo(
    () => buildCarouselSlides(testimonials),
    [testimonials],
  );

  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  const goToSlide = useCallback(
    (index: number) => {
      const container = scrollContainerRef.current;

      if (container === null || !hasPagination) {
        return;
      }

      const normalizedIndex =
        ((index % testimonials.length) + testimonials.length) %
        testimonials.length;
      const currentIndex = activeIndexRef.current;
      const isLoopingForward =
        currentIndex === testimonials.length - 1 && normalizedIndex === 0;

      const domIndex = isLoopingForward
        ? testimonials.length
        : normalizedIndex;
      const slide = container.children.item(domIndex) as HTMLElement | null;

      if (slide !== null) {
        scrollToSlide(container, slide, "smooth");
      }

      if (!isLoopingForward) {
        setActiveIndex(normalizedIndex);
      }
    },
    [hasPagination, testimonials.length],
  );

  useEffect(() => {
    if (!hasPagination || autoPlayIntervalMs <= 0) {
      return;
    }

    const intervalId = window.setInterval(() => {
      const nextIndex =
        (activeIndexRef.current + 1) % testimonials.length;
      goToSlide(nextIndex);
    }, autoPlayIntervalMs);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [autoPlayIntervalMs, goToSlide, hasPagination, testimonials.length]);

  useEffect(() => {
    const container = scrollContainerRef.current;

    if (container === null || testimonials.length <= 1) {
      return;
    }

    const slides = Array.from(
      container.querySelectorAll<HTMLElement>("[data-testimonial-slide]"),
    );

    const observer = new IntersectionObserver(
      (entries) => {
        if (isResettingRef.current) {
          return;
        }

        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (left, right) => right.intersectionRatio - left.intersectionRatio,
          )[0];

        if (visibleEntry === undefined) {
          return;
        }

        const nextIndex = Number(
          visibleEntry.target.getAttribute("data-slide-index"),
        );

        if (Number.isNaN(nextIndex)) {
          return;
        }

        if (nextIndex === testimonials.length) {
          if (visibleEntry.intersectionRatio < CLONE_SLIDE_VISIBLE_THRESHOLD) {
            return;
          }

          resetToFirstSlide(container, setActiveIndex, isResettingRef);
          return;
        }

        setActiveIndex(nextIndex);
      },
      {
        root: container,
        threshold: [0.5, CLONE_SLIDE_VISIBLE_THRESHOLD, 1],
      },
    );

    for (const slide of slides) {
      observer.observe(slide);
    }

    return () => {
      observer.disconnect();
    };
  }, [testimonials]);

  return (
    <section
      aria-roledescription="carousel"
      aria-label={TESTIMONIAL_CAROUSEL_REGION_LABEL}
      className="w-full"
    >
      <div
        ref={scrollContainerRef}
        className="flex w-full snap-x snap-mandatory gap-4 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {carouselSlides.map(({ testimonial, slideIndex, isClone }) => (
          <div
            key={isClone ? `${testimonial.id}-clone` : testimonial.id}
            data-testimonial-slide=""
            data-slide-index={slideIndex}
            aria-hidden={isClone ? true : undefined}
            className="box-border flex flex-[0_0_100%] shrink-0 snap-start"
          >
            <TestimonialCard testimonial={testimonial} className="h-full" />
          </div>
        ))}
      </div>

      {hasPagination ? (
        <div className={TESTIMONIAL_CAROUSEL_PAGINATION_WRAPPER_CLASS_NAME}>
          <TestimonialCarouselDots
            totalSlides={testimonials.length}
            activeIndex={activeIndex}
          />
        </div>
      ) : null}
    </section>
  );
};