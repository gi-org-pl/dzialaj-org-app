export interface CategoryItem {
  id: string;
  label: string;
  subtitle: string;
  icon: React.ReactNode;
}

export interface CategoryFiltersProps {
  title: React.ReactNode;
  categories: CategoryItem[];
  selectedId: string | null;
  onChange: (id: string) => void;
}
