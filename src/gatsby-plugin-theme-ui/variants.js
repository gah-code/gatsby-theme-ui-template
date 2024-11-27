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
  grid: {
    default: {
      display: "grid",
      gridTemplateColumns: ["1fr", "1fr", "repeat(2, 1fr)", "repeat(3, 1fr)"], // 1 column on mobile, 2 on tablets, 3 on desktops
      gap: 3, // Use the `space` scale
      p: 2,
    },
    twoColumn: {
      display: "grid",
      gridTemplateColumns: ["1fr", "1fr", "repeat(2, 1fr)"], // 1 column on mobile, 2 on larger screens
      gap: 3,
      p: 3,
    },
    threeColumn: {
      display: "grid",
      gridTemplateColumns: ["1fr", "repeat(2, 1fr)", "repeat(3, 1fr)"], // 1 column on mobile, 2 on tablets, 3 on desktops
      gap: 4,
      p: 3,
    },
    fourColumn: {
      display: "grid",
      gridTemplateColumns: ["1fr", "repeat(2, 1fr)", "repeat(4, 1fr)"], // 1 column on mobile, 2 on tablets, 4 on desktops
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
      ], // 1 column on mobile, 2 on tablets, 3 on laptops, 6 on desktops
      gap: 3,
      p: 4,
    },
  },
}

export default variants
