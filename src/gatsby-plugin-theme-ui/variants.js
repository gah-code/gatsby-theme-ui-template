const variants = {
  // Button Variants
  buttons: {
    primary: {
      fontWeight: "bold",
      color: "background",
      bg: "primary",
      borderRadius: "default",
      boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.2)",
      "&:hover": {
        bg: "secondary",
      },
    },
    secondary: {
      fontWeight: "bold",
      color: "background",
      bg: "secondary",
      borderRadius: "default",
      "&:hover": {
        bg: "primary",
      },
    },
    close: {
      color: "text",
      bg: "transparent",
      fontSize: 3,
      "&:hover": {
        color: "primary",
      },
    },
  },

  // Typography Variants
  text: {
    heading: {
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "heading",
    },
    caps: {
      textTransform: "uppercase",
      letterSpacing: ".2em",
    },
    display: {
      variant: "text.heading",
      fontSize: [5, 6],
      fontWeight: "heading",
      letterSpacing: "-0.02em",
      mt: 4,
    },
    paragraph: {
      fontSize: 2,
      lineHeight: "body",
      my: 3,
    },
    block: {
      fontSize: 2,
      lineHeight: "body",
      textAlign: "justify",
      textAlignLast: "start",
      my: 4,
    },
    small: {
      fontSize: 1,
      fontStyle: "italic",
      color: "muted",
    },
    callout: {
      fontSize: 3,
      fontWeight: "bold",
      color: "primary",
      my: 4,
    },
  },

  // Card Variants
  cards: {
    primary: {
      padding: 3,
      borderRadius: 6,
      boxShadow: "0 0 8px rgba(0, 0, 0, 0.2)",
    },
    accent: {
      padding: 3,
      borderRadius: 6,
      boxShadow: "0 0 8px rgba(0, 0, 0, 0.2)",
      bg: "secondary",
      color: "background",
    },
  },

  // Badge Variants
  badges: {
    primary: {
      color: "background",
      bg: "primary",
    },
    accent: {
      color: "background",
      bg: "secondary",
    },
  },

  // Box Variants
  boxes: {
    shout: {
      fontWeight: "bold",
      textTransform: "uppercase",
      bg: "highlight",
      p: 3,
      borderRadius: 4,
    },
    muted: {
      bg: "muted",
      p: 3,
      borderRadius: "default",
    },
  },

  // Grid Variants
  grid: {
    default: {
      display: "grid",
      gridTemplateColumns: ["1fr", "1fr", "repeat(2, 1fr)", "repeat(3, 1fr)"],
      gap: 3,
      p: 2,
    },
    twoColumn: {
      display: "grid",
      gridTemplateColumns: ["1fr", "1fr", "repeat(2, 1fr)"],
      gap: 3,
      p: 3,
    },
    threeColumn: {
      display: "grid",
      gridTemplateColumns: ["1fr", "repeat(2, 1fr)", "repeat(3, 1fr)"],
      gap: 4,
      p: 3,
    },
    fourColumn: {
      display: "grid",
      gridTemplateColumns: ["1fr", "repeat(2, 1fr)", "repeat(4, 1fr)"],
      gap: 3,
      p: 4,
    },
    sixColumn: {
      display: "grid",
      gridTemplateColumns: [
        "1fr",
        "repeat(2, 1fr)",
        "repeat(3, 1fr)",
        "repeat(6, 1fr)",
      ],
      gap: 3,
      p: 4,
    },
    sizes: {
      narrow: "695px",
      wide: "950px",
      full: "100%",
      container: "900px",
    },
  },

  // Section Variants
  section: {
    default: {
      py: [4, 5, 6],
      px: [3, 4, 5],
      bg: "background",
      color: "text",
    },
    highlight: {
      py: [5, 6],
      px: [4, 5],
      bg: "highlight",
      color: "background",
    },
    muted: {
      py: [4, 5],
      px: [2, 3, 4],
      bg: "muted",
      color: "text",
      borderRadius: "default",
    },
    primary: {
      py: [6, 7],
      px: [5, 6],
      bg: "primary",
      color: "background",
      boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
    },
  },

  // Spacer and Utility Variants
  spacer: {
    small: {
      height: 2,
    },
    medium: {
      height: 4,
    },
    large: {
      height: 8,
    },
  },
}

export default variants
