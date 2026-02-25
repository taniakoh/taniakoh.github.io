import { defineSlotRecipe } from "@chakra-ui/react"
import { cardAnatomy } from "@chakra-ui/react/anatomy"
export const cardSlotRecipe = defineSlotRecipe({
  className: "chakra-card",
  slots: cardAnatomy.keys(),
  variants: {
    variant: {
      elevatedblue:{
        root:{
          bg: "#FAFEFF",
          boxShadow: "lg",
        }
      },
      elevatedwhite:{
        root:{
        bg:"#FFFFFF",
        boxShadow: "lg",
        }
      },
      subtlewhite:{
        root:{
        bg:"#F8F8F8",
        // boxShadow: "sm",
        }
      }
    },
  },
})