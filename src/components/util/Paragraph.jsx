/** @jsxImportSource theme-ui */
import PropTypes from "prop-types"
import { Text } from "theme-ui"

const Paragraph = ({
  children,
  as = "p",
  variant = "paragraph",
  sx,
  ...props
}) => (
  <Text
    as={as}
    variant={variant}
    sx={{
      my: 2, // Default vertical margin
      lineHeight: "body", // Use lineHeight from theme
      fontSize: 2, // Default fontSize
      ...sx, // Allow for additional inline styles
    }}
    {...props}
  >
    {children}
  </Text>
)

Paragraph.propTypes = {
  children: PropTypes.node.isRequired,
  as: PropTypes.string, // HTML tag to render
  variant: PropTypes.string, // Text style variant from theme
  sx: PropTypes.object, // Additional inline styles
}

Paragraph.defaultProps = {
  as: "p",
  variant: "paragraph",
  sx: {},
}

export default Paragraph
