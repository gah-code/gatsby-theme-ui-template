// /** @jsxImportSource theme-ui */
// import React from "react"
// import PropTypes from "prop-types"
// import { Box } from "theme-ui"

// const Code = ({ children, ...props }) => (
//   <Box
//     as="pre"
//     sx={{
//       fontFamily: "monospace",
//       fontSize: 1,
//       lineHeight: "body",
//       color: "text",
//       bg: "muted",
//       p: 3,
//       borderRadius: "default",
//       overflowX: "auto",
//       whiteSpace: "pre-wrap",
//     }}
//     {...props}
//   >
//     {children}
//   </Box>
// )

// Code.propTypes = {
//   children: PropTypes.node.isRequired,
// }

// export default Code

/** @jsxImportSource theme-ui */
import React from "react"
import PropTypes from "prop-types"
import { Box } from "theme-ui"

const Code = ({ children, as = "pre", ...props }) => (
  <Box
    as={as} // Use either <pre> or <code> dynamically
    sx={{
      variant: as === "pre" ? "styles.pre" : "styles.code", // Use theme styles
    }}
    {...props}
  >
    {children}
  </Box>
)

Code.propTypes = {
  children: PropTypes.node.isRequired,
  as: PropTypes.oneOf(["pre", "code"]), // Allows switching between <pre> and <code>
}

export default Code
