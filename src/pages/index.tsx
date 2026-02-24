import DefaultLayout from "@/layouts/default";
import {
  VStack,
  Text,
  HStack,
  Grid,
  GridItem,
  Card,
  Image,
  Link,
  Icon,
  Button,
  Separator,
  Box
} from "@chakra-ui/react";
import HeroSection from "./Hero";
import ExperiencesSection from "./Experiences";
import { MapPin, Download, Box as BoxIcon} from "lucide-react";
import { HiMapPin } from "react-icons/hi2";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <Box
        h="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        style={{ scrollSnapAlign: "start" }}
      >
        <HeroSection />
      </Box>
      <Box
        h="100%"
        display="flex"
        alignItems="center"
        py={6}
        px={16}
        style={{ scrollSnapAlign: "start" }}
      >
        <ExperiencesSection />
      </Box>
    </DefaultLayout>
  );
}
