/** @jsxImportSource theme-ui */
import PropTypes from "prop-types"
import { Box } from "theme-ui"
import HeroContent from "./HeroContent"

const Hero = ({
  title,
  subtitle,
  primaryLink,
  secondaryLink,
  onPrimaryClick,
  color = "text",
}) => (
  <Box
    as="section"
    sx={{
      color,
      py: [1],
      px: [1, 3, 5],
      mt: 5,
    }}
  >
    <HeroContent
      title={title}
      subtitle={subtitle}
      primaryLink={primaryLink}
      secondaryLink={secondaryLink}
      onPrimaryClick={onPrimaryClick}
    />
  </Box>
)

Hero.propTypes = {
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
  color: PropTypes.string, // Text color
}

Hero.defaultProps = {
  primaryLink: null,
  secondaryLink: null,
  onPrimaryClick: null,
  color: "text",
}

export default Hero
