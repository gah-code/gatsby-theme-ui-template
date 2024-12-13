/** @jsxImportSource theme-ui */
import { Profiler, memo } from "react"
import ColorModeToggle from "../ColorModeToggle"
import { debounce } from "lodash"
import "../../styles/global.css"
import { ThemeUIProvider } from "theme-ui"
import theme from "../../gatsby-plugin-theme-ui"
import GlobalStyles from "./GlobalStyles"
import Header from "../ui/Header"
import { Box } from "theme-ui"
import Main from "../ui/Main"
import Footer from "../ui/Footer"

// Debounced profiler callback
const debouncedRenderCallback = debounce((id, phase, actualDuration) => {
  console.log(`Profiler [${id}] - Phase: ${phase}, Duration: ${actualDuration}`)
}, 200)

const Layout = ({ children, themeMode }) => {
  return (
    <Profiler id="ColorModeToggle" onRender={debouncedRenderCallback}>
      <ThemeUIProvider theme={theme}>
        <GlobalStyles />

        <Box
          sx={{
            fontFamily: "body",
            bg: "background",
            color: "text",
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* <ColorModeToggle value={themeMode} /> */}

          {/* <Header /> */}
          <Header themeMode={themeMode} />

          <Main>{children}</Main>

          <Footer />
        </Box>
      </ThemeUIProvider>
    </Profiler>
  )
}

export default memo(Layout)
