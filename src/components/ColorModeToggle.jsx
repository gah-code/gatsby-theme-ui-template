/** @jsxImportSource theme-ui */
import { useColorMode } from "theme-ui"
import { toggleColorMode, getCurrentColorMode } from "../utils/colorMode"

const modes = ["light", "dark", "purple", "pink", "forest"]

const ColorModeToggle = () => {
  const [mode, setMode] = useColorMode()

  return (
    <div sx={{ textAlign: "center", my: 3 }}>
      <label sx={{ display: "block", mb: 2, fontSize: 2 }}>
        Current Theme: <strong>{mode}</strong>
      </label>
      <select
        sx={{
          variant: "forms.select",
          p: 2,
          border: "1px solid",
          borderColor: "primary",
          borderRadius: "5px",
          bg: "background",
          color: "text",
          cursor: "pointer",
        }}
        value={mode}
        onChange={e => setMode(e.target.value)}
      >
        {modes.map(themeMode => (
          <option key={themeMode} value={themeMode}>
            {themeMode}
          </option>
        ))}
      </select>
    </div>
  )
}

export default ColorModeToggle
