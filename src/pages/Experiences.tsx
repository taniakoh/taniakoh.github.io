import {
  VStack,
  Text,
  HStack,
  Card,
  Box,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { experiences } from "@/config/experiences";

const MotionCard = motion.create(Card.Root as any);

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export default function ExperiencesSection() {
  return (
    <Card.Root variant="elevatedwhite" h="100%" w="100%" p={{ base: 0, md: 12 }}>
      <Card.Header
        textAlign="center"
        color="#595858"
        letterSpacing="widest"
        fontSize={{ base: "3xl", sm: "xl", md: "2xl" }}
        fontWeight={"semibold"}
      >
        experiences
      </Card.Header>
      <Card.Body h="100%">
        <motion.div
          style={{ display: "flex", flexDirection: "column", gap: "1rem", height: "100%" }}
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {experiences.map((exp) => {
            const desktopHeight = exp.logoDesktopHeight ?? "40px";
            return (
              <MotionCard key={exp.company} variants={cardVariant} variant="elevatedwhite" h="100%" w="100%" p={{ base: 2, md: 4 }}>
                <Card.Body h="100%">
                  <VStack gap={4} h="100%" color="#595858" w={"100%"} alignItems={"start"}>
                    <HStack
                      w="100%"
                      justify={{ base: "flex-start", md: "space-between" }}
                      alignItems={{ base: "flex-start", md: "center" }}
                      flexDirection={{ base: "column", md: "row" }}
                      gap={{ base: 3, md: 0 }}
                    >
                      <Box order={{ base: 1, md: 2 }} h={{ base: "60px", md: desktopHeight }} w={desktopHeight === "40px" ? { base: "60px", md: "40px" } : undefined}>
                        <img src={exp.logo} alt={exp.logoAlt} style={{ height: "100%", width: "auto" }} />
                      </Box>
                      <VStack alignItems={"start"} gap={0} order={{ base: 2, md: 1 }}>
                        <Text color="#595858" fontSize={{ base: "xl", sm: "md", md: "lg" }} fontWeight={"semibold"}>
                          {exp.role}
                        </Text>
                        <Text fontSize={{ base: "xl", sm: "md", md: "lg" }} color="#005E8A">
                          {exp.company}
                        </Text>
                      </VStack>
                    </HStack>
                    <Text fontSize={{ base: "lg", sm: "sm", md: "md" }}>{exp.description}</Text>
                    <Text fontSize={{ base: "lg", sm: "sm", md: "md" }} fontStyle="italic">{exp.date}</Text>
                  </VStack>
                </Card.Body>
              </MotionCard>
            );
          })}
        </motion.div>
      </Card.Body>
    </Card.Root>
  );
}
