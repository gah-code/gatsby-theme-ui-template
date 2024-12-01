import customSyntaxTheme from "./syntax"

const styles = {
  root: {
    fontFamily: "body",
    lineHeight: "body",
    fontWeight: "body",
  },
  h1: {
    fontSize: [48],
    fontFamily: "heading",
    fontWeight: "heading",
    lineHeight: "medium",
    color: "text",
    mt: 1,
    mb: 4,
  },
  h2: {
    fontSize: [32],
    fontFamily: "heading",
    fontWeight: "heading",
    lineHeight: "medium",
    color: "text",
    mt: [2, 1],
    mb: 3,
  },
  h3: {
    variant: "text.heading",
    fontSize: 4,
  },
  h4: {
    variant: "text.heading",
    fontSize: 3,
  },
  h5: {
    variant: "text.heading",
    fontSize: 2,
  },
  h6: {
    variant: "text.heading",
    fontSize: 1,
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
    color: "text",
    bg: "muted",
    p: 3,
    borderRadius: "default",
    overflow: "auto",
  },
  ".highlight": {
    background: "hsla(50, 100%, 80%, 0.2)", // Custom highlight for code blocks
  },

  code: {
    ...customSyntaxTheme, // Include custom syntax styles
    fontFamily: "monospace",
    fontSize: 1,
  },
}

export default styles
