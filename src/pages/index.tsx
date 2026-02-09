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
  NavbarMenuItem,
} from "@heroui/navbar";
import { Button } from "@heroui/button";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";
import { House } from "lucide-react";
import { Image } from "@heroui/image";
import { FaLinkedin } from "react-icons/fa";
import { VStack, Text, HStack, Heading, Card } from "@chakra-ui/react";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <HStack>
        {/* self description */}
        <Card.Root w="518px">
          <Card.Body />
          <Text>TANIA KOH</Text>
          <Text>Software Engineer</Text>
          <Text>Frontend | Backend | UI/UX | AI</Text>
          <Card.Footer />
          <Text>Designer, Developer, Ideator</Text>
        </Card.Root>
        <VStack>
          <Card.Root>
            <Card.Body />
            <Text>
              i like exploring my creativity and analytical thinking by
              connecting with people to make a thoughtful and sincere impact. i
              love being curious, open-minded and experimenting!
            </Text>
            <Card.Footer />
          </Card.Root>
          <Card.Root>
            <Card.Body />
            <Text>
Y4 @ Singapore University of Technology and Design (SUTD)            </Text>
            <Card.Footer />
          </Card.Root>
          <Card.Root>
            <Card.Body>
              linkedin
            </Card.Body>
          </Card.Root>
        </VStack>
      </HStack>
    </DefaultLayout>
  );
}
