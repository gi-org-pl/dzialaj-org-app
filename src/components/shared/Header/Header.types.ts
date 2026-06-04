export interface NavigationItem {
  readonly label: string;
  readonly href: string;
}

export interface HeaderProps {
  navLinks?: readonly NavigationItem[];
  className?: string;
}
