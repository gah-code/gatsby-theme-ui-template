// // /** @jsxImportSource theme-ui */
// // import PropTypes from "prop-types"

// // const Heading = ({
// //   as: Tag = "h2",
// //   variant = "heading", // Defaults to text.heading
// //   align = "left", // Default alignment
// //   children,
// //   sx = {},
// //   ...props
// // }) => (
// //   <Tag
// //     sx={{
// //       variant: `styles.${Tag}`, // Use styles.h1, styles.h2, etc.
// //       // variant: `text.${variant}`, // Maps to theme.text.heading, text.display, etc.
// //       textAlign: align,
// //       ...sx, // Custom inline styles
// //     }}
// //     {...props}
// //   >
// //     {children}
// //   </Tag>
// // )

// // Heading.propTypes = {
// //   as: PropTypes.string,
// //   variant: PropTypes.string,
// //   align: PropTypes.oneOf(["left", "center", "right"]),
// //   children: PropTypes.node.isRequired,
// //   sx: PropTypes.object,
// // }

// // export default Heading

// /** @jsxImportSource theme-ui */
// import PropTypes from "prop-types"

// const Heading = ({
//   as: Tag = "h2", // Dynamic tag (h1, h2, etc.)
//   variant = "heading", // Default variant from theme.text
//   align = "left", // Text alignment
//   children,
//   sx = {}, // Custom styles
//   ...props
// }) => (
//   <Tag
//     sx={{
//       variant: `text.${variant}`, // Uses theme.text for variants
//       textAlign: align, // Text alignment (left, center, right)
//       ...sx, // Inline styles for custom overrides
//     }}
//     {...props}
//   >
//     {children}
//   </Tag>
// )

// Heading.propTypes = {
//   as: PropTypes.string, // HTML tag (h1, h2, etc.)
//   variant: PropTypes.string, // Typography variant from theme.text
//   align: PropTypes.oneOf(["left", "center", "right"]), // Alignment options
//   children: PropTypes.node.isRequired, // Content inside heading
//   sx: PropTypes.object, // Inline styles
// }

// export default Heading

/** @jsxImportSource theme-ui */
import PropTypes from "prop-types"

const Heading = ({
  as: Tag = "h2", // Dynamic HTML tag (e.g., h1, h2)
  variant = "heading", // Default variant from theme.text
  align = "left", // Default alignment
  useGlobal = false, // Switch between text variants and global styles
  children,
  sx = {}, // Custom inline styles
  ...props
}) => (
  <Tag
    sx={{
      // Use global styles when useGlobal is true, else apply text variants
      variant: useGlobal ? `styles.${Tag}` : `text.${variant}`,
      textAlign: align, // Alignment: left, center, right
      ...sx, // Inline custom styles
    }}
    {...props}
  >
    {children}
  </Tag>
)

Heading.propTypes = {
  as: PropTypes.string, // HTML tag (h1, h2, etc.)
  variant: PropTypes.string, // Typography variant from theme.text
  align: PropTypes.oneOf(["left", "center", "right"]), // Alignment options
  useGlobal: PropTypes.bool, // Use global styles if true
  children: PropTypes.node.isRequired, // Content inside heading
  sx: PropTypes.object, // Inline styles for overrides
}

export default Heading
