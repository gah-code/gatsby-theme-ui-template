import * as React from "react"
import Navigation from "./Navigation"
import { Box } from "theme-ui"

const Header = ({ siteTitle = "MMT", themeMode }) => (
  <Box as="header" sx={{ bg: "primary" }}>
    <Navigation siteTitle={siteTitle} themeMode={themeMode} />
  </Box>
)

export default Header
