/** @jsxImportSource theme-ui */
import ColorModeToggle from "./ColorModeToggle"

const Layout = ({ children }) => {
  return (
    <div>
      <header
        sx={{
          bg: "primary",
          color: "background",
          p: 3,
          textAlign: "center",
        }}
      >
        <ColorModeToggle />
      </header>
      <main sx={{ p: 4 }}>{children}</main>
    </div>
  )
}

export default Layout
