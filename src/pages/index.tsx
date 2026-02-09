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
} from "@chakra-ui/react";
import { MapPin, Download } from "lucide-react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <Grid templateColumns="1fr 2fr" p={6} alignItems="stretch" height={{md:"580px"}} alignSelf={"center"}>
        {/* Left column - Profile */}
        <GridItem display="flex">
          <Card.Root variant="elevatedblue" h="100%" p={4}>
            <Card.Body>
              <VStack gap={4} h="100%">
                <Image
                  src="/profile.jpg"
                  alt="Tania Koh"
                  borderRadius="full"
                  boxSize="200px"
                  objectFit="cover"
                  border="6px solid #FFF4E5"
                  boxShadow="0px 4px 44.7px 49px #FFF8F5"
                />
                <VStack gap={1}>
                  <Text fontSize="3xl"  color="#005E8A" fontWeight="bold">
                    TANIA KOH
                  </Text>
                  <Text fontSize="lg" color="#005E8A" fontWeight="semibold">
                    Software Engineer
                  </Text>
                  <Text fontSize="sm" color="#828282">
                    Frontend | Backend | UI/UX | AI
                  </Text>
                </VStack>
                <Text
                  fontSize="xs"
                  color="#ADADAD"
                  letterSpacing="widest"
                  fontWeight="thin"
                  mt="auto"
                >
                  DESIGNER; DEVELOPER; IDEATOR
                </Text>
              </VStack>
            </Card.Body>
          </Card.Root>
        </GridItem>

        {/* Right column - Info cards */}
        <GridItem display="flex">
          <VStack gap={6} h="100%" w="100%">
            {/* Bio card */}
            <Card.Root variant="elevatedwhite" w="100%" flex={1} px={12} py={2}>
              <Card.Body>
                <Text fontSize="lg" color="#595858" lineHeight="2.1" fontWeight="extralight">
                  i like exploring my creativity and analytical thinking by
                  connecting with people to make a{" "}
                  <Text as="span" fontWeight="bold" fontStyle="italic">
                    thoughtful and sincere
                  </Text>{" "}
                  impact.
                  <br />
                  i love being curious, open-minded and experimenting!
                </Text>
              </Card.Body>
            </Card.Root>

            {/* Location / Education card */}
            <Card.Root variant="elevatedwhite" w="100%" flex={1}>
              <Card.Body>
                <VStack gap={3} align="start">
                  <HStack gap={2}>
                    <Icon color="teal.600" fontSize="xl">
                      <MapPin />
                    </Icon>
                    <Text fontSize="sm" color="#595858">
                      Y4 @ Singapore University of Technology and Design
                      (SUTD)
                    </Text>
                  </HStack>
                  <Text fontSize="sm" color="#005E8A" fontWeight="medium">
                    Bachelor's in Computer Science, Minor in AI
                  </Text>
                </VStack>
              </Card.Body>
            </Card.Root>

            {/* Social links card */}
            <Card.Root variant="elevatedwhite" w="100%" flex={1}>
              <Card.Body>
                <HStack gap={4} align="center">
                  <Link href="https://linkedin.com" target="_blank">
                    <Icon fontSize="2xl" color="gray.700">
                      <FaLinkedin />
                    </Icon>
                  </Link>
                  <Link href="https://github.com" target="_blank">
                    <Icon fontSize="2xl" color="gray.700">
                      <FaGithub />
                    </Icon>
                  </Link>
                  <Link href="mailto:tania@example.com">
                    <Icon fontSize="2xl" color="gray.700">
                      <FaEnvelope />
                    </Icon>
                  </Link>
                  <Link
                    href="/resume.pdf"
                    target="_blank"
                    display="flex"
                    alignItems="center"
                    gap={1}
                    bg="gray.100"
                    px={3}
                    py={2}
                    borderRadius="md"
                    _hover={{ textDecoration: "none", bg: "gray.200" }}
                  >
                    <Icon fontSize="md" color="gray.700">
                      <Download />
                    </Icon>
                    <Text fontSize="sm" fontWeight="semibold" color="gray.700">
                      resume
                    </Text>
                  </Link>
                </HStack>
              </Card.Body>
            </Card.Root>
          </VStack>
        </GridItem>
      </Grid>
    </DefaultLayout>
  );
}
