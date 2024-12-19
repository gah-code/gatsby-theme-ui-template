import Layout from "../components/layout/Layout"
import Showcase from "../components/showcase"
import VariantsShowcase from "../components/variants"
import BreakpointShowcase from "../components/BreakpointShowcase"
import { SEO } from "../components/seo"
import { Box, Flex, Text, Button } from "theme-ui"
import Heading from "../components/util/Heading"
import Hero from "../components/ui/hero/Hero"
import Section from "../components/util/Section"
import Paragraph from "../components/util/Paragraph"

const IndexPage = () => (
  <Layout>
    <Box sx={{ maxWidth: "900px", mx: "auto", p: [3, 4] }}>
      {/* <Hero
        title="Elevate Your UI with Multi-Mode Themes & Dynamic Styling"
        // subtitle="Seamlessly switch between color modes, experiment with different typography scales, and enjoy a unified design system that drives all your site’s components. Whether you’re building a blog, portfolio, or documentation site, this starter offers a strong foundation for scalability and customization."
        subtitle="Emphasize benefits like accessibility, scalability, and ease of customization"
        primaryLink={{
          label: "Get Started",
          href: "/setup-guide", // Link to the setup guide or demo page
        }}
        secondaryLink={{
          label: "Explore Features",
          href: "#features", // Anchor link to the features section
        }}
      /> */}

      <Hero
        title="Elevate Your UI with Multi-Mode Themes & Dynamic Styling"
        subtitle="Emphasize benefits like accessibility, scalability, and ease of customization"
        primaryLink={{ label: "Get Started", href: "/setup-guide" }}
        secondaryLink={{ label: "Explore Features", href: "#features" }}
        bg="muted"
        color="text"
      />

      <Section
      // sx={{
      //   display: "flex",
      //   flexDirection: "column",
      //   alignItems: "center", // Horizontal alignment
      //   justifyContent: "center", // Vertical alignment
      //   // textAlign: "center",
      //   textAlign: ["left", "justify"], // Left-align on small screens, justify on larger screens

      //   // textAlign: "justify",

      //   // minHeight: "200px",
      //   mx: "auto", // Center horizontally
      // }}
      >
        <Heading as="h2" sx={{ fontSize: [4, 5], mb: 2 }}>
          Welcome!
        </Heading>
        <Paragraph sx={{ color: "text", fontWeight: "bold" }}>
          This project is a Gatsby starter configured with Theme UI to showcase
          customizable color modes, reusable components, styled UI elements, and
          syntax highlighting. It includes a modular theme structure with
          reusable configurations for colors, typography, spacing, and more.
        </Paragraph>
      </Section>

      <Section>
        <Heading as="h2" sx={{ fontSize: [3, 5], mb: 2 }}>
          Features Overview
        </Heading>
        <Paragraph
          sx={{
            lineHeight: "body",
          }}
        >
          Discover the powerful features of our design system, crafted to
          empower designers and developers alike. From dynamic components to
          unified typography, our tools ensure scalability, consistency, and
          creative flexibility in your projects.
        </Paragraph>
      </Section>

      <Box>
        <Box variant="buttons.primary">Primary Button</Box>
        <Box variant="text.paragraph">This is a paragraph.</Box>
        <Box variant="grid.twoColumn">
          <Box>Item 1</Box>
          <Box>Item 2</Box>
        </Box>
        <Box variant="section.default">Default Section</Box>
      </Box>

      <Section>
        <Paragraph>
          This is a default paragraph with the "paragraph" variant styles.
        </Paragraph>
        <Paragraph as="small" variant="small">
          This is a small, italic paragraph styled using the "small" variant.
        </Paragraph>
        <Paragraph sx={{ color: "primary", fontWeight: "bold" }}>
          This paragraph overrides the default styling with custom styles.
        </Paragraph>
        <Paragraph
          as="blockquote"
          sx={{ fontStyle: "italic", pl: 3, borderLeft: "2px solid" }}
        >
          "This is a blockquote styled as a paragraph."
        </Paragraph>
      </Section>

      <Section title="Highlight Section" variant="highlight">
        This section uses the highlight variant for a unique look.
      </Section>

      <Section title="Muted Section" variant="muted" bg="muted" color="primary">
        This section uses the muted variant but overrides the background and
        text colors.
      </Section>

      <Section title="Full Width Section" variant="primary">
        This section spans a larger area and has a primary background with a
        shadow.
      </Section>

      {/* Features Section */}
      <Section title="Multi-Mode Color Themes" variant="primary">
        Choose vibrant or subtle palettes to suit your needs
      </Section>

      {/* Testimonials Section */}
      <Section width="narrow" sx={{ bg: "highlight", color: "background" }}>
        <h2>What People Say</h2>
        <blockquote>
          "This design system is fantastic for any project!"
        </blockquote>
      </Section>

      {/* Showcase Section */}
      <Section width="full" sx={{ bg: "primary", color: "background" }}>
        <h2>Our Work</h2>
        <p>
          Explore our projects and see how the design system performs in
          real-world applications.
        </p>
      </Section>

      <Section width="narrow" sx={{ bg: "muted", color: "text" }}>
        <h2>Portfolio</h2>
        <p>
          This section is styled with the "wide" width and custom background
          color.
        </p>
      </Section>
      <Section
        title="Multi-Mode Color Themes"
        width="narrow"
        sx={{ bg: "primary", color: "background" }}
      >
        <h2>Banner</h2>
        this section spans the full width of the screen.
      </Section>

      <Section title="Multi-Mode Color Themes" width="narrow">
        <p>This section spans the full width of the screen.</p>
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

      <br />
      <a href="./GridVariantsPage">Grid Pattern</a>
    </Box>
  </Layout>
)

export default IndexPage

export const Head = () => (
  <SEO
    title="Home Page | Multi-Mode Themes"
    description="Seamlessly switch between color modes, experiment with different typography scales, and enjoy a unified design system that drives all your sites components."
    pathname="/"
  />
)
