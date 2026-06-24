import { PATHS } from "@/constants/common";

export const LEGAL_INFO = {
  copyright: "© Fundacja Generacja Innowacja, 2026",
  address: "ul. Twarda 18, 00-105 Warszawa",
  registration: "KRS 0001041229, NIP 5214023308",
  websiteLabel: "gi.org.pl",
  websiteHref: "https://gi.org.pl",
} as const;

export const ORGANIZATION_PANEL_LINK = {
  label: "Panel organizacji",
  href: PATHS.ORGANIZATION_PANEL,
} as const;
