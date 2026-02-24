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
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { HiMapPin } from "react-icons/hi2";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const MotionGridItem = motion.create(GridItem as any);
const MotionCard = motion.create(Card.Root as any);

const rightContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const cardVariant = {
  hidden: { opacity: 0, x: 40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export default function HeroSection() {
  return (
      <Grid templateColumns="1fr 2fr" gap={6} p={6} alignItems="stretch" height={{md:"580px"}}>
        {/* Left column - Profile */}
        <MotionGridItem
          display="flex"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Card.Root variant="elevatedblue" h="100%" w="100%" p={4}>
            <Card.Body h="100%">
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
                  <Text fontSize="4xl"  color="#005E8A" fontWeight="bold">
                    TANIA KOH
                  </Text>
                  <Text fontSize="xl" color="#005E8A" fontWeight="semibold">
                    Software Engineer
                  </Text>
                  <Text fontSize="lg" color="#828282">
                    Fullstack | UI/UX | AI
                  </Text>
                </VStack>
                <Text
                  fontSize="lg"
                  color="#ADADAD"
                  letterSpacing="widest"
                  fontWeight="light"
                  mt="auto"
                  textAlign={"center"}
                >
                  DEVELOPER; IDEATOR; DESIGNER
                </Text>
              </VStack>
            </Card.Body>
          </Card.Root>
        </MotionGridItem>

        {/* Right column - Info cards */}
        <MotionGridItem
          display="flex"
          variants={rightContainer}
          initial="hidden"
          animate="show"
        >
          <VStack gap={6} h="100%" w="100%">
            {/* Bio card */}
            <MotionCard variants={cardVariant} variant="elevatedwhite" w="100%" flex={1} px={12} py={2}>
              <Card.Body>
                <Text fontSize="lg" color="#595858" lineHeight="2.1" fontWeight="light">
                  i like exploring my creativity and analytical thinking by
                  connecting with people to make a{" "}
                  <Text as="span" fontWeight="bold" textDecoration="underline">
                    thoughtful and sincere
                  </Text>{" "}
                  impact.
                  <br />
                  i love being curious, open-minded and experimenting!
                </Text>
              </Card.Body>
            </MotionCard>

            {/* Location / Education card */}
            <MotionCard variants={cardVariant} px={12} py={2} variant="elevatedwhite" w="100%" flex={1}>
              <Card.Body >
                  <VStack gap={6} align="start">
                    <HStack>
                      <Icon w={"32px"} h={"32px"} color="#005E8A">
                        <HiMapPin  />
                      </Icon>
                      <Text fontSize="lg" color="#595858" fontWeight={"light"}>
                      Y4 @ Singapore University of Technology and Design
                      (SUTD)
                    </Text>
                    </HStack>

                    <Text fontSize="lg" color="#005E8A" fontWeight="medium" alignSelf={"end"}>
                      Bachelor's in Computer Science, Minor in AI
                    </Text>
                  </VStack>
              </Card.Body>
            </MotionCard>

            {/* Social links card */}
            <MotionCard variants={cardVariant} px={12} py={2} variant="elevatedwhite" w="100%" flex={1} justifyContent={"center"}>
              <Card.Body>
                <HStack gap={12} align="center">
                  <Link href="https://www.linkedin.com/in/tania-koh-tze-ern/" target="_blank">

                    <Icon w={"48px"} h={"48px"} color="#005E8A">
                        <FaLinkedin />
                      </Icon>
                  </Link>
                  <Link href="https://github.com/taniakoh" target="_blank">
                    <Icon w={"48px"} h={"48px"} color="#005E8A">
                      <FaGithub />
                    </Icon>
                  </Link>
                  <Link href="mailto:taniakohtzeern@gmail.com">
                    <Icon w={"48px"} h={"48px"} color="#005E8A">
                      <FaEnvelope />
                    </Icon>
                  </Link>

                  <Separator orientation="vertical" h="48px" />
                  <Button asChild variant="elevated" size="lg">
                    <a href="/resume.pdf" download="Tania_Koh_Resume.pdf" rel="noreferrer">
                      <Download size={16} />
                      resume
                    </a>
                  </Button>
                </HStack>
              </Card.Body>
            </MotionCard>
          </VStack>
        </MotionGridItem>
      </Grid>
  );
}
