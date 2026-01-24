import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";
import {
  Navbar, 
  NavbarBrand, 
  NavbarContent, 
  NavbarItem, 
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem
} from "@heroui/navbar";
import { Button } from "@heroui/button";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";
import { House } from 'lucide-react';
import {Image} from "@heroui/image";
import { FaLinkedin } from "react-icons/fa";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <Image isZoomed radius="full" width={200} height={200} src="/profile.jpg"/>
        <div className="max-w-lg text-center justify-center">
          <span className={title()}>Tania Koh<br></br></span>
          <p className={title({ color: "cyan" })}> Full Stack Application Developer and Designer</p>
          <br />

          <div className={subtitle({ class: "mt-4" })}>
            Final Year Computer Science Graduate with Minor in Artificial Intelligence
          </div>
        </div>
        <Button 
        size="lg"
        className={buttonStyles({
              color: "primary",
              radius: "full",
              variant: "ghost",
            })}>
          Download Resume
        </Button>

        <div className="flex gap-3">
          <Link
            isExternal
            className={buttonStyles({
              color: "primary",
              radius: "full",
              variant: "shadow",
            })}
            href={siteConfig.links.docs}
          >
            <FaLinkedin size={20} />
            LinkedIn
          </Link>
          <Link
            isExternal
            className={buttonStyles({ variant: "bordered", radius: "full" })}
            href={siteConfig.links.github}
          >
            <GithubIcon size={20} />
            GitHub
          </Link>
        </div>

       
      </section>
    </DefaultLayout>
  );
}
