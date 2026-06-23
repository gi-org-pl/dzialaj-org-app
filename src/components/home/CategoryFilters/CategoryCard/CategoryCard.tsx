import type { CategoryCardProps } from "./CategoryCard.types";

export const CategoryCard = ({
  label,
  subtitle,
  icon,
  isSelected,
  onClick,
}: CategoryCardProps) => {
  return (
    <div
      className={`relative p-4 rounded-2xl flex justify-between items-center border transition-[border, bg] duration-300 ${isSelected ? "border-gi-blue bg-gi-blue/10" : "border-gi-dark-ash bg-white cursor-pointer"}`}
      onClick={onClick}
    >
      <div className="relative z-10">
        <div className="font-extrabold text-[16px]">{label}</div>
        <div className="text-[12px]">{subtitle}</div>
      </div>
      <div
        className={`absolute right-4 transition-[filter, opacity] duration-300 opacity-10 ${!isSelected ? "grayscale md:opacity-25" : "md:opacity-100"}`}
      >
        {icon}
      </div>
    </div>
  );
};
