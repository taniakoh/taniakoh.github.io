import {
  VStack,
  Text,
  HStack,
  Card,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import TesselyLogo from "@/assets/Tessely.svg";
import InfineonLogo from "@/assets/Infineon-Logo.svg";
import NannyMoonLogo from "@/assets/nannymoon.png";

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
    <Card.Root variant="elevatedwhite" h="100%" w="100%" p={{ base: 4, md: 12 }}>
      <Card.Header
        textAlign="center"
        color="#595858"
        letterSpacing="widest"
        fontSize="3xl"
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
          <MotionCard variants={cardVariant} variant="elevatedwhite" h="100%" w="100%" p={{ base:2, md: 4 }}>
            <Card.Body h="100%">
              <VStack
                gap={4}
                h="100%"
                color="#595858"
                w={"100%"}
                alignItems={"start"}
              >
                <HStack w="100%" justify="space-between" alignItems="center">
                  <VStack alignItems={"start"} gap={0}>
                    <Text color="#595858" fontSize="xl" fontWeight={"semibold"}>
                      Full Stack Software Developer Intern
                    </Text>
                    <Text fontSize="xl" color="#005E8A">
                      Tessely AI
                    </Text>
                  </VStack>
                  <img src={TesselyLogo} alt="Tessely" style={{ height: "40px", width: "40px" }} />
                </HStack>
                <Text fontSize="lg">
                  Engineered full-stack web components for the Tessely B2B SaaS platform using React, TypeScript, Tailwind CSS, FastAPI, and Supabase, transforming process-mining data into interactive dashboard visuals for enterprise clients
                </Text>
                <Text fontSize="lg">Oct 2026 - May 2026</Text>
              </VStack>
            </Card.Body>
          </MotionCard>

          <MotionCard variants={cardVariant} variant="elevatedwhite" h="100%" w="100%" p={4}>
            <Card.Body h="100%">
              <VStack
                gap={4}
                h="100%"
                color="#595858"
                w={"100%"}
                alignItems={"start"}
              >
                <HStack w="100%" justify="space-between" alignItems="center">
                  <VStack alignItems={"start"} gap={0}>
                    <Text color="#595858" fontSize="xl" fontWeight={"semibold"}>
                      Full Stack Software Developer Intern
                    </Text>
                    <Text fontSize="xl" color="#005E8A">
                      Infineon Technologies · Singapore
                    </Text>
                  </VStack>
                  <img src={InfineonLogo} alt="Infineon" style={{ height: "24px", width: "auto" }} />
                </HStack>
                <Text fontSize="lg">
                  Built full-stack CRM features and a UI test automation pipeline for Infineon's global sales operations, collaborating cross-functionally in an Agile Scrum team using C#, Python, Playwright, and Azure DevOps
                </Text>
                <Text fontSize="lg">August 2024 - December 2024</Text>
              </VStack>
            </Card.Body>
          </MotionCard>

          <MotionCard variants={cardVariant} variant="elevatedwhite" h="100%" w="100%" p={4}>
            <Card.Body h="100%">
              <VStack
                gap={4}
                h="100%"
                color="#595858"
                w={"100%"}
                alignItems={"start"}
              >
                <HStack w="100%" justify="space-between" alignItems="center">
                  <VStack alignItems={"start"} gap={0}>
                    <Text color="#595858" fontSize="xl" fontWeight={"semibold"}>
                      Software Engineering Intern (Automation & Integration)
                    </Text>
                    <Text fontSize="xl" color="#005E8A">
                      Nanny Moon
                    </Text>
                  </VStack>
                  <img src={NannyMoonLogo} alt="Nanny Moon" style={{ height: "40px", width: "40px" }} />
                </HStack>
                <Text fontSize="lg">
                  Built and deployed custom WordPress features and automated integration pipelines connecting frontend workflows with CRM systems via APIs, boosting customer lead conversion by 30%
                </Text>
                <Text fontSize="lg">May 2023 - January 2024</Text>
              </VStack>
            </Card.Body>
          </MotionCard>
        </motion.div>
      </Card.Body>
    </Card.Root>
  );
}
