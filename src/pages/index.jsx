/** @jsxImportSource theme-ui */
import Layout from "../components/layout"
import Showcase from "../components/showcase"
import VariantsShowcase from "../components/variants"
const IndexPage = () => (
  <Layout>
    <h1 sx={{ color: "primary" }}>Welcome to the Multi-Mode Theme</h1>
    <p sx={{ color: "text" }}>
      Toggle through various modes to explore Theme UI's flexibility.
    </p>
    <Showcase />
    <VariantsShowcase />
    <a href="./posts">post</a>
  </Layout>
)

export default IndexPage
