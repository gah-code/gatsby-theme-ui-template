import Layout from "../components/layout/Layout"
import Showcase from "../components/showcase"
import VariantsShowcase from "../components/variants"
import BreakpointShowcase from "../components/BreakpointShowcase"
import { SEO } from "../components/seo"
import { Box } from "theme-ui"

const IndexPage = () => (
  // <ThemeUIProvider theme={theme}>
  <Layout>
    <Box sx={{ maxWidth: "800px", mx: "auto", p: [3, 4, 5] }}>
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
