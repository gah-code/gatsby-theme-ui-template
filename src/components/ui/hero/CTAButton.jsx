/** @jsxImportSource theme-ui */
import PropTypes from "prop-types"
import { Button } from "theme-ui"

const CTAButton = ({ label, onClick, variant }) => (
  <Button
    onClick={onClick}
    sx={{
      variant: `buttons.${variant}`,
      fontSize: [1, 2],
      textDecoration: "none",
      display: "inline-block",
      textAlign: "center",
      px: 4,
      py: 2,
      borderRadius: 5,
      border: 0,

      transition: "background-color 0.3s ease, color 0.3s ease",
      cursor: "pointer",
      "&:hover": {
        bg: variant === "primary" ? "secondary" : "primary",
        color: "background",
      },
    }}
  >
    {label}
  </Button>
)

CTAButton.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  variant: PropTypes.oneOf(["primary", "secondary"]).isRequired,
}

export default CTAButton
