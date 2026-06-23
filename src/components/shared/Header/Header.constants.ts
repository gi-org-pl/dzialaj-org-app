const HEADER_ROUTES = {
  HOME: "/",
  CONTACT: "/contact",
  PANEL_ORGANIZATION: "/panel-organization",
} as const;

export const HEADER_HOME_PATH = HEADER_ROUTES.HOME;

export const HEADER_NAV_ITEMS = [
  {
    label: "Kontakt",
    href: HEADER_ROUTES.CONTACT,
  },
  {
    label: "Panel organizacji",
    href: HEADER_ROUTES.PANEL_ORGANIZATION,
  },
] as const;

export const HEADER_LABELS = {
  ctaButton: "Możliwości",
} as const;
