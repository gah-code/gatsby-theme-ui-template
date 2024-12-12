import Layout from "../components/layout/Layout"
import Showcase from "../components/showcase"
import VariantsShowcase from "../components/variants"
import BreakpointShowcase from "../components/BreakpointShowcase"
import { SEO } from "../components/seo"
import { Box, Flex, Text, Button } from "theme-ui"
import Heading from "../components/util/Heading"

const Hero = () => (
  <Box
    as="section"
    sx={{
      bg: "background",
      color: "text",
      // Increase vertical padding at larger breakpoints:
      py: [5, 6],
      // Increase horizontal padding and change at larger breakpoints:
      px: [3, 4, 5],
    }}
  >
    <Box
      sx={{
        // maxWidth: ["100%", "700px", "960px"],
        mx: "auto",
        textAlign: "center",
      }}
    >
      <Heading as="h1">
        Elevate Your UI with Multi-Mode Themes and Dynamic Styling
      </Heading>
      <Text
        as="p"
        sx={{
          // Scale font size at breakpoints: base -> 2, at 32em -> 3, at 64em -> 4
          fontSize: [2, 3, 4],
          lineHeight: "body",
          mb: 4,
        }}
      >
        Seamlessly switch between color modes, experiment with different
        typography scales, and enjoy a unified design system that drives all
        your site’s components. Whether you’re building a blog, portfolio, or
        documentation site, this starter offers a strong foundation for
        scalability and customization.
      </Text>
      <Flex sx={{ justifyContent: "center", gap: 3, flexWrap: "wrap" }}>
        <Button sx={{ variant: "buttons.primary", fontSize: [1, 2] }}>
          Try It Out
        </Button>
        <Button sx={{ variant: "buttons.secondary", fontSize: [1, 2] }}>
          Explore the Showcase
        </Button>
      </Flex>
    </Box>
  </Box>
)

const Section = ({ title, children, bg = "background", color = "text" }) => (
  <Box
    as="section"
    sx={{
      bg,
      color,
      // Responsive vertical and horizontal spacing
      py: [4, 5, 6],
      px: [3, 4, 5],
    }}
  >
    <Box>
      <Heading
        as="h2"
        sx={{
          variant: "text.heading",
          mb: 3,
          // Adjust heading size and color at larger breakpoints:
          fontSize: [4, 5],
          color: ["text", color],
        }}
      >
        {title}
      </Heading>
      <Text sx={{ fontSize: [2, 3], lineHeight: "body" }}>{children}</Text>
    </Box>
  </Box>
)

const IndexPage = () => (
  // <ThemeUIProvider theme={theme}>
  <Layout>
    <Box sx={{ maxWidth: "800px", mx: "auto", p: [3, 4, 5] }}>
      <Hero />

      <Section title="Multi-Mode Color Themes">
        Light, Dark, Purple, Pink, and Forest—pick the mode that suits your
        content’s personality. This starter lets you experiment with vibrant
        palettes or subtle hues. With just a few lines of configuration, create
        a look that resonates with your brand and audience.
      </Section>

      <Section title="Unified Typography & Design Tokens" bg="muted">
        Manage font families, sizes, weights, and line heights from a single
        source. Update the theme to instantly refresh your entire site’s
        typography. No more hunting down hardcoded font sizes— change it once,
        and it updates everywhere.
      </Section>

      <Section title="Dynamic Components & Variants">
        Buttons, forms, cards, badges, and more are defined as variants within
        the theme. Need a new button style or a unique card layout? Add it to
        the theme variants, and use it across your site with minimal effort.
        Consistency and scalability have never been easier.
      </Section>

      <Section
        title="MDX Integration & Syntax Highlighting"
        bg="highlight"
        color="background"
      >
        Combine content and presentation elegantly with MDX. Write Markdown and
        JSX together, creating rich, interactive pages. Enjoy built-in syntax
        highlighting powered by Theme UI and easily swap out presets for a
        coding theme that best matches your brand.
      </Section>

      <h1>Welcome to the Multi-Mode Theme</h1>
      <p>Toggle through various modes to explore Theme UI's flexibility.</p>
      <BreakpointShowcase />
      <Showcase />
      <VariantsShowcase />
      <a href="./posts">post</a>
      <br />
      <a href="./GridVariantsPage">Grid Pattern</a>
    </Box>
  </Layout>
  // </ThemeUIProvider>
)

export default IndexPage

export const Head = () => (
  <SEO title="Home Page" description="Home page" pathname="/" />
)
