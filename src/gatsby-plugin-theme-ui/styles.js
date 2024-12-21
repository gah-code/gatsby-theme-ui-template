import customSyntaxTheme from "./syntax"

const styles = {
  root: {
    fontFamily: "body",
    lineHeight: "body",
    fontWeight: "body",
  },
  h1: {
    fontSize: [7, 8, 9], // 40px → 48px → 64px (Responsive scaling at breakpoints)
    fontFamily: "heading", // Uses the 'heading' font family from the theme
    fontWeight: "heading", // Bold weight for strong emphasis
    lineHeight: "heading", // Compact line height for headings
    color: "text", // Default text color
    mt: 3, // Top margin (16px, based on space scale)
    mb: 3, // Bottom margin (16px, based on space scale)
  },

  h2: {
    fontSize: [6, 7, 8], // 32px → 40px → 48px (Scales dynamically)
    fontFamily: "heading",
    fontWeight: "heading",
    lineHeight: "heading",
    color: "primary", // Primary color for differentiation
    mt: [2, 1], // Top margin: 8px → 4px (Adjusts spacing on smaller screens)
    mb: 3, // Bottom margin: 16px
  },

  h3: {
    fontSize: [5, 6, 7], // 24px → 32px → 40px (Responsive font sizes)
    fontFamily: "heading",
    fontWeight: "heading",
    color: "secondary", // Secondary color for hierarchy
  },

  h4: {
    fontSize: [4, 5, 6], // 20px → 24px → 32px (For subheadings or feature titles)
    fontFamily: "heading",
    fontWeight: "heading",
  },

  h5: {
    fontSize: [3, 4, 5], // 16px → 20px → 24px (For captions or subtitles)
    fontFamily: "heading",
    fontWeight: "heading",
    color: "accent", // Accent color for highlights
  },

  h6: {
    fontSize: [2, 3, 4], // 14px → 16px → 20px (Smallest heading, often used for meta info)
    fontFamily: "heading",
    fontWeight: "heading",
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
    // whiteSpace: "pre-wrap", // Preserves line breaks and prevents overflow
  },
  "& .keyword": { color: "secondary" },
  "& .function": { color: "primary", fontWeight: "bold" },

  code: {
    ...customSyntaxTheme, // Include custom syntax styles
    fontFamily: "monospace",
    fontSize: 2,
    color: "text",
    fontWeight: "bold",

    // bg: "highlight",
    padding: "2px 4px",
    borderRadius: "default",
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
