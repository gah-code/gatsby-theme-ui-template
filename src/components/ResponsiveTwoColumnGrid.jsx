/** @jsxImportSource theme-ui */
import { Grid, Box, Heading, Text } from "theme-ui"

const ResponsiveTwoColumnGrid = () => (
  <Grid
    gridGap={[2, 3, 4]} // Responsive gap: 8px (mobile), 16px (tablet), 32px (desktop)
    columns={[1, 1, 2]} // Single column on mobile, two columns on larger screens
    sx={{
      maxWidth: "container", // Limit width to theme container size
      mx: "auto", // Center horizontally
      px: [3, 4, 5], // Responsive horizontal padding
    }}
  >
    {[...Array(2)].map((_, i) => (
      <Box
        key={i}
        sx={{
          bg: "muted",
          p: [3, 4, 5], // Responsive padding: adjusts for mobile, tablet, desktop
          borderRadius: "8px", // Rounded corners
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Subtle shadow
          textAlign: "left", // Align content to the left
          transition: "transform 0.3s ease", // Smooth hover effect
          "&:hover": {
            transform: "translateY(-5px)", // Slight lift on hover
          },
        }}
      >
        <Heading as="h3" sx={{ fontSize: [2, 3, 4], color: "primary", mb: 2 }}>
          Heading {i + 1}
        </Heading>
        <Text sx={{ fontSize: [1, 2, 3], color: "text" }}>
          This is some responsive text for block {i + 1}. Resize the browser to
          see the layout adjust dynamically.
        </Text>
      </Box>
    ))}
  </Grid>
)

export default ResponsiveTwoColumnGrid
