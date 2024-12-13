/** @jsxImportSource theme-ui */
import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { Box, Flex } from "theme-ui"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          footerLinks {
            name
            path
          }
          socialLinks {
            name
            url
          }
        }
      }
    }
  `)

  const { footerLinks, socialLinks } = data.site.siteMetadata

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        p: 3,
        variant: "styles.footer",
      }}
      aria-label="Site Footer"
    >
      <Flex as="nav" aria-label="Footer Navigation" sx={{ gap: [2, 3] }}>
        {footerLinks.map(link => (
          <Link key={link.name} to={link.path} sx={{ p: 2 }}>
            {link.name}
          </Link>
        ))}
      </Flex>

      <Box sx={{ mx: "auto" }} />

      <Flex
        sx={{ gap: [2, 3], alignItems: "center", p: 2 }}
        aria-label="Social Profiles"
      >
        {socialLinks.map(social => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              textDecoration: "none",
              color: "inherit",
              "&:hover": { color: "secondary" },
            }}
            aria-label={`Visit my ${social.name} profile`}
          >
            {social.name}
          </a>
        ))}
      </Flex>

      <Box sx={{ p: 2 }}>
        © {new Date().getFullYear()} Gilberto Alejandro Haro
      </Box>
    </Box>
  )
}

export default Footer
