const variants = {
  buttons: {
    primary: {
      fontWeight: "bold",
      color: "background",
      bg: "primary",
      borderRadius: "default",
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
  },
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
  boxes: {
    shout: {
      fontWeight: "bold",
      textTransform: "uppercase",
      bg: "highlight",
      p: 3,
      borderRadius: 4,
    },
  },
}

export default variants
