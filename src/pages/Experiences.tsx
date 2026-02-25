import {
  VStack,
  Text,
  HStack,
  Card,
  Box,
} from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const [wipPos, setWipPos] = useState<{ x: number; y: number } | null>(null);
  const [hoveredWip, setHoveredWip] = useState<string | null>(null);

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
            const isWip = exp.href === "/wip";

            const handleClick = () => {
              if (!exp.href) return;
              if (isWip) navigate("/wip");
              else window.open(exp.href, "_blank");
            };

            return (
              <Box
                key={exp.company}
                onMouseEnter={() => isWip && setHoveredWip(exp.company)}
                onMouseLeave={() => { setHoveredWip(null); setWipPos(null); }}
                onMouseMove={isWip ? (e) => setWipPos({ x: e.clientX, y: e.clientY }) : undefined}
              >
                <MotionCard
                  variants={cardVariant}
                  variant="elevatedwhite"
                  h="100%"
                  w="100%"
                  p={{ base: 2, md: 4 }}
                  style={{ cursor: exp.href ? "pointer" : "default" }}
                  onClick={handleClick}
                  whileHover={{ backgroundColor: "#FAFEFF" }}
                >
                  <Card.Body h="100%">
                    <VStack gap={4} h="100%" color="#595858" w={"100%"} alignItems={"start"}>
                      <HStack
                        w="100%"
                        justify={{ base: "flex-start", md: "space-between" }}
                        alignItems={{ base: "flex-start", md: "center" }}
                        flexDirection={{ base: "column", md: "row" }}
                        gap={{ base: 3, md: 0 }}
                      >
                        <Box order={{ base: 1, md: 2 }} h={desktopHeight}>
                          <img src={exp.logo} alt={exp.logoAlt} style={{ height: "100%", width: "auto", maxWidth: "none" }} />
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
              </Box>
            );
          })}
        </motion.div>
      </Card.Body>

      <AnimatePresence>
        {hoveredWip && wipPos && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.85 }}
            transition={{ duration: 0.15 }}
            style={{
              position: "fixed",
              left: wipPos.x + 14,
              top: wipPos.y + 14,
              pointerEvents: "none",
              zIndex: 9999,
              background: "#1a1a1a",
              color: "#fff",
              padding: "4px 10px",
              borderRadius: "8px",
              fontSize: "13px",
              whiteSpace: "nowrap",
            }}
          >
            still a WIP!
          </motion.div>
        )}
      </AnimatePresence>
    </Card.Root>
  );
}
