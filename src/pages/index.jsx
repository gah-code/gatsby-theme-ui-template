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
import SectionBlock from "../components/util/SectionBlock"
import InvertedBanner from "../components/ui/InvertedBanner"
import Code from "../components/Code"
import CodeBlock from "../components/CodeBlock"

const IndexPage = () => (
  <Layout>
    <Box sx={{ maxWidth: "900px", mx: "auto", p: [3, 4] }}>
      <Hero
        title="Multi-Mode UI Theme  The Design Graph Template"
        subtitle="Elevate Your UI, emphasize benefits like accessibility, scalability, and ease of customization"
        primaryLink={{ label: "Get Started", href: "/setup-guide" }}
        secondaryLink={{ label: "Explore Features", href: "#features" }}
        // bg="text"
        color="text"
      />

      <Section>
        <Heading as="h2" sx={{ fontSize: [5, 6], mb: 2 }}>
          Use the template
        </Heading>
        <Paragraph sx={{ color: "text", fontWeight: "bold" }}>
          This project is a Gatsby starter configured with Theme UI to showcase
          customizable color modes, reusable components, styled UI elements, and
          syntax highlighting. It includes a modular theme structure with
          reusable configurations for colors, typography, spacing, and more.
        </Paragraph>
      </Section>

      <Section>
        <Heading as="h2" sx={{ fontSize: [5, 6], mb: 2 }}>
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

      <Section>
        <Heading as="h2" sx={{ fontSize: [5, 6], mb: 2 }}>
          Dynamic Headings out of box
        </Heading>
        <Paragraph
          sx={{
            lineHeight: "body",
          }}
        >
          Scenario 1: Using Global Styles Custom styles object configured for
          headings and other elements
        </Paragraph>
      </Section>

      <Section>
        <CodeBlock
          code={`
const Heading = ({
  as: Tag = "h2",
  variant = "heading", // Defaults to text.heading
  align = "left", // Default alignment
  children,
  sx = {},
  ...props
}) => (
  <Tag
    sx={{
      variant: \`styles.\${Tag}\`, // Use styles.h1, styles.h2, etc.
      textAlign: align,
      ...sx, // Custom inline styles
    }}
    {...props}
  >
    {children}
  </Tag>
)
        `}
        />
      </Section>

      <SectionBlock
        subtitle="Key Mappings"
        heading="Dynamic Variant Mapping Heading Components"
        paragraph="Scenario 2: Using Custom Typography Variants Dynamic Variant Mapping"
        listItems={[
          "Dynamic headings",
          "Custom typography variants",
          "Responsive styles",
        ]}
        align="left"
        sx={{
          bg: "muted",
          color: "text",
        }}
      />

      <Section>
        <CodeBlock
          code={`const greet = (name) => { return \`Hello, \${name}!\`;};`}
          showCopy={false}
        />
      </Section>

      <SectionBlock
        subtitle="Reusable Components"
        heading="Simplify Your Layout"
        paragraph="Reusable components like this make it easy to maintain consistency across your project while adding flexibility."
        listItems={[
          "Dynamic headings",
          "Custom typography variants",
          "Responsive styles",
        ]}
        align="left"
        sx={{
          bg: "background",
          color: "text",
        }}
      />

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

      {/* Features Section */}
      {/* <Section title="Multi-Mode Color Themes" variant="primary">
        Choose vibrant or subtle palettes to suit your needs
      </Section> */}

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
