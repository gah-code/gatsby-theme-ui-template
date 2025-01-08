/** @jsxImportSource theme-ui */
import PropTypes from "prop-types"
import { Box } from "theme-ui"

const Message = ({
  variant = "default", // Default message variant
  children,
  sx = {}, // Custom inline styles
  ...props
}) => (
  <Box
    sx={{
      mb: 1,
      variant: `messages.${variant}`, // Uses variants from theme.messages
      ...sx, // Allows additional custom styles
    }}
    {...props}
  >
    {children}
  </Box>
)

Message.propTypes = {
  variant: PropTypes.string, // Defines which message variant to use
  children: PropTypes.node.isRequired, // Content inside the message
  sx: PropTypes.object, // Custom inline styles
}

export default Message
