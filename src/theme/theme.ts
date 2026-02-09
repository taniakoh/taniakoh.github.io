import { Card, createSystem, defaultConfig, defineConfig } from "@chakra-ui/react"
import { cardSlotRecipe } from "./card.recipe"

const config = defineConfig({
  theme: {
    tokens: {
      fonts: {
        heading: { value: "'Poppins', sans-serif" },
        body: { value: "'Poppins', sans-serif" },
      },
    },
    slotRecipes: {
      card: cardSlotRecipe,
    },
  },
})

export default createSystem(defaultConfig, config)