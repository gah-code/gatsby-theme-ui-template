/** @jsxImportSource theme-ui */
import { ThemeUIProvider } from "theme-ui"

const InvertedBanner = props => (
  <ThemeUIProvider
    theme={{
      styles: {
        // style child elements
        h1: {
          fontSize: [5, 6, 7],
        },
      },
    }}
  >
    <div
      {...props}
      sx={{
        // swap colors for an inverted effect
        color: "background",
        bg: "primary",
        px: 3,
        py: 4,
      }}
    />
  </ThemeUIProvider>
)

export default InvertedBanner
