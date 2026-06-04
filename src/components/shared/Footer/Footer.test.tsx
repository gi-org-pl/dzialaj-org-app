import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { describe, expect, it, vi } from "vitest";
import { Footer } from "./Footer";
import { LEGAL_INFO, ORGANIZATION_PANEL_LINK } from "./Footer.constants";

vi.mock("../Logo/Logo", () => ({
  Logo: () => <div data-testid="logo" />,
}));

const DEFAULT_LINKS = [
  { label: "Regulamin", href: "/regulamin" },
  { label: "Polityka prywatności", href: "/polityka-prywatnosci" },
];

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <MemoryRouter>{children}</MemoryRouter>
);

describe("<Footer />", () => {
  describe("when rendered with required props", () => {
    it("should render the footer element", () => {
      render(<Footer links={DEFAULT_LINKS} />, { wrapper });
      expect(screen.getByRole("contentinfo")).toBeInTheDocument();
    });

    it("should render the logo", () => {
      render(<Footer links={DEFAULT_LINKS} />, { wrapper });
      expect(screen.getByTestId("logo")).toBeInTheDocument();
    });
  });

  describe("when rendering navigation links", () => {
    it("should render all provided links", () => {
      render(<Footer links={DEFAULT_LINKS} />, { wrapper });
      expect(
        screen.getByRole("link", { name: "Regulamin" }),
      ).toBeInTheDocument();
      expect(
        screen.getByRole("link", { name: "Polityka prywatności" }),
      ).toBeInTheDocument();
    });

    it("should render links with correct href attributes", () => {
      render(<Footer links={DEFAULT_LINKS} />, { wrapper });
      expect(screen.getByRole("link", { name: "Regulamin" })).toHaveAttribute(
        "href",
        "/regulamin",
      );
      expect(
        screen.getByRole("link", { name: "Polityka prywatności" }),
      ).toHaveAttribute("href", "/polityka-prywatnosci");
    });

    it("should render the footer nav with accessible label", () => {
      render(<Footer links={DEFAULT_LINKS} />, { wrapper });
      expect(
        screen.getByRole("navigation", { name: "Nawigacja stopki" }),
      ).toBeInTheDocument();
    });

    it("should render an empty link list when no links are provided", () => {
      render(<Footer links={[]} />, { wrapper });
      const nav = screen.getByRole("navigation", { name: "Nawigacja stopki" });
      expect(nav.querySelectorAll("a")).toHaveLength(0);
    });
  });

  describe("when showOrganizationPanel is not set", () => {
    it("should not render the Panel organizacji link by default", () => {
      render(<Footer links={DEFAULT_LINKS} />, { wrapper });
      expect(
        screen.queryByRole("link", { name: ORGANIZATION_PANEL_LINK.label }),
      ).not.toBeInTheDocument();
    });

    it("should not render the Panel organizacji link when explicitly set to false", () => {
      render(<Footer links={DEFAULT_LINKS} showOrganizationPanel={false} />, {
        wrapper,
      });
      expect(
        screen.queryByRole("link", { name: ORGANIZATION_PANEL_LINK.label }),
      ).not.toBeInTheDocument();
    });
  });

  describe("when showOrganizationPanel is true", () => {
    it("should render the Panel organizacji link", () => {
      render(<Footer links={DEFAULT_LINKS} showOrganizationPanel />, {
        wrapper,
      });
      expect(
        screen.getByRole("link", { name: ORGANIZATION_PANEL_LINK.label }),
      ).toBeInTheDocument();
    });

    it("should render the Panel organizacji link with correct href", () => {
      render(<Footer links={DEFAULT_LINKS} showOrganizationPanel />, {
        wrapper,
      });
      expect(
        screen.getByRole("link", { name: ORGANIZATION_PANEL_LINK.label }),
      ).toHaveAttribute("href", ORGANIZATION_PANEL_LINK.href);
    });
  });

  describe("when rendering legal information", () => {
    it("should render the copyright notice", () => {
      render(<Footer links={DEFAULT_LINKS} />, { wrapper });
      expect(screen.getByText(LEGAL_INFO.copyright)).toBeInTheDocument();
    });

    it("should render the address", () => {
      render(<Footer links={DEFAULT_LINKS} />, { wrapper });
      expect(screen.getByText(LEGAL_INFO.address)).toBeInTheDocument();
    });

    it("should render the KRS and NIP registration info", () => {
      render(<Footer links={DEFAULT_LINKS} />, { wrapper });
      expect(screen.getByText(LEGAL_INFO.registration)).toBeInTheDocument();
    });

    it("should render the gi.org.pl link", () => {
      render(<Footer links={DEFAULT_LINKS} />, { wrapper });
      expect(
        screen.getByRole("link", { name: LEGAL_INFO.websiteLabel }),
      ).toBeInTheDocument();
    });

    it("should render the gi.org.pl link with correct href", () => {
      render(<Footer links={DEFAULT_LINKS} />, { wrapper });
      expect(
        screen.getByRole("link", { name: LEGAL_INFO.websiteLabel }),
      ).toHaveAttribute("href", LEGAL_INFO.websiteHref);
    });

    it("should render the gi.org.pl link opening in a new tab", () => {
      render(<Footer links={DEFAULT_LINKS} />, { wrapper });
      const link = screen.getByRole("link", { name: LEGAL_INFO.websiteLabel });
      expect(link).toHaveAttribute("target", "_blank");
      expect(link).toHaveAttribute("rel", "noopener noreferrer");
    });
  });
});
