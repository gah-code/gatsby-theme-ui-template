/** @jsxImportSource theme-ui */
/** @jsxImportSource theme-ui */
import { Flex, NavLink, Box } from "theme-ui"
import { Link } from "gatsby"
import ColorModeToggle from "../ColorModeToggle"

const Navigation = ({ themeMode }) => {
  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Post", path: "/posts" },
  ]

  return (
    <Flex
      as="nav"
      sx={{
        bg: "primary",
        color: "background",
        py: 3,
        px: [3, 4],
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
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
        MMT
        {/* Multi-Mode Theme */}
      </Link>

      <Flex sx={{ alignItems: "center" }}>
        {/* Navigation Links */}
        <Flex
          as="ul"
          sx={{
            listStyle: "none",
            display: "flex",
            gap: [2, 4],
            margin: 0,
            padding: 0,
          }}
        >
          {links.map(link => (
            <NavLink
              as={Link}
              key={link.name}
              to={link.path}
              activeClassName="active"
              variant="nav"
            >
              {link.name}
            </NavLink>
          ))}
        </Flex>

        {/* Color Mode Toggle */}
        <Box sx={{ ml: [3, 4] }}>
          <ColorModeToggle
            value={themeMode}
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
            }}
          />
        </Box>
      </Flex>
    </Flex>
  )
}

export default Navigation

// import { Flex, NavLink, Box } from "theme-ui"
// import { Link } from "gatsby"
// import ColorModeToggle from "../ColorModeToggle"

// const Navigation = () => {
//   const links = [
//     { name: "Home", path: "/" },
//     { name: "About", path: "/about" },
//     { name: "Post", path: "/posts" },
//     // { name: "Contact", path: "/contact" },
//   ]

//   return (
//     <Flex
//       as="nav"
//       sx={{
//         bg: "primary",
//         color: "background",
//         py: 3,
//         px: [3, 4],
//         boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
//         justifyContent: "space-between",
//         alignItems: "center",
//         maxWidth: "container",
//         mx: "auto",
//       }}
//     >
//       {/* Logo */}
//       <Link
//         to="/"
//         sx={{
//           fontSize: 4,
//           fontWeight: "bold",
//           color: "background",
//           textDecoration: "none",
//           "&:hover": {
//             color: "secondary",
//           },
//         }}
//       >
//         Multi-Mode Theme
//       </Link>

//       {/* Navigation Links */}
//       <Flex
//         as="ul"
//         sx={{
//           // flexDirection: ["column", "row"], // Stack on mobile, row on larger screens
//           listStyle: "none",
//           display: "flex",
//           gap: [3, 4],
//           margin: 0,
//           padding: 0,
//         }}
//       >
//         {links.map(link => (
//           <NavLink
//             as={Link}
//             key={link.name}
//             to={link.path}
//             activeClassName="active"
//             variant="nav" // Use the nav variant from theme.links
//           >
//             {link.name}
//           </NavLink>
//         ))}
//       </Flex>
//     </Flex>
//   )
// }

// export default Navigation

// import { useStaticQuery, graphql } from "gatsby"

// const Navigation = () => {
//   const data = useStaticQuery(graphql`
//     query {
//       site {
//         siteMetadata {
//           menuLinks {
//             name
//             path
//           }
//         }
//       }
//     }
//   `)

//   const links = data.site.siteMetadata.menuLinks
//   return <Flex as="nav"> {/* Map through links as shown above */}</Flex>
// }
