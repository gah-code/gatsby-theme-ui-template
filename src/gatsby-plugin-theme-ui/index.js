const theme = {
  config: {
    useCustomProperties: true,
    useColorSchemeMediaQuery: true,
    initialColorModeName: "light",
  },
  colors: {
    text: "#000",
    background: "#fff",
    primary: "#0070f3",
    secondary: "#ff4081",
    muted: "#f5f5f5",
    highlight: "#efefef",
    gray: "#666",
    accent: "#e91e63",
    modes: {
      dark: {
        text: "#fff",
        background: "#121212",
        primary: "#1e90ff",
        secondary: "#ff80ab",
        muted: "#1e1e1e",
        highlight: "#2b2b2b",
        gray: "#888",
        accent: "#ff4081",
      },
      purple: {
        text: "#ffffff",
        background: "#4a0072",
        primary: "#d500f9",
        secondary: "#7c4dff",
        muted: "#320049",
        highlight: "#5e007e",
        gray: "#aa99aa",
        accent: "#ff80cb",
      },
      pink: {
        text: "#3e2723",
        background: "#ff80ab",
        primary: "#ff4081",
        secondary: "#f8bbd0",
        muted: "#ffe4ec",
        highlight: "#ffd9e5",
        gray: "#b57584",
        accent: "#c51162",
      },
      forest: {
        text: "#ffffff",
        background: "#004d40",
        primary: "#00bfa5",
        secondary: "#a7ffeb",
        muted: "#00332c",
        highlight: "#00695c",
        gray: "#80cbc4",
        accent: "#4caf50",
      },
    },
  },
  fonts: {
    body: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
    heading: "'Georgia', serif",
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
    heading: 1.25,
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256],
  radii: {
    default: 4,
    circle: 99999,
  },
  buttons: {
    primary: {
      color: "background",
      bg: "primary",
      borderRadius: "default",
      "&:hover": {
        bg: "secondary",
      },
    },
    secondary: {
      color: "background",
      bg: "secondary",
      borderRadius: "default",
      "&:hover": {
        bg: "primary",
      },
    },
  },
  forms: {
    input: {
      borderColor: "gray",
      "&:focus": {
        borderColor: "primary",
        outline: "none",
        boxShadow: theme => `0 0 0 2px ${theme.colors.primary}`,
      },
    },
    select: {
      borderColor: "gray",
      "&:focus": {
        borderColor: "primary",
        outline: "none",
        boxShadow: theme => `0 0 0 2px ${theme.colors.primary}`,
      },
    },
    textarea: {
      borderColor: "gray",
      "&:focus": {
        borderColor: "primary",
        outline: "none",
        boxShadow: theme => `0 0 0 2px ${theme.colors.primary}`,
      },
    },
  },
  text: {
    heading: {
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "heading",
    },
    display: {
      fontSize: [5, 6],
      fontWeight: "heading",
      letterSpacing: "-0.02em",
      mt: 4,
    },
  },
  styles: {
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
    code: {
      fontFamily: "monospace",
      fontSize: 1,
    },
    inlineCode: {
      fontFamily: "monospace",
      color: "secondary",
    },
    table: {
      width: "100%",
      borderCollapse: "collapse",
      my: 4,
    },
    th: {
      textAlign: "left",
      borderBottomStyle: "solid",
      borderBottomWidth: "2px",
    },
    td: {
      textAlign: "left",
      borderBottomStyle: "solid",
      borderBottomWidth: "1px",
    },
  },
}

export default theme
