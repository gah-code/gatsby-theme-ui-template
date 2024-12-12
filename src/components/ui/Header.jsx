// import { Box, Heading } from "theme-ui"
// // import Nav from "./Nav"
// import Navigation from "./Navigation"
// // import Blurb from "../mdx/blurb.mdx"

// const Header = props => (
//   <>
//     <Box as="header" sx={{ textAlign: "center", pt: 5 }}>
//       {/* <Heading sx={{ fontSize: 6, pb: 2, px: 3 }} as="h1">
//         {config.title}
//       </Heading> */}
//       {/* <Heading sx={{ pb: 3, px: [3, 4] }}>Subtitle</Heading> */}
//       {/* <Box sx={{ pb: 3 }}>
//         <Blurb />
//         Blurb
//       </Box> */}
//       <Navigation />
//     </Box>
//   </>
// )

// export default Header

import * as React from "react"
import Navigation from "./Navigation"

const Header = ({ siteTitle = "My Site", themeMode }) => (
  <header style={{ margin: `0 auto` }}>
    <Navigation themeMode={themeMode} />
  </header>
)

export default Header
