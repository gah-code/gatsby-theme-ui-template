/** @jsxImportSource theme-ui */
import PropTypes from "prop-types"
import { Box, Text } from "theme-ui"
import Heading from "./Heading"
import Section from "./Section"

const SectionBlock = ({
  heading,
  subtitle,
  paragraph,
  listItems = [],
  headingVariant = "heading",
  subtitleVariant = "hero",
  align = "left",
  sx = {},
}) => {
  return (
    <Section
      sx={{
        // py: [3, 5],
        px: [3],
        py: [4],
        bg: "background",
        // color: "text",
        // borderRadius: "default",
        // boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        ...sx, // Allow custom styles to be passed in
      }}
    >
      {/* Subtitle */}
      {subtitle && (
        <Heading
          as="h3"
          variant={subtitleVariant}
          align={align}
          sx={{
            fontSize: [1, 2],
            mb: 3,
            textTransform: "uppercase",
            letterSpacing: ".1em",
            fontWeight: "400",
          }}
        >
          {subtitle}
        </Heading>
      )}

      {/* Heading */}
      {heading && (
        <Heading
          as="h2"
          variant={headingVariant}
          align={align}
          sx={{ fontSize: [4, 5, 6], mb: 3 }}
        >
          {heading}
        </Heading>
      )}

      {/* Paragraph */}
      {paragraph && (
        <Text
          as="p"
          sx={{
            fontSize: [3],
            lineHeight: "body",
            mb: 3,
          }}
        >
          {paragraph}
        </Text>
      )}

      {/* List */}
      {listItems.length > 0 && (
        <Box
          as="ul"
          sx={{
            listStyle: "none",
            pl: 0,
            m: 0,
            // borderLeft: "1px solid",
            // borderColor: "primary",
          }}
        >
          {listItems.map((item, index) => (
            <Text
              as="li"
              key={index}
              sx={{
                pl: 1,
                py: 1,
                color: "text",
                fontSize: [2],
                "&:before": {
                  content: '"•"',
                  color: "primary",
                  fontWeight: "bold",
                  display: "inline-block",
                  width: "1em",
                  mr: "0.5em",
                },
              }}
            >
              {item}
            </Text>
          ))}
        </Box>
      )}
    </Section>
  )
}

// Prop Types
SectionBlock.propTypes = {
  heading: PropTypes.string,
  subtitle: PropTypes.string,
  paragraph: PropTypes.string,
  listItems: PropTypes.arrayOf(PropTypes.string),
  headingVariant: PropTypes.string,
  subtitleVariant: PropTypes.string,
  align: PropTypes.oneOf(["left", "center", "right"]),
  sx: PropTypes.object, // Allow additional styles
}

export default SectionBlock
