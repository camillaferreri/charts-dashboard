export const bg_transition = { 
    duration: .5,
    ease: [0.37, 0, 0.63, 1]
}

export const bg_variants = {
    close: { scale: 1 },
    open: { scale: 75 }
}

export const content_variants = {
    close: {
        display: "none",
        transition: { staggerChildren: 0.1, staggerDirection: -1 }
    },
    open: {
        display: "flex",
        transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
}

export const content_children_variants = {
    close: {
        opacity: 0,
    },
    open: {
        opacity: 1,
    }
}

export const text_variants = {
    close: { color: "#D4C7BE" },
    open: { color: "#393939" }
}