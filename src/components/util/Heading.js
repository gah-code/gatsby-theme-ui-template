/** @jsxImportSource theme-ui */
import PropTypes from "prop-types"

const Heading = ({
  as: Tag = "h2",
  variant = "heading", // Defaults to text.heading
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
  variant: PropTypes.string,
  align: PropTypes.oneOf(["left", "center", "right"]),
  children: PropTypes.node.isRequired,
  sx: PropTypes.object,
}

export default Heading
