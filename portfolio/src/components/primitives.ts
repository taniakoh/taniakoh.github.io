import { tv } from "tailwind-variants";

export const title = tv({
  base: "tracking-tight inline font-semibold",
  variants: {
    color: {
      violet: "from-[#FF1CF7] to-[#b249f8]",
      yellow: "from-[#FF705B] to-[#FFB457]",
      blue: "from-[#5EA2EF] to-[#0072F5]",
      cyan: "from-[#00b7fa] to-[#01cfea]",
      green: "from-[#6FEE8D] to-[#17c964]",
      pink: "from-[#FF72E1] to-[#F54C7A]",
      foreground: "dark:from-[#FFFFFF] dark:to-[#4B4B4B]",
    },
    size: {
      sm: "text-3xl lg:text-4xl",
      md: "text-[2.3rem] lg:text-5xl",
      lg: "text-4xl lg:text-6xl",
    },
    fullWidth: {
      true: "w-full block",
    },
  },
  defaultVariants: {
    size: "md",
  },
  compoundVariants: [
    {
      color: [
        "violet",
        "yellow",
        "blue",
        "cyan",
        "green",
        "pink",
        "foreground",
      ],
      class: "bg-clip-text text-transparent bg-gradient-to-b",
    },
  ],
});

export const subtitle = tv({
  base: "w-full md:w-1/2 my-2 text-lg lg:text-xl text-default-600 block max-w-full",
  variants: {
    fullWidth: {
      true: "!w-full",
    },
  },
  defaultVariants: {
    fullWidth: true,
  },
});

export const button = tv({
  base: "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2",
  variants: {
    color: {
      primary: "bg-[#0072F5] text-white hover:bg-[#005BC4] focus:ring-[#0072F5]",
      secondary: "bg-[#7828C8] text-white hover:bg-[#6020A0] focus:ring-[#7828C8]",
      success: "bg-[#17C964] text-white hover:bg-[#13A452] focus:ring-[#17C964]",
      warning: "bg-[#F5A524] text-white hover:bg-[#C4841D] focus:ring-[#F5A524]",
      danger: "bg-[#F31260] text-white hover:bg-[#C20E4D] focus:ring-[#F31260]",
      violet: "bg-[#8B5CF6] text-white hover:bg-[#7C3AED] focus:ring-[#8B5CF6]",
      pink: "bg-[#EC4899] text-white hover:bg-[#DB2777] focus:ring-[#EC4899]",
      cyan: "bg-[#06B6D4] text-white hover:bg-[#0891B2] focus:ring-[#06B6D4]",
      default: "bg-default-100 text-default-800 hover:bg-default-200 focus:ring-default-400",
    },
    variant: {
      solid: "",
      outline: "bg-transparent border-2",
      ghost: "bg-transparent hover:bg-opacity-20",
      flat: "bg-opacity-20",
    },
    size: {
      sm: "px-3 py-1.5 text-sm rounded-md",
      md: "px-4 py-2 text-base rounded-lg",
      lg: "px-6 py-3 text-lg rounded-xl",
    },
    fullWidth: {
      true: "w-full",
    },
    disabled: {
      true: "opacity-50 cursor-not-allowed pointer-events-none",
    },
  },
  compoundVariants: [
    // Outline variants
    { variant: "outline", color: "primary", class: "border-[#0072F5] text-[#0072F5] hover:bg-[#0072F5] hover:text-white" },
    { variant: "outline", color: "secondary", class: "border-[#7828C8] text-[#7828C8] hover:bg-[#7828C8] hover:text-white" },
    { variant: "outline", color: "success", class: "border-[#17C964] text-[#17C964] hover:bg-[#17C964] hover:text-white" },
    { variant: "outline", color: "warning", class: "border-[#F5A524] text-[#F5A524] hover:bg-[#F5A524] hover:text-white" },
    { variant: "outline", color: "danger", class: "border-[#F31260] text-[#F31260] hover:bg-[#F31260] hover:text-white" },
    { variant: "outline", color: "violet", class: "border-[#8B5CF6] text-[#8B5CF6] hover:bg-[#8B5CF6] hover:text-white" },
    { variant: "outline", color: "pink", class: "border-[#EC4899] text-[#EC4899] hover:bg-[#EC4899] hover:text-white" },
    { variant: "outline", color: "cyan", class: "border-[#06B6D4] text-[#06B6D4] hover:bg-[#06B6D4] hover:text-white" },
    // Ghost variants
    { variant: "ghost", color: "primary", class: "text-[#0072F5] hover:bg-[#0072F5]" },
    { variant: "ghost", color: "secondary", class: "text-[#7828C8] hover:bg-[#7828C8]" },
    { variant: "ghost", color: "success", class: "text-[#17C964] hover:bg-[#17C964]" },
    { variant: "ghost", color: "warning", class: "text-[#F5A524] hover:bg-[#F5A524]" },
    { variant: "ghost", color: "danger", class: "text-[#F31260] hover:bg-[#F31260]" },
    { variant: "ghost", color: "violet", class: "text-[#8B5CF6] hover:bg-[#8B5CF6]" },
    { variant: "ghost", color: "pink", class: "text-[#EC4899] hover:bg-[#EC4899]" },
    { variant: "ghost", color: "cyan", class: "text-[#06B6D4] hover:bg-[#06B6D4]" },
    // Flat variants
    { variant: "flat", color: "primary", class: "bg-[#0072F5] text-[#0072F5] hover:bg-opacity-30" },
    { variant: "flat", color: "secondary", class: "bg-[#7828C8] text-[#7828C8] hover:bg-opacity-30" },
    { variant: "flat", color: "success", class: "bg-[#17C964] text-[#17C964] hover:bg-opacity-30" },
    { variant: "flat", color: "warning", class: "bg-[#F5A524] text-[#F5A524] hover:bg-opacity-30" },
    { variant: "flat", color: "danger", class: "bg-[#F31260] text-[#F31260] hover:bg-opacity-30" },
    { variant: "flat", color: "violet", class: "bg-[#8B5CF6] text-[#8B5CF6] hover:bg-opacity-30" },
    { variant: "flat", color: "pink", class: "bg-[#EC4899] text-[#EC4899] hover:bg-opacity-30" },
    { variant: "flat", color: "cyan", class: "bg-[#06B6D4] text-[#06B6D4] hover:bg-opacity-30" },
  ],
  defaultVariants: {
    color: "primary",
    variant: "solid",
    size: "md",
  },
});
