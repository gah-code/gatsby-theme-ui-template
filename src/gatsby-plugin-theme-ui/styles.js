import customSyntaxTheme from "./syntax"

const styles = {
  root: {
    fontFamily: "body",
    lineHeight: "body",
    fontWeight: "body",
  },
  h1: {
    fontSize: [40],
    fontFamily: "heading",
    fontWeight: "heading",
    lineHeight: "heading",
    color: "text",
    mt: 3,
    mb: 4,
  },

  h2: {
    fontSize: [32],
    fontFamily: "heading",
    fontWeight: "heading",
    lineHeight: "heading",
    color: "primary",
    mt: [2, 1],
    mb: 3,
  },
  h3: {
    variant: "text.heading",
    fontSize: 4,
    color: "secondary",
  },
  h4: {
    variant: "text.heading",
    fontSize: 3,
  },
  h5: {
    variant: "text.heading",
    fontSize: 2,
    color: "accent",
  },
  h6: {
    variant: "text.heading",
    fontSize: 1,
  },
  hero: {
    fontSize: [56, 64, 72], // Larger font sizes for hero sections
    fontFamily: "heading",
    fontWeight: "bold",
    lineHeight: 1.2,
    color: "primary",
    mt: 2,
    mb: 4,
    textAlign: "center", // Center-align by default
  },

  a: {
    color: "primary",
    "&:hover": {
      color: "secondary",
    },
  },
  pre: {
    fontFamily: "monospace",
    fontSize: 1,
    lineHeight: "body",
    color: "text",
    bg: "muted",
    p: 3,
    borderRadius: "default",
    overflowX: "auto", // Ensures horizontal scrolling for long lines
    whiteSpace: "pre-wrap", // Preserves line breaks and prevents overflow
  },
  ".highlight": {
    background: "hsla(50, 100%, 80%, 0.2)", // Custom highlight for code blocks
  },

  code: {
    ...customSyntaxTheme, // Include custom syntax styles
    fontFamily: "monospace",
    fontSize: 1,
  },
  footer: {
    bg: "primary",
    color: "background",
    a: {
      color: "background",
      textDecoration: "none",
      "&:hover": {
        color: "secondary",
      },
    },
  },
  // other styles...

  // other theme config...
}

export default styles
