// // import { useColorMode } from "theme-ui"

// // /**
// //  * Sets the application into a specific color mode.
// //  * @param {string} mode - The color mode to set (e.g., 'light', 'dark', 'purple').
// //  */
// // export const setColorMode = mode => {
// //   if (typeof window !== "undefined") {
// //     window.localStorage.setItem("theme-ui-color-mode", mode)
// //     document.documentElement.setAttribute("data-theme-ui-color-mode", mode)
// //   }
// // }

// // /**
// //  * Resets the color mode to the system preference.
// //  */
// // export const resetColorModeToSystem = () => {
// //   if (typeof window !== "undefined") {
// //     window.localStorage.removeItem("theme-ui-color-mode")
// //     const systemPreference = window.matchMedia("(prefers-color-scheme: dark)")
// //       .matches
// //       ? "dark"
// //       : "light"
// //     setColorMode(systemPreference)
// //   }
// // }

// // /**
// //  * Toggles to the next color mode in the list.
// //  * @param {string[]} modes - An array of available color modes.
// //  * @param {string} currentMode - The current color mode.
// //  */
// // export const toggleColorMode = (modes, currentMode) => {
// //   if (!Array.isArray(modes) || modes.length === 0) return
// //   const currentIndex = modes.indexOf(currentMode)
// //   const nextMode = modes[(currentIndex + 1) % modes.length]
// //   setColorMode(nextMode)
// // }

// // /**
// //  * Retrieves the current color mode.
// //  * @returns {string} - The current color mode.
// //  */
// // export const getCurrentColorMode = () => {
// //   if (typeof window !== "undefined") {
// //     return window.localStorage.getItem("theme-ui-color-mode") || "light"
// //   }
// //   return "light"
// // }

// import { useColorMode } from "theme-ui"
// import { useMemo } from "react"

// /**
//  * Sets the application into a specific color mode.
//  * @param {string} mode - The color mode to set (e.g., 'light', 'dark', 'purple').
//  */
// export const setColorMode = mode => {
//   if (typeof window !== "undefined") {
//     window.localStorage.setItem("theme-ui-color-mode", mode)
//     document.documentElement.setAttribute("data-theme-ui-color-mode", mode)
//   }
// }

// /**
//  * Resets the color mode to the system preference.
//  */
// export const resetColorModeToSystem = () => {
//   if (typeof window !== "undefined") {
//     window.localStorage.removeItem("theme-ui-color-mode")
//     const systemPreference = window.matchMedia("(prefers-color-scheme: dark)")
//       .matches
//       ? "dark"
//       : "light"
//     setColorMode(systemPreference)
//   }
// }

// /**
//  * Toggles to the next color mode in the list.
//  * Memoizes the result to avoid recalculating the next mode unnecessarily.
//  * @param {string[]} modes - An array of available color modes.
//  * @param {string} currentMode - The current color mode.
//  * @returns {Function} - A memoized function to toggle to the next mode.
//  */
// export const useToggleColorMode = (modes, currentMode) => {
//   return useMemo(() => {
//     if (!Array.isArray(modes) || modes.length === 0) return () => {}

//     return () => {
//       const currentIndex = modes.indexOf(currentMode)
//       const nextMode = modes[(currentIndex + 1) % modes.length]
//       setColorMode(nextMode)
//     }
//   }, [modes, currentMode])
// }

// /**
//  * Retrieves the current color mode, memoized for efficiency.
//  * @returns {string} - The current color mode.
//  */
// export const useCurrentColorMode = () => {
//   return useMemo(() => {
//     if (typeof window !== "undefined") {
//       return window.localStorage.getItem("theme-ui-color-mode") || "light"
//     }
//     return "light"
//   }, [])
// }

/** @jsxImportSource theme-ui */
import { useColorMode } from "theme-ui"

/**
 * Hook to toggle between color modes.
 * @param {string[]} modes - Available color modes.
 * @returns {Function} - Function to toggle color mode.
 */
export const useToggleColorMode = modes => {
  const [mode, setMode] = useColorMode()

  return () => {
    const currentIndex = modes.indexOf(mode)
    const nextMode = modes[(currentIndex + 1) % modes.length]
    setMode(nextMode)
  }
}

/**
 * Hook to retrieve the current color mode.
 * @returns {string} - Current color mode.
 */
export const useCurrentColorMode = () => {
  const [mode] = useColorMode()
  return mode
}
