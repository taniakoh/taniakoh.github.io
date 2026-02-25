import SachLogo from "@/assets/sachlogo.png";

export interface Project {
  title: string;
  description: string;
  logo: string;
  logoAlt: string;
  href?: string;
  image?: string;
}

export const projects: Project[] = [
  {
    title: "Duby — Workforce Management Application",
    description: "Full Stack Web Application for St Andrew's Community Hospital",
    logo: SachLogo,
    logoAlt: "St Andrew's Community Hospital",
    href: "#",
  },
];
