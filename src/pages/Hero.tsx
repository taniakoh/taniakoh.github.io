import {
  VStack,
  Text,
  HStack,
  Grid,
  GridItem,
  Card,
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

const profileImageVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.08, transition: { duration: 0.35, ease: "easeOut" } },
};

export default function HeroSection() {
  return (
      <Grid templateColumns={{ base: "1fr", lg: "1fr 2fr" }} gap={6} p={6} alignItems="stretch" height={{ lg: "580px" }}>
        {/* Left column - Profile */}
        <MotionGridItem
          display="flex"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <MotionCard
            variant="elevatedblue"
            h="100%"
            w="100%"
            p={{ base: 2, md: 4 }}
            initial="rest"
            animate="rest"
            whileHover="hover"
          >
            <Card.Body h="100%">
              <VStack gap={4} h="100%">
                {/* Clipping container so zoom stays within the circle */}
                <motion.div
                  style={{
                    borderRadius: "9999px",
                    overflow: "hidden",
                    width: "200px",
                    height: "200px",
                    border: "6px solid #FFF4E5",
                    boxShadow: "0px 4px 44.7px 49px #FFF8F5",
                    flexShrink: 0,
                  }}
                >
                  <motion.img
                    src="/profile.jpg"
                    alt="Tania Koh"
                    variants={profileImageVariants}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                </motion.div>

                <VStack gap={1}>
                  <Text fontSize={{ base: "3xl", md: "4xl" }} color="#005E8A" fontWeight="bold">
                    TANIA KOH
                  </Text>
                  <Text fontSize={{ base: "lg", md: "xl" }} color="#005E8A" fontWeight="semibold">
                    Software Engineer
                  </Text>
                  <Text fontSize={{ base: "md", md: "lg" }} color="#828282">
                    Fullstack | UI/UX | AI
                  </Text>
                </VStack>
                <Text
                  fontSize={{ base: "md", md: "lg" }}
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
          </MotionCard>
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
            <MotionCard variants={cardVariant} variant="elevatedwhite" w="100%" flex={1} px={{ base: 2, md: 12 }} py={2}>
              <Card.Body>
                <Text fontSize={{ base: "md", md: "lg" }} color="#595858" lineHeight="2.1" fontWeight="light">
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
            <MotionCard variants={cardVariant} px={{ base: 2, md: 12 }} py={2} variant="elevatedwhite" w="100%" flex={1}>
              <Card.Body>
                  <VStack gap={6} align="start">
                    <HStack>
                      <Icon w={"32px"} h={"32px"} color="#005E8A">
                        <HiMapPin />
                      </Icon>
                      <Text fontSize={{ base: "md", md: "lg" }} color="#595858" fontWeight={"light"}>
                      Y4 @ Singapore University of Technology and Design
                      (SUTD)
                    </Text>
                    </HStack>

                    <Text fontSize={{ base: "md", md: "lg" }} color="#005E8A" fontWeight="medium" alignSelf={"end"}>
                      Bachelor's in Computer Science, Minor in AI
                    </Text>
                  </VStack>
              </Card.Body>
            </MotionCard>

            {/* Social links card */}
            <MotionCard variants={cardVariant} px={{ base: 2, md: 12 }} py={2} variant="elevatedwhite" w="100%" flex={1} justifyContent={{base:"center", md:"start"}}>
              <Card.Body>
                <HStack gap={{ base: 4, md: 12 }} align="center" justifyContent={{base:"center", md:"start"}}>
                  <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.2 }}>
                    <Link href="https://www.linkedin.com/in/tania-koh-tze-ern/" target="_blank">
                      <Icon w={{base:"32px",md:"48px"}} h={{base:"32px",md:"48px"}} color="#005E8A">
                        <FaLinkedin />
                      </Icon>
                    </Link>
                  </motion.div>

                  <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.2 }}>
                    <Link href="https://github.com/taniakoh" target="_blank">
                      <Icon w={{base:"32px",md:"48px"}} h={{base:"32px",md:"48px"}} color="#005E8A">
                        <FaGithub />
                      </Icon>
                    </Link>
                  </motion.div>

                  <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.2 }}>
                    <Link href="mailto:taniakohtzeern@gmail.com">
                      <Icon w={{base:"32px",md:"48px"}} h={{base:"32px",md:"48px"}} color="#005E8A">
                        <FaEnvelope />
                      </Icon>
                    </Link>
                  </motion.div>

                  <Separator orientation="vertical" h="48px" />

                  <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.2 }}>
                    <Button asChild variant="elevated" size={{ base: "sm", md: "lg" }}>
                      <a href="/resume.pdf" download="Tania_Koh_Resume.pdf" rel="noreferrer">
                        <Download size={16} />
                        resume
                      </a>
                    </Button>
                  </motion.div>
                </HStack>
              </Card.Body>
            </MotionCard>
          </VStack>
        </MotionGridItem>
      </Grid>
  );
}
