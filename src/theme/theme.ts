import { Card, createSystem, defaultConfig, defineConfig } from "@chakra-ui/react"
import { cardSlotRecipe } from "./card.recipe"
import { buttonRecipe } from "./button.recipe"

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
    recipes: {
      button: buttonRecipe,
    },
  },
})

export default createSystem(defaultConfig, config)