import { useState, useEffect } from "react";
import { Flex, Link, Box, VStack, IconButton } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

import { siteConfig } from "@/config/site";

export const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("#about");
  const isHome = location.pathname === "/";
  const resolveHref = (href: string) => href.startsWith("#") && !isHome ? `/${href}` : href;

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const hashItems = siteConfig.navItems.filter((item) => item.href.startsWith("#"));
    const sectionIds = hashItems.map((item) => item.href.slice(1));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHash(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <Flex as="nav" justify={{ base: "flex-end", sm: "center" }} pt={6} pb={2} position="sticky" top={0} zIndex={10}>
      {/* Desktop pill — hidden below sm */}
      <Flex
        display={{ base: "none", sm: "flex" }}
        bg="white"
        borderRadius="16px"
        px={4}
        py={3}
        gap={2}
        boxShadow="md"
      >
        {siteConfig.navItems.map((item) => {
          const isActive = item.href.startsWith("#")
            ? activeHash === item.href
            : location.pathname === item.href;
          return (
            <Link
              key={item.href}
              href={resolveHref(item.href)}
              px={5}
              py={1.5}
              borderRadius="full"
              fontSize="lg"
              fontWeight="semibold"
              bg={isActive ? "#DBE8EE" : "transparent"}
              color="#595858"
              boxShadow={isActive ? "sm" : "none"}
              _hover={{
                textDecoration: "none",
                bg: isActive ? "gray.200" : "#DBE8EE",
              }}
            >
              {item.label}
            </Link>
          );
        })}
      </Flex>

      {/* Mobile hamburger — visible below sm only */}
      <Box display={{ base: "block", sm: "none" }} position="relative" mr={4}>
        {/* Click-outside overlay */}
        {isOpen && (
          <Box
            position="fixed"
            inset={0}
            zIndex={-1}
            onClick={closeMenu}
            aria-hidden="true"
          />
        )}

        {/* Toggle button */}
        <IconButton
          aria-label={isOpen ? "Close menu" : "Open menu"}
          variant="ghost"
          onClick={toggleMenu}
          bg="white"
          borderRadius="16px"
          boxShadow="md"
          p={3}
          color="#595858"
          minW="auto"
          h="auto"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={isOpen ? "x" : "menu"}
              initial={{ rotate: -45, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 45, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </motion.div>
          </AnimatePresence>
        </IconButton>

        {/* Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, y: -8, scaleY: 0.95 }}
              animate={{ opacity: 1, y: 0, scaleY: 1 }}
              exit={{ opacity: 0, y: -8, scaleY: 0.95 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              style={{
                transformOrigin: "top center",
                position: "absolute",
                top: "calc(100% + 8px)",
                right: 0,
                minWidth: "160px",
              }}
            >
              <VStack
                bg="white"
                borderRadius="16px"
                boxShadow="md"
                px={2}
                py={2}
                gap={1}
                align="stretch"
              >
                {siteConfig.navItems.map((item) => {
                  const isActive = item.href.startsWith("#")
            ? activeHash === item.href
            : location.pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={resolveHref(item.href)}
                      px={5}
                      py={1.5}
                      borderRadius="full"
                      fontSize="lg"
                      fontWeight="semibold"
                      color="#595858"
                      bg={isActive ? "#DBE8EE" : "transparent"}
                      boxShadow={isActive ? "sm" : "none"}
                      textAlign="center"
                      _hover={{
                        textDecoration: "none",
                        bg: isActive ? "gray.200" : "#DBE8EE",
                      }}
                      onClick={closeMenu}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </VStack>
            </motion.div>
          )}
        </AnimatePresence>
      </Box>
    </Flex>
  );
};
