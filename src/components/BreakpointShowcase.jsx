/** @jsxImportSource theme-ui */
import { Box } from "theme-ui"

const BreakpointShowcase = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "200px",
        bg: ["primary", "secondary", "muted", "highlight"], // Colors for each breakpoint
        color: "background", // Text color for contrast
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        fontSize: [2, 3, 4], // Adjust font size for each breakpoint
        transition: "all 0.3s ease", // Smooth transitions between breakpoints
      }}
    >
      Resize your browser to see the color change!
    </Box>
  )
}

export default BreakpointShowcase
