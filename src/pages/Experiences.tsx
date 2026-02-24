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
  Button,
  Separator,
} from "@chakra-ui/react";
import { MapPin, Download } from "lucide-react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import TesselyLogo from "@/assets/Tessely.svg";
import InfineonLogo from "@/assets/Infineon-Logo.svg";
import NannyMoonLogo from "@/assets/nannymoon.png";

export default function ExperiencesSection() {
  return (
    <Card.Root variant="elevatedwhite" h="100%" w="100%" p={12}>
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
        <VStack gap={4} h="100%">
          <Card.Root variant="elevatedwhite" h="100%" w="100%" p={4}>
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
          </Card.Root>
          <Card.Root variant="elevatedwhite" h="100%" w="100%" p={4}>
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
          </Card.Root>
          <Card.Root variant="elevatedwhite" h="100%" w="100%" p={4}>
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
          </Card.Root>
        </VStack>
      </Card.Body>
    </Card.Root>
  );
}
