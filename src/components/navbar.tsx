import { Flex, Link } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";

import { siteConfig } from "@/config/site";

export const Navbar = () => {
  const location = useLocation();

  return (
    <Flex as="nav" justify="center" pt={6} pb={2} position="sticky" top={0} zIndex={10}>
      <Flex
        bg="white"
        borderRadius="16px"
        px={4}
        py={3}
        gap={2}
        boxShadow={"md"}
      >
        {siteConfig.navItems.map((item) => {
          const isActive = location.pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
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
    </Flex>
  );
};
