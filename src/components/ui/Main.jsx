/** @jsxImportSource theme-ui */
import { Box } from "theme-ui"

const Main = props => (
  <Box
    as="main"
    sx={{
      display: "flex",
      flex: 1,
      px: [2, 3],
      pb: 4,
      alignItems: "center",
      borderBottom: "solid 1px",
      borderTop: "solid 1px",
      borderColor: "muted", // Use theme color tokens
    }}
    {...props}
  />
)

export default Main
