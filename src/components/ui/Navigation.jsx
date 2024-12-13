/** @jsxImportSource theme-ui */
import { useState } from "react"
import { Flex, NavLink, Box, Button } from "theme-ui"
import { Link } from "gatsby"
import ColorModeToggle from "../ColorModeToggle"

const Navigation = ({ themeMode, siteTitle }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Post", path: "/posts" },
  ]

  return (
    <Flex
      as="nav"
      sx={{
        color: "background",
        py: 3,
        px: [3, 4, 5],
        // boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        justifyContent: "space-between",
        alignItems: "center",
        maxWidth: "container",
        mx: "auto",
      }}
    >
      {/* Logo */}
      <Link
        to="/"
        sx={{
          fontSize: 3,
          fontWeight: "bold",
          color: "background",
          textDecoration: "none",
          "&:hover": {
            color: "secondary",
          },
        }}
      >
        {siteTitle}
      </Link>

      {/* Hamburger Button for Mobile */}
      <Button
        onClick={() => setMenuOpen(prev => !prev)}
        // onClick={toggleMenu}
        sx={{
          display: ["block", "none"], // Show on small screens, hide on larger
          bg: "transparent",
          color: "background",
          border: "none",
          fontSize: 3,
          cursor: "pointer",
          "&:hover": {
            color: "secondary",
          },
        }}
        aria-label="Toggle Menu"
      >
        ☰
      </Button>

      <Flex
        // On mobile:
        // We'll use max-height and opacity for a smooth transition.
        // On large screens, just display the links normally.
        as="ul"
        sx={{
          listStyle: "none",
          display: [menuOpen ? "flex" : "none", "flex"], // Hide on mobile unless open, always show on larger screens
          flexDirection: ["column", "row"],
          gap: [2, 4],
          margin: 0,
          padding: 0,
          position: ["absolute", "static"],
          top: ["64px", "auto"], // Adjust top position when in mobile mode
          left: 0,
          right: 0,
          bg: ["primary", "transparent"], // Background color on mobile dropdown
          p: [3, 0], // Padding in mobile view
          zIndex: 9999,
          alignItems: ["start", "center"],

          // Transition properties for smooth animation
          transition: "max-height 0.3s ease, opacity 0.3s ease",
          overflow: "hidden",

          // On small screens:
          // When menuOpen is true, max-height is large, opacity is 1.
          // When false, max-height is 0 and opacity is 0.
          maxHeight: [menuOpen ? "300px" : "0px", "none"],
          opacity: [menuOpen ? 1 : 0, 1],
          pointerEvents: [menuOpen ? "auto" : "none", "auto"],

          // On larger screens, no height or opacity restrictions
          // It's always visible
        }}
      >
        {links.map(link => (
          <NavLink
            as={Link}
            key={link.name}
            to={link.path}
            activeClassName="active"
            variant="nav"
            sx={{
              width: ["100%", "auto"], // Full width on mobile, auto on desktop
              // "&:hover": {
              //   bg: ["secondary", "transparent"], // Highlight on hover in mobile mode
              //   color: ["background", "inherit"],
              // },
              px: [3, 0], // Add padding on mobile
              textAlign: ["left", "center"],
            }}
            onClick={() => setMenuOpen(false)} // Close menu on link click for mobile
          >
            {link.name}
          </NavLink>
        ))}

        {/* Color Mode Toggle - Move inside menu for mobile */}
        <Box sx={{ mt: [2, 0], ml: [0, 3], width: ["100%", "auto"] }}>
          <ColorModeToggle
            value={themeMode}
            onModeChange={() => setMenuOpen(false)} // Close the menu after color mode change
            sx={{
              cursor: "pointer",
              bg: "background",
              color: "text",
              p: 2,
              borderRadius: "default",
              border: "1px solid",
              borderColor: "muted",
              "&:hover": {
                bg: "secondary",
                color: "background",
              },
              width: ["100%", "auto"], // Full width on mobile
              display: "block",
            }}
          />
        </Box>
      </Flex>
    </Flex>
  )
}

export default Navigation
