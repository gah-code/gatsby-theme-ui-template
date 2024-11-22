// // // /** @jsxImportSource theme-ui */
// // // // import { useColorMode } from "theme-ui"
// // // // import { toggleColorMode, getCurrentColorMode } from "../utils/colorMode"

// // // // const modes = ["light", "dark", "purple", "pink", "forest"]

// // // // const ColorModeToggle = () => {
// // // //   const [mode, setMode] = useColorMode()

// // // //   return (
// // // //     <div sx={{ textAlign: "center", my: 3 }}>
// // // //       <label sx={{ display: "block", mb: 2, fontSize: 2 }}>
// // // //         Current Theme: <strong>{mode}</strong>
// // // //       </label>
// // // //       <select
// // // //         sx={{
// // // //           variant: "forms.select",
// // // //           p: 2,
// // // //           border: "1px solid",
// // // //           borderColor: "primary",
// // // //           borderRadius: "5px",
// // // //           bg: "background",
// // // //           color: "text",
// // // //           cursor: "pointer",
// // // //         }}
// // // //         value={mode}
// // // //         onChange={e => setMode(e.target.value)}
// // // //       >
// // // //         {modes.map(themeMode => (
// // // //           <option key={themeMode} value={themeMode}>
// // // //             {themeMode}
// // // //           </option>
// // // //         ))}
// // // //       </select>
// // // //     </div>
// // // //   )
// // // // }

// // // // export default ColorModeToggle

// // // /** @jsxImportSource theme-ui */
// // // import { useColorMode } from "theme-ui"
// // // import { useEffect } from "react"

// // // const modes = ["light", "dark", "purple", "pink", "forest"]

// // // const ColorModeToggle = () => {
// // //   const [mode, setMode] = useColorMode()

// // //   useEffect(() => {
// // //     console.log(`Color mode updated: ${mode}`)
// // //   }, [mode])

// // //   return (
// // //     <div sx={{ textAlign: "center", my: 3 }}>
// // //       <label sx={{ display: "block", mb: 2, fontSize: 2 }}>
// // //         Current Theme: <strong>{mode}</strong>
// // //       </label>
// // //       <select
// // //         sx={{
// // //           variant: "forms.select",
// // //           p: 2,
// // //           border: "1px solid",
// // //           borderColor: "primary",
// // //           borderRadius: "5px",
// // //           bg: "background",
// // //           color: "text",
// // //           cursor: "pointer",
// // //         }}
// // //         value={mode}
// // //         onChange={e => setMode(e.target.value)}
// // //       >
// // //         {modes.map(themeMode => (
// // //           <option key={themeMode} value={themeMode}>
// // //             {themeMode}
// // //           </option>
// // //         ))}
// // //       </select>
// // //     </div>
// // //   )
// // // }

// // // export default ColorModeToggle

// // /** @jsxImportSource theme-ui */
// // import { useColorMode } from "theme-ui"
// // import { useEffect, useMemo } from "react"

// // const modes = ["light", "dark", "purple", "pink", "forest"]

// // const ColorModeToggle = () => {
// //   const [mode, setMode] = useColorMode()

// //   // Memoize the dropdown options to avoid recalculating on every render
// //   const modeOptions = useMemo(
// //     () =>
// //       modes.map(themeMode => (
// //         <option key={themeMode} value={themeMode}>
// //           {themeMode.charAt(0).toUpperCase() + themeMode.slice(1)}
// //         </option>
// //       )),
// //     []
// //   )

// //   useEffect(() => {
// //     console.log(`Color mode updated: ${mode}`)
// //   }, [mode])

// //   return (
// //     <div sx={{ textAlign: "center", my: 3 }}>
// //       <label sx={{ display: "block", mb: 2, fontSize: 2 }}>
// //         Current Theme: <strong>{mode}</strong>
// //       </label>
// //       <select
// //         sx={{
// //           variant: "forms.select",
// //           p: 2,
// //           border: "1px solid",
// //           borderColor: "primary",
// //           borderRadius: "5px",
// //           bg: "background",
// //           color: "text",
// //           cursor: "pointer",
// //         }}
// //         value={mode}
// //         onChange={e => setMode(e.target.value)}
// //       >
// //         {modeOptions}
// //       </select>
// //     </div>
// //   )
// // }

// // export default ColorModeToggle

// /** @jsxImportSource theme-ui */
// import { useColorMode } from "theme-ui"
// import { useEffect, useMemo, useCallback } from "react"
// import debounce from "lodash.debounce"

// const modes = ["light", "dark", "purple", "forest"]

// const ColorModeToggle = () => {
//   const [mode, setMode] = useColorMode()

//   // Debounce the setMode function to reduce unnecessary updates
//   const debouncedSetMode = useCallback(
//     debounce(value => setMode(value), 300),
//     [setMode]
//   )

//   // Memoize dropdown options to avoid recalculating on every render
//   const modeOptions = useMemo(
//     () =>
//       modes.map(themeMode => (
//         <option key={themeMode} value={themeMode}>
//           {themeMode.charAt(0).toUpperCase() + themeMode.slice(1)}
//         </option>
//       )),
//     []
//   )

//   useEffect(() => {
//     console.log(`Color mode updated: ${mode}`)
//     return () => debouncedSetMode.cancel() // Cleanup on unmount
//   }, [mode, debouncedSetMode])

//   return (
//     <div sx={{ textAlign: "center", my: 3 }}>
//       <label
//         htmlFor="color-mode-selector"
//         sx={{ display: "block", mb: 2, fontSize: 2 }}
//       >
//         Current Theme: <strong>{mode}</strong>
//       </label>
//       <select
//         id="color-mode-selector"
//         sx={{
//           variant: "forms.select",
//           p: 2,
//           border: "1px solid",
//           borderColor: "primary",
//           borderRadius: "5px",
//           bg: "background",
//           color: "text",
//           cursor: "pointer",
//         }}
//         value={mode}
//         onChange={e => debouncedSetMode(e.target.value)}
//       >
//         {modeOptions}
//       </select>
//     </div>
//   )
// }

// export default ColorModeToggle

/** @jsxImportSource theme-ui */
import { useColorMode } from "theme-ui"
import { useMemo } from "react"

const modes = ["light", "dark", "forest"]

// const ColorModeToggle = props => {
//   const [mode, setMode] = useColorMode()

//   // Memoize dropdown options
//   const modeOptions = useMemo(
//     () =>
//       modes.map(themeMode => (
//         <option key={themeMode} value={themeMode}>
//           {themeMode.charAt(0).toUpperCase() + themeMode.slice(1)}
//         </option>
//       )),
//     [] // Add `modes` as dependency if it may change
//   )
//   console.log("Current mode:", mode)

//   return (
//     <div sx={{ textAlign: "center", my: 3 }}>
//       <label htmlFor="color-mode-selector" sx={{ display: "block", mb: 2 }}>
//         Current Theme: <strong>{mode}</strong>
//       </label>
//       <select
//         id="color-mode-selector"
//         sx={{
//           variant: "forms.select",
//           border: "1px solid",
//           borderColor: "primary",
//           bg: "background",
//           color: "text",
//           cursor: "pointer",
//         }}
//         value={mode}
//         onChange={e => setMode(e.target.value)}
//       >
//         {modeOptions}
//       </select>
//     </div>
//   )
// }

const ColorModeToggle = () => {
  const [mode, setMode] = useColorMode()

  const handleChange = e => {
    const newMode = e.target.value
    setMode(newMode)
  }

  return (
    <div sx={{ textAlign: "center", my: 3 }}>
      <label htmlFor="color-mode-selector" sx={{ display: "block", mb: 2 }}>
        Current Theme: <strong>{mode}</strong>
      </label>
      <select
        id="color-mode-selector"
        sx={{
          variant: "forms.select",
          border: "1px solid",
          borderColor: "primary",
          bg: "background",
          color: "text",
          cursor: "pointer",
        }}
        value={mode}
        onChange={handleChange}
      >
        {modes.map(themeMode => (
          <option key={themeMode} value={themeMode}>
            {themeMode.charAt(0).toUpperCase() + themeMode.slice(1)}
          </option>
        ))}
      </select>
    </div>
  )
}

export default ColorModeToggle
