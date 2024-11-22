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
}

export default theme
