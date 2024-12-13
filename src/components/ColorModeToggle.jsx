/** @jsxImportSource theme-ui */
import { useColorMode, Box, Select } from "theme-ui"

const modes = ["light", "dark", "forest", "purple"]

const ColorModeToggle = ({ onModeChange }) => {
  const [mode, setMode] = useColorMode()

  const handleChange = e => {
    const newMode = e.target.value
    setMode(newMode)
    if (onModeChange) {
      onModeChange() // Notify parent component that mode changed
    }
  }

  return (
    <Box sx={{ textAlign: "center", my: 3 }}>
      <Select
        value={mode}
        onChange={handleChange}
        variant="select" // Uses the select variant from theme.forms
        arrow={
          <Box
            as="svg"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentcolor"
            sx={{
              ml: -28,
              alignSelf: "center",
              pointerEvents: "none",
            }}
            viewBox="0 0 24 24"
          >
            <path d="M7.41 7.84l4.59 4.58 4.59-4.58 1.41 1.41-6 6-6-6z" />
          </Box>
        }
        sx={{
          borderColor: "primary",
          bg: "background",
          color: "text",
          cursor: "pointer",
          width: "auto",
          display: "inline-block",
        }}
      >
        {modes.map(themeMode => (
          <option key={themeMode} value={themeMode}>
            {themeMode.charAt(0).toUpperCase() + themeMode.slice(1)}
          </option>
        ))}
      </Select>
    </Box>
  )
}

export default ColorModeToggle
