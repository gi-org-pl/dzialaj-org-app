export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterProps {
  links: FooterLink[];
  showOrganizationPanel?: boolean;
}
