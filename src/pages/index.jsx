import Layout from "../components/layout"
import Showcase from "../components/showcase"
import VariantsShowcase from "../components/variants"
import { SEO } from "../components/seo"
// import { ThemeUIProvider } from "theme-ui"
// import theme from "../gatsby-plugin-theme-ui"

const IndexPage = () => (
  // <ThemeUIProvider theme={theme}>
  <Layout>
    <h1>Welcome to the Multi-Mode Theme</h1>
    <p>Toggle through various modes to explore Theme UI's flexibility.</p>
    <Showcase />
    <VariantsShowcase />
    <a href="./posts">post</a>
  </Layout>
  // </ThemeUIProvider>
)

export default IndexPage

export const Head = () => (
  <SEO title="Home Page" description="Home page" pathname="/" />
)
