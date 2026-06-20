export type Testimonial = {
  id: string;
  quote: string;
  authorName: string;
  authorOrganisation: string;
  avatarSrc: string;
  avatarAlt: string;
};

export type TestimonialCarouselProps = {
  testimonials: Testimonial[];
  autoPlayIntervalMs?: number;
};

export type CarouselSlide = {
  testimonial: Testimonial;
  slideIndex: number;
  isClone: boolean;
};
