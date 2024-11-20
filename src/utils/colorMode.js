import { useColorMode } from "theme-ui"

/**
 * Sets the application into a specific color mode.
 * @param {string} mode - The color mode to set (e.g., 'light', 'dark', 'purple').
 */
export const setColorMode = mode => {
  if (typeof window !== "undefined") {
    window.localStorage.setItem("theme-ui-color-mode", mode)
    document.documentElement.setAttribute("data-theme-ui-color-mode", mode)
  }
}

/**
 * Resets the color mode to the system preference.
 */
export const resetColorModeToSystem = () => {
  if (typeof window !== "undefined") {
    window.localStorage.removeItem("theme-ui-color-mode")
    const systemPreference = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light"
    setColorMode(systemPreference)
  }
}

/**
 * Toggles to the next color mode in the list.
 * @param {string[]} modes - An array of available color modes.
 * @param {string} currentMode - The current color mode.
 */
export const toggleColorMode = (modes, currentMode) => {
  if (!Array.isArray(modes) || modes.length === 0) return
  const currentIndex = modes.indexOf(currentMode)
  const nextMode = modes[(currentIndex + 1) % modes.length]
  setColorMode(nextMode)
}

/**
 * Retrieves the current color mode.
 * @returns {string} - The current color mode.
 */
export const getCurrentColorMode = () => {
  if (typeof window !== "undefined") {
    return window.localStorage.getItem("theme-ui-color-mode") || "light"
  }
  return "light"
}
