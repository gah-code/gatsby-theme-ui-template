/** @jsxImportSource theme-ui */
import Layout from "../components/layout/Layout"
import React from "react"
import Section from "../components/util/Section"
import { Flex, Box } from "theme-ui"
import Heading from "../components/util/Heading"
import FlexLayout from "../components/layout/FlexLayout"

const AboutPage = () => (
  <Layout>
    <Box sx={{ maxWidth: "900px", mx: "auto", px: [2, 4], py: [5] }}>
      <Box
        sx={{
          bg: "background",
          color: "text",
          py: [2],
        }}
      >
        {/* <Heading
          as="h1"
          align="center"
          sx={{
            fontSize: [8, 9, 10], // Scales with breakpoints
            lineHeight: "heading",
            letterSpacing: "heading",
            px: [2],
          }}
        >
          About the Template
        </Heading> */}
        <Heading as="h4" variant="hero" useGlobal>
          About the Template
        </Heading>
        <Heading as="h1" variant="hero" useGlobal>
          Create Stunning Experiences
        </Heading>
        <Heading as="h2" variant="heading">
          Empower your creativity with dynamic tools and scalable design
          systems.
        </Heading>
      </Box>

      <Heading as="h1" variant="hero">
        Welcome to Our Platform
      </Heading>
      <Heading
        as="h1"
        variant="hero"
        sx={{
          color: "secondary", // Override default color
          mb: 6, // Add extra spacing
        }}
      >
        Discover Endless Possibilities
      </Heading>

      {/* <Heading as="h2" variant="display">
        Display Heading
      </Heading>
      <Heading as="h1" variant="hero">
        Display Hero
      </Heading>
      <Heading as="h2" sx={{ color: "secondary", fontSize: [5, 6] }}>
        Customized Heading
      </Heading>

      <Heading
        as="h1"
        align="center"
        sx={{
          color: "secondary",
          fontSize: [6, 7],
          textTransform: "uppercase",
        }}
      >
        Custom Center-Aligned Heading
      </Heading>

      <Heading as="h1">Dynamic H1</Heading>
      <Heading as="h2">Dynamic H2</Heading>
      <Heading as="h3">Dynamic H3</Heading>
      <Heading as="h4">Dynamic H4</Heading>
      <Heading as="h5">Dynamic H5</Heading>

      <Heading as="h1">Dynamic H1</Heading>
      <Heading as="h2" align="center">
        Dynamic H2 Centered
      </Heading>
      <Heading as="h3" align="right">
        Dynamic H3 Right-Aligned
      </Heading>
      <Heading as="h4" sx={{ color: "secondary" }}>
        Dynamic H4 Custom Color
      </Heading>

      <>
        <Section width="narrow" bg="muted" color="text">
          <h2>Narrow Section</h2>
          <p>This section is styled with the "narrow" width.</p>
        </Section>

        <Section width="wide" bg="highlight" color="background">
          <h2>Wide Section</h2>
          <p>This section uses the "wide" width.</p>
        </Section>

        <Section width="full" bg="primary" color="background">
          <h2>Full Section</h2>
          <p>This section spans the full width of the viewport.</p>
        </Section>

        <Section width="container" bg="gray" color="text">
          <h2>Container Section</h2>
          <p>This section is styled with the "container" width.</p>
        </Section>
      </> */}
    </Box>
  </Layout>
)

export default AboutPage
