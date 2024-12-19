/** @jsxImportSource theme-ui */
import React from "react"
import PropTypes from "prop-types"
import { Box } from "theme-ui"

const Code = ({ children, ...props }) => (
  <Box
    as="pre"
    sx={{
      fontFamily: "monospace",
      fontSize: 1,
      lineHeight: "body",
      color: "text",
      bg: "muted",
      p: 3,
      borderRadius: "default",
      overflowX: "auto",
      whiteSpace: "pre-wrap",
    }}
    {...props}
  >
    {children}
  </Box>
)

Code.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Code
