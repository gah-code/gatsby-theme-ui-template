import { render, screen, fireEvent } from "@testing-library/react"
import { ThemeUIProvider } from "theme-ui"
import theme from "../../gatsby-plugin-theme-ui"
import ColorModeToggle from "../ColorModeToggle"

test("cycles through color modes using the dropdown", () => {
  render(
    <ThemeUIProvider theme={theme}>
      <ColorModeToggle />
    </ThemeUIProvider>
  )

  // Find the select dropdown
  const dropdown = screen.getByRole("combobox")

  // Check the default value (light mode)
  expect(dropdown).toHaveValue("light")

  // Change to dark mode
  fireEvent.change(dropdown, { target: { value: "dark" } })
  expect(dropdown).toHaveValue("dark")

  // Change to purple mode
  fireEvent.change(dropdown, { target: { value: "purple" } })
  expect(dropdown).toHaveValue("purple")

  // Change to pink mode
  fireEvent.change(dropdown, { target: { value: "pink" } })
  expect(dropdown).toHaveValue("pink")
})
