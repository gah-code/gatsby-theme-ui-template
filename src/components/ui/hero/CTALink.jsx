/** @jsxImportSource theme-ui */
import PropTypes from "prop-types"
import { Link } from "gatsby"

const CTALink = ({ label, href, variant }) => (
  <Link
    to={href}
    sx={{
      variant: `buttons.${variant}`,
      fontSize: [1, 2],
      textDecoration: "none",
      display: "inline-block",
      textAlign: "center",
      px: 3,
      py: 2,
      borderRadius: 5,
      border: 0,
      transition: "background-color 0.3s ease, color 0.3s ease",
      "&:hover": {
        bg: variant === "primary" ? "secondary" : "primary",
        color: "background",
      },
    }}
  >
    {label}
  </Link>
)

CTALink.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(["primary", "secondary"]).isRequired,
}

export default CTALink
