/** @jsxImportSource theme-ui */
import { useColorMode } from "theme-ui"
// import { useMemo } from "react"

const modes = ["light", "dark", "forest", "purple"]

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
