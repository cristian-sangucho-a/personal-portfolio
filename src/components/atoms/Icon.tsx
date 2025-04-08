import {
  FaPython,
  FaAws,
  FaJava,
  FaDocker,
  FaReact,
  FaDatabase,
  FaCheck,
  FaFigma,
  FaWhatsapp,
  FaDiscord,
  FaMailBulk,
  FaDownload,
} from "react-icons/fa";
import { SiAstro, SiDjango, SiGooglecloud, SiFastapi } from "react-icons/si";

import type { IconType } from "react-icons";

const icons: Record<string, IconType> = {
  download: FaDownload,
  mail: FaMailBulk,
  whatsapp: FaWhatsapp,
  discord: FaDiscord,
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
  sm: "w-4 h-4 lg:w-6 lg:h-6 xl:w-8 xl:h-8",
  md: "w-5 h-5 lg:w-8 lg:h-8 xl:w-10 xl:h-10",
  lg: "w-6 h-6 lg:w-10 lg:h-10 xl:w-12 xl:h-12",
};

const colorClasses = {
  primary: "text-primary",
  secondary: "text-secondary",
  tertiary: "text-tertiary",
  white: "text-white",
  black: "text-black",
  none: "",
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
      className={`${sizeClasses[size]} ${colorClasses[color]} ${className} `}
    />
  );
}
