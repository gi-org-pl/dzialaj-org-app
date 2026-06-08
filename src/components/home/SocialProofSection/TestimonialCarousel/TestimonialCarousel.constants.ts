import testimonialAvatar1 from "@/assets/images/testimonial_avatar_1.png";

import type {
  Testimonial,
  TestimonialCarouselProps,
} from "./TestimonialCarousel.types";

export const TESTIMONIAL_CAROUSEL_REGION_LABEL = "Opinie wolontariuszy";
export const TESTIMONIAL_CAROUSEL_PAGINATION_WRAPPER_CLASS_NAME = "pt-4";
export const TESTIMONIAL_CAROUSEL_DOTS_TEST_ID = "testimonial-carousel-dots";
export const TESTIMONIAL_CAROUSEL_AUTO_PLAY_INTERVAL_MS = 6000;

export const TESTIMONIAL_CAROUSEL_QUOTE_1 =
  "[u]Dzięki wolontariatowi[/u] poznałem wielu przyjaciół i zdobyłem doświadczenie, o którym zawsze marzyłem!";
export const TESTIMONIAL_CAROUSEL_AUTHOR_NAME = "Rafał,";
export const TESTIMONIAL_CAROUSEL_AUTHOR_ORGANISATION = "Stowarzyszenie Demagog";
export const TESTIMONIAL_CAROUSEL_AVATAR_ALT =
  "Rafał, wolontariusz Stowarzyszenia Demagog";

export const TESTIMONIAL_CAROUSEL_QUOTE_2 =
  "[u]Wolontariat dał mi[/u] szansę na rozwój i realny wpływ na społeczność wokół mnie.";
export const TESTIMONIAL_CAROUSEL_AUTHOR_NAME_2 = "Anna,";
export const TESTIMONIAL_CAROUSEL_AUTHOR_ORGANISATION_2 =
  "Fundacja Rozwoju Lokalnego";
export const TESTIMONIAL_CAROUSEL_AVATAR_ALT_2 =
  "Anna, wolontariuszka Fundacji Rozwoju Lokalnego";

export const TESTIMONIAL_CAROUSEL_QUOTE_3 =
  "[u]Dzięki platformie[/u] znalazłem organizację, która idealnie pasuje do moich pasji.";
export const TESTIMONIAL_CAROUSEL_AUTHOR_NAME_3 = "Michał,";
export const TESTIMONIAL_CAROUSEL_AUTHOR_ORGANISATION_3 = "Sieć Organizacji Obywatelskich";
export const TESTIMONIAL_CAROUSEL_AVATAR_ALT_3 =
  "Michał, wolontariusz Sieci Organizacji Obywatelskich";

export const TESTIMONIAL_CAROUSEL_QUOTE_MID_SENTENCE_UNDERLINE =
  "Poznałem [u]wielu[/u] przyjaciół i zdobyłem doświadczenie, o którym zawsze marzyłem!";

export const TESTIMONIAL_CAROUSEL_DEFAULT_TESTIMONIAL_1: Testimonial = {
  id: "testimonial-1",
  quote: TESTIMONIAL_CAROUSEL_QUOTE_1,
  authorName: TESTIMONIAL_CAROUSEL_AUTHOR_NAME,
  authorOrganisation: TESTIMONIAL_CAROUSEL_AUTHOR_ORGANISATION,
  avatarSrc: testimonialAvatar1,
  avatarAlt: TESTIMONIAL_CAROUSEL_AVATAR_ALT,
};

export const TESTIMONIAL_CAROUSEL_DEFAULT_TESTIMONIAL_2: Testimonial = {
  id: "testimonial-2",
  quote: TESTIMONIAL_CAROUSEL_QUOTE_2,
  authorName: TESTIMONIAL_CAROUSEL_AUTHOR_NAME_2,
  authorOrganisation: TESTIMONIAL_CAROUSEL_AUTHOR_ORGANISATION_2,
  avatarSrc: testimonialAvatar1,
  avatarAlt: TESTIMONIAL_CAROUSEL_AVATAR_ALT_2,
};

export const TESTIMONIAL_CAROUSEL_DEFAULT_TESTIMONIAL_3: Testimonial = {
  id: "testimonial-3",
  quote: TESTIMONIAL_CAROUSEL_QUOTE_3,
  authorName: TESTIMONIAL_CAROUSEL_AUTHOR_NAME_3,
  authorOrganisation: TESTIMONIAL_CAROUSEL_AUTHOR_ORGANISATION_3,
  avatarSrc: testimonialAvatar1,
  avatarAlt: TESTIMONIAL_CAROUSEL_AVATAR_ALT_3,
};

export const TESTIMONIAL_CAROUSEL_DEFAULT_PROPS: TestimonialCarouselProps = {
  testimonials: [
    TESTIMONIAL_CAROUSEL_DEFAULT_TESTIMONIAL_1,
    TESTIMONIAL_CAROUSEL_DEFAULT_TESTIMONIAL_2,
    TESTIMONIAL_CAROUSEL_DEFAULT_TESTIMONIAL_3,
  ],
};

export const TESTIMONIAL_CAROUSEL_SINGLE_PROPS: TestimonialCarouselProps = {
  testimonials: [TESTIMONIAL_CAROUSEL_DEFAULT_TESTIMONIAL_1],
};
