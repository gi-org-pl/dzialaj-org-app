import { Link } from "react-router";
import { Logo } from "../Logo/Logo";
import { LEGAL_INFO, ORGANIZATION_PANEL_LINK } from "./Footer.constants";
import type { FooterProps } from "./Footer.types";

export const Footer = ({
  links,
  showOrganizationPanel = false,
}: FooterProps) => {
  return (
    <footer className="bg-gi-light-gray rounded-tr-4xl rounded-tl-4xl p-6 sm:p-12">
      <div className="flex flex-col gap-8 md:flex-row md:justify-between md:items-center">
        <div className="flex flex-col gap-4 items-start">
          <Logo />

          <nav aria-label="Nawigacja stopki">
            <ul className="flex items-center gap-4 flex-wrap">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-base text-gi-navy underline font-bold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}

              {showOrganizationPanel && (
                <li className="md:hidden">
                  <Link
                    to={ORGANIZATION_PANEL_LINK.href}
                    className="text-base text-gi-navy underline font-bold"
                  >
                    {ORGANIZATION_PANEL_LINK.label}
                  </Link>
                </li>
              )}
            </ul>
          </nav>
        </div>

        <address className="flex flex-col items-start text-xs not-italic text-gi-navy leading-[120%]">
          <span className="font-bold">{LEGAL_INFO.copyright}</span>
          <span>{LEGAL_INFO.address}</span>
          <span>{LEGAL_INFO.registration}</span>
          <a
            href={LEGAL_INFO.websiteHref}
            className="underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {LEGAL_INFO.websiteLabel}
          </a>
        </address>
      </div>
    </footer>
  );
};

Footer.displayName = "Footer";
