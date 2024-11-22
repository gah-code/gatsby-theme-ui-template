/** @jsxImportSource theme-ui */
import { Profiler, memo } from "react"
import ColorModeToggle from "./ColorModeToggle"
import { debounce } from "lodash"
import "../styles/global.css"
import { ThemeUIProvider } from "theme-ui"
import theme from "../gatsby-plugin-theme-ui"

// Debounced profiler callback
const debouncedRenderCallback = debounce((id, phase, actualDuration) => {
  console.log(`Profiler [${id}] - Phase: ${phase}, Duration: ${actualDuration}`)
}, 200)

const Layout = ({ children, themeMode }) => {
  return (
    <Profiler id="ColorModeToggle" onRender={debouncedRenderCallback}>
      <ThemeUIProvider theme={theme}>
        <div
          sx={{
            fontFamily: "body",
            bg: "background",
            color: "text",
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <header
            sx={{
              bg: "primary",
              color: "background",
              p: 3,
              textAlign: "center",
            }}
          >
            <ColorModeToggle value={themeMode} />
          </header>
          <main sx={{ p: 4, flex: 1 }}>{children}</main>
        </div>
      </ThemeUIProvider>
    </Profiler>
  )
}

export default memo(Layout)
