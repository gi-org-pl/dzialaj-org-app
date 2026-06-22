import CommunicationIcon from "@/assets/icons/communication.png";
import CreativeIcon from "@/assets/icons/creative.png";
import EducationIcon from "@/assets/icons/education.png";
import OrganisationIcon from "@/assets/icons/organisation.png";
import SocialIcon from "@/assets/icons/social.png";
import TechnicalIcon from "@/assets/icons/technical.png";
import type { CategoryFiltersProps } from "./CategoryFilters.types";

export const CATEGORY_FILTERS_DATA: CategoryFiltersProps = {
  title: (
    <>
      Jakich <span className="text-gi-blue">możliwości</span> szukasz?
    </>
  ),
  categories: [
    {
      id: "creative",
      label: "Kreatywnych",
      subtitle: "grafika, video, foto",
      icon: (
        <img
          src={CreativeIcon}
          alt=""
          aria-hidden="true"
          className="w-12 h-12"
        />
      ),
    },
    {
      id: "technical",
      label: "Technicznych",
      subtitle: "kod, IT, no-code",
      icon: (
        <img
          src={TechnicalIcon}
          alt=""
          aria-hidden="true"
          className="w-12 h-12"
        />
      ),
    },
    {
      id: "social",
      label: "Społecznych",
      subtitle: "aktywizm, rzecznictwo",
      icon: (
        <img src={SocialIcon} alt="" aria-hidden="true" className="w-12 h-12" />
      ),
    },
    {
      id: "organisational",
      label: "Organizacyjnych",
      subtitle: "eventy, koordynacja",
      icon: (
        <img
          src={OrganisationIcon}
          alt=""
          aria-hidden="true"
          className="w-12 h-12"
        />
      ),
    },
    {
      id: "communication",
      label: "Komunikacyjnych",
      subtitle: "social media, marketing",
      icon: (
        <img
          src={CommunicationIcon}
          alt=""
          aria-hidden="true"
          className="w-12 h-12"
        />
      ),
    },
    {
      id: "educational",
      label: "Edukacyjnych",
      subtitle: "warsztaty, mentoring",
      icon: (
        <img
          src={EducationIcon}
          alt=""
          aria-hidden="true"
          className="w-12 h-12"
        />
      ),
    },
  ],
  selectedId: null,
  onChange: () => {},
};
