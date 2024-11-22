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
