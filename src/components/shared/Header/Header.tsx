import { Button } from "@gi/athena";
import { Link } from "react-router";
import { twMerge } from "tailwind-merge";
import SearchIcon from "@/assets/images/search-icon.png";
import LogoIcon from "@/assets/vectors/logo-dzialaj.svg";
import {
  HEADER_HOME_PATH,
  HEADER_LABELS,
  HEADER_NAV_ITEMS,
} from "./Header.constants";
import type { HeaderProps } from "./Header.types";

const Header = ({ navLinks = HEADER_NAV_ITEMS, className }: HeaderProps) => {
  return (
    <header className={twMerge("w-full ", className)}>
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-8 px-8 py-6 2xl:px-0">
        <Link
          to={HEADER_HOME_PATH}
          className="inline-flex items-center text-gi-light-gray transition-opacity duration-300 hover:opacity-80 focus:outline-none"
        >
          <img
            src={LogoIcon}
            alt="Generacja Innowacja"
            className="h-6 w-auto"
          />
        </Link>

        <nav
          aria-label="Nawigacja główna"
          className="hidden md:ml-auto md:flex md:items-center md:gap-6"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="text-gi-navy font-extrabold text-base transition-colors duration-200 hover:text-gi-navy-hover focus:outline-none"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center">
          <Button
            variant="primary"
            className="bg-gi-blue hover:bg-gi-blue-hover font-extrabold text-base leading-[1.2]"
          >
            <img
              src={SearchIcon}
              alt=""
              className="h-4 w-4 "
              aria-hidden="true"
            />
            {HEADER_LABELS.ctaButton}
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
