export interface CategoryCardProps {
  label: string;
  subtitle: string;
  icon: React.ReactNode;
  isSelected: boolean;
  onClick: () => void;
}
