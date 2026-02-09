export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Vite + HeroUI",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "about",
      href: "/",
    },
    {
      label: "experience",
      href: "/experience",
    },
    {
      label: "projects",
      href: "/projects",
    },
    {
      label: "more",
      href: "/more",
    },
  ],
  navMenuItems: [
    {
      label: "about",
      href: "/",
    },
    {
      label: "experience",
      href: "/experience",
    },
    {
      label: "projects",
      href: "/projects",
    },
    {
      label: "more",
      href: "/more",
    },
  ],
  links: {
    github: "https://github.com/heroui-inc/heroui",
    twitter: "https://twitter.com/hero_ui",
    docs: "https://heroui.com",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
