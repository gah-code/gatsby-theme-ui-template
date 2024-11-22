// /** @jsxImportSource theme-ui */
// import { ThemeUIProvider, useColorMode } from "theme-ui"
// import ColorModeToggle from "./ColorModeToggle"
// // import Layout from "./layout"

// import { MDXProvider } from "@mdx-js/react"
// import { toggleColorMode, getCurrentColorMode } from "../utils/colorMode"
// import theme from "../gatsby-plugin-theme-ui"

// const colorModes = ["light", "dark", "purple", "pink", "forest"]

// const components = {
//   h1: props => <h1 sx={{ variant: "styles.h1" }} {...props} />,
//   pre: props => <div {...props} />,
//   code: props => <code sx={{ variant: "styles.code" }} {...props} />,
// }

// const PostLayout = ({ children }) => {
//   const [colorMode] = useColorMode()

//   const handleToggle = () => {
//     toggleColorMode(colorModes, colorMode)
//   }

//   return (
//     <ThemeUIProvider theme={theme}>
//       <MDXProvider components={components}>
//         <div>
//           test
//           <header
//             sx={{
//               bg: "secondary",
//               color: "background",
//               p: 3,
//               textAlign: "center",
//             }}
//           >
//             <h1>Post Layout</h1>
//             <button
//               onClick={handleToggle}
//               sx={{
//                 variant: "buttons.primary",
//                 cursor: "pointer",
//                 mt: 3,
//               }}
//             >
//               Toggle Mode ({colorMode})
//             </button>
//           </header>
//           <main sx={{ p: 4 }}>{children}</main>
//         </div>
//       </MDXProvider>
//     </ThemeUIProvider>
//   )
// }

// export default PostLayout
