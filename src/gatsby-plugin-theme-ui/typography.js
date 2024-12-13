const typography = {
  fonts: {
    body: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
    heading: "system-ui, sans-serif",
    monospace: "Menlo, monospace",
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.15,
    medium: 1,
  },
  letterSpacings: {
    heading: "-0.05em",
    caps: "0.1em",
  },
  links: {
    nav: {
      px: 3,
      py: 2,
      textTransform: "uppercase",
      letterSpacing: "0.1em",
      color: "background",
      "&:hover": {
        color: "secondary",
      },
      "&.active": {
        borderBottom: "2px solid",
        borderColor: "secondary",
        color: "muted", // Your desired active color
        bg: "transparent",
      },
    },
  },
}

export default typography
