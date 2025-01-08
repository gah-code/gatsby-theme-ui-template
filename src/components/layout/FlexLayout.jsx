/** @jsxImportSource theme-ui */
import PropTypes from "prop-types"
import { Flex, Box } from "theme-ui"

const FlexLayout = ({
  direction = "row", // Flex direction: row or column
  justify = "flex-start", // Alignment along the main axis
  align = "flex-start", // Alignment along the cross axis
  gap = 3, // Spacing between items
  wrap = "nowrap", // Flex wrap (nowrap, wrap, wrap-reverse)
  children,
  sx = {}, // Custom styles
  ...props
}) => (
  <Flex
    sx={{
      flexDirection: direction, // Row or column layout
      justifyContent: justify, // Main axis alignment
      alignItems: align, // Cross-axis alignment
      flexWrap: wrap, // Wrapping behavior
      gap, // Spacing between items
      ...sx, // Additional styles
    }}
    {...props}
  >
    {children}
  </Flex>
)

FlexLayout.propTypes = {
  direction: PropTypes.oneOf([
    "row",
    "row-reverse",
    "column",
    "column-reverse",
  ]),
  justify: PropTypes.oneOf([
    "flex-start",
    "flex-end",
    "center",
    "space-between",
    "space-around",
    "space-evenly",
  ]),
  align: PropTypes.oneOf([
    "flex-start",
    "flex-end",
    "center",
    "baseline",
    "stretch",
  ]),
  gap: PropTypes.number,
  wrap: PropTypes.oneOf(["nowrap", "wrap", "wrap-reverse"]),
  children: PropTypes.node.isRequired,
  sx: PropTypes.object,
}

export default FlexLayout
