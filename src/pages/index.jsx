/** @jsxImportSource theme-ui */
import Layout from "../components/layout"
import Showcase from "../components/showcase"

const IndexPage = () => (
  <Layout>
    <h1 sx={{ color: "primary" }}>Welcome to the Multi-Mode Theme</h1>
    <p sx={{ color: "text" }}>
      Toggle through various modes to explore Theme UI's flexibility.
    </p>
    <Showcase />
  </Layout>
)

export default IndexPage
