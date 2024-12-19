/** @jsxImportSource theme-ui */
import Layout from "../components/layout/Layout"
import React from "react"
import Section from "../components/util/Section"
import { Box } from "theme-ui"
const AboutPage = () => (
  <Layout>
    <Box sx={{ maxWidth: "900px", mx: "auto", p: [2, 4] }}>
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
      </>
    </Box>
  </Layout>
)

export default AboutPage
