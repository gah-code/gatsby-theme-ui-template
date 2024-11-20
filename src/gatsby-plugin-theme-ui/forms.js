const forms = {
  input: {
    borderColor: "gray",
    "&:focus": {
      borderColor: "primary",
      outline: "none",
      boxShadow: theme => `0 0 0 2px ${theme.colors.primary}`,
    },
  },
  select: {
    borderColor: "gray",
    "&:focus": {
      borderColor: "primary",
      outline: "none",
      boxShadow: theme => `0 0 0 2px ${theme.colors.primary}`,
    },
  },
  textarea: {
    borderColor: "gray",
    "&:focus": {
      borderColor: "primary",
      outline: "none",
      boxShadow: theme => `0 0 0 2px ${theme.colors.primary}`,
    },
  },
}

export default forms
