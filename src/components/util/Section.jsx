/** @jsxImportSource theme-ui */
import PropTypes from "prop-types"
import { Box, Text } from "theme-ui"
import Heading from "../util/Heading"

const Section = ({
  title,
  children,
  variant = "default",
  bg,
  color,
  ...props
}) => (
  <Box
    as="section"
    sx={{
      variant: `section.${variant}`, // Dynamically apply section variants
      bg, // Override background if passed
      color, // Override text color if passed
      py: [3, 4],
      px: [1, 3, 5],
    }}
    {...props}
  >
    {title && (
      <Box>
        <Heading
          as="h3"
          sx={{
            variant: `text.heading`, // Use heading variant from the theme
            mb: 2,
          }}
        >
          {title}
        </Heading>
      </Box>
    )}
    {children && (
      <Text sx={{ fontSize: [2, 3], lineHeight: "body" }}>{children}</Text>
    )}
  </Box>
)

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  variant: PropTypes.string, // Allows specifying section variants
  bg: PropTypes.string, // Background override
  color: PropTypes.string, // Text color override
}

Section.defaultProps = {
  variant: "default",
  bg: "background",
  color: "text",
}

export default Section
