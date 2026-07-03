import DzialajOrgLogo from "@/assets/icons/logo.svg";
import { PATHS } from "@/constants/common";
import { Link } from "react-router";

export const Logo = () => {
  return (
    <Link to={PATHS.HOME}>
      <DzialajOrgLogo height={24} className="w-auto" aria-hidden="true" />    </Link>
  );
};
