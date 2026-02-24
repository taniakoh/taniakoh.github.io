import DefaultLayout from "@/layouts/default";
import { Box } from "@chakra-ui/react";
import HeroSection from "./Hero";
import ExperiencesSection from "./Experiences";

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
