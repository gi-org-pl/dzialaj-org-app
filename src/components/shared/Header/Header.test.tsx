import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import Header from "./Header";
import { HEADER_NAV_ITEMS } from "./Header.constants";
import type { HeaderProps } from "./Header.types";

describe("<Header />", () => {
  const renderHeader = (
    navLinks: HeaderProps["navLinks"] = HEADER_NAV_ITEMS,
  ) => {
    return render(
      <MemoryRouter>
        <Header navLinks={navLinks} />
      </MemoryRouter>,
    );
  };

  describe("given the header is rendered on the page", () => {
    describe("when checking the logo section", () => {
      it("should render the logo linking to home path", () => {
        renderHeader();

        const logoLink = screen.getByRole("link", {
          name: /generacja innowacja/i,
        });

        expect(logoLink).toBeInTheDocument();
        expect(logoLink).toHaveAttribute("href", "/");
      });
    });

    describe("when navigation links are provided", () => {
      it("should render all navigation items dynamically", () => {
        renderHeader();

        const desktopNav = screen.getByRole("navigation", {
          name: /nawigacja główna/i,
        });
        expect(desktopNav).toBeInTheDocument();

        for (const item of HEADER_NAV_ITEMS) {
          const link = screen.getByRole("link", { name: item.label });
          expect(link).toBeInTheDocument();
          expect(link).toHaveAttribute("href", item.href);
        }
      });

      it("should have proper responsive classes applied to the navigation container", () => {
        renderHeader();

        const desktopNav = screen.getByRole("navigation", {
          name: /nawigacja główna/i,
        });

        expect(desktopNav).toHaveClass("hidden", "md:flex");
      });
    });

    describe("when the navigation links array is empty", () => {
      it("should render an empty navigation block without throwing errors", () => {
        renderHeader([]);

        const desktopNav = screen.getByRole("navigation", {
          name: /nawigacja główna/i,
        });
        expect(desktopNav).toBeInTheDocument();

        const links = desktopNav.querySelectorAll("a");
        expect(links.length).toBe(0);
      });
    });
  });
});
