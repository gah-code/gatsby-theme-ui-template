import Layout from "../components/layout/Layout"
import Showcase from "../components/showcase"
import VariantsShowcase from "../components/variants"
import BreakpointShowcase from "../components/BreakpointShowcase"
import { SEO } from "../components/seo"
import { Box } from "theme-ui"
import Heading from "../components/util/Heading"
import Hero from "../components/ui/hero/Hero"
import Section from "../components/util/Section"
import Paragraph from "../components/util/Paragraph"
import SectionBlock from "../components/util/SectionBlock"
import CodeBlock from "../components/util/CodeBlock"
import Message from "../components/util/Message"

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
        <Heading as="h2" sx={{ mb: 2 }}>
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
        <Heading as="h2" sx={{ mb: 2, color: "secondary" }}>
          Features Overview
        </Heading>
        <Paragraph>
          Discover the powerful features of our design system, crafted to
          empower designers and developers alike. From dynamic components to
          unified typography, our tools ensure scalability, consistency, and
          creative flexibility in your projects.
        </Paragraph>
      </Section>

      <Section>
        <Heading as="h2" sx={{ fontSize: [5, 6], mb: 2 }}>
          Multi-Mode Color Themes
        </Heading>
        <Paragraph
          sx={{
            lineHeight: "body",
          }}
        >
          Light, Dark, Purple, Pink, and Forest—pick the mode that suits your
          content’s personality. This starter lets you experiment with vibrant
          palettes or subtle hues. With just a few lines of configuration,
          create a look that resonates with your brand and audience.
        </Paragraph>
      </Section>

      <Section variant="muted">
        <Heading as="h2" sx={{ fontSize: [5, 6], mb: 2 }}>
          Unified Typography & Design Tokens
        </Heading>
        <Paragraph
          sx={{
            lineHeight: "body",
          }}
        >
          Manage font families, sizes, weights, and line heights from a single
          source. Update the theme to instantly refresh your entire site’s
          typography. No more hunting down hardcoded font sizes— change it once,
          and it updates everywhere.
        </Paragraph>
      </Section>

      <Section>
        <Heading as="h2" sx={{ fontSize: [5, 6], mb: 2 }}>
          MDX Integration & Syntax Highlighting
        </Heading>
        <Paragraph
          sx={{
            lineHeight: "body",
          }}
        >
          Combine content and presentation elegantly with MDX. Write Markdown
          and JSX together, creating rich, interactive pages. Enjoy built-in
          syntax highlighting powered by Theme UI and easily swap out presets
          for a coding theme that best matches your brand.
        </Paragraph>
      </Section>

      <Section>
        <Message>This is just a message for someone to read.</Message>
        <Message variant="success">Operation completed successfully!</Message>
        <Message variant="error">
          Something went wrong! Please try again.
        </Message>
        <Message variant="warning">
          Be careful! This action can't be undone.
        </Message>
        <Message variant="info">
          This is some information you should know about.
        </Message>
        <Message
          sx={{
            bg: "purple",
            color: "background",
            fontSize: 3,
            padding: 4,
            borderRadius: "default",
          }}
        >
          Custom styled message for special notices.
        </Message>
      </Section>

      <Section>
        <Heading as="h1" variant="hero">
          Hero Heading
        </Heading>
        <Heading
          as="h4"
          variant="caps"
          sx={{
            color: "secondary",
            textTransform: "uppercase",
            fontSize: [4, 5], // Custom responsive size
          }}
        >
          Custom Heading
        </Heading>

        <Heading as="h1">H1 Heading - Responsive</Heading>
        <Heading as="h2">H2 Heading - Responsive</Heading>
        <Heading as="h3">H3 Heading - Responsive</Heading>
        <Heading as="h4">H4 Heading - Responsive</Heading>
        <Heading as="h5">H5 Heading - Responsive</Heading>
        <Heading as="h6">H6 Heading - Responsive</Heading>
      </Section>

      <Section>
        <Heading as="h2" sx={{ fontSize: [5, 6], mb: 2 }}>
          Dynamic Components & Variants
        </Heading>
        <Paragraph
          sx={{
            lineHeight: "body",
            // color: "muted",
          }}
        >
          Buttons, forms, cards, badges, and more are defined as variants within
          the theme. Need a new button style or a unique card layout? Add it to
          the theme variants, and use it across your site with minimal effort.
          Consistency and scalability have never been easier.
        </Paragraph>
      </Section>

      {/* <Section
        title="Custom Styled Section"
        variant="custom"
        sx={{
          bg: "highlight",
          color: "secondary",
          borderRadius: "default",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        Customize this section’s styles using the `sx` prop.
      </Section> */}

      <Section
        title="Highlighted Section"
        variant="highlight"
        bg="muted"
        color="primary"
      >
        This section uses the "highlight" variant with custom background and
        text colors.
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
  as: Tag = "h2", // Dynamic HTML tag (e.g., h1, h2)
  variant = "heading", // Default variant from theme.text
  align = "left", // Default alignment
  useGlobal = false, // Switch between text variants and global styles
  children,
  sx = {}, // Custom inline styles
  ...props
}) => (
  <Tag
    sx={{
      // Use global styles when useGlobal is true, else apply text variants
      variant: useGlobal ? \`styles.\${Tag}\` : \`text.\${variant}\`,
      textAlign: align, // Alignment: left, center, right
      ...sx, // Inline custom styles
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
