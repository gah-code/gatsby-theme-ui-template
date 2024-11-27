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
    useCustomProperties: true,
    useColorSchemeMediaQuery: true,
    initialColorModeName: "light",
  },
  colors,

  ...typography,
  space,
  radii,
  buttons,
  forms,
  text,
  styles,

  ...variants, // Spread variants into the theme
  breakpoints: ["32em", "48em", "64em", "80em"],

  sizes: {
    container: "900px", // Default container width
    full: "100%",
    narrow: "695px",
    wide: "950px",
    content: "80%", // Common content width
    sidebar: "300px", // Fixed sidebar size
    card: "320px", // Card component size
  },
}

export default theme
