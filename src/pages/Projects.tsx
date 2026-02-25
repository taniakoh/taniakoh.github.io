import {
  Text,
  Card,
  Box,
  Grid
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/config/projects";

const MotionCard = motion.create(Card.Root as any);

export default function ProjectsSection() {
  return (
    <Box h="100%" w="100%" p={{ base: 0, md: 12 }}>
      <Text
        textAlign="center"
        color="#595858"
        letterSpacing="widest"
        fontSize={{ base: "3xl", sm: "xl", md: "2xl" }}
        fontWeight={"semibold"}
        mb={6}
      >
        projects
      </Text>
      <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={6}>
        {projects.map((project) => (
          <MotionCard
            key={project.title}
            w="100%"
            variant={"subtlewhite"}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            style={{ cursor: project.href ? "pointer" : "default" }}
            onClick={() => project.href && window.open(project.href, "_blank")}
          >
            <Card.Body gap="2">
              <Box position="relative">
                {project.image ? (
                  <Box h="180px" w="100%" borderRadius="lg" overflow="hidden">
                    <img src={project.image} alt={project.title} style={{ height: "100%", width: "100%", objectFit: "cover" }} />
                  </Box>
                ) : (
                  <Box bg="#E0E0E0" h="180px" w="100%" borderRadius="lg" />
                )}
                {project.href && (
                  <Box
                    position="absolute"
                    top={3}
                    right={3}
                    bg="white"
                    borderRadius="full"
                    p={2}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    boxShadow="sm"
                  >
                    <ArrowUpRight size={18} color="#595858" />
                  </Box>
                )}
              </Box>
              <Card.Title color={"#595858"}>{project.title}</Card.Title>
              <Card.Description color={"#595858"}>{project.description}</Card.Description>
            </Card.Body>
            <Card.Footer justifyContent="flex-end">
              <img src={project.logo} alt={project.logoAlt} style={{ height: "32px", width: "auto" }} />
            </Card.Footer>
          </MotionCard>
        ))}
      </Grid>
    </Box>
  );
}
