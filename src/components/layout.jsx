// // /** @jsxImportSource theme-ui */
// // import React, { Profiler } from "react"
// // import ColorModeToggle from "./ColorModeToggle"
// // import "./layout.css"

// // const onRenderCallback = (
// //   id, // The "id" prop of the Profiler tree that has just been committed
// //   phase, // Either "mount" (if the tree just mounted) or "update" (if it re-rendered)
// //   actualDuration, // Time spent rendering the committed update
// //   baseDuration, // Estimated time to render the entire subtree without memoization
// //   startTime, // When React began rendering this update
// //   commitTime, // When React committed this update
// //   interactions // The Set of interactions belonging to this update
// // ) => {
// //   console.log(`Profiler [${id}] - Phase: ${phase}`)
// //   console.log(`Actual Duration: ${actualDuration}`)
// // }

// // const Layout = ({ children }) => {
// //   return (
// //     <Profiler id="ColorModeToggle" onRender={onRenderCallback}>
// //       <div>
// //         <header
// //         // sx={{
// //         //   bg: "primary",
// //         //   color: "background",
// //         //   p: 3,
// //         //   textAlign: "center",
// //         // }}
// //         >
// //           <ColorModeToggle />
// //         </header>
// //         <main sx={{ p: 4 }}>{children}</main>
// //       </div>
// //     </Profiler>
// //   )
// // }

// // export default Layout

// /** @jsxImportSource theme-ui */
// import { Profiler, memo } from "react"
// import ColorModeToggle from "./ColorModeToggle"
// import { debounce } from "lodash"
// import "../styles/global.css"

// // Debounced Profiler Callback
// const debouncedRenderCallback = debounce(
//   (
//     id, // The "id" prop of the Profiler tree that has just been committed
//     phase, // Either "mount" (if the tree just mounted) or "update" (if it re-rendered)
//     actualDuration, // Time spent rendering the committed update
//     baseDuration, // Estimated time to render the entire subtree without memoization
//     startTime, // When React began rendering this update
//     commitTime, // When React committed this update
//     interactions // The Set of interactions belonging to this update
//   ) => {
//     console.log(`Profiler [${id}] - Phase: ${phase}`)
//     console.log(`Actual Duration: ${actualDuration}`)
//   },
//   200 // Debounce time
// )

// const Layout = ({ children }) => {
//   return (
//     <Profiler id="ColorModeToggle" onRender={debouncedRenderCallback}>
//       <div
//         sx={{
//           fontFamily: "body",
//           bg: "background",
//           color: "text",
//           minHeight: "100vh",
//           display: "flex",
//           flexDirection: "column",
//         }}
//       >
//         <header
//           sx={{
//             bg: "primary",
//             color: "background",
//             p: 3,
//             textAlign: "center",
//           }}
//         >
//           <ColorModeToggle />
//         </header>
//         <main sx={{ p: 4, flex: 1 }}>{children}</main>
//       </div>
//     </Profiler>
//   )
// }

// // Memoize Layout for consistent children
// export default memo(Layout)

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
