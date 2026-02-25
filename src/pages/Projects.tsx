import { Text, Card, Box, Grid } from "@chakra-ui/react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/config/projects";

const MotionCard = motion.create(Card.Root as any);

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut", delay: i * 0.08 },
  }),
};

function AnimatedCard({ project, index }: { project: typeof projects[number]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const navigate = useNavigate();
  const isWip = project.href === "/wip";

  const [hovered, setHovered] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleClick = () => {
    if (!project.href) return;
    if (isWip) navigate("/wip");
    else window.open(project.href, "_blank");
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    setPos({ x: e.clientX, y: e.clientY });
  };

  return (
    <Box
      position="relative"
      h="100%"
      onMouseEnter={() => isWip && setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={isWip ? handleMouseMove : undefined}
    >
      <MotionCard
        ref={ref}
        w="100%"
        h="100%"
        variant={"subtlewhite"}
        custom={index}
        variants={cardVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        whileHover={{ y: -8 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        style={{ cursor: project.href ? "pointer" : "default" }}
        onClick={handleClick}
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
          {project.logo === null ? null : (
            <Box
              display="inline-flex"
              alignItems="center"
              justifyContent="center"
              borderRadius="full"
              bg={project.logoBg ?? "transparent"}
              p={project.logoBg ? "6px" : 0}
            >
              {typeof project.logo === "string"
                ? <img src={project.logo} alt={project.logoAlt} style={{ height: "32px", width: "auto" }} />
                : <project.logo size={32} color="#595858" />}
            </Box>
          )}
        </Card.Footer>
      </MotionCard>

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.85 }}
            transition={{ duration: 0.15 }}
            style={{
              position: "fixed",
              left: pos.x + 14,
              top: pos.y + 14,
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
    </Box>
  );
}

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
        {projects.map((project, i) => (
          <AnimatedCard key={project.title} project={project} index={i} />
        ))}
      </Grid>
    </Box>
  );
}
