/** @jsxImportSource theme-ui */
import React from "react"
import { Box, Text } from "theme-ui"
import Heading from "../components/util/Heading"
import Layout from "../components/layout/Layout"
import Code from "../components/util/Code"

const TypographyDemoPage = () => {
  return (
    <Layout>
      <Box
        sx={{
          fontFamily: "body",
          bg: "background",
          color: "text",
          px: [3, 4],
          py: [5, 6],
          maxWidth: "800px",
          mx: "auto",
          textAlign: "center", // Center-align content
        }}
      >
        {/* Page Title */}
        <Heading
          as="h1"
          sx={{
            fontSize: [6, 7, 8],
            mb: 4,
            color: "primary",
          }}
        >
          How to Use the Heading Utility
        </Heading>
        <Text sx={{ fontSize: [2, 3], lineHeight: "body", mb: 6 }}>
          Learn how to leverage the <strong>Heading Utility</strong> to create
          consistent, responsive, and dynamic typography across your
          application.
        </Text>

        {/* Section 1: Overview */}
        <Box sx={{ textAlign: "left", mb: 6 }}>
          <Heading as="h2" sx={{ fontSize: [5, 6], mb: 3 }}>
            Overview
          </Heading>
          <Text sx={{ fontSize: [2, 3], lineHeight: "body", mb: 3 }}>
            The <strong>Heading Utility</strong> is a reusable component
            designed to work seamlessly with your theme's typography
            configuration. It supports:
          </Text>
          <Text
            as="ul"
            sx={{ textAlign: "left", listStyleType: "disc", pl: 4, mb: 3 }}
          >
            <li>Dynamic heading levels (`h1` to `h6`).</li>
            <li>Theme-based variants for consistent styling.</li>
            <li>Custom alignment and inline styling options.</li>
          </Text>
          <Text sx={{ fontSize: [2, 3], lineHeight: "body" }}>
            By integrating with your <code>theme.text</code> configuration, the
            utility ensures scalable and accessible typography throughout your
            site.
          </Text>
        </Box>

        {/* Section 2: Usage */}
        <Box sx={{ textAlign: "left", mb: 6 }}>
          <Heading as="h2" sx={{ fontSize: [5, 6], mb: 3 }}>
            Usage
          </Heading>
          <Text sx={{ fontSize: [2, 3], lineHeight: "body", mb: 3 }}>
            Here's how to use the <strong>Heading Utility</strong>:
          </Text>
          <Box
            sx={{
              bg: "muted",
              p: 3,
              borderRadius: "default",
              textAlign: "left",
              fontSize: 1,
              lineHeight: "body",
            }}
          >
            <Code>
              {`
<Heading as="h1" variant="hero">
  Hero Heading
</Heading>

<Heading as="h2" align="center">
  Center-Aligned Heading
</Heading>
  `}
            </Code>
          </Box>
        </Box>

        {/* Section 3: Theme Integration */}
        <Box sx={{ textAlign: "left", mb: 6 }}>
          <Heading as="h2" sx={{ fontSize: [5, 6], mb: 3 }}>
            Theme Integration
          </Heading>
          <Text sx={{ fontSize: [2, 3], lineHeight: "body", mb: 3 }}>
            The utility is designed to work with the <code>theme.text</code>{" "}
            configuration in your Theme UI theme. Example:
          </Text>
        </Box>
        <Box
          as="pre"
          sx={{
            fontFamily: "monospace",
            fontSize: 1,
            lineHeight: "body",
            color: "text",
            bg: "muted",
            p: 3,
            borderRadius: "default",
            overflowX: "auto",
            whiteSpace: "pre-wrap",
          }}
        >
          {`
<Heading as="h1" variant="hero">
  Hero Heading
</Heading>

<Heading as="h2" align="center">
  Center-Aligned Heading
</Heading>

<Heading as="h3" sx={{ color: "secondary", fontSize: [4, 5] }}>
  Customized Heading
</Heading>
  `}
        </Box>

        {/* Section 4: Features */}
        <Box sx={{ textAlign: "left", mb: 6 }}>
          <Heading as="h2" sx={{ fontSize: [5, 6], mb: 3 }}>
            Features
          </Heading>
          <Text
            as="ul"
            sx={{ textAlign: "left", listStyleType: "disc", pl: 4, mb: 3 }}
          >
            <li>Customizable heading levels (`h1` to `h6`).</li>
            <li>Support for theme-based variants.</li>
            <li>Responsive font sizes.</li>
            <li>Inline styling via the `sx` prop.</li>
          </Text>
        </Box>

        {/* Footer */}
        <Box
          sx={{
            bg: "muted",
            color: "primary",
            py: 3,
            px: 4,
            borderRadius: "default",
          }}
        >
          <Text sx={{ fontSize: [2, 3], lineHeight: "body" }}>
            For more information, refer to the full documentation or explore
            additional components in our UI library.
          </Text>
        </Box>
      </Box>
    </Layout>
  )
}

export default TypographyDemoPage
