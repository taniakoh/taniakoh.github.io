import DefaultLayout from "@/layouts/default";
import { Box, VStack} from "@chakra-ui/react";
import HeroSection from "./Hero";
import ExperiencesSection from "./Experiences";
import ProjectsSection from "./Projects";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <VStack gap={16} py={4}>

      
      <Box
        id="about"
        h="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        mb={16}
      >
        <HeroSection />
      </Box>
      <Box
        id="experience"
        h="100%"
        display="flex"
        alignItems="center"
        py={6}
        px={{ base: 4, md: 16 }}
      >
        <ExperiencesSection />
      </Box>
      <Box
        id="projects"
        h="100%"
        display="flex"
        alignItems="center"
        py={6}
        px={{ base: 4, md: 16 }}
      >
        <ProjectsSection />
      </Box>
      </VStack>
    </DefaultLayout>
  );
}
