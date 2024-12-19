/** @jsxImportSource theme-ui */
import PropTypes from "prop-types"
import { Box, Flex, Text } from "theme-ui"
import Heading from "../../util/Heading"
import CTALink from "./CTALink"
import CTAButton from "./CTAButton"

const HeroContent = ({
  title,
  subtitle,
  primaryLink,
  secondaryLink,
  onPrimaryClick,
}) => (
  <Box sx={{ mx: "auto", textAlign: "left", mb: 4 }}>
    <Heading
      as="h1"
      sx={{
        fontSize: [7, 8, 9], // Scales with breakpoints
        lineHeight: "heading",
        letterSpacing: "heading",
      }}
    >
      {title}
    </Heading>
    <Text
      as="p"
      sx={{
        fontSize: [3],
        lineHeight: "body",
        mb: [4],
        maxWidth: "450px",
        color: "text",
        mr: 2,
        // mx: "auto",
      }}
    >
      {subtitle}
    </Text>
    <Flex sx={{ justifyContent: "left", gap: [3, 4], flexWrap: "wrap" }}>
      {primaryLink && (
        <CTALink
          label={primaryLink.label}
          href={primaryLink.href}
          variant="primary"
        />
      )}
      {onPrimaryClick && (
        <CTAButton
          label="Click Me"
          onClick={onPrimaryClick}
          variant="primary"
        />
      )}
      {secondaryLink && (
        <CTALink
          label={secondaryLink.label}
          href={secondaryLink.href}
          variant="secondary"
        />
      )}
    </Flex>
  </Box>
)

HeroContent.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  primaryLink: PropTypes.shape({
    label: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
  }),
  secondaryLink: PropTypes.shape({
    label: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
  }),
  onPrimaryClick: PropTypes.func, // Optional click handler for CTAButton
}

HeroContent.defaultProps = {
  primaryLink: null,
  secondaryLink: null,
  onPrimaryClick: null,
}

export default HeroContent
