import { defineRecipe } from "@chakra-ui/react"

export const buttonRecipe = defineRecipe({
  variants: {
    variant: {
      elevated: {
        bg: "white",
        boxShadow: "lg",
        color: "#005E8A",
        _hover: {
          bg: "gray.50",
        },
      },
    },
  },
})
