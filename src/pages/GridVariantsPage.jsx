/** @jsxImportSource theme-ui */
import { Grid, Box, Heading, Text, Image, Button } from "theme-ui"
import Layout from "../components/layout/Layout"

const GridVariantsPage = () => {
  const twoColumnContent = [
    { title: "Item 1", description: "This is a description for item 1." },
    { title: "Item 2", description: "This is a description for item 2." },
  ]

  const threeColumnContent = [
    { title: "Item 1", image: "https://via.placeholder.com/150" },
    { title: "Item 2", image: "https://via.placeholder.com/150" },
    { title: "Item 3", image: "https://via.placeholder.com/150" },
  ]

  const fourColumnContent = [
    { icon: "⭐", label: "Feature 1" },
    { icon: "🔥", label: "Feature 2" },
    { icon: "🚀", label: "Feature 3" },
    { icon: "⚡", label: "Feature 4" },
  ]

  const sixColumnContent = ["A", "B", "C", "D", "E", "F"]

  return (
    <Layout>
      <div
        sx={{
          maxWidth: "container",
          mx: "auto",
          px: [2, 4],
          py: 4,
        }}
      >
        <Heading as="h1" sx={{ mb: 4 }}>
          Grid Variants Showcase
        </Heading>

        {/* Two-Column Grid */}
        <Heading as="h2" sx={{ mb: 3 }}>
          Two-Column Grid
        </Heading>
        <Grid sx={{ variant: "grid.twoColumn" }}>
          {twoColumnContent.map((item, i) => (
            <Box
              key={i}
              sx={{
                bg: "muted",
                p: 3,
                borderRadius: "8px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                textAlign: "center",
              }}
            >
              <Heading as="h3" sx={{ fontSize: 3, color: "primary", mb: 2 }}>
                {item.title}
              </Heading>
              <Text>{item.description}</Text>
            </Box>
          ))}
        </Grid>

        {/* Three-Column Grid */}
        <Heading as="h2" sx={{ mt: 5, mb: 3 }}>
          Three-Column Grid
        </Heading>
        <Grid sx={{ variant: "grid.threeColumn" }}>
          {threeColumnContent.map((item, i) => (
            <Box
              key={i}
              sx={{
                bg: "muted",
                p: 3,
                borderRadius: "8px",
                textAlign: "center",
              }}
            >
              <Image
                src={item.image}
                alt={item.title}
                sx={{ width: "100%", height: "auto", mb: 3 }}
              />
              <Heading as="h3" sx={{ fontSize: 3, color: "primary" }}>
                {item.title}
              </Heading>
            </Box>
          ))}
        </Grid>

        {/* Four-Column Grid */}
        <Heading as="h2" sx={{ mt: 5, mb: 3 }}>
          Four-Column Grid
        </Heading>
        <Grid sx={{ variant: "grid.fourColumn" }}>
          {fourColumnContent.map((item, i) => (
            <Box
              key={i}
              sx={{
                bg: "muted",
                p: 3,
                borderRadius: "8px",
                textAlign: "center",
              }}
            >
              <Text sx={{ fontSize: 5 }}>{item.icon}</Text>
              <Text>{item.label}</Text>
            </Box>
          ))}
        </Grid>

        {/* Six-Column Grid */}
        <Heading as="h2" sx={{ mt: 5, mb: 3 }}>
          Six-Column Grid
        </Heading>
        <Grid sx={{ variant: "grid.sixColumn" }}>
          {sixColumnContent.map((item, i) => (
            <Box
              key={i}
              sx={{
                bg: "muted",
                p: 3,
                borderRadius: "8px",
                textAlign: "center",
              }}
            >
              <Text sx={{ fontSize: 4 }}>{item}</Text>
            </Box>
          ))}
        </Grid>
      </div>
    </Layout>
  )
}

export default GridVariantsPage
