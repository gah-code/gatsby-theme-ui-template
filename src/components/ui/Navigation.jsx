/** @jsxImportSource theme-ui */
import { Flex, NavLink } from "theme-ui"
import { Link } from "gatsby"

const Navigation = () => {
  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Post", path: "/posts" },
    // { name: "Contact", path: "/contact" },
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
          fontSize: 4,
          fontWeight: "bold",
          color: "background",
          textDecoration: "none",
          "&:hover": {
            color: "secondary",
          },
        }}
      >
        Multi-Mode Theme
      </Link>

      {/* Navigation Links */}
      <Flex
        as="ul"
        sx={{
          // flexDirection: ["column", "row"], // Stack on mobile, row on larger screens
          listStyle: "none",
          display: "flex",
          gap: [3, 4],
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
            variant="nav" // Use the nav variant from theme.links
          >
            {link.name}
          </NavLink>
        ))}
      </Flex>
    </Flex>
  )
}

export default Navigation

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
