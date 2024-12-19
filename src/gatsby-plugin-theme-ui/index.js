import colors from "./colors"
import typography from "./typography"
import space from "./space"
import radii from "./radii"
import buttons from "./buttons"
import forms from "./forms"
import text from "./text"
import styles from "./styles"
import variants from "./variants"

const theme = {
  config: {
    // Enable CSS variables and automatic system color mode detection
    useCustomProperties: true,
    useColorSchemeMediaQuery: true,
    initialColorModeName: "light",
  },
  colors, // Define primary, secondary, background, and other color modes
  ...typography, // Fonts, font sizes, weights, and line heights
  space, // Spacing scale (margin/padding)
  radii, // Border radius values
  buttons, // Button styles and variants
  forms, // Input, textarea, and select styles
  text, // Text styles (e.g., heading, display)
  styles, // Global styles and reset rules
  ...variants, // Component-specific variants (e.g., cards, grids, badges)
  breakpoints: ["32em", "48em", "64em", "80em"], // Responsive design breakpoints
  sizes: {
    container: "900px", // Default width for most layouts
    full: "100%", // Full viewport width
    narrow: "600px", // For blog posts or smaller layouts
    wide: "950px", // For content-heavy sections
    content: "80%", // Percentage-based width for text-heavy content
    sidebar: "300px", // Fixed width for sidebars
    card: "320px", // Default card width
  },
}

export default theme
