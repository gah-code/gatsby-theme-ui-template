const styles = {
  root: {
    fontFamily: "body",
    lineHeight: "body",
    fontWeight: "body",
  },
  h1: {
    variant: "text.display",
  },
  h2: {
    variant: "text.heading",
    fontSize: 5,
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
}

export default styles
