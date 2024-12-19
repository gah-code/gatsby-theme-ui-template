// // /** @jsxImportSource theme-ui */
// // const Heading = ({ as: Tag = "h2", children, ...props }) => (
// //   <Tag sx={{ variant: `styles.${Tag}` }} {...props}>
// //     {children}
// //   </Tag>
// // )

// // export default Heading

// /** @jsxImportSource theme-ui */
// import PropTypes from "prop-types"

// const Heading = ({
//   as: Tag = "h2",
//   variant = "heading",
//   align = "left", // Default alignment is left

//   children,
//   sx = {},
//   ...props
// }) => (
//   <Tag
//     sx={{
//       variant: `text.${variant}`, // Connects to theme.text for typography
//       textAlign: align, // Dynamic text alignment (left, center, right)

//       ...sx, // Allows for custom inline styles
//     }}
//     {...props}
//   >
//     {children}
//   </Tag>
// )

// Heading.propTypes = {
//   as: PropTypes.string, // HTML tag to render
//   variant: PropTypes.string, // Variant from theme.text
//   align: PropTypes.oneOf(["left", "center", "right"]), // Text alignment options

//   children: PropTypes.node.isRequired, // Content inside the heading
//   sx: PropTypes.object, // Additional inline styles
// }

// export default Heading

/** @jsxImportSource theme-ui */
import PropTypes from "prop-types"

const Heading = ({
  as: Tag = "h2",
  align = "left", // Default alignment
  children,
  sx = {},
  ...props
}) => (
  <Tag
    sx={{
      variant: `styles.${Tag}`, // Use styles.h1, styles.h2, etc.
      textAlign: align,
      ...sx, // Custom inline styles
    }}
    {...props}
  >
    {children}
  </Tag>
)

Heading.propTypes = {
  as: PropTypes.string,
  align: PropTypes.oneOf(["left", "center", "right"]),
  children: PropTypes.node.isRequired,
  sx: PropTypes.object,
}

export default Heading
