import { Link } from "@heroui/link";
import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarItem,
} from "@heroui/navbar";
import { link as linkStyles } from "@heroui/theme";
import clsx from "clsx";
import { Home, FolderKanban, Briefcase } from "lucide-react";

import { siteConfig } from "@/config/site";

const navIcons: Record<string, React.ReactNode> = {
  Home: <Home size={18} />,
  Projects: <FolderKanban size={18} />,
  Experience: <Briefcase size={18} />,
};

export const Navbar = () => {
  return (
    <HeroUINavbar
      classNames={{
        base: "justify-center",
        wrapper: "justify-center",
      }}
      maxWidth="full"
      position="sticky"
    >
      <NavbarContent className="flex-grow-0" justify="center">
        <div className="flex gap-6">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <Link
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium flex items-center gap-2",
                )}
                color="foreground"
                href={item.href}
              >
                {navIcons[item.label]}
                <span className="hidden sm:inline">{item.label}</span>
              </Link>
            </NavbarItem>
          ))}
        </div>
      </NavbarContent>
    </HeroUINavbar>
  );
};
