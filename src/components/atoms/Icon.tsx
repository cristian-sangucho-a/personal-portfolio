import {
  FaPython,
  FaAws,
  FaJava,
  FaDocker,
  FaReact,
  FaDatabase,
  FaCheck,
  FaFigma,
} from "react-icons/fa";
import { SiAstro, SiDjango, SiGooglecloud, SiFastapi } from "react-icons/si";

import type { IconType } from "react-icons";

const icons: Record<string, IconType> = {
  python: FaPython,
  awscloud: FaAws,
  javaee: FaJava,
  docker: FaDocker,
  react: FaReact,
  database: FaDatabase,
  check: FaCheck,
  figma: FaFigma,
  astro: SiAstro,
  django: SiDjango,
  gcp: SiGooglecloud,
  fastapi: SiFastapi,
};

const sizeClasses = {
  sm: "w-4 h-4 lg:w-6 lg:h-6",
  md: "w-5 h-5 lg:w-8 lg:h-8",
  lg: "w-6 h-6 lg:w-10 lg:h-10",
};

const colorClasses = {
  primary: "text-primary hover:text-tertiary",
  secondary: "text-secondary hover:text-primary",
  tertiary: "text-tertiary hover:text-secondary",
  white: "text-white",
  black: "text-black",
};

interface IconProps {
  icon: string;
  size?: keyof typeof sizeClasses;
  color?: keyof typeof colorClasses;
  className?: string;
}

export default function Icon({
  icon,
  size = "md",
  color = "primary",
  className = "",
}: IconProps) {
  const iconName = icon.toLowerCase().replace(/\s+/g, "");
  const IconComponent = icons[iconName] || FaCheck;

  return (
    <IconComponent
      className={`transition-transform hover:scale-125 ${sizeClasses[size]} ${colorClasses[color]} ${className} `}
    />
  );
}
