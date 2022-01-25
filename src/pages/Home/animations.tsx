interface mainVariantProps { isSmall: boolean }
interface smallVariantProps { translateX: string, isSmall: boolean }
interface labelVariantProps { y: string, x: string }

export const project_card_variants = {
  small: ({ translateX, isSmall }: smallVariantProps) => ({
    width: 120,
    height: 120,
    opacity: 1,
    translateX: translateX,
    y: isSmall ? "calc(50vh - -60px)" : "50%",
    transition: {
      duration: 0.8,
      opacity: { delay: 0.8 }
    }
  }),
  main: ({ isSmall }: mainVariantProps) => ({
    width: isSmall ? "30vh" : 320,
    height: isSmall ? "50vh" : "80vh",
    x: isSmall ? "50%" : "calc(0vw + 0px)",
    y: isSmall ? "30%" : "50%"
  }),
  hidden: {
    opacity: 0,
    transition: {
      delay: 0.2,
      duration: 0.4,
      opacity: { delay: -2 }
    }
  }
}

export const project_card_transition = { 
  duration: 1,
  ease: [0.40, 0, 0.40, 1]
}

export const label_variants = {
  initial: ({ y }: labelVariantProps) => ({
    y: y,
    x: 0,
  }),
  hover: ({ y, x }: labelVariantProps) => ({
    y: y,
    x: x
  })
}

export const label_transition = {
  duration: .3,
  // ease: "easeInOut",
  ease: [0.40, 0, 0.40, 1]
  // delay: .6
}

