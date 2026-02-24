import DefaultLayout from "@/layouts/default";
import { Box, VStack} from "@chakra-ui/react";
import HeroSection from "./Hero";
import ExperiencesSection from "./Experiences";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <VStack gap={16} py={8}>

      
      <Box
        h="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        my={16}
      >
        <HeroSection />
      </Box>
      <Box
        h="100%"
        display="flex"
        alignItems="center"
        py={6}
        px={{ base: 4, md: 16 }}
      >
        <ExperiencesSection />
      </Box>
      </VStack>
    </DefaultLayout>
  );
}
